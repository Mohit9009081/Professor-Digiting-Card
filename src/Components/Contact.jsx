import { Mail, MapPin, Phone, Users } from "lucide-react"

const ProfileData = {
  guidanceRole:
    "Available for Ph.D. supervision, research collaboration, heritage project consultations, and academic career mentoring for aspiring historians.",
  email: "a.harrison@westfield.edu",
  phone: "+1 (555) 234-5678",
  location: "Cambridge, United Kingdom",
  website: "https://westfield.edu/harrison",
}

const Contact = () => {
  return (
    <>
      {/* Guidance & Consultation */}
      <section
        className="px-6 py-4 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b2c3a] mb-3">
          <Users className="w-4 h-4 text-[#8b2c3a]" />
          Guidance & Consultation
        </h2>

        <p className="text-sm leading-relaxed text-[#6f625a] italic">
          {ProfileData.guidanceRole}
        </p>
      </section>

      {/* Contact */}
      <section
        className="px-6 py-4 space-y-3 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b2c3a] mb-3">
          Contact
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