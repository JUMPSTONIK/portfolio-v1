import { defineStore } from 'pinia'
import pass from './../assets/images/password-generator/password-generator-preview.jpg'

interface Project {
    image: string;
    alt: string;
    title: string;
    technologies: string[];
    description: string;
    name: string;
    background: string;
    website: string;
    staticPreviews: string[];
    position: number;
}

interface ProjectsState {
    projects: Record<string, Project>;
}

export const useProjectsStore = defineStore('projects', {
    state: (): ProjectsState => ({
        projects: {
            project1: {
                image: pass,
                alt: 'password generator',
                title: 'Password generator',
                technologies: ['HTML5', 'CSS3', 'REACT', 'Typescript', 'SASS', 'Redux'],
                description: `This app will be an excellent test of your HTML, CSS, and JS skills. You'll build custom form controls and use JavaScript to generate random passwords.`,
                name: 'pass-generator',
                background: '',
                website: 'https://jumpstonik-password-generator.netlify.app',
                staticPreviews: ['./../assets/images/password-generator/mobile-version-password.webp', './../assets/images/password-generator/tablet-password.webp'],
                position: 0
            },
            project2: {
                image: pass,
                alt: 'password generator',
                title: 'Password generator',
                technologies: ['HTML5', 'CSS3', 'REACT', 'Typescript', 'SASS', 'Redux'],
                description: `This app will be an excellent test of your HTML, CSS, and JS skills. You'll build custom form controls and use JavaScript to generate random passwords.`,
                name: 'pass-generator',
                background: '',
                website: 'https://jumpstonik-password-generator.netlify.app',
                staticPreviews: ['./../assets/images/password-generator/mobile-version-password.webp', './../assets/images/password-generator/tablet-password.webp'],
                position: 1
            },
            project3: {
                image: pass,
                alt: 'password generator',
                title: 'Password generator',
                technologies: ['HTML5', 'CSS3', 'REACT', 'Typescript', 'SASS', 'Redux'],
                description: `This app will be an excellent test of your HTML, CSS, and JS skills. You'll build custom form controls and use JavaScript to generate random passwords.`,
                name: 'pass-generator',
                background: '',
                website: 'https://jumpstonik-password-generator.netlify.app',
                staticPreviews: ['./../assets/images/password-generator/mobile-version-password.webp', './../assets/images/password-generator/tablet-password.webp'],
                position: 2
            }
        }
    }),
    getters: {
        allProjects: (state) => state.projects,
        project: (state) => (name: string): Project | undefined => state.projects[name],
    },
})