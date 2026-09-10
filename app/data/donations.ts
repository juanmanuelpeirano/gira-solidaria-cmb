export type DonationOption = {
  id: string;
  category: string;
  name: string;
  description: string;
  amount: number | null;
  paymentLink: string;
  icon: 'cookie' | 'notebook' | 'milk' | 'pencil' | 'food' | 'shoe' | 'heart';
  accent: 'red' | 'blue' | 'cream' | 'ink' | 'rose';
};

/**
 * Editá sólo esta lista cuando cambien los aportes, los montos o los links de pago.
 * Dejamos paymentLink vacío hasta recibir los Links de Pago definitivos de Mercado Pago.
 */
export const donationOptions: DonationOption[] = [
  { id: 'galletitas', category: 'Alimentos', name: '2 paquetes de galletitas', description: 'Para compartir una merienda.', amount: 3000, paymentLink: 'https://mpago.la/2a1KBYj', icon: 'cookie', accent: 'red' },
  { id: 'leches', category: 'Alimentos', name: '2 leches larga vida', description: 'Para acompañar las comidas del día.', amount: 5000, paymentLink: 'https://mpago.la/1ADn5AB', icon: 'milk', accent: 'blue' },
  { id: 'cuadernos', category: 'Educación', name: '2 cuadernos', description: 'Para seguir aprendiendo y creando.', amount: 7000, paymentLink: 'https://mpago.la/2bCjdEV', icon: 'notebook', accent: 'cream' },
  { id: 'kit-utiles', category: 'Educación', name: 'Kit de útiles escolares', description: 'Elementos para aprender, crear y compartir.', amount: 10000, paymentLink: 'https://mpago.la/2BUrbTV', icon: 'pencil', accent: 'ink' },
  { id: 'indumentaria', category: 'Deporte', name: 'Indumentaria deportiva', description: 'Para acompañar el juego y el movimiento.', amount: 20000, paymentLink: 'https://mpago.la/2bFmYES', icon: 'shoe', accent: 'rose' },
  { id: 'otro-monto', category: 'A elección', name: 'Otro monto', description: 'Elegí el aporte que te quede cómodo.', amount: null, paymentLink: 'https://link.mercadopago.com.ar/cmbgirasolidaria', icon: 'heart', accent: 'red' },
];
