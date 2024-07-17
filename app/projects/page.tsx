import { Separator } from "@/components/ui/separator";
import { ProjectContent } from "./_components/project_content";
import { get_projects } from "@/actions/json-parse";
import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default async function ProjectsPage () {
    const projects = await get_projects()
    return (
        <div className="flex flex-col overscroll-y-auto mx-5 md:mx-10">
            <div className="container h-[4400px] md:h-[5700px] lg:h-[5100px]"></div>
            <div className="grid grid-flow-row gap-10 md:gap-20 mb-20">
                {projects.map((project, index) => (
                    <div key={index} className="md:px-32 lg:px-40"><ProjectContent project={project} /></div>
                ))}
            </div>
            <Separator className="my-4" />
            <div className="m-10 md:m-20 flex flex-row gap-5 items-center">
                <p>Interested? Let's plan your product. {" "}
                <LinkPreview
                    url="/contact"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                    Contact
                </LinkPreview>
                </p>
                <ArrowRightIcon />
            </div>
        </div>
    )
}