import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileText, 
  Search, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  FileQuestion,
  Scale
} from "lucide-react";

const quickActions = [
  {
    icon: MessageSquare,
    title: "Ask a Legal Question",
    description: "Get AI-powered answers to your legal queries",
    path: "/chat",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "Upload Document",
    description: "Analyze contracts, agreements, and more",
    path: "/documents",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Search,
    title: "Search Laws",
    description: "Find relevant laws, sections, and cases",
    path: "/search",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const recentActivity = [
  {
    type: "chat",
    title: "Tenant Rights Question",
    time: "2 hours ago",
    icon: MessageSquare,
  },
  {
    type: "document",
    title: "Employment Contract.pdf",
    time: "Yesterday",
    icon: FileText,
  },
  {
    type: "search",
    title: "Consumer Protection Act",
    time: "2 days ago",
    icon: Search,
  },
  {
    type: "chat",
    title: "Business Registration Query",
    time: "3 days ago",
    icon: MessageSquare,
  },
];

const stats = [
  { label: "Questions Asked", value: "24", icon: MessageSquare },
  { label: "Documents Analyzed", value: "12", icon: FileText },
  { label: "Laws Searched", value: "38", icon: Scale },
];

const Dashboard = () => {
  return (
    <DashboardLayout 
      title="Welcome back, John" 
      subtitle="Here's what's happening with your legal research"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 animate-fade-up"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-serif font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.title}
              to={action.path}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${action.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{action.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
              <div className="flex items-center gap-2 text-accent text-sm font-medium">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-serif font-semibold text-foreground flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              Recent Activity
            </h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        {/* Tips Panel */}
        <div className="bg-primary text-primary-foreground rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <FileQuestion className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">Pro Tips</h3>
          </div>
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-primary-foreground/10">
              <p className="text-sm font-medium mb-1">Try "Explain Like I'm 5"</p>
              <p className="text-xs text-primary-foreground/70">Toggle ELI5 mode to get simpler explanations of complex legal terms.</p>
            </div>
            <div className="p-3 rounded-lg bg-primary-foreground/10">
              <p className="text-sm font-medium mb-1">Upload Full Contracts</p>
              <p className="text-xs text-primary-foreground/70">Get complete risk analysis and key clause summaries instantly.</p>
            </div>
            <div className="p-3 rounded-lg bg-primary-foreground/10">
              <p className="text-sm font-medium mb-1">Save Your Searches</p>
              <p className="text-xs text-primary-foreground/70">Bookmark important laws and cases for quick reference later.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
