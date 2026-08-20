export const WHATSAPP_PHONE_NUMBER = "8697663161";

export function createWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
