import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Movemos la inicialización adentro para que solo ocurra cuando se llama a la API
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { nombre, empresa, email, celular, mensaje } = await req.json();

    // Validación básica de la clave para evitar que el servidor explote
    if (!process.env.RESEND_API_KEY) {
      console.error("Falta RESEND_API_KEY en las variables de entorno");
      return NextResponse.json({ error: 'Configuración de correo incompleta' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'Web FCM <onboarding@resend.dev>',
      to: ['mgelmi@gmail.com'],
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