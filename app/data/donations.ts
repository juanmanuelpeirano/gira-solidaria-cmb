export type DonationOption = {
  id: string;
  category: string;
  name: string;
  description: string;
  amount: number | null;
  paymentLink: string;
  icon: 'notebook' | 'milk' | 'pencil' | 'food' | 'shoe' | 'heart';
  accent: 'red' | 'blue' | 'cream' | 'ink' | 'rose';
};

/**
 * Editá sólo esta lista cuando cambien los aportes, los montos o los links de pago.
 * Dejamos paymentLink vacío hasta recibir los Links de Pago definitivos de Mercado Pago.
 */
export const donationOptions: DonationOption[] = [
  { id: 'cuaderno', category: 'Educación', name: '1 cuaderno', description: 'Una ayuda concreta para acompañar el aprendizaje.', amount: 2000, paymentLink: '', icon: 'notebook', accent: 'red' },
  { id: 'leches', category: 'Alimentos', name: '2 leches larga vida', description: 'Un aporte para las familias que visitaremos.', amount: 3500, paymentLink: '', icon: 'milk', accent: 'blue' },
  { id: 'utiles', category: 'Educación', name: 'Kit de útiles', description: 'Elementos para aprender, crear y compartir.', amount: 5000, paymentLink: '', icon: 'pencil', accent: 'cream' },
  { id: 'alimentos', category: 'Alimentos', name: 'Alimentos no perecederos', description: 'Colaborá con una compra para la gira.', amount: 7500, paymentLink: '', icon: 'food', accent: 'ink' },
  { id: 'indumentaria', category: 'Deporte', name: 'Indumentaria / zapatillas', description: 'Una forma de sumar abrigo, ropa y movimiento.', amount: 10000, paymentLink: '', icon: 'shoe', accent: 'rose' },
  { id: 'otro-monto', category: 'A elección', name: 'Otro monto', description: 'Elegí el aporte que te quede cómodo.', amount: null, paymentLink: '', icon: 'heart', accent: 'red' },
];
