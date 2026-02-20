import { motion } from "framer-motion";
import { resumeData } from "@/lib/portfolio-data";

interface SkillsSectionProps {
  data?: typeof resumeData;
}

export function SkillsSection({ data = resumeData }: SkillsSectionProps) {
  const skillCategories = [
    { title: "Frontend Development", key: "frontend" as const },
    { title: "Backend Development", key: "backend" as const },
    { title: "Tools & Technologies", key: "tools" as const },
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Technical Skills
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, catIndex) => (
          <div key={category.key} className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-xs md:text-sm text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {data.skills[category.key].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (catIndex * 5 + index) * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 md:px-5 md:py-3 bg-secondary border border-border rounded-xl flex items-center gap-3 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                  <span className="text-sm md:text-base font-medium text-foreground">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
