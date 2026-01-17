"use client";

import Link from "next/link";
import { ArrowRight, Star, Verified, Monitor, Zap, MoveRight, Heart, Brain, FlaskConical, Leaf, Baby } from "lucide-react";
import BMICalculator from "@/components/features/BMICalculator";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-background-light dark:bg-background-dark">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 dark:opacity-5 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 px-4 py-1.5 rounded-full text-primary font-medium text-sm">
                <span className="text-lg">🎓</span>
                <span>Ankara Medipol Üniversitesi Onur Mezunu</span>
              </div>

              <h1 className="font-display text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Daha Sağlıklı Bir Yaşam İçin <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-primary">Beslenme Dengesi</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/50 -rotate-1 z-0"></span>
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                Sürdürülebilir beslenme sadece diyet yapmak değildir; sizi güçlü kılan bir yaşam tarzı yaratmaktır. Bilimsel temelli rehberlikle sağlık hedeflerinize birlikte ulaşalım.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="flex items-center justify-center bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Yolculuğa Başla
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/hizmetler"
                  className="flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  Hizmetleri İncele
                </Link>
              </div>

              <div className="pt-6 flex items-center space-x-8 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Star className="text-secondary mr-2 w-5 h-5 fill-current" />
                  <span>500+ Mutlu Danışan</span>
                </div>
                <div className="flex items-center">
                  <Verified className="text-secondary mr-2 w-5 h-5" />
                  <span>Uzman Diyetisyen</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] transform rotate-6 scale-110"></div>
                <div className="relative bg-white dark:bg-slate-800 p-2 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-slate-700">
                  <img
                    alt="Dyt. İrem Sarıç"
                    className="w-full h-auto object-cover rounded-[1.8rem]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzNwR2yNCpw9QipRJkvf0W9awbnB6oRN1pNIPzKcho-J3JxRWa7MSOSH3cE4oQ3_G746JH3JAScol-wR1HyfET4ySlEmV-Aby1vYik6v6CuL4h9mMzUXoTlI1VVzB-ZQJ5EIHch1EaI3clAuUmXQyostZUTSw1rL0qSB8TSnpNr9vXZUIOg6ytJQtM8yIOSTPMPetjIpJuML9SnglbNpC7YKavBXXPq2eGvdDeyR3a-19NaTPKBo0mqpbKN9mrk1WWIVrNg5ZmXUI"
                  />

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-[200px] border border-slate-100 dark:border-slate-600 animate-bounce duration-[3000ms]">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-600 dark:text-green-400">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Odak</p>
                      <p className="font-bold text-slate-800 dark:text-white text-sm">Sürdürülebilir Beslenme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Services Preview Section */}
      <section className="py-20 bg-white dark:bg-surface-dark" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Kişiye Özel Beslenme Planları
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Yaşam tarzınıza uygun yolu seçin. Her program, benzersiz fizyolojik ihtiyaçlarınızı karşılamak üzere bilimsel olarak tasarlanmıştır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-primary/10"></div>
              <div className="w-14 h-14 bg-pink-100 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">Lipödem & Diyabet</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                Lipödem ağrılarını hafifleten anti-inflamatuar beslenme ve kan şekeri regülasyonu sağlayan diyabet yönetimi.
              </p>
              <Link href="/hizmetler" className="inline-flex items-center text-primary font-semibold hover:text-pink-700 transition-colors">
                Daha fazlası <MoveRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-secondary/20"></div>
              <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-6">
                <Baby className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">Anne - Çocuk</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                Gebelik, emzirme ve çocukluk çağında sağlıklı büyüme ve gelişme için bilimsel beslenme desteği.
              </p>
              <Link href="/hizmetler" className="inline-flex items-center text-yellow-600 dark:text-yellow-400 font-semibold hover:text-yellow-700 transition-colors">
                Daha fazlası <MoveRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-blue-200/20"></div>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">Kilo Yönetimi</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                Kısıtlayıcı diyetler olmadan, sürdürülebilir alışkanlıklar kazanarak ideal kilonuza ulaşın.
              </p>
              <Link href="/hizmetler" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-colors">
                Daha fazlası <MoveRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/hizmetler" className="inline-block border-b-2 border-primary text-primary font-bold hover:text-pink-700 hover:border-pink-700 transition-colors pb-1">
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* BMI Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark" id="bmi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BMICalculator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className="absolute top-4 left-4 w-full h-full border-4 border-secondary rounded-3xl z-0 transform translate-x-2 translate-y-2"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQjgng5n_7pfCB3jChZsZa09CWaw7yR__em4xJdMRr5r9qLVzX1-WbCvXXXigsoRB1HULk-igwJK03IElbXYyz8hTN4t0ytr-fkvHNBmBhh4tUbQnwTWN0jFX2VAxz23Sb0gkQIXNSrLi6-2jDaugOXoGvdu2ZJAdTJukAqQckjsOJa18VAiP1HIyZBeFiuL5TQFIfLve7h4UXIBurJ9nu415xklJTZYDww6UCi-L9QTQ0RgKYv80cANhBDNnw_PvWGUb1agYfVDY"
                alt="Healthy Food"
                className="relative z-10 rounded-3xl shadow-lg w-full h-96 object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Beslenmeye Farklı Bir Yaklaşım
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <Brain className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-white">Farkındalıklı Beslenme</h3>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                      Suçluluk duygusundan uzaklaşıp beslenmeye odaklanarak yiyeceklerle olan ilişkinizi onarmaya odaklanıyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-white">Bilimsel Temelli</h3>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                      Her tavsiye, güvenli ve etkili sonuçlar sağlamak için güncel beslenme bilimine dayanmaktadır.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <Heart className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-white">Kişiselleştirilmiş Bakım</h3>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                      Şablon yok. Planınız kan değerlerinize, yaşam tarzınıza ve tercihlerinize göre sıfırdan oluşturulur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
