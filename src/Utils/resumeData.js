import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";
import LanguageIcon from '@material-ui/icons/Language';

export default {
  name: "Yahgozie Nwosu",
  program: ".Net Core, C#",
  job: "Software Developer",
  Email: "nyahgozie@gmail.com",
  Skype: "live:.cid.2cd93455df10505e",
  Phone: "+23437682739",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/YahgozieNwosu",
      text: "MyFacebook",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com/Yahgozie2",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/YahgozieNwosu",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.github.com/Yahgozie",
      text: "MyGitHub",
      icon: <GitHubIcon />,
    },
  },

  about:
    "My name is Yahgozie Nwosu. I am skilled with c# and .net core technology, also trying to learn other technologies like react and angular languages step by step. I dream of working with big companies like Google, Facebook, Netflix, Microsoft, working on applications billions of people use, having an impact on the world with my work. I will try to convince you with my resume site that i am the one who deserves a chance to prove my skill in any programming job you have available for me as a software developer.",

  experience: [
    {
      title: "Software Developer",
      company: "SDSD Prestige Limited",
      date: "2019 - 2021",
      description:
        "Code review and bug fixes, Adding new functionality and new features. Designing web UI",
    },
    {
      title: "Software Developer",
      date: "2018",
      company: "CMD",
      description:
        "Code review and bug fixes, Adding new functionality and new features. Designing web UI",
    },
  ],

  education: [
    {
      title: "Diploma in C# Programming",
      school: "Solo learning",
      date: "2021",
    },
    {
      title: "Diploma in HTML and CSS Programming",
      school: "Solo learning",
      date: "2021",
    },
    {
      title: "Diploma in Software Engineering",
      school: "Codebits Academy",
      date: "2019",
    },
    {
      title: "Diploma in Software Engineering",
      school: "OGITECH",
      date: "2016",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been a web developer for 3 years",
      icon: <CodeIcon />,
    },
    {
      title: "Graphic designs",
      description:
        "Creating amazing and outstanding graphics that gives you a feel.",
      icon: <WebIcon />,
    },
    {
      title: "Rebranding Websites",
      description: "Making a brand that is catchy and leaves a trace.",
      icon: <AssignmentIcon />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJs", "Javascript", "Bootstrap", "Jquery"],
    },
    {
      title: "BACK-END",
      description: ["C#", ".Net Core"],
    },
    {
      title: "DATABASES",
      description: ["SQL Server"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["github"],
    },
  ],

  projects: [
    {
      tag: "React",
      image:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      title: "Google Clone",
      caption: "A short description",
      description:
        "This is a site that simply shows the demo frontend design of Google website, with search funtionality. Note this is just a cloned google website.",
      links: [
        { link: "https://cloned-16824.web.app", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "React",
      image:
        "https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",
      title: "Airbnb Clone",
      caption: "A short description",
      description:
        "This is a site that simply shows the demo frontend design of airbnb cloned website,with no functionality, but majorly shows design skills.",
      links: [
        { link: "https://airbnb-clone-40a83.web.app/", icon: <LanguageIcon /> },        
      ],
    },

    {
      tag: "React",
      image:
        "https://image.tmdb.org/t/p/original//uAWB8qOs7L6zGTwxAbeT97AsJk6.jpg",
      title: "Hulu Clone",
      caption: "A short description",
      description:
        "This is a site that simply shows the demo frontend design of hulu website cloned using react,with few functionality like top movies, animations.",
      links: [
        { link: "https://hulu-8589c.web.app/", icon: <LanguageIcon /> },
        
      ],
    },

    {
      tag: "C#",
      image:
        "https://image.shutterstock.com/image-vector/white-background-abstract-geometric-vector-260nw-1727278480.jpg",
      title: "HK Ecommerce",
      caption: "A short description",
      description:
        "This is a site that simply shows the demo frontend design of google clone website,with search functionality.",
      links: [
        { link: "www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "Angualar",
      image:
        "https://image.shutterstock.com/image-vector/white-background-abstract-geometric-vector-260nw-1727278480.jpg",
      title: "CRUD Operation .net core",
      caption: "A short description",
      description:
        "This is a site that simply shows the demo frontend design of google clone website,with search functionality.",
      links: [
        { link: "www.google.com", icon: <LanguageIcon /> },
      ],
    },
  ],
};
