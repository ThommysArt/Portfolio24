
import { Separator } from "@/components/ui/separator";
import { IntroSection } from "@/app/_components/intro"
import { SkillSection } from "@/app/_components/skills"
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { LinkPreview } from "@/components/ui/link-preview";


export default function Home() {
  return (
    <div className="flex flex-col overscroll-y-auto px-4 md:px-10">
      <div className="container h-[800px] md:h-[1400px] lg:h-[1200px]"></div>
      <IntroSection />
      <Separator className="my-4" />
      <SkillSection />
      <Separator className="my-4" />
      <div className="m-10 md:m-20 flex flex-row gap-5 items-center">
        <p>Not convinced, Let's look deeper into my {" "}
          <LinkPreview
            url="/projects"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Projects
          </LinkPreview>
        </p>
      </div>
    </div>
  );
}
