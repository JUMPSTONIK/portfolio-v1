import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProjectsStore = defineStore('projects', {
    state: () => ({ projects: {
        project1: {
            image: './../assets/images/password-generator-preview.jpg', 
            alt: 'password generator', 
            title: 'Password generator', 
            technologies: ['HTML5', 'CSS3', 'REACT', 'Typescript', 'SASS', 'Redux'], 
            description: '', 
            project: 'pass-generator',
            background: '',
            website: 'https://jumpstonik-password-generator.netlify.app',
            staticPreviews: [],
        }
    } }),
    getters: {
      projects: (state) => state.projects,
      project: (state) => {return (name:string) => state.projects[name] || {}}, // returns the first
    },
})