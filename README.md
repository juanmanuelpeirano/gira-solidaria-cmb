# Gira Solidaria 2026

Landing mobile-first de **Creciendo Juntos** y Club Manuel Belgrano. El objetivo es que una persona escanee un QR, elija una forma de colaborar y pase al pago de Mercado Pago sin pasos extra.

## Correr el sitio

    npm install
    npm run dev

Abrí la URL que muestra la terminal.

## Editar aportes y links de Mercado Pago

Todo está centralizado en app/data/donations.ts.

Para cada aporte podés cambiar:

- name: nombre visible;
- description: texto corto;
- amount: importe en pesos;
- paymentLink: Link de Pago de Mercado Pago;
- icon y accent: detalle visual de la tarjeta.

Cuando recibas los Links de Pago, pegá cada URL en su paymentLink. Mientras esté vacío, la tarjeta informa que el link está pendiente y no intenta abrir un checkout.

## Reemplazar los logos y las fotos

Los lugares preparados están dentro de public/assets/:

- logos/: escudo oficial del Club Manuel Belgrano y logo de Creciendo Juntos;
- photos/: fotografías reales y autorizadas de la gira.

Cada carpeta incluye un README con los nombres sugeridos. Luego de agregar los recursos, actualizá las referencias visuales de app/page.tsx y app/globals.css.

## Publicar

1. Subí el proyecto a tu repositorio de GitHub cuando estés conforme.
2. En Vercel, importá ese repositorio y elegí los valores detectados por defecto.
3. Al finalizar el deploy, verificá desde un teléfono que los Links de Pago abran correctamente.
4. Recién entonces generá o imprimí el QR, apuntando siempre a la URL de esta web y nunca a un Link de Pago individual.

## Antes de comunicar la URL

Confirmá que ya se incorporaron:

- los dos logos oficiales;
- las fotografías autorizadas;
- los seis Links de Pago correctos;
- la imagen de vista previa para WhatsApp e Instagram.
