import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveUserProfile } from "@/lib/userProfiles";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      saveUserProfile({ name, email, password });
      navigate("/dashboard");
    } catch (signupError) {
      setError(signupError instanceof Error ? signupError.message : "Unable to create account.");
    }
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
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" type="text" placeholder="Alex Morgan" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Create a password" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" name="confirmPassword" type="password" placeholder="Re-enter your password" required className="mt-2" />
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
