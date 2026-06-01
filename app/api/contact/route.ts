import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'ENLIL Website <onboarding@resend.dev>',
      to: ['lorenzo@enlil.live'],
      replyTo: email,
      subject: `[ENLIL] Nuovo contatto da ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;background:#050a18;color:#fff;padding:32px;border:1px solid rgba(212,175,55,0.2);">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#D4AF37,#9A7D2E);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;color:#050a18;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">E</div>
            <div>
              <div style="font-size:12px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;color:#D4AF37;">ENLIL</div>
              <div style="font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(212,175,55,0.4);margin-top:2px;">Nuovo Contatto dal Sito</div>
            </div>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid rgba(212,175,55,0.08);">
              <td style="color:rgba(255,255,255,0.4);padding:10px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;width:100px;">Nome</td>
              <td style="color:#fff;padding:10px 0;font-size:15px;font-weight:600;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(212,175,55,0.08);">
              <td style="color:rgba(255,255,255,0.4);padding:10px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#D4AF37;text-decoration:none;font-size:15px;">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid rgba(212,175,55,0.08);">
              <td style="color:rgba(255,255,255,0.4);padding:10px 0;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;">Servizio</td>
              <td style="color:#fff;padding:10px 0;font-size:14px;">${service || 'Non specificato'}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:rgba(212,175,55,0.04);border-left:3px solid #D4AF37;">
            <p style="color:rgba(255,255,255,0.4);font-size:10px;text-transform:uppercase;letter-spacing:0.22em;margin:0 0 10px;">Messaggio</p>
            <p style="color:rgba(255,255,255,0.8);line-height:1.7;font-size:14px;margin:0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top:24px;display:flex;gap:12px;">
            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#D4AF37,#9A7D2E);color:#050a18;font-weight:700;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;text-decoration:none;padding:12px 24px;">Rispondi</a>
          </div>
          <p style="margin-top:28px;color:rgba(255,255,255,0.2);font-size:10px;letter-spacing:0.15em;">ENLIL — enlil-brokerage.vercel.app</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact API]', err)
    return NextResponse.json({ error: 'Errore interno. Riprova.' }, { status: 500 })
  }
}
