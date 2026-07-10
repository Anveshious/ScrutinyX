import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Shield, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Legal Intelligence</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Legal Help Made{" "}
            <span className="text-gradient">Simple</span>
            <br />
            for Everyone
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Get instant answers to legal questions, analyze documents with AI, and search through laws & cases — all in plain language you can understand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="xl" asChild>
              <Link to="/chat" className="gap-2">
                Ask a Legal Question
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/documents">Upload a Document</Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">AI Legal Chat</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">Document Analysis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">Privacy First</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Dashboard Preview (placeholder) */}
        <div className="mt-16 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border/50">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
            <div className="bg-card p-6 md:p-8">
              <div className="h-48 w-full rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Preview unavailable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
