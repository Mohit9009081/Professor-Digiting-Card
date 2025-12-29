import { BookOpen } from "lucide-react"

const aboutText =
  "A distinguished historian with over 25 years of experience in medieval European history and archival research. Passionate about mentoring the next generation of scholars and bridging academia with practical heritage consultancy."

const About = () => {

  return (
   <>
 
    <section>
      <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b2c3a] px-6  mb-1">
        <BookOpen className="w-4 h-4 text-[#8b2c3a]" />
        About
      </h2>

      <p className="text-sm p-4 leading-relaxed italic text-[#6f625a]">
        {aboutText}
      </p>
    </section>

   </>
  )
}

export default About