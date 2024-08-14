import { Separator } from "@/components/ui/separator";
import { ProjectContent } from "./_components/project_content";
import { get_projects } from "@/actions/json-parse";
import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default async function ProjectsPage () {
    const projects = await get_projects()
    return (
        <div className="flex flex-col overscroll-y-auto justify-center w-full">
            <div className="flex flex-col gap-10 md:gap-20 mb-20">
                {projects.map((project, index) => (
                    <div key={index} className="px-5 md:px-28 lg:px-40"><ProjectContent project={project} /></div>
                ))}
            </div>
            <Separator className="my-4" />
            <div className="p-10 md:p-20 flex flex-row gap-5 items-center">
                <p>Interested? Let's plan your product. {" "}
                <LinkPreview
                    url="/contact"
                    className="font-bold bg-clip-text text-transparent bg-blue-600"
                    >
                    Contact
                </LinkPreview>
                </p>
                <ArrowRightIcon />
            </div>
        </div>
    )
}