import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const isDevelopment = process.env.NODE_ENV === "development";

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 587;

  if (!smtpUser || !smtpPass) {
    console.log("--- Contact Form Submission ---");
    console.log(`From: ${name} <${email}>`);
    if (company) console.log(`Company: ${company}`);
    console.log(`Message: ${message}`);
    console.log("(SMTP not configured — set SMTP_USER and SMTP_PASS to enable real delivery)");
    return res.json({ success: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Siyaphusha Website" <${smtpUser}>`,
      to: "info@siyaphushaconsortium.co.za",
      replyTo: email,
      subject: `Website Enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#000;padding:24px;text-align:center;">
            <h2 style="color:#fff;margin:0;font-size:20px;letter-spacing:2px;">SIYAPHUSHA CONSORTIUM</h2>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #e5e5e5;">
            <h3 style="margin-top:0;">New Website Enquiry</h3>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Name:</td><td>${name}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:8px 0;font-weight:bold;">Company:</td><td>${company}</td></tr>` : ""}
            </table>
            <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;" />
            <h4 style="margin-bottom:8px;">Message:</h4>
            <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:4px;">${message}</p>
          </div>
          <div style="background:#f5f5f5;padding:16px;text-align:center;font-size:12px;color:#666;">
            Sent from siyaphushaconsortium.co.za contact form
          </div>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err: any) {
    console.error("Email send error:", err.message);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

if (isDevelopment) {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.join(__dirname, "../dist/public")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/public/index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT} in ${isDevelopment ? "development" : "production"} mode`);
});
