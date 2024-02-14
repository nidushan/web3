import { chakra } from "@chakra-ui/system";
import type { NextPage } from "next";
import { Scroll } from "scrollex";
import HeadingSection from "../components/sections/HeadingSection";
import AboutSection from "../components/sections/AboutSection";
import IntroSection from "../components/sections/IntroSection";
import ProjectSection from "../components/sections/ProjectSection";
import IndexPage from "../components/sections/IndexPage";
import { portfolio } from "../data";

const ScrollContainer = chakra(Scroll.Container);

const Home: NextPage = () => {
  return (
    <ScrollContainer h="h-screen">
      <IndexPage />
      <IntroSection />
      <HeadingSection heading="ABOUT ME" />
      <AboutSection />
      <HeadingSection heading="PROJECTS" />
      {portfolio.projects.map((project) => (
        <ProjectSection key={project.name} project={project} />
      ))}
    </ScrollContainer>
  );
};

export default Home;
