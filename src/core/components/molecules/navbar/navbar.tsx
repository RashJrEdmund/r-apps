import { UserRoundCheck } from "lucide-react";
import { APP_CONFIG } from "../../../config/app-config";

export default function NavBar() {
  return (
    <nav className=" top-0 left-0 w-full z-10 shadow-md">
      <div className="w-full max-w-primary_app_w mx-auto flex items-center justify-between py-2">
        <img
          src="/logo-white.svg"
          alt="r - apps logo"
          height={40}
          width={40}
          className="rounded-md shadow"
        />

        <a
          href={APP_CONFIG.portfolio_url}
          target="_blank"
          className="w-fit flex flex-col items-center justify-center cursor-pointer"
        >
          <img
            src="https://rash-edmund.vercel.app/icon.png"
            alt="rash github image"
            height={30}
            width={30}
            className="rounded-full size-[30px] bg-black"
          />

          <span className="flex flex-nowrap items-center justify-center gap-1 text-app_blue">
            <UserRoundCheck size={16} /> @portfolio
          </span>
        </a>
      </div>
    </nav>
  );
}
