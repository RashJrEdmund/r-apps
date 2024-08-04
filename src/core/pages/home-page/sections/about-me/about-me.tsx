import { Github, X } from "lucide-react";
import { SectionHeader } from "../../../../components/ui/section-header";
import { useMemo } from "react";
import { cn } from "../../../../lib/tw";

export default function AboutMe() {
  return (
    <div className="w-full h-fit">
      <div className="w-primary_app_width min-h-screen mx-auto flex flex-col items-center justify-center gap-4 py-7">
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
          <SectionHeader
            className=""
          >
            About me
          </SectionHeader>

          <div className="flex items-center justify-around flex-col-reverse md:flex-row gap-4">
            <img
              src="https://github.com/rashjredmund.png"
              alt="Rash github profile"
              width={500}
              className="rounded-xl w-full"
            />

            <p className="md:text-xl lg:text-2xl w-full">
              I am a detail-oriented, skilled software developer with a perfect understanding of TypeScript and JavaScript.
              I also code with Python (Flask), and have basic knowledge of Java, and expertise in frameworks like NextJs,
              React, NestJs, and Express. I'm a quick learner, and can collaborate closely with a team and or clients to create efficient,
              scalable, and user-friendly solutions that solve real-world problems.
            </p>
          </div>
        </div>

        {
          (() => {
            const data = useMemo(() => [
              {
                username: "orashus",
                social_icon: X,
                url: "https://twitter.com/orashus",
                img_url: "https://pbs.twimg.com/profile_banners/1424359218635812866/1722589671/1500x500",
              },
              {
                username: "rashjredmund",
                social_icon: Github,
                url: "https://github.com/rashjredmund",
                img_url: "/my-git-map.png",
                description: "I am consistent"
              }
            ], []);

            return data.map((v, i) => (
              <div key={v.url} className={cn("w-full min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center gap-4", i % 2 !== 0 ? " md:flex" : "")}>
                <a
                  href={v.url}
                  target="_blank"
                  className="w-fit font-semibold flex items-center justify-start gap-1 flex-nowrap md:text-lg text-app_text_blue cursor-pointer mx-auto"
                >
                  <v.social_icon size={20} /> @{v.username}
                </a>

                <img
                  src={v.img_url}
                  alt="platform image"
                  width={500}
                  className="rounded-xl w-full shadow"
                />

                {v.description && <p className="text-center text-app_text_grayed">{v.description}</p>}
              </div>
            ))
          })()
        }
      </div>
    </div>
  );
};
