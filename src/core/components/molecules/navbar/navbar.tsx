import { UserRoundCheck } from "lucide-react";

export default function NavBar() {
  return (
    <nav className=" top-0 left-0 w-full z-10 shadow-md">
      <div className="w-full max-w-primary_app_w mx-auto flex items-center justify-between py-4">
        <img
          src="/logo-white.svg"
          alt="r - apps logo"
          height={50}
          width={50}
          className="rounded-md shadow"
        />

        <a
          href="https://rash-edmund.vercel.app"
          target="_blank"
          className="w-fit flex flex-col items-center justify-center cursor-pointer"
        >
          <img
            src="https://rash-edmund.vercel.app/icon.png"
            alt="rash github image"
            height={35}
            width={35}
            className="rounded-full size-[35px] bg-black"
          />

          <span className="flex flex-nowrap items-center justify-center gap-1 text-app_blue">
            <UserRoundCheck size={18} /> @portfolio
          </span>
        </a>
      </div>
    </nav>
  );
}
