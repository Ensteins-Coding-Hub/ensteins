import nodemailer from "nodemailer";

export function getTransporter() {
  const user =
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    process.env.SMTP_EMAIL;

  let pass =
    process.env.SMTP_PASS ||
    process.env.SMTP_PASSWORD ||
    process.env.EMAIL_PASS ||
    process.env.EMAIL_PASSWORD;

  // If user pasted an app password containing spaces, strip them
  if (typeof pass === "string") {
    pass = pass.replace(/\s+/g, "");
  }

  const host =
    process.env.SMTP_HOST ||
    process.env.EMAIL_HOST ||
    "smtp.gmail.com";

  const port = parseInt(
    process.env.SMTP_PORT ||
    process.env.EMAIL_PORT ||
    "465",
    10
  );

  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

  if (!user || !pass) {
    throw new Error(
      "SMTP credentials not configured. Please add SMTP_USER and SMTP_PASS to your .env.local file."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export function getRecipientEmail() {
  return (
    process.env.SMTP_TO ||
    process.env.EMAIL_TO ||
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    process.env.SMTP_EMAIL
  );
}

export async function sendContactEmail({ name, email, message }) {
  const transporter = getTransporter();
  const recipient = getRecipientEmail();
  const senderUser =
    process.env.SMTP_USER || process.env.EMAIL_USER || process.env.SMTP_EMAIL;

  const subject = `[ENSTEINS Contact] New message from ${name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc; color: #1e293b;">
      <h2 style="color: #0074B9; margin-top: 0; font-size: 22px;">New Contact Form Message</h2>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 20px;">You received a new inquiry from the ENSTEINS website.</p>
      
      <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
        <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
        <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0074B9; text-decoration: none;">${email}</a></p>
      </div>

      <div style="margin-bottom: 20px;">
        <strong style="font-size: 14px; color: #334155;">Message:</strong>
        <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b;">${message}</div>
      </div>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
      <p style="font-size: 12px; color: #94a3b8; margin: 0;">This email was sent via ENSTEINS SMTP service. Hit "Reply" to contact the sender directly.</p>
    </div>
  `;

  const text = `New Contact Form Message:
Name: ${name}
Email: ${email}

Message:
${message}`;

  return await transporter.sendMail({
    from: `"ENSTEINS Contact" <${senderUser}>`,
    to: recipient,
    replyTo: email,
    subject,
    text,
    html,
  });
}

export async function sendRegistrationEmail(data) {
  const transporter = getTransporter();
  const recipient = getRecipientEmail();
  const senderUser =
    process.env.SMTP_USER || process.env.EMAIL_USER || process.env.SMTP_EMAIL;

  const subject = `[ENSTEINS Registration] New registration: ${data.name} (${data.departmentLabel || data.department})`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc; color: #1e293b;">
      <h2 style="color: #0074B9; margin-top: 0; font-size: 22px;">New Member Registration</h2>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 20px;">A new applicant has registered to join the ENSTEINS club family.</p>
      
      <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Full Name:</strong></td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td>
            <td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${data.email}" style="color: #0074B9; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Facebook Profile:</strong></td>
            <td style="padding: 6px 0; color: #0f172a;">${data.facebook}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Year of Study:</strong></td>
            <td style="padding: 6px 0; color: #0f172a;">${data.yearLabel || data.year}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Specialization:</strong></td>
            <td style="padding: 6px 0; color: #0f172a;">${data.specializationLabel || data.specialization}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Department Choice:</strong></td>
            <td style="padding: 6px 0; color: #0074B9; font-weight: 700;">${data.departmentLabel || data.department}</td>
          </tr>
        </table>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="font-size: 14px; color: #334155;">Skills & Background:</strong>
        <div style="background-color: #ffffff; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 6px; white-space: pre-wrap; font-size: 13px; line-height: 1.5; color: #1e293b;">${data.skills}</div>
      </div>

      <div style="margin-bottom: 20px;">
        <strong style="font-size: 14px; color: #334155;">Motivation & Club Contribution:</strong>
        <div style="background-color: #ffffff; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 6px; white-space: pre-wrap; font-size: 13px; line-height: 1.5; color: #1e293b;">${data.contribution}</div>
      </div>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
      <p style="font-size: 12px; color: #94a3b8; margin: 0;">This application has been recorded in Firebase Firestore. Hit "Reply" to contact ${data.name} directly.</p>
    </div>
  `;

  const text = `New Member Registration:
----------------------------------------
Name: ${data.name}
Email: ${data.email}
Facebook: ${data.facebook}
Year of Study: ${data.yearLabel || data.year}
Specialization: ${data.specializationLabel || data.specialization}
Department: ${data.departmentLabel || data.department}

Skills:
${data.skills}

Contribution / Motivation:
${data.contribution}
----------------------------------------`;

  return await transporter.sendMail({
    from: `"ENSTEINS Registrations" <${senderUser}>`,
    to: recipient,
    replyTo: data.email,
    subject,
    text,
    html,
  });
}
