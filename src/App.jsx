import { Toaster } from "react-hot-toast";
import Hero from "./components/main/Hero";
import "./index.css";
import Sidebar from "./components/sub/Sidebar";
import TimeLine from "./components/main/Timeline";
import Skills from "./components/main/Skills";
import ContactForm from "./components/main/ContactForm";

export default function App() {
  return (
    <main className="h-screen w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <div>
          <Toaster position="bottom-right" />
        </div>
      </div>
    </main>
  );
}
