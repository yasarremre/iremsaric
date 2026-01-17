import { GraduationCap, Award, Briefcase } from "lucide-react";

export default function AboutPage() {
    const education = [
        {
            year: "2019-2023",
            title: "Beslenme ve Diyetetik (Lisans)",
            school: "Ankara Medipol Üniversitesi",
            description: "Onur Derecesi ile mezuniyet. Bitirme tezi: 'Sürdürülebilir Beslenmenin Metabolik Sendrom Üzerine Etkileri'.",
            icon: GraduationCap,
        },
        {
            year: "2023",
            title: "Fonksiyonel Tıp Diyetisyenliği",
            school: "Fonksiyonel Tıp Akademisi",
            description: "Bütüncül yaklaşım ve kronik hastalıklarda beslenme sertifika programı.",
            icon: Award,
        },
    ];



    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen">
            {/* Header */}
            <div className="bg-slate-50 dark:bg-slate-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">Hakkımda</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        "Diyet, sadece kilo vermek değil; bedeninize iyi bakmaktır." Yasaksız, sürdürülebilir ve tamamen size özel bir beslenme yolculuğu.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-12">
                    {/* Education Section */}
                    <div>
                        <h2 className="flex items-center text-2xl font-bold text-primary mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
                            <GraduationCap className="mr-3 w-6 h-6" />
                            Eğitim & Uzmanlık
                        </h2>
                        <div className="space-y-8 pl-4 border-l-2 border-primary/20">
                            {education.map((item, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                                    <span className="block text-sm font-semibold text-secondary mb-1">{item.year}</span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                    <p className="text-primary font-medium mb-2">{item.school}</p>
                                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div>
                        <h2 className="flex items-center text-2xl font-bold text-primary mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
                            <Briefcase className="mr-3 w-6 h-6" />
                            Klinik Deneyim
                        </h2>
                        <div className="space-y-8 pl-4 border-l-2 border-primary/20">
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                                <span className="block text-sm font-semibold text-secondary mb-1">2023-Günümüz</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Kurucu Diyetisyen</h3>
                                <p className="text-primary font-medium mb-2">Dyt. İrem Sarıç Beslenme Danışmanlığı, Antalya</p>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Öğretmenevleri Mahallesi'ndeki kliniğimde kişiye özel beslenme danışmanlığı.
                                    Lipödem, Bariatrik Beslenme (Obezite Cerrahisi Sonrası), Çocuk Beslenmesi ve Diyabet üzerine uzmanlaşmış bütüncül yaklaşım.
                                </p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                                <span className="block text-sm font-semibold text-secondary mb-1">2022-2023</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Stajyer Diyetisyen</h3>
                                <p className="text-primary font-medium mb-2">Ankara Şehir Hastanesi</p>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Endokrinoloji, Nutrisyon ve Pediatri kliniklerinde kapsamlı staj rotasyonları.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
