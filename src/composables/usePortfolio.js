import aboutImg from "@/assets/images/about-image.png"
import HireMe from "@/assets/images/hireMe.png"
import PhpStorm from '@/assets/images/tools/phpstorm.svg'
import WebStorm from '@/assets/images/tools/webstorm.svg'
import Xampp from '@/assets/images/tools/xampp.svg'
import NodeJs from '@/assets/images/tools/nodejs.svg'

import heroImage from "@/assets/images/hero-image.png"
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkdin from "@/components/icons/IconLinkdin.vue";
import IconGithub from "@/components/icons/IconGithub.vue";

export function usePortfolio() {

    // main home data
    const socalMedias = [
        {icon:IconFacebook, name:'Facebook', link:'https://www.facebook.com/zogul.kumar/'},
        {icon:IconInstagram, name:'Instagram', link:'https://www.instagram.com/jugol.kumar/'},
        {icon:IconLinkdin, name:'Linkedin', link:'https://www.linkedin.com/in/jugol-kumar-5855b6208'},
        {icon:IconGithub, name:'Github', link:'https://github.com/jugol-kumar'},
    ]


    // about page data;
    const info = [
        {title:"Years Experience", count:"03"},
        {title:"Completed projects", count:"18"},
        {title:"Companies Work", count:"05"},
    ];
    const cvLink = "https://drive.google.com/file/d/1PtiQHFN_xZuNUKS_UiyuSVfp3wxpdk1D/view?usp=sharing";

    const aboutMe = `I am Jugol Kumar. Full stuck web application developer. I am working on porch as senior software developer and more then 3 years + working experience in this sector. I'm Currently sturdy in Computer Science and Engineering form Dhaka International University . 

Currently working on creativetechpark as a software developer. I will always try my best. I never stopped learning new programming skills and technologies. I always focus on client satisfaction with good quality products.`



    // My Skills

    const skills = [
        {name:"Html 5", skill:'95%'},
        {name:"Css 3", skill:'90%'},
        {name:"Javascript", skill:'75%'},
        {name:"Tailwind Css", skill:'75%'},
        {name:"jQuery", skill:'80%'},
        {name:"Css 3", skill:'90%'},
        {name:"Tailwind Css", skill:'75%'},
    ]

    const tools = [
        {name:"Php Storm", icon:PhpStorm},
        {name:"Web Storm", icon:WebStorm},
        {name:"Xampp", icon:Xampp},
        {name:"Xampp", icon:Xampp},
        {name:"Xampp", icon:Xampp},
        {name:"Php Storm", icon:PhpStorm},
        {name:"Web Storm", icon:WebStorm},
        {name:"Node Js", icon:NodeJs},
        {name:"Php Storm", icon:PhpStorm},
        {name:"Node Js", icon:NodeJs},
        {name:"Web Storm", icon:WebStorm},
        {name:"Node Js", icon:NodeJs},
        {name:"Xampp", icon:Xampp},
        {name:"Xampp", icon:Xampp},
        {name:"Php Storm", icon:PhpStorm},
        {name:"Web Storm", icon:WebStorm},
        {name:"Node Js", icon:NodeJs},
        {name:"Php Storm", icon:PhpStorm},
        {name:"Node Js", icon:NodeJs},
        {name:"Web Storm", icon:WebStorm},
    ];

    // hireme

    const aboutHireme = `
                            I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range
                            of skills, qualities and attributes that guarantee I will perform highly in this role. Prefer to work under a well-
                            reputed organization that runs with the modern organization & modern management system. To obtain a
                            position in a challenging environment, which offers the opportunity to continue to learn, use perception and
                            technical skills, and enhance productivity in the work place. Hence, a leading company like yours has to be a
                            prior choice to reflect the objectives.`

    return {aboutImg, info, cvLink, aboutMe, skills, tools, HireMe, aboutHireme, heroImage, socalMedias}

}



