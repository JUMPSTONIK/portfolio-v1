import { defineStore } from 'pinia'

interface Experience {
    image: string;
    alt: string;
    title: string;
    description: string;
    position: number;
}

interface ExperiencesState {
    experiences: Record<string, Experience>;
}

export const useExperienceStore = defineStore('experiences', {
    state: (): ExperiencesState => ({
        experiences: {
            experience1: {
                image: 'https://yt3.googleusercontent.com/iYtEe797Q5SXUIBBYHcM3hxfribEvjcT9BumjT0qA1rrXAlyl0RsRXlS2DKaAQAlYcQxN76R=s900-c-k-c0x00ffffff-no-rj',
                alt: 'Yalutec logo',
                title: 'Frontend Web Tech Lead',
                description: `In my present position, I lead the upkeep, problem-solving, and advancement of critical processors, encompassing both contemporary and traditional systems such as Krezko, Zigi, T1 Pagos in Mexico, and Sinpe Móvil in Costa Rica. My primary objective is to optimize operational efficiency and uphold the exceptional performance standards of these vital processors, while also driving enhancements to the user interface and experience. Notably, I have overseen the development of the webview payment, the client's platform to manage transactions, along with spearheading the creation of a comprehensive tool integrating the company's SDK.`,
                position: 0
            },
            experience2: {
                image: 'https://play-lh.googleusercontent.com/-bYuZqdakAPBOtcx2dGG78FZybIiURniRQJU6hTPwFxw4yVsfDLUNMhnxGRRrhTE0w',
                alt: 'GoLance logo',
                title: 'Frontend Web Developer',
                description: `I've been actively involved in enhancing the Golance platform. My responsibilities have included implementing new features, designing innovative pages, and undertaking a critical migration task, transitioning the older AngularJS client to Vue and migrating from vue.js 2 to vue.js 3. This migration has not only improved the platform's performance but also ensured seamless user experiences.`,
                position: 1
            },
            experience3: {
                image: 'https://desarrollo.webtrack.online/static/media/logo.63775747.png',
                alt: 'Webtrack logo',
                title: 'Frontend Web Developer',
                description: `Successfully integrated video streaming service from a GPS manufacturer, allowing for customized GPS installations based on individual client needs. Implemented a cutting-edge real-time video visualization tool, providing users with convenient access to live video feeds. Streamlined the video viewing experience by incorporating user-friendly video players across multiple platform screens.`,
                position: 2
            },
            experience4: {
                image: 'https://8130932.fs1.hubspotusercontent-na1.net/hubfs/8130932/ALLIED%20-%20LOGO%20NUEVO-01-2.png',
                alt: 'Allied Global logo',
                title: 'Semi Senior Frontend Developer',
                description: `I worked in bank G&T to implement Apple Pay in their GTCAPP. I collaborated closely with a team of talented developers to deliver high-quality solutions and helped to create email templates. In addition to my primary responsibilities, I also had the opportunity to assist with creating plugins and testing the Android and iOS versions of the GTCAPP. I leveraged my skills in Ionic with Angular to ensure that the app was functioning correctly and meeting the client's requirements.`,
                position: 3
            },
            experience5: {
                image: 'https://1000logos.net/wp-content/uploads/2021/09/Telus-Symbol.png',
                alt: 'Telus logo',
                title: 'Application Developer',
                description: `I successfully completed a rigorous bootcamp focused on React.js, Redux, and Node.js + Express, learning from some of the best professionals in the field. During the program, I gained a deep understanding of these powerful technologies and developed proficiency in building full-stack web applications.

                As part of the program, I actively participated in maintaining a few projects and providing support to other team members. This experience allowed me to enhance my problem-solving and teamwork skills while gaining valuable practical experience in working on real-world projects.`,
                position: 4
            },
            // experience1: {
            //     image: '',
            //     alt: '',
            //     title: '',
            //     description: ``,
            //     position: 0
            // },
        }
    }),
    getters: {
        allExperiences: (state) => state.experiences,
    },
})