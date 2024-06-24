import { Project } from "@/actions/json-parse"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card"
import { Separator } from "@/components/ui/separator"
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import { Badge } from "@/components/ui/badge";


interface ProjectContentProps {
    project: Project
}

const ProjectContent: React.FC<ProjectContentProps> = ({project}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="relative z-10 text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600  text-center font-bold">
                    {project.title}{project.completed?"":" (IN PROGRESS)"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    <h6 className="relative z-10 text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-bold mt-5 md:mt-10">
                        Role
                    </h6>
                    <Separator className="my-2" />
                    <div><Badge>{project.role}</Badge></div>
                    <h6 className="relative z-10 text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-bold mt-5 md:mt-10">
                        Images
                    </h6>
                    <Separator className="my-2" />
                    <InfiniteMovingCards items={project.images} speed="normal" />
                    <h6 className="relative z-10 text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-bold mt-5 md:mt-10">
                        Description
                    </h6>
                    <Separator className="my-2" />
                    <p className="text-sm md:text-lg p-2 md:p-10 text-center text-slate-900 dark:text-slate-400 z-10">
                        {project.description}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-row gap-4 justify-end">
                <LinkPreview 
                    url={project.href}
                    className="flex flex-row items-center py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-400"
                    >
                        <ExternalLinkIcon className="mr-2" /> View
                </LinkPreview>
                <LinkPreview 
                    url={project.gitrep}
                    className="flex flex-row items-center py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-400"
                    >
                        <GitHubLogoIcon className="mr-2" /> Github
                </LinkPreview>
            </CardFooter>
        </Card>
    )
}

export {ProjectContent}