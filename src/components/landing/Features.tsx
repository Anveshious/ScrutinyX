import { MessageSquare, FileSearch, Scale, Baby, Shield, Search } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Legal Assistant",
    description: "Ask legal questions in plain language and get clear, helpful answers powered by advanced AI.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: FileSearch,
    title: "Document Analysis",
    description: "Upload contracts, agreements, or legal documents to get instant summaries and risk highlights.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Search,
    title: "Case & Law Search",
    description: "Search through laws, sections, and precedent cases with powerful filters and references.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Baby,
    title: "Explain Like I'm 5",
    description: "Toggle simple mode to break down complex legal jargon into easy-to-understand explanations.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your documents and conversations are encrypted and never shared. Your data stays yours.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Scale,
    title: "Trusted Legal Database",
    description: "Access verified legal information from authoritative sources and updated regulations.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Powerful Features for{" "}
            <span className="text-gradient">Legal Clarity</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to understand legal matters, analyze documents, and find the information you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
