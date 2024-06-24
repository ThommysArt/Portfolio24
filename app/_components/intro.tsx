import { TextGenerateEffect } from "@/components/ui/text-generated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const intro_text = "A Dedicated and Skilled Computer Science Practitioner experienced in web design, SaaS development, and full stack application development."

const IntroSection = () => {
    return (
    <section className="container py-8 md:py-24 p-4">
        <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-5">
          <div className="row-span-3 md:col-span-3 max-w-4xl p-4">
            <h3 className="relative z-10 text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600  text-center font-sans font-bold">
              Keabou Nguematio Thomson
            </h3>
            <TextGenerateEffect words={intro_text} className="text-neutral-500 max-w-md lg:max-w-lg mx-auto my-2 md:my-10 text-sm md:text-lg text-center relative z-10"/>
          </div>
          <div className="row-span-2 md:col-span-2 flex p-4 items-center self-center justify-center">
            <Avatar className="w-48 h-48 md:w-72 md:h-72">
              <AvatarImage src="/main.jpg" className="object-cover"/>
              <AvatarFallback>KT</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
    )
}

export { IntroSection };