import { BookOpen } from "lucide-react"

const aboutText =
  "A distinguished historian with over 35 years of experience in medieval European history and archival research. Passionate about mentoring the next generation of scholars and bridging academia with practical heritage consultancy."

const About = () => {

  return (
   <>
 <h2 className="flex items-center gap-2 text-xs font-semibold mb-2 uppercase tracking-wider text-[#8b2c3a] px-6">
        <BookOpen className="w-4 h-4  text-[#8b2c3a]" />
        About
      </h2>
    <section className="px-6">
      

      <p className="text-sm font-bold p-6  bg-[#f3ece6] border rounded-2xl border-[#d6c8be]
                     hover:bg-[#e9dfd6] transition-colors group leading-relaxed italic text-[#6f625a]">
        {aboutText}
      </p>
    </section>

   </>
  )
}

export default About