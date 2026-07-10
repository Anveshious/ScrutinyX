import { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  Sparkles, 
  Baby, 
  User, 
  Copy, 
  ThumbsUp, 
  ThumbsDown,
  RotateCcw,
  Paperclip
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { addDashboardEvent } from "@/lib/dashboardStore";
import { getCurrentUserProfile } from "@/lib/userProfiles";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "What are my rights as a tenant if my landlord won't fix repairs?",
  "How do I start a small business legally?",
  "What should I know before signing an employment contract?",
  "Can I get out of a lease early?",
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI legal assistant. I can help you understand legal concepts, analyze scenarios, and provide general legal information. How can I assist you today?\n\n**Please note:** I provide legal information, not legal advice. For specific legal matters, please consult a licensed attorney.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [eli5Mode, setEli5Mode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    const currentUser = getCurrentUserProfile();
    addDashboardEvent({
      userId: currentUser?.id ?? "guest",
      type: "chat",
      title: input.trim() || "Legal question",
      details: "User asked a legal question through chat",
    });

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: eli5Mode 
          ? `Let me explain this in simple terms! 🎓\n\nImagine you have a problem with someone (like your landlord). The law is like a set of rules that everyone has to follow. When someone breaks these rules, you can ask for help!\n\nIn your case about "${input.slice(0, 50)}...":\n\n1. **First**, you have the right to ask nicely for what you need\n2. **Then**, if they don't listen, you can write it down (like a letter)\n3. **Finally**, if nothing works, there are special helpers (lawyers and courts) who can help make things fair\n\nWant me to explain any part in more detail?`
          : `Based on your question about "${input.slice(0, 50)}...", here's what you should know:\n\n## Key Legal Points\n\n1. **Your Rights**: Under most jurisdictions, you have specific protections that apply to your situation.\n\n2. **Relevant Laws**: Several statutes and regulations may apply, including consumer protection laws and contractual obligations.\n\n3. **Recommended Steps**:\n   - Document everything in writing\n   - Review any contracts or agreements you've signed\n   - Consider sending a formal notice if needed\n\n## Important Considerations\n\nThis is general legal information. For advice specific to your situation, especially if significant money or rights are involved, consulting with a licensed attorney is recommended.\n\n*Would you like me to elaborate on any of these points?*`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestion = (question: string) => {
    setInput(question);
  };

  return (
    <DashboardLayout 
      title="AI Legal Assistant" 
      subtitle="Ask any legal question and get instant guidance"
    >
      <div className="flex flex-col h-[calc(100vh-12rem)]">
        {/* ELI5 Toggle */}
        <div className="flex items-center justify-between mb-4 p-4 bg-card border border-border rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Baby className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Explain Like I'm 5</p>
              <p className="text-xs text-muted-foreground">Simplify complex legal terms</p>
            </div>
          </div>
          <Switch checked={eli5Mode} onCheckedChange={setEli5Mode} />
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 animate-fade-up",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl p-4",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-card border border-border rounded-tl-none"
                )}
              >
                <div className={cn(
                  "prose prose-sm max-w-none",
                  message.role === "user" ? "text-primary-foreground prose-invert" : "text-foreground"
                )}>
                  {message.content.split('\n').map((line, i) => (
                    <p key={i} className={cn("mb-2 last:mb-0", line.startsWith('##') && "font-semibold text-base mt-3")}>
                      {line.replace('## ', '')}
                    </p>
                  ))}
                </div>
                {message.role === "assistant" && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ThumbsUp className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ThumbsDown className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <RotateCcw className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-foreground" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start animate-fade-up">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
              </div>
              <div className="bg-card border border-border rounded-2xl rounded-tl-none p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 1 && (
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestion(question)}
                  className="text-sm px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors text-left"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-card border border-border rounded-xl p-3">
          <div className="flex items-end gap-3">
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Paperclip className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask a legal question..."
                className="w-full bg-transparent border-0 outline-none resize-none text-foreground placeholder:text-muted-foreground min-h-[44px] max-h-[120px]"
                rows={1}
              />
            </div>
            <Button 
              variant="gold" 
              size="icon" 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
