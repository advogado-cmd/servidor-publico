import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { name, email, phone, esfera, cargo, message } = data

    // Email content HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a2e; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0e105a; color: white; padding: 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { padding: 20px; background-color: #f5f5f5; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0e105a; }
    .value { margin-top: 5px; }
    .message-box { background-color: white; padding: 15px; border-left: 4px solid #c9a962; margin-top: 20px; }
    .footer { text-align: center; padding: 15px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Novo Lead - Landing Page Servidores Públicos</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nome:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">E-mail:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefone/WhatsApp:</div>
        <div class="value"><a href="https://wa.me/55${phone.replace(/\D/g, "")}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Esfera do Servidor:</div>
        <div class="value">${esfera}</div>
      </div>
      <div class="field">
        <div class="label">Cargo:</div>
        <div class="value">${cargo}</div>
      </div>
      <div class="message-box">
        <div class="label">Breve Relato do Caso:</div>
        <div class="value">${message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      Recebido em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
    </div>
  </div>
</body>
</html>
    `.trim()

    // Plain text version
    const emailText = `
NOVO CONTATO - LANDING PAGE SERVIDORES PÚBLICOS

Nome: ${name}
E-mail: ${email}
Telefone/WhatsApp: ${phone}
Esfera do Servidor: ${esfera}
Cargo: ${cargo}

BREVE RELATO DO CASO:
${message}

Data/Hora: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
    `.trim()

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Dr. Oliveira Advocacia <onboarding@resend.dev>",
      to: ["advogado@droliveira.adv.br"],
      subject: `Novo Lead: ${name} - ${esfera} - ${cargo}`,
      html: emailHtml,
      text: emailText,
      replyTo: email,
    })

    if (emailError) {
      console.error("Error sending email:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Dados recebidos com sucesso!",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Erro ao processar formulário" }, { status: 500 })
  }
}
