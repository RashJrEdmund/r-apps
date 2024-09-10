import { LoaderCircle } from "lucide-react";
import { Project } from "../types";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/tw";

function RAppCard({ project: { app_name, app_description, app_url, app_logo, is_live } }: { project: Project }) {
  return (
    <motion.div
      // animate={{
      //   y: 100,
      // }}
      // whileHover={{ scale: 1.05 }}
      className={cn(
        "w-full max-w-screen-sm bg-app_bg shadow-md rounded-xl p-4 flex flex-col gap-4 md:min-h-60",
        is_live ? "shadow-app_blue" : "shadow-red-400"
      )}
    >
      <img
        src={app_logo || "/logo-404.svg"}
        alt={app_name + " logo"}
        width={50}
        height={50}
        className="rounded-full"
      />

      <div className="w-full flex flex-col gap-1">
        <h2 className="text-xl font-semibold">
          {app_name}
        </h2>

        <p>
          {app_description}
        </p>
      </div>

      {
        is_live && app_url ? (
          <a href={app_url} className="text-app_text_blue cursor-pointer">Visit application 🚀</a>
        ) : (
          <span className="text-red-500">
            rash is still cooking <LoaderCircle size={15} className="inline animate-spin duration-[2s]" />
          </span>
        )
      }
    </motion.div>
  );
}

export {
  RAppCard,
};
