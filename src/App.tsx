import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/useTheme";
import { SubjectsPage } from "@/pages/SubjectsPage";
import { NotesPage } from "@/pages/NotesPage";
import { SubmitNotesPage } from "@/pages/SubmitNotesPage";
import { Subject } from "@/types";
import CrispChat from "./components/CrispChat";

const queryClient = new QueryClient();

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [showSubmitNotes, setShowSubmitNotes] = useState(false);

  const handleBack = () => {
    setSelectedSubject(null);
    setShowSubmitNotes(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CrispChat />
          {showSubmitNotes ? (
            <SubmitNotesPage onBack={handleBack} />
          ) : selectedSubject ? (
            <NotesPage subject={selectedSubject} onBack={handleBack} />
          ) : (
            <SubjectsPage
              onSubjectSelect={setSelectedSubject}
              onSubmitNotesClick={() => setShowSubmitNotes(true)}
            />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
