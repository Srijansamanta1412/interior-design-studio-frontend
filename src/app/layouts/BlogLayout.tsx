import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BLOG_CATEGORIES = [
  { name: "All Posts", path: "/blog" },
  { name: "Design Trends", path: "/blog/category/trends" },
  { name: "Tips & Guides", path: "/blog/category/guides" },
  { name: "Home Tours", path: "/blog/category/tours" },
  { name: "Before & After", path: "/blog/category/makeovers" },
];

export function BlogLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      
      {/* Blog Sub-Navigation (Sticky under the main navbar) */}
      <div className="sticky top-20 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 hidden md:block">
         <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-4">
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = location.pathname === cat.path;
                return (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    className={cn(
                      "text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors hover:text-gold",
                      isActive 
                        ? "text-gold border-b-2 border-gold pb-1" 
                        : "text-muted-foreground"
                    )}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </nav>
         </div>
      </div>

      {/* Main Content Area (BlogIndex or BlogPost will render here) */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Blog-Specific CTA / Newsletter */}
      <section className="bg-muted py-24 border-t border-border">
         <div className="container mx-auto px-4 text-center max-w-2xl">
            <h3 className="font-serif text-3xl md:text-4xl font-normal mb-6 text-foreground">
              The Decorilla Digest
            </h3>
            <p className="text-muted-foreground mb-10 text-lg">
              Get the latest interior design trends, expert tips, and exclusive offers delivered straight to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-12 bg-background border-input focus-visible:ring-gold"
                required
              />
              <Button type="submit" variant="gold" className="h-12 px-8 uppercase tracking-widest text-xs">
                Subscribe
              </Button>
            </form>
         </div>
      </section>

    </div>
  );
}