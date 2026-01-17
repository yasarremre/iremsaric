"use client";

import { useMemo, useState } from "react";
import { Activity, Calculator, Lock } from "lucide-react";

export default function BMICalculator() {
    const [height, setHeight] = useState<number | "">("");
    const [weight, setWeight] = useState<number | "">("");
    const [gender, setGender] = useState<"male" | "female">("female");
    const [age, setAge] = useState<number | "">("");

    const bmi = useMemo(() => {
        if (!height || !weight) return null;
        const h = Number(height) / 100; // cm to m
        const w = Number(weight);
        if (h <= 0 || w <= 0) return null;
        return (w / (h * h)).toFixed(1);
    }, [height, weight]);

    const bmiStatus = useMemo(() => {
        if (!bmi) return null;
        const b = Number(bmi);
        if (b < 18.5) return "Zayıf";
        if (b < 24.9) return "Normal";
        if (b < 29.9) return "Fazla Kilolu";
        return "Obez";
    }, [bmi]);

    return (
        <div className="bg-primary rounded-3xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white flex flex-col justify-center relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10">
                    <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                        Vücut Kitle İndeksinizi Hesaplayın
                    </h2>
                    <p className="text-pink-100 mb-8 text-lg">
                        VKİ değerinizi bilmek bir başlangıçtır. Ancak gerçek sağlık sadece sayılardan ibaret değildir. Bu aracı bir referans olarak kullanın ve size özel beslenme planı için bizimle iletişime geçin.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Activity className="w-6 h-6" />
                            </div>
                            <span className="font-medium">Anında Hesaplama</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Lock className="w-6 h-6" />
                            </div>
                            <span className="font-medium">Gizli & Güvenli</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 lg:p-12">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="height" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Boy (cm)</label>
                            <input
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) => setHeight(Number(e.target.value))}
                                placeholder="170"
                                className="block w-full px-4 py-3 border-slate-300 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="weight" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Kilo (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(Number(e.target.value))}
                                placeholder="65"
                                className="block w-full px-4 py-3 border-slate-300 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Cinsiyet</span>
                        <div className="flex space-x-4">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={gender === "female"}
                                    onChange={() => setGender("female")}
                                    className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                                />
                                <span className="ml-2 text-slate-700 dark:text-slate-300">Kadın</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={gender === "male"}
                                    onChange={() => setGender("male")}
                                    className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                                />
                                <span className="ml-2 text-slate-700 dark:text-slate-300">Erkek</span>
                            </label>
                        </div>
                    </div>

                    {!bmi ? (
                        <button
                            disabled
                            className="w-full bg-secondary text-slate-900 font-bold py-3 px-4 rounded-xl shadow opacity-50 cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            Sonuç Bekleniyor...
                            <Calculator className="w-5 h-5" />
                        </button>
                    ) : (
                        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-xl text-center animate-in fade-in zoom-in duration-300">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Vücut Kitle İndeksiniz</p>
                            <div className="text-4xl font-bold text-primary my-1">{bmi}</div>
                            <p className={`font-medium ${bmiStatus === "Normal" ? "text-green-500" : "text-yellow-500"}`}>
                                Durum: {bmiStatus}
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
