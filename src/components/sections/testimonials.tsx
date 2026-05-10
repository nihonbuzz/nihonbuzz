"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Annisa",
    role: "Mahasiswa Sastra Jepang",
    text: "Nihonbuzz nggak cuma ngajarin grammar dan kosakata, tapi juga kasih konteks real-life. Kayak gimana ngobrol di konbini, cara nyapa senior, sampai tips survive kalo kerja atau kuliah di Jepang. Semua dibahas!",
    image: "/assets/testimonials/annisa.jpg"
  },
  {
    name: "Dinda",
    role: "Mahasiswa",
    text: "Awalnya aku ragu karena belum pernah sama sekali belajar bahasa Jepang. Tapi Nihonbuzz punya modul yang gampang dicerna, dan sensei-nya sabar banget ngajarin. Sekarang aku udah bisa baca hiragana dan perkenalan diri!",
    image: "/assets/testimonials/dinda.png"
  },
  {
    name: "Fajar",
    role: "Job Seeker",
    text: "Setelah ikut kelas dan belajar bareng Nihonbuzz, aku jadi makin pede ngelamar program kerja di Jepang. Selain bahasanya, aku juga dapet insight soal budaya kerja dan proses pendaftarannya.",
    image: "/assets/testimonials/fajar.png"
  },
  {
    name: "Tiara",
    role: "Pelajar SMA",
    text: "Jujur aja, sempet mikir 'gratisan pasti seadanya', tapi ternyata modul Nihonbuzz super niat. Ada video, latihan, kuis, dan support dari timnya responsif banget. Ini baru kursus online yang ngerti kebutuhan pemula.",
    image: "/assets/testimonials/tiara.png"
  },
  {
    name: "Reza",
    role: "Freelance Designer",
    text: "Aku suka banget suasana kelasnya. Friendly tapi nggak ngasal. Ada struktur belajarnya dan materinya lengkap, plus dikasih latihan-latihan yang bisa langsung dipraktikkan.",
    image: "/assets/testimonials/reza.png"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Kata Mereka Tentang <span className="text-primary">NihonBuzz</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cerita asli dari alumni dan siswa yang telah merasakan pengalaman belajar bersama kami.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-white/5 hover:border-primary/20 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-12 w-12 border border-white/10">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{item.name}</h4>
                    <p className="text-xs text-primary">{item.role}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
