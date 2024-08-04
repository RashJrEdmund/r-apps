import { RAppCard } from "./cards";
import type { Project } from "../types";
import { SectionHeader } from "../../../../components/ui/section-header";

const Projects: Project[] = [
  {
    app_logo: "https://r-cloud.vercel.app/icon.png",
    app_name: "R - Cloud",
    app_description: "A cloud storage application, built for storing, and managing files.",
    app_url: "https://r-cloud.vercel.app",
    is_live: true,
  },
  {
    app_logo: "",
    app_name: "R - TM",
    app_description: "A task manager application, for organizing, tasks, creating & managing teams and completing project mile-stones.",
    app_url: "",
    is_live: false,
  },
  {
    app_logo: "",
    app_name: "R - Chat",
    app_description: "A Chat application, built for exchanging messages and sharing files.",
    app_url: "",
    is_live: false,
  }
];

function CardDisplay() {
  return (
    <div className="max-w-primary_app_width mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
      {
        Projects.map((project) => (
          <RAppCard project={project} key={project.app_name} />
        ))
      }
    </div>
  )
};

export default function TopSection() {
  return (
    <div className="w-full h-fit">
      <div className="w-primary_app_width min-h-[calc(100vh_-_100px)] mx-auto flex flex-col items-center justify-center gap-4 pb-4 pt-8 md:pt-0">
        <img
          src="/logo-blue.svg" alt="r apps logo"
          className="w-[min(190px,_90vw)]"
        />

        <div className="w-primary_app_width mx-auto text-center">
          <SectionHeader>Welcome to r - apps</SectionHeader>

          <p className="text-app_text_grayed mt-2">A list of r - applications. All from Rash</p>
        </div>

        <CardDisplay />
      </div>
    </div>
  )
};
