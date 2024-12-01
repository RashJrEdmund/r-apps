import { SectionHeader } from "../../../../components/ui/section-header";

export default function HeroSection() {
  return (
    <div className="w-full h-fit">
      <div className="w-primary_app_w min-h-app_section_h mx-auto flex flex-col items-center justify-center gap-4 pb-4 pt-8 md:pt-0">
        <div className="w-fit text-center">
          <SectionHeader className="text-2xl sm:text-3xl md:text-5xl">
            welcome to r - apps
          </SectionHeader>

          <p className="text-app_text_grayed mt-2 sm:text-xl">
            A list of r - applications from Rash
          </p>
        </div>

        <img
          src="/logo-blue.svg"
          alt="r apps logo"
          className="w-[min(180px,_90vw)] sm:w-[min(350px,_90vw)]"
        />
      </div>
    </div>
  );
}
