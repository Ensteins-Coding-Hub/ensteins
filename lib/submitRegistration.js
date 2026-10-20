import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function submitRegistration(data) {
  // 1. Save registration record into Firebase Firestore
  const docRef = await addDoc(collection(db, "registrations"), {
    name: data.name,
    email: data.email,
    facebook: data.facebook,
    year: data.year,
    yearLabel: data.yearLabel || data.year,
    specialization: data.specialization,
    specializationLabel: data.specializationLabel || data.specialization,
    department: data.department,
    departmentLabel: data.departmentLabel || data.department,
    skills: data.skills,
    contribution: data.contribution,
    createdAt: serverTimestamp(),
  });

  // 2. Send notification email via internal SMTP API route
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        firestoreId: docRef.id,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.warn("SMTP email notification warning:", errData.error);
    }
  } catch (emailErr) {
    console.warn("Failed to reach registration email endpoint:", emailErr);
  }

  return { id: docRef.id };
}
