"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LinkPreview } from "@/components/ui/link-preview";
import { sendMail } from "@/lib/mail-service";
import { toast } from "@/components/ui/use-toast";

export default function Page () {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const contactMe = () => {
        if (!name) { 
            toast({
                title: 'Name is required.',
                description: "You haven't entered a name",
                variant: "destructive"
            })
            return null
        } 
  
        if (!email) { 
            toast({
                title: 'Email is required.',
                description: "You haven't entered a Email",
                variant: "destructive"
            })
            return null
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            toast({
                title: 'Email is invalid.',
                description: "You haven't entered a correct Email",
                variant: "destructive"
            })
            return null
        } 
        sendMail({
            name: name,
            email: email,
            message: message
        })
        toast({
            title: 'Email Sent.',
            description: "Don't worry i got your mail.",
        })
    }

    return (
        <div className="flex flex-col overscroll-y-auto mx-5 md:mx-10">
            <div className="container h-[200px] md:h-[300px]"></div>
            <Card className="rounded-lg mb-[100px] md:mb-[200px]">
                <CardHeader>
                    <CardTitle className="relative z-10 text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-bold">CONTACT</CardTitle>
                    <CardDescription>My skill are yours, just reach out at <b className="text-blue-900 dark:text-blue-200">thomsonnguems@gmail.com</b></CardDescription>
                </CardHeader>
                <CardContent className="grid grid-rows-4 gap-2">
                    <div className="row-span-1 flex flex-col gap-2">
                        <Label>Name</Label>
                        <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="John Doe" className="z-10"/>
                    </div>
                    <div className="row-span-1 flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="johndoe@example.com" className="z-10"/>
                    </div>
                    <div className="row-span-2 flex flex-col gap-2">
                        <Label>Message</Label>
                        <Textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Give more details about your inquiry here..." className="z-10"/>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row gap-3 justify-end">
                        <LinkPreview url="https://github.com/ThommysArt" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-700">
                            <GitHubLogoIcon className="w-[25px] h-[25px]"/>
                        </LinkPreview>
                        <LinkPreview url="https://linkedin.com/in/thomsonnguems" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-700">
                            <LinkedInLogoIcon className="w-[25px] h-[25px]"/>
                        </LinkPreview>
                        <LinkPreview url="https://www.fiverr.com/nekomaking" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.68,0 -23,10.32 -23,23c0,12.68 10.32,23 23,23c12.68,0 23,-10.32 23,-23c0,-12.68 -10.32,-23 -23,-23zM34,36h-6v-11h-4v11h-6v-11h-4v-6h4.04c0.37,-4.96 3.54,-8 8.46,-8h2.53v6h-2.53c-0.92,0 -2.14,0 -2.43,2h9.93z"></path></g></g>
                            </svg>
                        </LinkPreview>
                        <LinkPreview url="https://upwork.com/freelancers/~013b5077b228f99799" className="flex flex-row items-center p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M1,9c-0.552,0 -1,0.448 -1,1v14.11523c0,6.161 4.68298,11.51624 10.83398,11.86523c5.897,0.334 10.91389,-3.80408 11.96289,-9.33008c0.57,0.77 1.14937,1.48558 1.73438,2.14258l-3.5293,14.97852c-0.069,0.298 0.00045,0.60861 0.18945,0.84961c0.191,0.238 0.47916,0.37891 0.78516,0.37891h5.11914c0.464,0 0.8637,-0.31267 0.9707,-0.76367c0.621,-2.621 1.59456,-6.72817 2.47656,-10.45117l0.91016,0.52734c2.165,1.121 4.36187,1.6875 6.54688,1.6875c7.192,0 12.926,-6.359 11.875,-13.75c-0.696,-4.896 -4.46092,-8.93166 -9.29492,-9.97266c-5.629,-1.213 -11.05472,1.6718 -13.38672,6.4668c0,0 -0.2588,0.57444 -0.4668,1.14844c-1.65,-2.846 -2.61895,-5.7985 -3.12695,-7.9375c-0.185,-0.78 -0.46214,-2.1922 -0.49414,-2.2832c-0.139,-0.403 -0.51636,-0.67187 -0.94336,-0.67187h-5.16211c-0.552,0 -1,0.448 -1,1v14.30078c0,2.349 -1.71278,4.44974 -4.05078,4.67773c-2.682,0.262 -4.94922,-1.84852 -4.94922,-4.47852v-14.5c0,-0.552 -0.448,-1 -1,-1zM38,19c2.757,0 5,2.243 5,5c0,2.757 -2.243,5 -5,5c-2.225,0 -4.28647,-1.34172 -5.73047,-2.51172c0.527,-2.225 0.88072,-3.71523 0.88672,-3.74023c0.568,-2.207 2.56075,-3.74805 4.84375,-3.74805z"></path></g></g>
                            </svg>
                        </LinkPreview>
                        <Button className="row-span-1" onClick={contactMe}>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    )
}