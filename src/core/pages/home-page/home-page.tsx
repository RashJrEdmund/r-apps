import { RAppCard } from "./components/cards";
import type { Project } from "./types";

const Projects: Project[] = [
  {
    app_logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-cloud-logo-1717236660783.png?alt=media&token=1606af2d-dc5d-4ece-af84-24b1cb61fdc8",
    app_name: "R - Cloud",
    app_description: "A cloud storage application, built for storing, and managing files.",
    app_url: "https://r-cloud.vercel.app",
    is_live: true,
  },
  {
    app_logo: "",
    app_name: "R - TM",
    app_description: "A cloud storage application, built for storing, and managing files.",
    app_url: "",
    is_live: false,
  },
  {
    app_logo: "",
    app_name: "R - Chat",
    app_description: "A cloud storage application, built for storing, and managing files.",
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

export default function HomePage() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col items-center justify-start gap-4 p-4">
      <img
        src="/logo-blue.svg" alt="r apps logo"
        className="w-[min(190px,_90vw)]"
      />

      <h1 className="font-semibold text-2xl">Welcome to r - apps</h1>

      <CardDisplay />
    </main>
  )
};
