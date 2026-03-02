import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, empresa, email, celular, mensaje } = await req.json();

    await resend.emails.send({
      from: 'Web FCM <onboarding@resend.dev>', // Luego podrás usar tu propio dominio
      to: ['gonzaloisique777@gmail.com'], // EL CORREO DONDE QUIERES RECIBIRLO
      subject: `Nuevo mensaje de: ${nombre}`,
      replyTo: email,
      html: `
        <h1>Nuevo contacto desde la Web</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Celular:</strong> ${celular}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}