import Hero from "./components/main/Hero";
import "./index.css";

export default function App() {
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col gap-20 h-[850px]">
        <Hero />
      </div>
    </main>
  );
}
