import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas/";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi👋, I'm <span className="text-[#915EFF]">Dhanushwaran!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop a creative <br className="sm:block hidden" />
            user interfaces and responsive web applications.
          </p>
          <p className="pt-10 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Actively seeking an entry-level front-end developer position{" "}
            <br className="sm:block hidden" /> | MERN Stack | React JS | 2024
            Graduation
          </p>
          <div className="pt-10">
            <a href="www.google.com" type="button" className=" border"> Resume</a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
