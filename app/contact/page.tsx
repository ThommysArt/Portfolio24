"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
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
            <Card className="rounded-lg">
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
                    <div className="flex flex-row gap-3 justify-end">
                        <Button className="row-span-1 py-5 z-10" onClick={contactMe}>Submit</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}