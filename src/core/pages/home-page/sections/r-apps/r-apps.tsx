import { RAppCard } from "./cards";
import { Project } from "../types";

const Projects: Project[] = [
  {
    app_logo: "https://r-cloud.vercel.app/icon.png",
    app_name: "R - Cloud",
    app_description: "A cloud storage application, built for storing, sharing, and managing files.",
    app_url: "https://r-cloud.vercel.app",
    is_live: true,
  },
  {
    app_logo: "",
    app_name: "R - TM",
    app_description: "A task manager application for creating, managing teams and completing project mile-stones.",
    app_url: "",
    is_live: false,
  },
  {
    app_logo: "",
    app_name: "R - Chat",
    app_description: "A Chat application, built for exchanging messages and sharing files.",
    app_url: "",
    is_live: false,
  },
  {
    app_logo: "",
    app_name: "R - Auth",
    app_description: "An authentication service and npm package for easily shipping auth features like login/register etc.",
    app_url: "",
    is_live: false,
  }
];

export default function RApps() {
  return (
    <div className="min-h-screen max-w-primary_app_width mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
      {
        Projects.map((project) => (
          <RAppCard project={project} key={project.app_name} />
        ))
      }
    </div>
  )
}
