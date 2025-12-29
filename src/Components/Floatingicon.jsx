
import { FaWhatsapp } from "react-icons/fa"

const Floatingicon = () => {
  const whatsappNumber = "+919425366286" // same as contact phone
  const message = encodeURIComponent(
    "Hello Professor, I would like to inquire about academic guidance and consultation."
  )

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#c9a24d] opacity-20 blur-md group-hover:opacity-30 transition" />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center
                      bg-[#5b1f2b] shadow-xl
                      border-2 border-[#c9a24d]/50
                      hover:scale-105 transition-transform">
        <FaWhatsapp  className="w-7 h-7  text-[#06f73a]" />
      </div>
    </a>
  )
}

export default Floatingicon