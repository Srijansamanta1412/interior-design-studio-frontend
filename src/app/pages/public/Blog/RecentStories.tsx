import { useEffect, useState } from "react";
import { blogService } from "@/services/blogService";
import type { BlogPost } from "@/types/blog";
import { BlurImage } from "@/components/shared/BlurImage";

export function RecentStories() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await blogService.getPosts(1, 100);
        // Sort posts descending by publishDate
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
        // Take top 6
        setPosts(sortedPosts.slice(0, 6));
      } catch (error) {
        console.error("Failed to load blog posts", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="container mx-auto px-4 mb-24">
      <div className="mb-10 text-center md:text-left">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium">Recent 3D Designs</h2>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-muted/40 h-[430px] rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative h-[430px] overflow-hidden rounded-2xl border border-gold-100 bg-gold p-2 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30"
            >
              <div className="relative h-full overflow-hidden rounded-xl bg-muted">
                <BlurImage
                  src={post.featuredImage}
                  alt={post.title}
                  containerClassName="h-full rounded-none"
                  className="transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                {/* <div className="pointer-events-none absolute inset-x-4 bottom-1 rounded-md border border-gold/20 bg-black/35 p-4 text-white shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-black/45 md:inset-x-5 md:bottom-5 md:p-5">
                  <h4 className="font-serif text-lg md:text-xl leading-tight line-clamp-2">
                    {post.title}
                  </h4>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
