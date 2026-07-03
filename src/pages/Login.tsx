import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md shadow-lg border-border">
        <CardHeader>
          <CardTitle>Sign in to ScrutinyX</CardTitle>
          <CardDescription>Access your dashboard, review documents, and continue your legal research.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required className="mt-2" />
            </div>
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            New here?{' '}
            <Link to="/" className="text-primary underline hover:text-primary/80">
              Create an account
            </Link>
          </p>
          <Link to="/dashboard" className="text-sm text-primary underline hover:text-primary/80">
            Continue as guest
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
