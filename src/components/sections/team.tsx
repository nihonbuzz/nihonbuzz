"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Gilang Romadan",
    role: "Chief Business Officer (CBO)",
    image: "/assets/team/gilang.png", 
  },
  {
    name: "Muhammad Herdy Iskandar",
    role: "Chief Technology Officer (CTO)",
    image: "/assets/team/herdy.png",
  },
  {
    name: "Hamzah Hadits Sabil",
    role: "Chief Operating Officer (COO) & Sensei",
    image: "/assets/team/hamzah.png", // Start with placeholder, will try to download or use generic
    isSensei: true
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-black/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Dedikasi kami untuk membangun ekosistem edukasi dan teknologi Jepang terbaik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-primary/50 transition-colors duration-300">
                <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              {member.isSensei && (
                  <Badge variant="outline" className="border-primary text-primary bg-primary/10">
                      Head Sensei
                  </Badge>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
