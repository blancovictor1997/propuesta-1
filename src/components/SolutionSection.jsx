import React from 'react';
import { Sparkles, Compass, FileText, Shield } from 'lucide-react';

const SolutionSection = () => {
    const cards = [
        {
            icon: Compass,
            title: "Asistente de Protocolos Inteligente",
            desc: "No pierdas el rumbo. Nuestra IA guía a los encargados de Relaciones Laborales paso a paso a través de los protocolos obligatorios, alertando sobre plazos legales inminentes para asegurar el cumplimiento total."
        },
        {
            icon: FileText,
            title: "Informes Automatizados con IA",
            desc: "Reduce horas de redacción. Genera borradores de informes de investigación y análisis de clima laboral en segundos, basados en los datos recopilados y sugerencias objetivas de la IA."
        },
        {
            icon: Shield,
            title: "Confidencialidad Blindada",
            desc: "El anonimato es la clave de la confianza. Sistema encriptado que protege la identidad de denunciantes y testigos, accesible solo para personal autorizado con autenticación de doble factor."
        }
    ];

    return (
        <section id="solucion" style={{ padding: '5rem 0 8rem', background: '#0a0f1d' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <div className="section-tag" style={{ color: '#a78bfa', borderColor: 'rgba(139, 61, 255, 0.2)', background: 'rgba(139, 61, 255, 0.1)' }}>
                        <Sparkles size={14} /> Potenciado por Inteligencia Artificial
                    </div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Solución Integral y Tecnológica</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', padding: '0 1rem' }}>
                        Transformamos la obligación legal en una oportunidad para mejorar tu empresa con herramientas diseñadas para la prevención y la acción.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {cards.map((card, idx) => (
                        <div key={idx} className="card hover-scale" style={{ padding: '2.5rem', background: '#111827', borderColor: '#334155' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(56, 189, 248, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: '#38bdf8'
                            }}>
                                <card.icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{card.title}</h3>
                            <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem' }}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
