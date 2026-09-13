import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load the technology list from the local JSON file on first render.
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/technologies.json`)
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const item = selectedStack.find((i) => i.id === id);
    setSelectedStack((prev) => prev.filter((i) => i.id !== id));
    toast.info(`Removed ${item?.name ?? "item"} from your stack.`);
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared all technologies from your stack.");
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 flex flex-col">
      <ToastContainer position="top-right" autoClose={2500} />
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex-1 w-full" id="technologies">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-neutral-900">
            Explore the{" "}
            <span
              className="brand-gradient-text"
              style={{
                backgroundImage: "var(--brand-gradient)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technologies
            </span>
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          // Loading state: shown briefly while technologies.json is being fetched.
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium text-neutral-400">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Technology grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={handleAddToStack}
                  isSelected={selectedStack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <Sidebar
                stackItems={selectedStack}
                onRemoveFromStack={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;