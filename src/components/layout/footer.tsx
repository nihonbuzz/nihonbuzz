import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xl font-bold mb-4 text-white">NihonBuzz</h4>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            Menjadi platform media dan edukasi budaya Jepang yang paling berdampak di Indonesia. #ConnectingIndonesiaJapan
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://facebook.com/nihonbuzz.id" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://instagram.com/nihon_buzz" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                             <Link href="https://tiktok.com/@nihonbuzz" className="text-muted-foreground hover:text-primary transition-colors">
                             <svg role="img" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"/></svg>
                            </Link>
                        </div>
                    </div>
                    
                    <div>
                        <h5 className="font-bold text-white mb-4">Metode & Layanan</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary">E-Course JLPT</Link></li>
                            <li><Link href="#" className="hover:text-primary">Private Group</Link></li>
                            <li><Link href="#" className="hover:text-primary">Study to Japan</Link></li>
                            <li><Link href="#" className="hover:text-primary">Work to Japan</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-white mb-4">Hubungi Kami</h5>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Jl. Palapa VII No.1, RT.12/RW.18, Kedoya Sel., Kec. Kb. Jeruk, Jakarta Barat 11520</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:hello@nihonbuzz.org" className="hover:text-primary">hello@nihonbuzz.org</a>
                            </li>
                             <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                <span>+62 851-2988-0919</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} NihonBuzz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
