import { TextGenerateEffect } from "@/components/ui/text-generated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FlipWords } from "@/components/ui/flip-words";

const intro_text = "A Dedicated and Skilled Computer Science Practitioner experienced in"
const flipwords = ["Web Design" , "SaaS Products", "Full Stack Application Development"]

const IntroSection = () => {
    return (
      <section className="container py-8 md:py-16 p-4">
        <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-5">
          <div className="row-span-3 lg:col-span-3 max-w-4xl p-4">
            <h3 className="relative z-10 text-3xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-600  text-center font-sans font-bold">
              Keabou Nguematio Thomson
            </h3>
            <div  className="text-neutral-600 dark:text-neutral-400 max-w-md lg:max-w-lg mx-auto my-2 md:my-10 text-sm md:text-lg text-center relative z-10">
              {intro_text}
              <FlipWords words={flipwords} className="text-blue-700 dark:text-blue-300 font-bold" />
            </div>
          </div>
          <div className="row-span-2 lg:col-span-2 flex p-4 items-center self-center justify-center">
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