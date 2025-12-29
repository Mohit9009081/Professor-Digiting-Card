const profileData = {
  name: "Dr. Alexander Harrison",
  credentials: "Ph.D., M.A., B.A. (Hons)",
  designation: "Professor of History & Academic Consultant",
  institution: "Westfield Heritage University",
  department: "Department of Historical Studies",
}

const Home = () => {
  return (
    <div className="px-6 pt-6 pb-8 mb-4  bg-[#f7f2ec]" >
      {/* Name & Title */}
      <div className="text-center space-y-2   animate-fade-in">
        
        <h1 className="text-2xl font-serif font-bold tracking-wide text-[#5b1f2b]">
          {profileData.name}
        </h1>

        <p className="text-sm italic text-[#7a6a60]">
          {profileData.credentials}
        </p>

        <p className="text-base font-semibold text-[#8b2c3a]">
          {profileData.designation}
        </p>

        <p className="text-sm text-[#6f625a]">
          {profileData.department}
        </p>

      </div>
    </div>
  )
}

export default Home