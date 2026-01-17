"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Flower2, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Flower2 className="text-primary w-6 h-6" />
                            <span className="font-display font-bold text-xl text-primary">Dyt. İrem Sarıç</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
                            Sürdürülebilir beslenme uygulamaları ile daha sağlıklı bir yaşam için sizi güçlendiriyoruz. Ankara merkezli, dünya çapında online hizmet.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="/hakkimda" className="hover:text-primary transition-colors">Hakkımda</Link></li>
                            <li><Link href="/hizmetler" className="hover:text-primary transition-colors">Tüm Hizmetler</Link></li>
                            <li><Link href="/" className="hover:text-primary transition-colors">BMI Hesaplama</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">İletişim</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                                <MapPin className="text-primary w-4 h-4 mt-0.5" />
                                <span>Öğretmenevleri Mah. Konyaaltı, Antalya</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="text-primary w-4 h-4" />
                                <a href="mailto:info@iremsaric.com" className="hover:text-primary">info@iremsaric.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="text-primary w-4 h-4" />
                                <a href="tel:+905551234567" className="hover:text-primary">+90 555 123 4567</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500">
                    <p>© 2026 Dyt. İrem Sarıç. Tüm hakları saklıdır.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <Link href="#" className="hover:text-primary">Gizlilik Politikası</Link>
                        <Link href="#" className="hover:text-primary">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
