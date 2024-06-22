import { skills } from "@/constants/data"
import { Table, TableBody, TableCell, TableRow, TableHeader } from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

type Skill = {
    name: string, image: string
}
  
const tabs = [
{
    title: "Languages",
    value: "languages",
    content: (
    <div className="h-auto rounded-2xl p-10 border border-neutral-500 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900">
        <Table>
        <TableHeader>
            <TableCell>Icon</TableCell>
            <TableCell>Skill</TableCell>
        </TableHeader>
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
    </div>
    )
},
{
    title: "Frontend",
    value: "frontend",
    content: (
    <div className="h-auto rounded-2xl p-10 border border-neutral-500 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900">
        <Table>
        <TableHeader>
            <TableCell>Icon</TableCell>
            <TableCell>Skill</TableCell>
        </TableHeader>
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
    </div>
    )
},
{
    title: "Backend",
    value: "backend",
    content: (
    <div className="h-auto rounded-2xl p-10 border border-neutral-500 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900">
        <Table>
        <TableHeader>
            <TableCell>Icon</TableCell>
            <TableCell>Skill</TableCell>
        </TableHeader>
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
    </div>
    )
},
{
    title: "Engineering",
    value: "engineering",
    content: (
    <div className="h-auto rounded-2xl p-10 border border-neutral-500 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900">
        <Table>
        <TableHeader>
            <TableCell>Icon</TableCell>
            <TableCell>Skill</TableCell>
        </TableHeader>
        <TableBody>
            {skills[3].engineering.map((skill: Skill, index: number) => (
            <TableRow>
                <TableCell>
                <Image src={skill.image} alt="skl" height={30} width={30} />
                </TableCell>
                <TableCell>
                {skill.name}
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </div>
    )
}
]

const SkillSection = () => {
    return (
        <section className="container py-8 md:py-24 w-screen p-4">
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-12">
            <div className="row-span-6 lg:col-span-6 grid grid-flow-rows grid-rows-7 gap-4 p-4">
                <h3 className="row-span-1 relative z-10 text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600  text-center font-sans font-bold">
                ABOUT ME
                </h3>
                <p className="row-span-2 text-sm md:text-lg max-w-[360px] md:max-w-[700px] lg:max-w-[600px] p-2 md:p-10 text-center text-slate-900 dark:text-slate-400 z-10">I am a software engineer with a strong background in full-stack development of SaaS products. Delivering exceptional user experiences and optimizing for performance are my top priorities.</p>
                <p className="row-span-2 text-sm md:text-lg max-w-[360px] md:max-w-[700px] lg:max-w-[600px] p-2 md:p-10 text-center text-slate-900 dark:text-slate-400 z-10">My toolkit includes a wide range of skills and tools, from Git and Figma to Canva. I stay up-to-date with the latest technologies, such as Next.js, Tailwind CSS, and Prisma, to ensure I'm always building with the best solutions.</p>
                <p className="row-span-2 text-sm md:text-lg max-w-[360px] md:max-w-[700px] lg:max-w-[600px] p-2 md:p-10 text-center text-slate-900 dark:text-slate-400 z-10">Beyond my passion for programming, I'm an avid basketball fan, both on the court and watching the games. I'm excited to put my expertise to work and look forward to collaborating with you!</p>
            </div>
            <div className="row-span-6 lg:col-span-6 flex flex-col p-4">
                <h3 className="relative z-10 text-2xl md:text-4xl lg:text-6xl mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600  text-center font-sans font-bold">
                SKILLS
                </h3>
                <Tabs tabs={tabs} />
            </div>
            </div>
        </section>
    )
}

export { SkillSection }