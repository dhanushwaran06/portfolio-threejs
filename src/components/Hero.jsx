import { motion } from "framer-motion";
import { styles } from "../styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

// import { ComputersCanvas } from "./canvas/";

const Hero = () => {
  const githubUrl = "https://github.com/dhanushwaran06";
  const linkedinUrl = "https://www.linkedin.com/in/dhanushwaranaj/";
  const emailUrl = "mailto:ajdhanush.jvl@gmail.com";
  const resumeUrl =
    "https://drive.google.com/file/d/1zwn6JuWxGlyPo2IwOUazDCYCXEOWPj_M/view?usp=sharing";

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px] max-sm:top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi👋, I'm <span className="text-[#915EFF]">Dhanushwaran A J</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-[20px]`}>
            Innovating with Technology: <br className="sm:block hidden" />
            Crafting Creative User Interfaces, Building Well-Structured Web
            Applications, and Exploring Emerging Tech | Building Kiospal |
            Techie | Open Source Innovator
          </p>
          <p className="pt-10 sm:text-[18px] text-[16px] text-secondary uppercase tracking-wider">
            Passionate Web Engineer [MERN, LAMP] | Bash Scripting | DB Design |
            Docker | Linux
            <br className="sm:block hidden" /> | Networking | Exploring: WebSec,
            Web 3.0, IoT
          </p>

          <div className="pt-10">
            <div className="flex items-center space-x-6 z-10 relative">
              <a
                href={linkedinUrl}
                target="_blank"
                className="hover:scale-110 transform transition-transform duration-300">
                <LinkedInIcon className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                className="hover:scale-110 transform transition-transform duration-300">
                <GitHubIcon className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href={emailUrl}
                target="_blank"
                className="hover:scale-110 transform transition-transform duration-300">
                <MailIcon className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <button
                onClick={() => window.open(resumeUrl, "_blank")}
                className="bg-[#915EFF] text-white text-[14px] font-medium px-4 py-2 rounded-md hover:bg-[#704DD2] transition-colors duration-300">
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center z-0">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 max-sm:hidden">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
