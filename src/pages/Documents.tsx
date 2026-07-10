import { useState, useCallback } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  X,
  Download,
  Eye,
  Clock,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface AnalysisResult {
  summary: string;
  keyClauses: {
    title: string;
    content: string;
    risk: "low" | "medium" | "high";
  }[];
  risks: {
    level: "warning" | "critical";
    message: string;
  }[];
  metadata: {
    pages: number;
    type: string;
    language: string;
  };
}

// Removed example/mock analysis data. Integrate real analysis pipeline here.

const Documents = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileUpload(droppedFile);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileUpload(selectedFile);
    }
  };

  const handleFileUpload = (selectedFile: File) => {
    setFile(selectedFile);
    setUploadProgress(0);
    setIsAnalyzing(true);
    setAnalysis(null);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Simulate analysis completion — real analysis integration goes here
          setTimeout(() => {
            setIsAnalyzing(false);
          }, 1500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const clearFile = () => {
    setFile(null);
    setUploadProgress(0);
    setAnalysis(null);
    setIsAnalyzing(false);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
      case "critical":
        return "text-destructive bg-destructive/10";
      case "medium":
      case "warning":
        return "text-accent bg-accent/10";
      default:
        return "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30";
    }
  };

  return (
    <DashboardLayout 
      title="Document Analysis" 
      subtitle="Upload legal documents for AI-powered analysis"
    >
      {!file ? (
        /* Upload Area */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300",
            isDragging
              ? "border-accent bg-accent/5"
              : "border-border hover:border-accent/50 hover:bg-secondary/30"
          )}
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
              Upload Your Document
            </h3>
            <p className="text-muted-foreground mb-6">
              Drag and drop your PDF or DOC file here, or click to browse
            </p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
            />
            <label htmlFor="file-upload">
              <Button variant="gold" size="lg" asChild>
                <span className="cursor-pointer">Choose File</span>
              </Button>
            </label>
            <p className="text-xs text-muted-foreground mt-4">
              Supported formats: PDF, DOC, DOCX (Max 25MB)
            </p>
          </div>
        </div>
      ) : (
        /* Analysis View */
        <div className="space-y-6">
          {/* File Info Card */}
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!analysis && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </div>
                )}
                <Button variant="ghost" size="icon" onClick={clearFile}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            {uploadProgress < 100 && (
              <div className="mt-4">
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )}
          </div>

          {analysis && (
            <>
              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Document Type</p>
                    <p className="font-medium text-foreground">{analysis.metadata.type}</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                  <Info className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Pages</p>
                    <p className="font-medium text-foreground">{analysis.metadata.pages} pages</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Privacy</p>
                    <p className="font-medium text-foreground">Encrypted & Secure</p>
                  </div>
                </div>
              </div>

              {/* Risk Alerts */}
              {analysis.risks.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-semibold text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                    Risk Highlights
                  </h3>
                  {analysis.risks.map((risk, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-4 rounded-xl flex items-start gap-3",
                        getRiskColor(risk.level)
                      )}
                    >
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{risk.message}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Summary */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Document Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">{analysis.summary}</p>
              </div>

              {/* Key Clauses */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                  Key Clauses
                </h3>
                <div className="space-y-4">
                  {analysis.keyClauses.map((clause, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{clause.title}</h4>
                        <span className={cn(
                          "text-xs font-medium px-2 py-1 rounded-full",
                          getRiskColor(clause.risk)
                        )}>
                          {clause.risk.charAt(0).toUpperCase() + clause.risk.slice(1)} Risk
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{clause.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button variant="gold">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Original
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Documents;
