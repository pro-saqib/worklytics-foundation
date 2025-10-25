import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";

// Service Detail Pages
import ApplicationModernisation from "./pages/services/ApplicationModernisation";
import CloudServices from "./pages/services/CloudServices";
import CloudTransformations from "./pages/services/CloudTransformations";
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";
import ManagedITServices from "./pages/services/ManagedITServices";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import DataAnalyticsAI from "./pages/services/DataAnalyticsAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/worklytics-foundation/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Service Detail Routes */}
          <Route path="/services/application-modernisation" element={<ApplicationModernisation />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/cloud-transformations" element={<CloudTransformations />} />
          <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/services/managed-it-services" element={<ManagedITServices />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/data-analytics-ai" element={<DataAnalyticsAI />} />  

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
