import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Martadi
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
