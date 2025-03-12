import profileImg from "./public/profile.jpg";
import stackOverflowImg from "./public/steamID.png";
import solanaAdsImg from "./public/wedding.png";


export const portfolio = {
  about: {
    firstName: "Jan Nidushan",
    lastName: "Sinnadurai",
    img: profileImg,
    bio: `Hey there, I'm Jan! 🌟 

With 8 years of web development experience and a recent dive into web3 technologies, I've honed my skills in next.js, typescript, and react.

I am a positive, efficient, and energetic person who enjoys being around other people. I am service-minded and like to help others. 

With university knowledge and real-life experience under my belt, I am prepared and equipped to handle many obstacles!`,
    skills: ["TypeScript", "Next.JS", "HTML", "Python", "C++", "Polygon"],
  },
  projects: [
    {
      name: "SteamID-Display",
      img: stackOverflowImg,
      tools: ["HTML", "JavaScript", "CSS"],
      url: "https://github.com/nidushan/SteamID-Display",
      description: `In this project, I built a Chrome extension that allows you to see steamIDs of the corresponding profile.

With this extension, I've made it super easy for you to view anyone's Steam ID directly from their Steam profile right in your browser.

Using the Steam API and xPaw's steamID library, I've crafted a reliable tool that simplifies the process of accessing Steam IDs. `,
    },
    {
      name: "Wedding Seating Chart",
      img: solanaAdsImg,
      tools: ["TypeScript", "SCSS", "JS", "React"],
      url: "https://github.com/nidushan/wedding-seating-chart-main",
      description: `In this project, I built a simple web application for guests to receive digital escort cards (table numbers) for weddings!

I've created a user-friendly solution for couples to streamline their seating arrangements. Guests can easily access their escort cards online, making the entire process hassle-free and efficient.`,
    },
  ],
};
