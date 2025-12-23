import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Start Free Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Simplify Your{" "}
            <span className="text-gradient">Legal Journey?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of users who trust ScrutinyX for clear, accessible legal guidance. No credit card required to get started.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/dashboard" className="gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/chat">Try the AI Assistant</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Free tier available &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
