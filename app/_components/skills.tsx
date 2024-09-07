import { get_skills } from "@/actions/json-parse"
import { Table, TableBody, TableCell, TableRow, TableHeader } from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import SlideContainer from "@/components/slide-container";

type Skill = {
    name: string, image: string
}

const skills = get_skills()
  
const tabs = [
{
    title: "Languages",
    value: "languages",
    content: (
        <Card>
            <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableBody>
                    {skills[0].languages.map((skill: Skill, index: number) => (
                    <TableRow>
                        <TableCell>
                        <Image src={skill.image} alt="skl" height={30} width={30}/>
                        </TableCell>
                        <TableCell>
                        {skill.name}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
},
{
    title: "Frontend",
    value: "frontend",
    content: (
        <Card>
            <CardHeader>
                <CardTitle>Frontend Stack</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableBody>
                    {skills[1].frontend.map((skill: Skill, index: number) => (
                    <TableRow>
                        <TableCell>
                        <Image src={skill.image} alt="skl" height={30} width={30}/>
                        </TableCell>
                        <TableCell>
                        {skill.name}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
},
{
    title: "Backend",
    value: "backend",
    content: (
        <Card>
            <CardHeader>
                <CardTitle>Backend Stack</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableBody>
                    {skills[2].backend.map((skill: Skill, index: number) => (
                    <TableRow>
                        <TableCell>
                        <Image src={skill.image} alt="skl" height={30} width={30}/>
                        </TableCell>
                        <TableCell>
                        {skill.name}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
},
{
    title: "Engineering",
    value: "engineering",
    content: (
        <Card>
            <CardHeader>
                <CardTitle>Engineering Practices</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableBody>
                    {skills[3].engineering.map((skill: Skill, index: number) => (
                    <TableRow>
                        <TableCell>
                        <Image src={skill.image} alt="skl" height={30} width={30}/>
                        </TableCell>
                        <TableCell>
                        {skill.name}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
]

const SkillSection = () => {
    return (
        <section className="container py-8 md:py-24 p-4">
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2">
                <SlideContainer>
                    <div className="row-span-7 lg:col-span-1 grid grid-flow-rows grid-rows-6 gap-4 p-4 justify-center">
                        <h3 className="row-span-1 relative z-10 text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-600  text-center font-sans font-bold">
                        ABOUT ME
                        </h3>
                        <p className="row-span-2 text-sm md:text-lg max-w-[70vw] lg:max-w-[40vw] md:p-8 text-center text-neutral-600 dark:text-neutral-400 z-10">I am a software engineer with a strong background in full-stack development of SaaS products. Delivering exceptional user experiences and optimizing for performance are my top priorities.</p>
                        <p className="row-span-2 text-sm md:text-lg max-w-[70vw] lg:max-w-[40vw] md:p-8 text-center text-neutral-600 dark:text-neutral-400 z-10">Beyond my passion for programming, I'm an avid basketball fan, both on the court and watching the games. I'm excited to put my expertise to work and look forward to collaborating with you!</p>
                        <div className="row-span-1 flex justify-center">
                            <Button className="flex flex-row items-center text-white">
                                <Link className="flex" href="/Resume2024.pdf">
                                    Dowload Resume <DownloadIcon className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </SlideContainer>
                <SlideContainer>
                    <div className="row-span-6 lg:col-span-1 flex flex-col p-4">
                        <h3 className="relative z-10 text-2xl md:text-4xl lg:text-6xl mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-600  text-center font-sans font-bold">
                        SKILLS
                        </h3>
                        <Tabs tabs={tabs} />
                    </div>
                </SlideContainer>
            </div>
        </section>
    )
}

export { SkillSection }