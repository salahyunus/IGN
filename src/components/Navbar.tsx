import { ThemeToggle } from "@/components/ThemeToggle";
import { ColorThemeSelector } from "@/components/ColorThemeSelector";
import { GraduationCap } from "lucide-react";

export function Navbar() {
  const handleHomeClick = () => {
    // Navigate to home by refreshing the page or triggering app state reset
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient text-left ">
              IGNote
            </h1>
            <p className="text-xs text-muted-foreground">BEST IGCSE Notes</p>
          </div>
        </button>

        <div className="flex items-center gap-4">
          <ColorThemeSelector />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
