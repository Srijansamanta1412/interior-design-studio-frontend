import FinishedHallSpace from "@/assets/images/3d-design/Finished_Hall_Space.jpeg";
export function BlogHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden mb-12">
      {/* BACKGROUND IMAGE  */}
<div className="absolute inset-0 z-0">
  <img
    srcSet={`
      ${FinishedHallSpace} 800w,
      ${FinishedHallSpace} 1200w,
      ${FinishedHallSpace} 2000w
    `}
    src={FinishedHallSpace}
    sizes="100vw"
    alt="Interior Design Journal"
    width="2000"
    height="1333"
    className="w-full h-full object-cover brightness-[1.3]"
    fetchPriority="high"
    loading="eager"
    decoding="sync"
  />
        {/* Helper overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <div className="max-w-4xl space-y-6 animate-fade-in-up flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-xl text-white">
            3D Design <span className="font-light text-gold-light italic">Visualization</span>
          </h1>
          <p className="text-lg md:text-xl md:max-w-2xl leading-relaxed drop-shadow-md font-light text-gray-100/90 max-w-2xl mx-auto">
Bring your ideas to life with realistic 3D visualizations that help you see, explore, and refine your space before it's built.
          </p>
        </div>
      </div>
    </section>
  );
}
