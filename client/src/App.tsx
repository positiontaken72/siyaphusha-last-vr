import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { Contact } from "@/pages/Contact";
import { CompanyProfile } from "@/pages/CompanyProfile";
import { EmailSignatures } from "@/pages/EmailSignatures";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  const isProfilePage = location === "/profile" || location === "/signatures";

  const content = (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile" component={CompanyProfile} />
        <Route path="/signatures" component={EmailSignatures} />
        <Route component={NotFound} />
      </Switch>
    </>
  );

  if (isProfilePage) {
    return content;
  }

  return <Layout>{content}</Layout>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
