"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Book, Newspaper, Calendar } from "lucide-react";

const services = [
  {
    title: "Media & Berita",
    description: "Ikuti berita terkini seputar tren, gaya hidup, dan pop culture Jepang yang disajikan secara menarik.",
    action: "Baca Berita",
    icon: Newspaper,
    image: "/assets/service-media.jpg" // Placeholder path, using abstraction for now
  },
  {
    title: "E-Course Bahasa",
    description: "Belajar bahasa Jepang dari dasar hingga mahir dengan kurikulum yang mudah dipahami.",
    action: "Mulai Belajar",
    icon: Book,
    image: "/assets/service-course.jpg"
  },
  {
    title: "Event & Komunitas",
    description: "Dapatkan akses ke event eksklusif dan gathering komunitas pecinta Jepang di Indonesia.",
    action: "Gabung Event",
    icon: Calendar,
    image: "/assets/service-event.jpg"
  }
];

export function Services() {
  return (
    <section id="schedule" className="py-24 bg-black/50 relative">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Layanan <span className="text-primary">Eksklusif</span> Kami
            </h2>
            <p className="text-muted-foreground text-lg">
              Temukan berbagai cara untuk terhubung dengan dunia Jepang melalui platform kami.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5">
            Lihat Semua Layanan <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-card/40 backdrop-blur-sm rounded-[22px] p-8 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-muted-foreground mb-8">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center text-sm font-medium text-primary cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                  {service.action} <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
