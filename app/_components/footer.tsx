import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { LinkPreview } from "@/components/ui/link-preview"
import { Separator } from "@/components/ui/separator"
import { GitHubLogoIcon, LinkedInLogoIcon, CalendarIcon } from "@radix-ui/react-icons"

export default function Footer () {
    return (
        <div className="flex flex-col w-full p-4 md:p-10 lg:mt-0 gap-4 justify-center items-center">
            <Separator className="my-4" />
            <div className="flex flex-row gap-3 justify-end">
                <LinkPreview url="https://github.com/ThommysArt" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-300">
                    <GitHubLogoIcon className="w-[25px] h-[25px]"/>
                </LinkPreview>
                <LinkPreview url="https://www.linkedin.com/in/thommysart" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-300">
                    <LinkedInLogoIcon className="w-[25px] h-[25px]"/>
                </LinkPreview>
                <LinkPreview url="https://www.fiverr.com/nekomaking" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.68,0 -23,10.32 -23,23c0,12.68 10.32,23 23,23c12.68,0 23,-10.32 23,-23c0,-12.68 -10.32,-23 -23,-23zM34,36h-6v-11h-4v11h-6v-11h-4v-6h4.04c0.37,-4.96 3.54,-8 8.46,-8h2.53v6h-2.53c-0.92,0 -2.14,0 -2.43,2h9.93z"></path></g></g>
                    </svg>
                </LinkPreview>
                <LinkPreview url="https://upwork.com/freelancers/~013b5077b228f99799" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M1,9c-0.552,0 -1,0.448 -1,1v14.11523c0,6.161 4.68298,11.51624 10.83398,11.86523c5.897,0.334 10.91389,-3.80408 11.96289,-9.33008c0.57,0.77 1.14937,1.48558 1.73438,2.14258l-3.5293,14.97852c-0.069,0.298 0.00045,0.60861 0.18945,0.84961c0.191,0.238 0.47916,0.37891 0.78516,0.37891h5.11914c0.464,0 0.8637,-0.31267 0.9707,-0.76367c0.621,-2.621 1.59456,-6.72817 2.47656,-10.45117l0.91016,0.52734c2.165,1.121 4.36187,1.6875 6.54688,1.6875c7.192,0 12.926,-6.359 11.875,-13.75c-0.696,-4.896 -4.46092,-8.93166 -9.29492,-9.97266c-5.629,-1.213 -11.05472,1.6718 -13.38672,6.4668c0,0 -0.2588,0.57444 -0.4668,1.14844c-1.65,-2.846 -2.61895,-5.7985 -3.12695,-7.9375c-0.185,-0.78 -0.46214,-2.1922 -0.49414,-2.2832c-0.139,-0.403 -0.51636,-0.67187 -0.94336,-0.67187h-5.16211c-0.552,0 -1,0.448 -1,1v14.30078c0,2.349 -1.71278,4.44974 -4.05078,4.67773c-2.682,0.262 -4.94922,-1.84852 -4.94922,-4.47852v-14.5c0,-0.552 -0.448,-1 -1,-1zM38,19c2.757,0 5,2.243 5,5c0,2.757 -2.243,5 -5,5c-2.225,0 -4.28647,-1.34172 -5.73047,-2.51172c0.527,-2.225 0.88072,-3.71523 0.88672,-3.74023c0.568,-2.207 2.56075,-3.74805 4.84375,-3.74805z"></path></g></g>
                    </svg>
                </LinkPreview>
            </div>
            <div className="flex text-center items-center">
                <HoverCard>
                    <p>Copyright 2024, made by .</p>{" "}
                    <HoverCardTrigger className="text-blue-800 dark:text-blue-300"> ThommysArt</HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex justify-between space-x-4">
                            <Avatar>
                                <AvatarImage src="/main.jpg" className="object-cover"/>
                                <AvatarFallback>KT</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h4 className="text-md font-semibold">Keabou Thomson</h4>
                                <p className="text-sm">
                                Software Engineer
                                </p>
                                <div className="flex items-center pt-2">
                                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    since March 2023
                                </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}