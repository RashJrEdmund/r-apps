import { SectionHeader } from "../../../../components/ui/section-header";

export default function HeroSection() {
  return (
    <div className="w-full h-fit">
      <div className="w-primary_app_width min-h-[calc(100vh_-_100px)] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 pb-4 pt-8 md:pt-0">
        <img
          src="/logo-blue.svg" alt="r apps logo"
          className="w-[min(180px,_90vw)] sm:w-[min(350px,_90vw)]"
        />

        <div className="w-fit text-center">
          <SectionHeader className="text-xl sm:text-3xl">welcome to r - apps</SectionHeader>

          <p className="text-app_text_grayed mt-2 sm:text-xl">A list of r - applications from Rash</p>
        </div>
      </div>
    </div>
  )
}
