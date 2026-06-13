import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "8697663161";
  const message = "Hi, I want to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    className="fixed bottom-9 right-5 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={22} />
    </a>
  );
}