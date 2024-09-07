import { Project } from "@/actions/json-parse"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card"
import { Separator } from "@/components/ui/separator"
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SlideContainer from "@/components/slide-container";

interface Skill {
    name: string,
    url: string
}
interface ProjectContentProps {
    project: Project
}

const ProjectContent: React.FC<ProjectContentProps> = ({project}) => {
    return (
        <SlideContainer>
            <Card>
                <CardHeader className="flex flex-row gap-4 justify-center align-center items-center">
                    <CardTitle className="relative z-10 text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-800 dark:to-blue-400 uppercase text-center font-bold">
                        {project.title}
                    </CardTitle>
                    {project.completed?(<></>):(<div><Badge variant="secondary" className="mb-2">In Progress</Badge></div>)}
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <h6 className="relative z-10 text-lg md:text-xl font-bold mt-5 md:mt-10">
                            Role
                        </h6>
                        <Separator className="my-2" />
                        <div><Badge variant="outline">{project.role}</Badge></div>
                        <h6 className="relative z-10 text-lg md:text-xl font-bold mt-5 md:mt-10">
                            Images
                        </h6>
                        <Separator className="my-2" />
                        <InfiniteMovingCards items={project.images} speed="slow" />
                        <h6 className="relative z-10 text-lg md:text-xl font-bold mt-5 md:mt-10">
                            Description
                        </h6>
                        <Separator className="my-2" />
                        <p className="text-sm md:text-lg p-2 md:p-10 text-center text-blue-950 dark:text-blue-100 z-10">
                            {project.description}
                        </p>
                        <h6 className="relative z-10 text-lg md:text-xl font-bold mt-5 md:mt-10">
                            Tech Stack
                        </h6>
                        <Separator className="my-2" />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.skills.map((skill: Skill, index: number) => (
                                <Badge key={index} variant="outline" className="flex gap-2">
                                    <Image src={skill.url} alt="Skill" height={30} width={30} /> 
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row gap-4 justify-end">
                    {project.href?(
                        <LinkPreview 
                            url={project.href}
                            className="flex flex-row items-center py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-400"
                            >
                                <ExternalLinkIcon className="mr-2" /> View
                        </LinkPreview>
                    ):(
                        <></>
                    )}
                    {project.gitrep?(
                        <LinkPreview 
                            url={project.gitrep}
                            className="flex flex-row items-center py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-400"
                            >
                                <GitHubLogoIcon className="mr-2" /> Github
                        </LinkPreview>
                    ):(
                        <></>
                    )}
                </CardFooter>
            </Card>
        </SlideContainer>
    )
}

export {ProjectContent}