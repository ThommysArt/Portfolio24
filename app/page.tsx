
import { Separator } from "@/components/ui/separator";
import { IntroSection } from "@/app/_components/intro"
import { SkillSection } from "@/app/_components/skills"
import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowRightIcon } from "@radix-ui/react-icons";


export default function Home() {
  return (
    <div className="flex flex-col overscroll-y-auto px-4 md:px-10">
      <div className="container h-[1600px] md:h-[2000px] lg:h-[1500px]"></div>
      <IntroSection />
      <Separator className="my-4" />
      <SkillSection />
      <Separator className="my-4" />
      <div className="m-10 md:m-20 mt-[500px] md:mt-[500px] lg:mt-20 flex flex-row gap-2 items-center">
        <p>Not convinced, Let's look deeper into my</p>   
        <LinkPreview
            url="/projects"
            className="flex flex-row items-center gap-1 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Projects
              <ArrowRightIcon />
          </LinkPreview>
      </div>
    </div>
  );
}
