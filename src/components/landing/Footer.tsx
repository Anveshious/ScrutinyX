import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">
                Scrutiny<span className="text-accent">X</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered legal assistance for everyone. Making law accessible and understandable.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Legal Chat</Link></li>
              <li><Link to="/documents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Document Analysis</Link></li>
              <li><Link to="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Law Search</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ScrutinyX. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            ScrutinyX provides legal information, not legal advice. Consult a licensed attorney for specific legal matters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
