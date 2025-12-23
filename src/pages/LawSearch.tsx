import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search as SearchIcon, 
  Filter, 
  BookOpen, 
  Scale, 
  FileText,
  ChevronRight,
  Star,
  Calendar,
  Tag
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  type: "law" | "case" | "section";
  title: string;
  description: string;
  reference: string;
  date?: string;
  relevance: number;
  tags: string[];
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    type: "law",
    title: "Consumer Protection Act, 2019",
    description: "An Act to provide for protection of the interests of consumers and for the said purpose, to establish authorities for timely and effective administration...",
    reference: "Act No. 35 of 2019",
    date: "August 9, 2019",
    relevance: 98,
    tags: ["Consumer Rights", "E-commerce", "Product Liability"],
  },
  {
    id: "2",
    type: "section",
    title: "Section 2(7) - Definition of Consumer",
    description: "'Consumer' means any person who buys any goods or hires or avails any service for a consideration which has been paid or promised...",
    reference: "Consumer Protection Act, 2019",
    relevance: 95,
    tags: ["Definition", "Consumer"],
  },
  {
    id: "3",
    type: "case",
    title: "Indian Oil Corp. Ltd. v. Consumer Education & Research Centre",
    description: "Landmark judgment on product liability and consumer rights regarding defective products causing injury to consumers...",
    reference: "(1995) 4 SCC 545",
    date: "1995",
    relevance: 89,
    tags: ["Product Liability", "Defective Goods", "Compensation"],
  },
  {
    id: "4",
    type: "law",
    title: "Information Technology Act, 2000",
    description: "An Act to provide legal recognition for transactions carried out by means of electronic data interchange and other means of electronic communication...",
    reference: "Act No. 21 of 2000",
    date: "June 9, 2000",
    relevance: 85,
    tags: ["Digital", "E-commerce", "Cyber Law"],
  },
  {
    id: "5",
    type: "section",
    title: "Section 75 - Product Liability Action",
    description: "A product liability action may be brought by a complainant against a product manufacturer or a product service provider or a product seller...",
    reference: "Consumer Protection Act, 2019",
    relevance: 82,
    tags: ["Product Liability", "Manufacturer", "Service Provider"],
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Laws", value: "law" },
  { label: "Cases", value: "case" },
  { label: "Sections", value: "section" },
];

const LawSearch = () => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    setHasSearched(true);
    // Filter mock results based on active filter
    const filtered = activeFilter === "all" 
      ? mockResults 
      : mockResults.filter(r => r.type === activeFilter);
    setResults(filtered);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "law":
        return Scale;
      case "case":
        return BookOpen;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "law":
        return "text-primary bg-primary/10";
      case "case":
        return "text-accent bg-accent/10";
      default:
        return "text-muted-foreground bg-secondary";
    }
  };

  return (
    <DashboardLayout 
      title="Law & Case Search" 
      subtitle="Search through laws, sections, and precedent cases"
    >
      {/* Search Bar */}
      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search for laws, sections, or case references..."
              className="pl-10 h-12 text-base"
            />
          </div>
          <Button variant="gold" size="lg" onClick={handleSearch}>
            <SearchIcon className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mt-4">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground mr-2">Filter:</span>
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-lg transition-colors",
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {!hasSearched ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
            <Scale className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
            Start Your Legal Research
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Enter keywords, law names, section numbers, or case references to find relevant legal information.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => {
                setQuery("Consumer Protection Act");
                handleSearch();
              }}
              className="text-sm px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              Consumer Protection Act
            </button>
            <button
              onClick={() => {
                setQuery("Right to Information");
                handleSearch();
              }}
              className="text-sm px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              Right to Information
            </button>
            <button
              onClick={() => {
                setQuery("Contract breach remedies");
                handleSearch();
              }}
              className="text-sm px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              Contract breach remedies
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Found {results.length} results for "<span className="text-foreground font-medium">{query}</span>"
          </p>

          {results.map((result, index) => {
            const TypeIcon = getTypeIcon(result.type);
            return (
              <div
                key={result.id}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/30 hover:shadow-card transition-all duration-300 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                      getTypeColor(result.type)
                    )}>
                      <TypeIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={cn(
                          "text-xs font-medium px-2 py-0.5 rounded-full capitalize",
                          getTypeColor(result.type)
                        )}>
                          {result.type}
                        </span>
                        {result.date && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {result.date}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">
                          {result.reference}
                        </span>
                        {result.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs text-muted-foreground flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="font-medium text-foreground">{result.relevance}%</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent">
                      View <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </DashboardLayout>
  );
};

export default LawSearch;
