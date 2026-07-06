import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md shadow-lg border-border">
        <CardHeader>
          <CardTitle>Create your ScrutinyX account</CardTitle>
          <CardDescription>Start organizing your legal research, documents, and insights in one place.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" type="text" placeholder="Alex Morgan" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" placeholder="Re-enter your password" required className="mt-2" />
            </div>
            <Button type="submit" className="w-full">Create account</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary underline hover:text-primary/80">
              Sign in
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

export default Signup;
