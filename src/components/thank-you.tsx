"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThankYouScreenProps {
  redirectDelay?: number;
  onBack?: () => void;
}

const ThankYouScreen = ({
  redirectDelay = 10,
  onBack,
}: ThankYouScreenProps) => {
  const [countdown, setCountdown] = useState(redirectDelay);
  const router = useRouter();

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  const handleBackToHome = () => {
    if (onBack) {
      onBack();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="relative mb-8 animate-scale-in">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-green-500/20 animate-pulse-ring" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-green-500/10 animate-pulse-ring animation-delay-300" />
          </div>

          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-green-600 to-emerald-500 shadow-lg shadow-green-900/20 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" className="animate-check-draw" />
            </svg>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-up">
            Obrigado!
          </h1>
          <p className="text-lg md:text-xl text-slate-300 animate-fade-in-up animation-delay-100">
            Sua mensagem foi enviada com sucesso.
          </p>
          <p className="text-slate-400 animate-fade-in-up animation-delay-200">
            Entraremos em contato em breve.
          </p>
        </div>

        <div className="mb-8 animate-fade-in-up animation-delay-300">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <Home className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 text-sm">Redirecionando em</span>
            <span className="text-2xl font-bold text-white animate-countdown-pulse min-w-[2ch] tabular-nums">
              {countdown}
            </span>
            <span className="text-slate-300 text-sm">segundos</span>
          </div>
        </div>

        <div className="w-full max-w-xs mx-auto mb-8 animate-fade-in-up animation-delay-300">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-linear"
              style={{
                width: `${
                  ((redirectDelay - countdown) / redirectDelay) * 100
                }%`,
              }}
            />
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Button
            onClick={handleBackToHome}
            variant="outline"
            size="lg"
            className="group bg-transparent border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;
