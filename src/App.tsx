
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import LearnMore from "./pages/LearnMore";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Formulation from "./pages/Formulation";
import Influencers from "./pages/Influencers";
import Careers from "./pages/Careers";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// SEO Title and Description updates
const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Set default meta description if none exists
    if (!document.querySelector('meta[name="description"]')) {
      const metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = 'Maximally offers the best probiotic supplements for gut health in India. Our advanced probiotic formula provides optimal digestion support.';
      document.head.appendChild(metaDesc);
    }
    
    // Set default title if none exists
    if (document.title === 'Maximally') {
      document.title = 'Maximally Premium Probiotics | Best Probiotic Supplement in India';
    }
  }, []);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SEOWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/formulation" element={<Formulation />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SEOWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
