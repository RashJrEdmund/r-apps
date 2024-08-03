function RAppCard() {
  return (
    <div className="w-full max-w-screen-sm bg-app_bg shadow-lg rounded-xl p-4 flex flex-col gap-3 duration-300 hover:scale-110">
      <h2 className="text-xl font-semibold">
        App name
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolorem?
      </p>

      <a href="#" className="text-app_text_blue cursor-pointer">Visit app</a>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col items-center justify-start gap-4 p-4">
      <img src="/logo-blue.svg" alt="r apps logo"  className=""/>

      <h1 className="font-semibold text-2xl">Welcome to r - apps</h1>

      <div className="max-w-screen-xl mx-auto">
        <RAppCard />
      </div>
    </main>
  )
};
