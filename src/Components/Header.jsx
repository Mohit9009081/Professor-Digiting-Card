import { GraduationCap } from "lucide-react"

const profileData = {
  name: "Dr. Alexander Harrison",
  institution: "Westfield Heritage University",
  photo: "/profile.jpg", // replace with actual image path
}

const Header = ({mode}) => {
  return (
    <>
         <button
    onClick={mode}
    className="text-2xl text-emerald-600 absolute top-0 right-1 z-10 rounded"
  >
    + 
  </button>
      {/* Header */}
      <header className="relative px-6 pt-8 pb-20 bg-[#5b1f2b]">
    
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-4 left-4 w-16 h-16 border border-[#f3ece6] rounded-full" />
          <div className="absolute top-8 right-8 w-8 h-8 border border-[#f3ece6] rounded-full" />
          <div className="absolute bottom-12 left-1/4 w-4 h-4 bg-[#f3ece6] rounded-full" />
        </div>

        {/* Institution Badge */}
        <div className="relative flex items-center gap-2 text-[#f3ece6]/90 mb-2">
          <GraduationCap className="w-4 h-4" />
          <span className="tracking-wider uppercase text-xs">
            {profileData.institution}
          </span>
        </div>
      </header>

      {/* Profile Photo (Overlapping) */}
      <div className="relative px-6 -mt-16">
        <div className="relative w-32 h-32 mx-auto">
          {/* Soft gold glow */}
          <div className="absolute inset-0 rounded-full bg-[#c9a24d] opacity-20" />

          <img
            src={profileData.photo}
           alt=""
            className="relative w-full h-full object-cover rounded-full border-4 border-[#f7f2ec] shadow-lg"
          />

          {/* Gold accent ring */}
          <div className="absolute -inset-1 border-2 border-[#c9a24d]/40 rounded-full" />
        </div>
      </div>
    </>
  )
}

export default Header