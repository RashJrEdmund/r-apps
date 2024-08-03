import { Github } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div className="w-full max-w-primary_app_width mx-auto flex items-center justify-between py-4">
        <img src="/logo-white.svg" alt="r - apps logo" height={60} width={60} className="rounded-md shadow" />

        <a
          href="https://github.com/rashjredmund"
          target="_blank"
          className="w-fit flex flex-col items-center justify-center cursor-pointer"
        >
          <img
            src="https://github.com/rashjredmund.png"
            alt="rash github image"
            height={60}
            width={60}
            className="rounded-full w-[40px]"
          />

          <span className="flex flex-nowrap items-center justify-center gap-1 text-app_blue">
            <Github /> @rashjredmund
          </span>
        </a>
      </div>
    </nav>
  )
}