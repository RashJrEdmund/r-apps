import { Footer, NavBar } from "./core/components/molecules";
import { HomePage } from "./core/pages";

function App() {
  return (
    <>
      <NavBar />

      <>
        <HomePage />
      </>
      {/* CONFIGURE ROUTING HERE */}

      <Footer />
    </>
  )
};

export default App;
