import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Search, 
  Settings, 
  Scale,
  LogOut,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: MessageSquare, label: "AI Legal Chat", path: "/chat" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: Search, label: "Law Search", path: "/search" },
];

const bottomItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help", path: "/settings" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-sidebar-primary flex items-center justify-center group-hover:shadow-gold transition-shadow duration-300">
            <Scale className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <span className="text-xl font-serif font-bold text-sidebar-foreground">
            Scrutiny<span className="text-sidebar-primary">X</span>
          </span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary font-medium"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-sidebar-border">
        <ul className="space-y-1">
          {bottomItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary font-medium"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* User Section */}
        <div className="mt-4 p-3 rounded-lg bg-sidebar-accent/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-semibold text-sm">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">john@example.com</p>
            </div>
            <button className="p-2 text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
