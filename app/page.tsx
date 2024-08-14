
import { Separator } from "@/components/ui/separator";
import { IntroSection } from "@/app/_components/intro"
import { SkillSection } from "@/app/_components/skills"
import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowRightIcon } from "@radix-ui/react-icons";


export default function Home() {
  return (
    <div className="flex flex-col overscroll-y-auto justify-center w-full">
      <IntroSection />
      <Separator className="my-4" />
      <SkillSection />
      <div className="m-10 md:m-20 mt-[500px] md:mt-[500px] lg:mt-20 flex flex-row gap-2 items-center">
        <p>Not convinced, Let's look deeper into my</p>   
        <LinkPreview
            url="/projects"
            className="flex flex-row items-center font-bold bg-clip-text text-transparent bg-blue-600"
            >
              Projects
              <ArrowRightIcon className="ml-2" />
          </LinkPreview>
      </div>
    </div>
  );
}
