import { ProjectExperience } from './project-experience.data';

export interface WorkExperience {
    id: number,
    company: string,
    position: string,
    location: string,
    workdate: string,
    briefdesc: string,
    techs: string[],
    projects: ProjectExperience[]
}
