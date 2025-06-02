<<<<<<< HEAD

=======
>>>>>>> 3e5b774c6cad6899b2b08a59b3eb18e7416edb8b
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { LanguageProvider } from "@/context/LanguageContext";
import translations from "@/data/translations";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";
import { AnimatePresence } from "framer-motion";
=======
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
>>>>>>> 3e5b774c6cad6899b2b08a59b3eb18e7416edb8b

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
    <LanguageProvider translations={translations}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
=======
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
>>>>>>> 3e5b774c6cad6899b2b08a59b3eb18e7416edb8b
  </QueryClientProvider>
);

export default App;
