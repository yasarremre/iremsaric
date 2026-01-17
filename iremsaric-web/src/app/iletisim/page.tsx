import ContactForm from "@/components/features/ContactForm";
import { Building, Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <header className="relative bg-accent dark:bg-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-accent dark:bg-slate-800 opacity-30 dark:opacity-10 mix-blend-multiply"></div>
                {/* Decorative Blobs */}
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
                <div className="absolute -left-20 -top-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>

                <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-sm">
                        İletişime Geçin
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Sağlıklı ve sürdürülebilir bir yaşam için ilk adımı bugün atın.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Info & Map */}
                    <div className="space-y-8">
                        {/* Info Card */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                            <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
                                <MapPin className="mr-2 text-secondary w-6 h-6" />
                                Klinik Bilgileri
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                                        <Building className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-slate-100">Adres</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            Dyt. İrem Sarıç Beslenme ve Diyet Danışmanlığı<br />
                                            Öğretmenevleri Mah. 922. Sokak No:1<br />
                                            Konyaaltı / Antalya
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-slate-100">Telefon</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            <a href="tel:+905551234567" className="hover:text-primary transition-colors">+90 (555) 123 45 67</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-slate-100">E-posta</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            <a href="mailto:info@iremsaric.com" className="hover:text-primary transition-colors">info@iremsaric.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-slate-100">Çalışma Saatleri</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
                                            Pazartesi - Cuma: 09:00 - 18:00<br />
                                            Cumartesi: 10:00 - 14:00<br />
                                            Pazar: Kapalı
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 h-80 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.0763952407233!2d30.62767831528657!3d36.88796597993077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391d4e7d7a711%3A0x86134707425883a4!2zw5bEn3JldG1lbmV2bGVyaSwgOTIyLiBTay4gTm86MSwgMDcwNzAgS29ueWFhbHTEsS9BbnRhbHlh!5e0!3m2!1str!2str!4v1705600000000!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full grayscale-0"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-secondary relative overflow-hidden">
                        {/* Decorative Icon */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            {/* <Flower className="w-32 h-32 text-primary" /> */}
                        </div>

                        <h2 className="text-3xl font-display font-bold text-slate-800 dark:text-slate-100 mb-2">Bize Yazın</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8">
                            Sorularınız veya randevu talepleriniz için aşağıdaki formu doldurabilirsiniz.
                        </p>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}
