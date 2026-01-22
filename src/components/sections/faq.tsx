"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa bedanya NihonBuzz Media dengan NihonBuzz Academy?",
    answer: "NihonBuzz Media adalah portal informasi budaya Jepang gratis. Sedangkan NihonBuzz Academy adalah lembaga pendidikan non-formal yang fokus mencetak talenta siap kerja/studi ke Jepang melalui bimbingan intensif dan kurikulum terstruktur."
  },
  {
    question: "Apakah kurikulumnya sesuai dengan standar JLPT?",
    answer: "Ya, 100%. Materi kami dirancang khusus untuk persiapan ujian JLPT (N5-N3) & NAT-TEST. Kami mencakup seluruh aspek: Kanji, Tata Bahasa (Bunpou), Kosa Kata (Kotoba), hingga Pendengaran (Chokai)."
  },
  {
    question: "Saya pemula (Zero Beginner), apakah bisa ikut?",
    answer: "Sangat bisa! Kami memiliki kelas 'Persiapan N5' yang dirancang khusus untuk pemula nol. Sensei akan membimbing dari pengenalan huruf (Hiragana/Katakana) hingga Anda lancar percakapan dasar."
  },
  {
    question: "Apakah tersedia rekaman jika saya berhalangan hadir?",
    answer: "Tentu. Setiap sesi Live Teaching direkam dan diunggah ke Learning Management System (LMS) kami. Anda bisa mengakses ulang materi dan rekaman kapan saja (Lifetime Access untuk materi tertentu)."
  },
  {
    question: "Bagaimana cara mendaftar kelas Private atau Group?",
    answer: "Silakan pilih program di bagian 'Program Belajar' di atas, atau klik tombol 'Daftar Kelas' di menu. Tim konsultan akademik kami akan menghubungi Anda untuk penempatan level (Placement Test) jika diperlukan."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pertanyaan <span className="text-primary">Umum</span>
          </h2>
          <p className="text-muted-foreground text-lg">
             Hal-hal yang sering ditanyakan seputar NihonBuzz.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors">
                    {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
