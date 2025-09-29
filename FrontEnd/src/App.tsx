import Header from "./components/Header";
import { HeroPage } from "./components/HeroPage";
import "./index.css";

function App() {
  return (
    <div className="bg-[var(--black-olive)] min-h-screen w-full flex justify-center text-white">
      <div className="w-[90%] container">
        <Header />
        <HeroPage />
      </div>
    </div>
  );
}

export default App;
