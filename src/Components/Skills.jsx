import { GraduationCap } from "lucide-react"

const specialities = [
  "Medieval European History",
  "Archival Research Methods",
  "Heritage Conservation",
  "Historical Documentation",
  "Academic Writing",
]

const Skills = () => {
  return (
    <section
      className="px-6 py-4 animate-fade-in"
      style={{ animationDelay: "0.3s" }}
    >
      <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b2c3a] mb-3">
        <GraduationCap className="w-4 h-4 text-[#8b2c3a]" />
        Educations
      </h2>

      <div className="flex flex-wrap gap-4">
        {specialities.map((specialty, index) => (
          <span
            key={index}
            className="px-5 py-1.5 text-md rounded-full border 
                       bg-[#f3ece6] text-[#5b1f2b] border-[#d6c8be]
                       hover:bg-[#e9dfd6] transition-colors"
          >
            {specialty}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills