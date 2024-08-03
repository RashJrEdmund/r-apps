import { Copy, Github, Linkedin, Mail, UserRoundCheck, X } from "lucide-react";
import { APP_CONFIG } from "../../../config/app-config";
import { toast } from "sonner";

const Socials = [
  {
    username: "portfolio",
    icon: UserRoundCheck,
    url: "https://rash-edmund.vercel.app",
  },
  {
    username: "rashjredmund",
    icon: Github,
    url: "https://github.com/rashjredmund",
  },
  {
    username: "orashus",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/orashus/",
  },
  {
    username: "orashus",
    icon: X,
    url: "https://twitter.com/orashus",
  }
];

export default function Footer() {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText(APP_CONFIG.my_email).then(() => {
      toast("Email copied to clipboard", {
        description: "do write me 🤗",
      });
    });
  };

  return (
    <>
      <hr className="mx-auto max-w-primary_app_width my-6" />

      <footer className="w-full flex flex-col items-center justify-start py-4 pb-8 gap-6">
        <div className="w-full max-w-primary_app_width flex flex-col md:flex-row items-start justify-between gap-5">
          <h3 className="font-semibold whitespace-nowrap">
            R - Apps  🚀
          </h3>

          <h3>
            Designed and built with 🤍 💙 by Orashus(Rash)
          </h3>

          <div className="flex-col items-start">
            <span className="text-sm font-semibold">Find Rash</span>

            <p className="my-1 w-fit text-sm flex items-center justify-center flex-nowrap gap-1">
              <span className="flex items-center justify-center flex-nowrap gap-1 whitespace-nowrap text-sm">
                <Mail size={15} />
                {APP_CONFIG.my_email}
              </span>

              <Copy
                size={15}
                className="ml-2 cursor-pointer text-app_text"
                onClick={handleEmailCopy}
              />
            </p>

            {Socials.map(({ username, url, icon: Icon }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                className="my-1 w-fit text-sm text-app_blue underline flex flex-nowrap items-center justify-center gap-1"
              >
                <Icon size={15} />@{username}
              </a>
            ))}
          </div>
        </div>

        <div className="w-primary_app_width text-center text-sm text-app_text_grayed">
          &copy; {new Date().getFullYear()} | R - Apps
          <br />
          All Rights Reserved
        </div>
      </footer >
    </>
  )
};
