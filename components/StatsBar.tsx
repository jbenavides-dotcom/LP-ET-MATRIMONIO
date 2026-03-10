import React from 'react';

const STATS = [
  {
    value: '9.5/10',
    label: 'Booking',
    sublabel: 'Calificación de huéspedes',
  },
  {
    value: '5.0/5',
    label: 'TripAdvisor',
    sublabel: '#1 en Zipacón',
  },
  {
    value: '90 min',
    label: 'Desde Bogotá',
    sublabel: 'Acceso fácil en carro',
  },
  {
    value: '☕',
    label: 'Café de clase mundial',
    sublabel: 'Finca #14 Taste Atlas 2025',
  },
];

const StatsBar: React.FC = () => {
  return (
    <section className="bg-brand-dark py-10" aria-label="Estadísticas clave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {stat.label}
              </div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
