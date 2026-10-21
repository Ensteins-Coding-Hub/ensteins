"use client";

import React, { useState, useRef, useEffect } from "react";
import { submitRegistration } from "@/lib/submitRegistration";

export default function RegistrationForm() {
  const years = [
    { value: "1", label: "First Year" },
    { value: "2", label: "Second Year" },
    { value: "3", label: "Third Year" },
    { value: "4", label: "Fourth Year" },
    { value: "5", label: "Fifth Year" },
  ];

  const specs = [
    { value: "MI ( cp)", label: "MI (cp)" },
    { value: "SS", label: "SS (system security" },
    { value: "AI", label: "AI (Atrtificial Intelligence)" },
    { value: "ST (cp)", label: "ST (cp)" },
    { value: "STR", label: "STR" },
    { value: "SE", label: "SE" },
    { value: "AII", label: "AII" },
    { value: "GI", label: "GI" },
    { value: "MIMI", label: "MIMI" },
    { value: "MECHANICS", label: "MECHANICS" },
    { value: "MECATRONICS", label: "MECATRONICS" },
    { value: "LOGISTICS", label: "LOGISTICS" },
    { value: "TRANSPORT", label: "TRANSPORT" },
    { value: "PO", label: "PO" },
    { value: "WATER TREATMENT", label: "WATER TREATMENT" },
    { value: "ELECTRICAL TRACTION", label: "ELECTRICAL TRACTION" },
  ];
  const departments = [
    { value: "IT", label: "IT Department" },
    { value: "FLER", label: "FLER Department" },
    { value: "HR", label: "Human Resources" },
    { value: "COMM", label: "Communication Department" },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const listRef = useRef(null);
  const buttonRef = useRef(null);

  const [openSpec, setOpenSpec] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState(null);
  const listRefSpec = useRef(null);
  const buttonRefSpec = useRef(null);

  const [openDept, setOpenDept] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);
  const listRefDept = useRef(null);
  const buttonRefDept = useRef(null);

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const successTimerRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    facebook: "",
    skills: "",
    contribution: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    function onClickOutside(e) {
      if (
        listRef.current &&
        !listRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }

      if (
        listRefSpec.current &&
        !listRefSpec.current.contains(e.target) &&
        buttonRefSpec.current &&
        !buttonRefSpec.current.contains(e.target)
      ) {
        setOpenSpec(false);
      }

      if (
        listRefDept.current &&
        !listRefDept.current.contains(e.target) &&
        buttonRefDept.current &&
        !buttonRefDept.current.contains(e.target)
      ) {
        setOpenDept(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function onKeyDown(e) {
    if (
      !open &&
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
    ) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (open) {
      const idx = selected
        ? years.findIndex((y) => y.value === selected.value)
        : -1;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = years[Math.min(idx + 1, years.length - 1)];
        setSelected(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = years[Math.max(idx - 1, 0)];
        setSelected(prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "Enter") {
        e.preventDefault();
        setOpen(false);
      }
    }
  }

  function onKeyDownSpec(e) {
    if (
      !openSpec &&
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
    ) {
      e.preventDefault();
      setOpenSpec(true);
      return;
    }
    if (openSpec) {
      const idx = selectedSpec
        ? specs.findIndex((s) => s.value === selectedSpec.value)
        : -1;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = specs[Math.min(idx + 1, specs.length - 1)];
        setSelectedSpec(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = specs[Math.max(idx - 1, 0)];
        setSelectedSpec(prev);
      } else if (e.key === "Escape") {
        setOpenSpec(false);
      } else if (e.key === "Enter") {
        e.preventDefault();
        setOpenSpec(false);
      }
    }
  }

  function onKeyDownDept(e) {
    if (
      !openDept &&
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
    ) {
      e.preventDefault();
      setOpenDept(true);
      return;
    }
    if (openDept) {
      const idx = selectedDept
        ? departments.findIndex((d) => d.value === selectedDept.value)
        : -1;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = departments[Math.min(idx + 1, departments.length - 1)];
        setSelectedDept(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = departments[Math.max(idx - 1, 0)];
        setSelectedDept(prev);
      } else if (e.key === "Escape") {
        setOpenDept(false);
      } else if (e.key === "Enter") {
        e.preventDefault();
        setOpenDept(false);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setServerError("");
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!selected) newErrors.year = "Please select your year of study";
    if (!selectedSpec)
      newErrors.specialization = "Please select your specialization";
    if (!selectedDept) newErrors.department = "Please select a department";
    if (!form.facebook.trim())
      newErrors.facebook = "Facebook account or profile is required";
    if (!form.skills.trim()) newErrors.skills = "Please describe your skills";
    if (!form.contribution.trim())
      newErrors.contribution = "Please tell us what you'll bring";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setSending(false);
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      facebook: form.facebook.trim(),
      year: selected.value,
      yearLabel: selected.label,
      specialization: selectedSpec.value,
      specializationLabel: selectedSpec.label,
      department: selectedDept.value,
      departmentLabel: selectedDept.label,
      skills: form.skills.trim(),
      contribution: form.contribution.trim(),
    };

    try {
      await submitRegistration(payload);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        facebook: "",
        skills: "",
        contribution: "",
      });
      setSelected(null);
      setSelectedSpec(null);
      setSelectedDept(null);

      if (successTimerRef.current) clearTimeout(successTimerRef.current);
      successTimerRef.current = setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Submission error", err);
      setServerError(
        err?.message || "Failed to submit registration. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, []);

  return (
    <div className="hello relative h-auto flex items-center md:items-start justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-linear-to-bl from-transparent via-[#5c92ff] to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute -right-30 w-[80vw] h-[80vw] rounded-full bg-linear-to-l from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />
      <div className="absolute -left-30 w-[70vw] h-[70vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />

      <div className="relative w-full max-w-3xl z-10">
        <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-8 space-y-8">
          <h2
            className="text-center text-white tracking-tight"
            style={{
              fontFamily: "Audiowide, sans-serif",
              fontWeight: 400,
              fontSize: "40px",
            }}
          >
            Register Now
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) =>
                  setForm((s) => ({ ...s, name: e.target.value }))
                }
                className="w-full px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm placeholder:text-xs placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5c92ff]/30 focus:border-transparent transition-all shadow-sm"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm((s) => ({ ...s, email: e.target.value }))
                }
                className="w-full px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm placeholder:text-xs placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5c92ff]/30 transition-all shadow-sm"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Year of Study
              </label>
              <div className="relative">
                <input
                  type="hidden"
                  name="year"
                  value={selected ? selected.value : ""}
                />
                <button
                  type="button"
                  ref={buttonRef}
                  aria-haspopup="listbox"
                  aria-expanded={open}
                  onClick={() => setOpen((s) => !s)}
                  onKeyDown={onKeyDown}
                  className={`w-full text-left px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm flex items-center justify-between ${
                    open ? "ring-white/40" : ""
                  }`}
                >
                  <span
                    className={`${selected ? "text-white" : "text-white/50"}`}
                  >
                    {selected ? selected.label : "Select year of study"}
                  </span>
                  <svg
                    className={`w-5 h-5 text-white/60 transform transition-transform ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a.75.75 0 01-.53-.22l-3-3a.75.75 0 111.06-1.06L10 10.19l2.47-2.47a.75.75 0 111.06 1.06l-3 3A.75.75 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {open && (
                  <div className="absolute mt-2 w-full max-h-52 z-50">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-blue-950/85 via-blue-950/50 to-blue-950/20 backdrop-blur-xl pointer-events-none" />
                    <ul
                      ref={listRef}
                      role="listbox"
                      tabIndex={-1}
                      aria-activedescendant={
                        selected ? `year-${selected.value}` : undefined
                      }
                      className="relative max-h-52 overflow-auto py-2 border border-white/12 rounded-2xl shadow-lg"
                    >
                      {years.map((y) => {
                        const isSelected =
                          selected && selected.value === y.value;
                        return (
                          <li
                            id={`year-${y.value}`}
                            key={y.value}
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setSelected(y);
                              setOpen(false);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setSelected(y);
                                setOpen(false);
                              }
                            }}
                            className={`cursor-pointer px-5 py-3 text-sm flex items-center justify-between text-white transition-colors ${
                              isSelected
                                ? "bg-[#5c92ff]/60 rounded-xl"
                                : "hover:bg-white/12"
                            }`}
                          >
                            <span>{y.label}</span>
                            {isSelected && (
                              <svg
                                className="w-4 h-4 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              {errors.year && (
                <p className="text-red-500 text-xs italic">{errors.year}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Specialization
              </label>
              <div className="relative">
                <input
                  type="hidden"
                  name="specialization"
                  value={selectedSpec ? selectedSpec.value : ""}
                />
                <button
                  type="button"
                  ref={buttonRefSpec}
                  aria-haspopup="listbox"
                  aria-expanded={openSpec}
                  onClick={() => setOpenSpec((s) => !s)}
                  onKeyDown={onKeyDownSpec}
                  className={`w-full text-left px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm flex items-center justify-between ${
                    openSpec ? "ring-white/40" : ""
                  }`}
                >
                  <span
                    className={`${
                      selectedSpec ? "text-white" : "text-white/50"
                    }`}
                  >
                    {selectedSpec
                      ? selectedSpec.label
                      : "Select specialization"}
                  </span>
                  <svg
                    className={`w-5 h-5 text-white/60 transform transition-transform ${
                      openSpec ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a.75.75 0 01-.53-.22l-3-3a.75.75 0 111.06-1.06L10 10.19l2.47-2.47a.75.75 0 111.06 1.06l-3 3A.75.75 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openSpec && (
                  <div className="absolute mt-2 w-full max-h-52 z-50">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-blue-950/85 via-blue-950/50 to-blue-950/20 backdrop-blur-xl pointer-events-none" />
                    <ul
                      ref={listRefSpec}
                      role="listbox"
                      tabIndex={-1}
                      aria-activedescendant={
                        selectedSpec ? `spec-${selectedSpec.value}` : undefined
                      }
                      className="relative max-h-52 overflow-auto no-scrollbar py-2 border border-white/12 rounded-2xl shadow-lg"
                    >
                      {specs.map((s) => {
                        const isSelected =
                          selectedSpec && selectedSpec.value === s.value;
                        return (
                          <li
                            id={`spec-${s.value}`}
                            key={s.value}
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setSelectedSpec(s);
                              setOpenSpec(false);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setSelectedSpec(s);
                                setOpenSpec(false);
                              }
                            }}
                            className={`cursor-pointer px-5 py-3 text-sm flex items-center justify-between text-white transition-colors ${
                              isSelected
                                ? "bg-[#5c92ff]/60 rounded-xl"
                                : "hover:bg-white/12"
                            }`}
                          >
                            <span>{s.label}</span>
                            {isSelected && (
                              <svg
                                className="w-4 h-4 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              {errors.specialization && (
                <p className="text-red-500 text-xs italic">
                  {errors.specialization}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-white/80">
                Which department do you wish to join?
              </label>

              <div className="relative">
                <input
                  type="hidden"
                  name="department"
                  value={selectedDept ? selectedDept.value : ""}
                />

                <button
                  type="button"
                  ref={buttonRefDept}
                  aria-haspopup="listbox"
                  aria-expanded={openDept}
                  onClick={() => setOpenDept((s) => !s)}
                  onKeyDown={onKeyDownDept}
                  className="w-full text-left px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm flex items-center justify-between"
                >
                  <span
                    className={selectedDept ? "text-white" : "text-white/50"}
                  >
                    {selectedDept ? selectedDept.label : "Select a department"}
                  </span>
                  <svg
                    className={`w-5 h-5 text-white/60 transition-transform ${
                      openDept ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a.75.75 0 01-.53-.22l-3-3a.75.75 0 111.06-1.06L10 10.19l2.47-2.47a.75.75 0 111.06 1.06l-3 3A.75.75 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openDept && (
                  <div className="absolute mt-2 w-full z-50">
                    <ul
                      ref={listRefDept}
                      role="listbox"
                      className="max-h-52 overflow-auto border border-white/12 rounded-2xl bg-linear-to-b from-blue-950/85 via-blue-950/50 to-blue-950/20 backdrop-blur-xl"
                    >
                      {departments.map((d) => {
                        const isSelected =
                          selectedDept && selectedDept.value === d.value;

                        return (
                          <li
                            key={d.value}
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setSelectedDept(d);
                              setOpenDept(false);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setSelectedDept(d);
                                setOpenDept(false);
                              }
                            }}
                            className={`px-5 py-3 cursor-pointer text-sm text-white ${
                              isSelected
                                ? "bg-[#5c92ff]/60 rounded-xl"
                                : "hover:bg-white/10"
                            }`}
                          >
                            {d.label}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              <div className="text-right">
                <a
                  href="/departments"
                  className="text-xs text-blue-400 hover:underline"
                >
                  Not sure? View departments →
                </a>
              </div>

              {errors.department && (
                <p className="text-red-500 text-xs italic">
                  {errors.department}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="facebook"
                className="block text-sm font-medium text-white/80"
              >
                Facebook Account
              </label>
              <input
                id="facebook"
                name="facebook"
                type="text"
                placeholder="https://facebook.com/your.profile or username"
                value={form.facebook}
                onChange={(e) =>
                  setForm((s) => ({ ...s, facebook: e.target.value }))
                }
                className="w-full px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm placeholder:text-xs placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5c92ff]/30 transition-all shadow-sm"
              />
              {errors.facebook && (
                <p className="text-red-500 text-xs italic">{errors.facebook}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="skills"
                className="block text-sm font-bold text-white/80"
              >
                Got skills in programming, coding, writing or design? Tell us
                more about what you can do!
              </label>
              <textarea
                id="skills"
                name="skills"
                placeholder="Write something..."
                rows={2}
                value={form.skills}
                onChange={(e) =>
                  setForm((s) => ({ ...s, skills: e.target.value }))
                }
                className="w-full px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm placeholder:text-xs placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5c92ff]/30 resize-none transition-all shadow-sm"
                required
              />
              {errors.skills && (
                <p className="text-red-500 text-xs italic">{errors.skills}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contribution"
                className="block text-sm font-bold text-white/80"
              >
                What will you bring to the Ensteins family? We need your
                enthusiasm, creativity, and drive to shape the future!
              </label>
              <textarea
                id="contribution"
                name="contribution"
                placeholder="Write something..."
                rows={2}
                value={form.contribution}
                onChange={(e) =>
                  setForm((s) => ({ ...s, contribution: e.target.value }))
                }
                className="w-full px-5 py-3 bg-white/6 border border-white/12 rounded-2xl text-white text-sm placeholder:text-xs placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5c92ff]/30 resize-none transition-all shadow-sm"
                required
              />
              {errors.contribution && (
                <p className="text-red-500 text-xs italic">
                  {errors.contribution}
                </p>
              )}
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full text-white lg:w-1/2 bg-blue-600 hover:to-[#2f59ff] font-semibold py-3 rounded-2xl transition-all cursor-pointer transform hover:-translate-y-0.5 shadow-md disabled:opacity-60"
                aria-live="polite"
                disabled={sending}
              >
                {sending ? "Submitting..." : "SUBMIT"}
              </button>
            </div>

            {success && (
              <p className="text-green-400 text-center mt-4 font-medium">
                Registration successful! Thank you for joining us.
              </p>
            )}

            {serverError && (
              <p className="text-red-400 text-center mt-4 font-medium">
                {serverError}
              </p>
            )}
          </form>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
