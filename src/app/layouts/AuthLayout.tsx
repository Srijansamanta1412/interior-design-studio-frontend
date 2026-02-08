import { Outlet, Link } from "react-router-dom";
import { Logo } from "@/components/shared/Logo";

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 p-4">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="w-full max-w-md">
        <Outlet />
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-gold transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}