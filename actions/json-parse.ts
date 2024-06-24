"use server"

import * as fs from 'fs';

export type Project = {
    title: string;
    href: string;
    gitrep: string
    src: string;
    role: string
    description: string;
    images: {url:string,large:boolean}[];
    completed: boolean;
  }


const get_skills = () => {
    return JSON.parse(fs.readFileSync('constants/skills.json', 'utf-8'))
}

const get_projects = (): Promise<Project[]> => {
    return JSON.parse(fs.readFileSync('constants/projects.json', 'utf-8'))
}



export {get_skills, get_projects}
