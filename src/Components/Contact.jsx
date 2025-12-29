import { Mail, MapPin, Phone } from "lucide-react"
import { FaGlobe } from "react-icons/fa"

const ProfileData = {
  email: "hansavyas5418@gmail.com",
  phone: "+ 91 7987878133",
  location: "Narmadapuram M.P.",
  website: "https://westfield.edu/harrison",
}

const Contact = () => {
  return (
    <>
     
      <section
        className="px-6 py-4 space-y-3 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <h2 className="text-xs flex gap-2 items-center font-semibold uppercase tracking-wider text-[#8b2c3a] mb-3">
         <FaGlobe/> Contact
        </h2>

        {/* Email */}
        <a
          href={`mailto:${ProfileData.email}`}
          className="flex items-center gap-3 p-3 rounded-xl
                     bg-[#f3ece6] border border-[#d6c8be]
                     hover:bg-[#e9dfd6] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#8b2c3a]/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#8b2c3a]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-[#7a6a60]">
              Email
            </p>
            <p className="text-sm text-[#5b1f2b]">{ProfileData.email}</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href={`tel:${ProfileData.phone}`}
          className="flex items-center gap-3 p-3 rounded-xl
                     bg-[#f3ece6] border border-[#d6c8be]
                     hover:bg-[#e9dfd6] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#8b2c3a]/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-[#8b2c3a]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-[#7a6a60]">
              Phone
            </p>
            <p className="text-sm text-[#5b1f2b]">{ProfileData.phone}</p>
          </div>
        </a>

        {/* Location */}
        <div
          className="flex items-center gap-3 p-3 rounded-xl
                     bg-[#f3ece6] border border-[#d6c8be]"
        >
          <div className="w-10 h-10 rounded-full bg-[#8b2c3a]/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#8b2c3a]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-[#7a6a60]">
              Location
            </p>
            <p className="text-sm text-[#5b1f2b]">
              {ProfileData.location}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact