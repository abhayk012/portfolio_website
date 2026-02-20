import { useState, useEffect } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

interface PortfolioSectionProps {
  data?: typeof portfolioData;
}

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 second timeout as requested

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} - image ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                currentIndex === i
                  ? "bg-accent w-4"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PortfolioSection({
  data = portfolioData,
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <div className="w-10 h-1 bg-accent rounded-full mb-2" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium capitalize transition-all ${
                activeFilter === category
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.title}
              className="group relative bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 flex flex-col"
            >
              <div className="relative group/carousel">
                <ImageCarousel images={project.images} title={project.title} />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
                  <div className="flex gap-2 md:gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Preview
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-secondary border border-border text-foreground rounded-lg text-xs md:text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Visit
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] md:text-xs px-2 py-1 bg-background border border-border rounded-lg font-medium text-accent capitalize">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-muted-foreground bg-background px-2 py-0.5 rounded border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
