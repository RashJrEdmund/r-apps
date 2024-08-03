import { Project } from "../types";

function RAppCard({ project: { app_name, app_description, app_url, app_logo, is_live } }: { project: Project }) {
  return (
    <div className={`w-full max-w-screen-sm bg-app_bg shadow-md rounded-xl p-4 flex flex-col gap-3 duration-300 md:hover:scale-[1.02] ${is_live ? "shadow-app_blue" : "shadow-red-400"}`}>
      <img
        src={app_logo || "/logo-blue.svg"}
        alt={app_name + " logo"}
        width={50}
        height={50}
        className="rounded-full"
      />

      <h2 className="text-xl font-semibold">
        {app_name}
      </h2>

      <p>
        {app_description}
      </p>

      {
        is_live && app_url ? (
          <a href={app_url} target="_blank" className="text-app_text_blue cursor-pointer">Visit app</a>
        ) : (
          <span className="text-red-500">
            rash is still cooking
          </span>
        )
      }
    </div>
  );
};

export {
  RAppCard,
};
