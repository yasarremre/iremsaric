import Link from "next/link";
import { Monitor, Heart, Zap, Baby, Utensils, Users, Flower2 } from "lucide-react";

const services = [
    {
        title: "Lipödem Beslenmesi",
        description: "Lipödem yönetimine özel anti-inflamatuar beslenme stratejileri ile ağrılarınızı hafifletin ve yaşam kalitenizi artırın.",
        icon: Heart,
        color: "bg-pink-100 text-pink-600"
    },
    {
        title: "Diyabet Yönetimi",
        description: "Tip 1 ve Tip 2 Diyabet ile İnsülin Direncinde kan şekeri regülasyonunu sağlayan tıbbi beslenme tedavileri.",
        icon: Monitor,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "PKOS Beslenmesi",
        description: "Polikistik Over Sendromu semptomlarını hafifletmeye yönelik, hormon dengesini destekleyen özel beslenme planları.",
        icon: Flower2,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Anne - Çocuk Beslenmesi",
        description: "Gebelik, emzirme ve ek gıda dönemlerinde anne ve bebeğin sağlığı için bilimsel rehberlik.",
        icon: Baby,
        color: "bg-orange-100 text-orange-600"
    },
    {
        title: "Kilo Yönetimi",
        description: "Kısıtlayıcı listeler olmadan, sürdürülebilir alışkanlıklar kazanarak ideal kilonuza ulaşın.",
        icon: Utensils,
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Sporcu Beslenmesi",
        description: "Antrenman performansını ve toparlanmayı destekleyen, branşa özgü makro planlaması.",
        icon: Zap,
        color: "bg-yellow-100 text-yellow-600"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen">
            <div className="bg-slate-50 dark:bg-slate-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">Hizmetlerimiz</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Bireysel ihtiyaçlarınıza yönelik profesyonel çözümler.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} dark:bg-opacity-20`}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
                            <Link href="/iletisim" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center">
                                Randevu Al
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
