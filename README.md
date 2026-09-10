# Gira Solidaria CMB 2026

Sitio web de la Gira Solidaria 2026 del Club Manuel Belgrano y Creciendo Juntos.

La página está pensada principalmente para celulares: quien escanea el código QR puede elegir un aporte y continuar directamente al Link de Pago correspondiente de Mercado Pago.

## Sitio publicado

[Ver la web de la Gira Solidaria](https://gira-solidaria-cmb-2026.jpeirano.chatgpt.site)

## Qué incluye

- Seis formas de colaborar, ordenadas por monto.
- Links de Pago de Mercado Pago configurados por aporte.
- Diseño adaptado a celular y escritorio.
- Identidad visual del Club Manuel Belgrano y Creciendo Juntos.
- Carrusel automático con fotos de la gira en la sección “La gira”.

## Ejecutar el proyecto

\`\`\`bash
npm install
npm run dev
\`\`\`

Para generar una versión lista para publicar:

\`\`\`bash
npm run build
\`\`\`

## Editar aportes y Links de Pago

Toda la configuración está centralizada en [app/data/donations.ts](app/data/donations.ts).

Cada aporte contiene:

- \`name\`: nombre visible.
- \`description\`: texto breve de la tarjeta.
- \`amount\`: monto en pesos argentinos.
- \`paymentLink\`: Link de Pago de Mercado Pago.
- \`icon\` y \`accent\`: ícono y color de la tarjeta.

Para reemplazar los Links de Pago en el futuro, sólo hay que modificar el campo \`paymentLink\` de cada aporte. No se requieren credenciales, backend ni integración con la API de Mercado Pago.

## Fotos y logos

- Los logos se encuentran en [public/assets/logos](public/assets/logos).
- Las fotos del carrusel se encuentran en [public/assets/photos](public/assets/photos).

Usá imágenes autorizadas por el Club y la organización antes de incorporar nuevos recursos.

## Tecnologías

- React
- Vinext / Vite
- TypeScript
- CSS

## Seguridad

Este repositorio no contiene credenciales ni claves privadas. Los pagos se procesan íntegramente en Mercado Pago mediante Links de Pago.
