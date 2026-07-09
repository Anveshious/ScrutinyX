import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Signout = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md shadow-lg border-border">
        <CardHeader>
          <CardTitle>You’ve been signed out</CardTitle>
          <CardDescription>
            Thanks for using ScrutinyX. Sign in again when you’re ready to continue your work.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Your session has ended, and you can return to the platform at any time.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/login">Sign In Again</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link to="/">Back to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signout;
