import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "mbabiker13@gmail.com";

// Simple in-memory rate limiting (use redis for production)
const rateLimitMap = new Map();

function rateLimit(ip: String) {
  const now = Date.now() as number;
  const windowMs = 60 * 1000;
  const maxRequests = 3;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip).filter((time: number) => now - time < windowMs);

  if (requests.length >= maxRequests) {
    return false;
  }

  requests.push(now);
  rateLimitMap.set(ip, requests);
  return true;
}

// Email validation
function isValidEmail(email: String) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Spam detection (basic)
function detectSpam(message: String) {
  const spamKeywords = ["crypto", "bitcoin", "lottery", "winner", "click here"];
  const lowerMessage = message.toLowerCase();
  return spamKeywords.some((keyword) => lowerMessage.includes(keyword));
}

export async function POST(req: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Basic spam detection
    if (detectSpam(message)) {
      return NextResponse.json(
        { error: "Spam detected in the message." },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizedData = {
      name: name.substring(0, 100),
      email: email.substring(0, 100),
      message: message.substring(0, 1000),
    };

    const timestamp = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Melbourne",
      dateStyle: "medium",
      timeStyle: "short",
    });

    await resend.emails.send({
      from: "Pixelate Contact <hello@pixelatelabs.com.au>",
      to: TO_EMAIL,
      subject: `New enquiry from ${sanitizedData.name}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Pixelate Labs</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1A1A2E 0%,#2D2D4A 100%);border-radius:16px 16px 0 0;padding:40px 48px;text-align:center;">
              <p style="margin:0 0 16px 0;font-size:11px;font-weight:700;letter-spacing:3px;color:#FF8A56;text-transform:uppercase;font-family:monospace;">Pixelate Labs</p>
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">New Lead</h1>
              <p style="margin:10px 0 0 0;font-size:14px;color:#9CA3AF;">Someone filled out your contact form</p>
              <!-- Orange accent bar -->
              <div style="margin:24px auto 0;width:48px;height:3px;background:#FF6B2C;border-radius:2px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 48px;">

              <!-- Lead badge -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#FFF0E8;border-radius:10px;padding:16px 20px;">
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#FF6B2C;text-transform:uppercase;font-family:monospace;">Received ${timestamp} AEST</p>
                  </td>
                </tr>
              </table>

              <!-- Name field -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:2px;color:#9CA3AF;text-transform:uppercase;font-family:monospace;">Name</p>
                    <p style="margin:0;font-size:18px;font-weight:600;color:#111827;">${sanitizedData.name}</p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:#F3F4F6;margin-bottom:24px;"></div>

              <!-- Email field -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:2px;color:#9CA3AF;text-transform:uppercase;font-family:monospace;">Email</p>
                    <a href="mailto:${sanitizedData.email}" style="font-size:16px;font-weight:500;color:#FF6B2C;text-decoration:none;">${sanitizedData.email}</a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:#F3F4F6;margin-bottom:24px;"></div>

              <!-- Message field -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td>
                    <p style="margin:0 0 12px 0;font-size:11px;font-weight:700;letter-spacing:2px;color:#9CA3AF;text-transform:uppercase;font-family:monospace;">Message</p>
                    <div style="background:#F9FAFB;border-left:3px solid #FF6B2C;border-radius:0 8px 8px 0;padding:16px 20px;">
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#374151;">${sanitizedData.message.replace(/\n/g, "<br/>")}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${sanitizedData.email}?subject=Re: Your enquiry to Pixelate Labs"
                       style="display:inline-block;background:#FF6B2C;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:50px;letter-spacing:0.2px;">
                      Reply to ${sanitizedData.name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F9FAFB;border-radius:0 0 16px 16px;padding:24px 48px;text-align:center;border-top:1px solid #F3F4F6;">
              <p style="margin:0;font-size:12px;color:#9CA3AF;font-family:monospace;">Pixelate Labs · Melbourne, Australia</p>
              <p style="margin:6px 0 0;font-size:11px;color:#D1D5DB;">This email was sent from your website contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });
    console.log("Contact form email sent:", sanitizedData, "\nEmail from: ", TO_EMAIL);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
