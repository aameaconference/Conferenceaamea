import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Date de la conférence : 12 août 2026 à 00:00 GMT
    const conferenceDate = new Date('2026-08-12T00:00:00.000Z');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = conferenceDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculer immédiatement
    calculateTimeLeft();

    // Mettre à jour chaque seconde
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: t('days') },
    { value: timeLeft.hours, label: t('hours') },
    { value: timeLeft.minutes, label: t('minutes') },
    { value: timeLeft.seconds, label: t('seconds') },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 px-6 rounded-lg shadow-gold animate-pulse-gold">
      <div className="text-center">
        <h3 className="text-lg font-display font-semibold mb-4">
          {t('countdownTitle', { days: timeLeft.days })}
        </h3>
        <div className="flex justify-center gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center">
              <div className="bg-black/10 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl md:text-3xl font-bold font-display">
                  {unit.value.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm font-medium mt-2 opacity-90">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}