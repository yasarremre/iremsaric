"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { User, Phone, Mail, MessageSquare, AlertCircle, Send } from "lucide-react";
import { useState } from "react";

const phoneRegex = /^(\+90|0)?5\d{9}$/;

const serviceTypes = ["Kilo Yönetimi", "Hastalıklarda Beslenme", "Sporcu Beslenmesi", "Diğer"] as const;

const schema = z.object({
    full_name: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    phone: z.string().regex(phoneRegex, "Geçerli bir Türk telefon numarası giriniz (Örn: 05551234567)"),
    service_type: z.enum(serviceTypes),
    message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır"),
    privacy: z.literal(true).refine((val) => val === true, {
        message: "KVKK metnini onaylamanız gerekmektedir",
    }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            privacy: true
        }
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
            console.log("Submitting to API URL:", apiUrl); // Debug log

            await axios.post(`${apiUrl}/api/inquiry`, data);
            toast.success("Mesajınız başarıyla gönderildi!", {
                description: "En kısa sürede size dönüş yapacağız.",
            });
            reset();
        } catch (error: any) {
            console.error("Submission Error Full:", error);
            if (error.response) {
                console.error("Error Response Data:", error.response.data);
                console.error("Error Response Status:", error.response.status);
            }
            toast.error("Bir hata oluştu", {
                description: "Detaylar konsolda. Lütfen kontrol ediniz.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Name */}
            <div className="group">
                <label htmlFor="full_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Ad Soyad
                </label>
                <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="text-slate-400 w-5 h-5" />
                    </div>
                    <input
                        {...register("full_name")}
                        id="full_name"
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-secondary focus:border-secondary sm:text-sm transition-all shadow-sm outline-none"
                        placeholder="İsim ve Soyisim"
                    />
                </div>
                {errors.full_name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" /> {errors.full_name.message}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Telefon
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="text-slate-400 w-5 h-5" />
                        </div>
                        <input
                            {...register("phone")}
                            id="phone"
                            type="tel"
                            className="block w-full pl-10 pr-3 py-3 border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-secondary focus:border-secondary sm:text-sm transition-all shadow-sm outline-none"
                            placeholder="0555 123 45 67"
                        />
                    </div>
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" /> {errors.phone.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        E-posta
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="text-slate-400 w-5 h-5" />
                        </div>
                        <input
                            {...register("email")}
                            id="email"
                            type="email"
                            className="block w-full pl-10 pr-3 py-3 border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-secondary focus:border-secondary sm:text-sm transition-all shadow-sm outline-none"
                            placeholder="ornek@email.com"
                        />
                    </div>
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" /> {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Service Type - Added field for backend compatibility */}
            <div className="group">
                <label htmlFor="service_type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Hizmet Türü
                </label>
                <div className="relative rounded-md shadow-sm">
                    <select
                        {...register("service_type")}
                        id="service_type"
                        className="block w-full px-4 py-3 border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-secondary sm:text-sm transition-all shadow-sm outline-none appearance-none"
                    >
                        <option value="">Seçiniz...</option>
                        <option value="Kilo Yönetimi">Kilo Yönetimi</option>
                        <option value="Hastalıklarda Beslenme">Hastalıklarda Beslenme</option>
                        <option value="Sporcu Beslenmesi">Sporcu Beslenmesi</option>
                        <option value="Diğer">Diğer</option>
                    </select>
                </div>
                {errors.service_type && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" /> {errors.service_type.message}
                    </p>
                )}
            </div>

            {/* Message */}
            <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Mesajınız
                </label>
                <div className="relative rounded-md shadow-sm">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                        <MessageSquare className="text-slate-400 w-5 h-5" />
                    </div>
                    <textarea
                        {...register("message")}
                        id="message"
                        rows={4}
                        className="block w-full pl-10 pr-3 py-3 border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-secondary focus:border-secondary sm:text-sm transition-all shadow-sm resize-none outline-none"
                        placeholder="Size nasıl yardımcı olabiliriz?"
                    ></textarea>
                </div>
                {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" /> {errors.message.message}
                    </p>
                )}
            </div>

            {/* Privacy */}
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input
                        {...register("privacy")}
                        id="privacy"
                        type="checkbox"
                        className="focus:ring-secondary h-4 w-4 text-primary border-slate-300 dark:border-slate-600 rounded"
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-slate-700 dark:text-slate-300">
                        KVKK Metnini okudum ve onaylıyorum.
                    </label>
                    {errors.privacy && (
                        <p className="mt-1 text-red-500">
                            {errors.privacy.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                </button>
            </div>
        </form>
    );
}
