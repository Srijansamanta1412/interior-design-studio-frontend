import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+919876543210"
      className="contact-button-blink fixed bottom-24 right-5 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform [animation-delay:0.45s] after:[animation-delay:0.45s]"
      aria-label="Call Us"
    >
      <FaPhoneAlt size={22} />
    </a>
  );
}
