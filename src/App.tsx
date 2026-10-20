import { useState } from "react";
import "./index.css";
import HomePage from "./Home";
import AboutPage from "./About";
import Navbar from "./Navbar";
import SkillsPage from "./Skills";
import ContactPage from "./Contact";
import ProjectsPage from "./Projects";

export function App() {
  const [page, setPage] = useState("home");

  const CurrentPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;

      case "about":
        return <AboutPage />;

      case "skills":
        return <SkillsPage />;

      case "projects":
        return <ProjectsPage />;

      case "contact":
        return <ContactPage />;

      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="absolute top-[30%] left-[40%] h-[30%] w-[30%] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <Navbar currentPage={page} setPage={setPage} />

      <main className="pt-16">
        <CurrentPage />
      </main>
    </div>
  );
}

export default App;
