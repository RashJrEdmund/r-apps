import { SectionHeader } from "../../../../components/ui/section-header";

export default function AboutMe() {
  return (
    <div className="w-full h-fit">
      <div className="w-primary_app_width min-h-screen mx-auto flex flex-col items-center justify-center gap-4 py-4">
        <SectionHeader
          className=""
        >
          About me
        </SectionHeader>

        <img
          src="https://github.com/rashjredmund.png"
          alt="Rash github profile"
          width={500}
          className="rounded-xl"
        />
      </div>
    </div>
  )
}