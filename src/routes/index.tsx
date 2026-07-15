import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Achievements,
  Contact,
  Education,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand" />
        </div>
        <p className="font-display text-sm font-semibold tracking-wide text-muted-foreground">
          Loading portfolio…
        </p>
      </div>
    </div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {loading && <Loader />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
