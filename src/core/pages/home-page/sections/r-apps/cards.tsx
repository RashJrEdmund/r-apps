import { LoaderCircle } from "lucide-react";
import { Project } from "../types";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/tw";

function RAppCard({
  project: { app_name, app_description, app_url, app_logo, is_live }
}: {
  project: Project;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{
        y: 100,
      }}
      whileInView={{
        y: 0,
        transition: { duration: 0.5 }
      }}
      className={cn(
        "w-full max-w-screen-sm bg-app_bg shadow-md rounded-xl p-4 pb-10 flex flex-col justify-between gap-4 md:min-h-60",
        is_live ? "shadow-app_blue" : "shadow-red-400"
      )}
    >
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-start gap-2">
          <img
            src={app_logo || "/logo-404.svg"}
            alt={app_name + " logo"}
            width={50}
            height={50}
            className="rounded-full"
          />

          <h2 className="text-xl font-semibold">{app_name}</h2>
        </div>

        <p>{app_description}</p>
      </div>

      {is_live && app_url ? (
        <a href={app_url} className="text-app_text_blue cursor-pointer">
          Visit application 🚀
        </a>
      ) : (
        <span className="text-red-500">
          rash is still cooking{" "}
          <LoaderCircle size={15} className="inline animate-spin duration-[2s]" />
        </span>
      )}
    </motion.div>
  );
}

export { RAppCard };
