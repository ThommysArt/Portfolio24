import * as fs from 'fs';

const skills = JSON.parse(fs.readFileSync('constants/skills.json', 'utf-8'))
console.log(skills)

export {skills}