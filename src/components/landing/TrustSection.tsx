import { Lock, Shield, Eye, Server } from "lucide-react";

const trustPoints = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All your documents and conversations are encrypted at rest and in transit.",
  },
  {
    icon: Eye,
    title: "No Data Selling",
    description: "We never sell, share, or monetize your personal data. Period.",
  },
  {
    icon: Server,
    title: "Secure Servers",
    description: "Enterprise-grade security with SOC 2 compliant infrastructure.",
  },
  {
    icon: Shield,
    title: "Your Data, Your Control",
    description: "Delete your data anytime. We don't keep copies after deletion.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Privacy First Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Your Privacy is Our{" "}
            <span className="text-accent">Priority</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            We understand that legal matters are sensitive. That's why we've built ScrutinyX with privacy and security at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
