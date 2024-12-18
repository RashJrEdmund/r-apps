import { SectionHeader } from "../../../../components/ui/section-header";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="w-full h-fit">
      <div className="w-primary_app_w min-h-app_section_h mx-auto flex flex-col md:flex-row items-center justify-center gap-4 pb-4 pt-8 md:pt-0">
        <div className="w-fit text-center md:text-left max-w-[550px]">
          <motion.h2
            initial={{
              y: -50
            }}
            animate={{
              y: 0,
              transition: { duration: 0.4 }
            }}
          >
            <SectionHeader className="text-2xl sm:text-3xl md:text-5xl md:mb-8">
              Welcome to R - apps
            </SectionHeader>
          </motion.h2>

          <motion.p
            initial={{
              y: -50
            }}
            animate={{
              y: 0,
              transition: { duration: 0.4 }
            }}
          >
            <p className="text-app_text_grayed mt-2 sm:text-xl">
              A list of applications from Rash
            </p>
          </motion.p>
        </div>

        <img
          src="/logo-blue.svg"
          alt="r apps logo"
          className="w-[min(180px,_90vw)] sm:w-[min(350px,_90vw)]"
        />
      </div>
    </div>
  );
}
