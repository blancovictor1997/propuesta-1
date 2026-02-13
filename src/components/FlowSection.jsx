import React from 'react';
import { Mail, CheckCircle, Search, Scale, Inbox } from 'lucide-react';

const FlowSection = () => {
    const steps = [
        {
            icon: Inbox,
            step: "1. Recepción",
            desc: "Ingreso seguro de denuncias o incidentes mediante canal integrado."
        },
        {
            icon: CheckCircle,
            step: "2. Gestión",
            desc: "La plataforma asigna tareas, recuerda plazos y sugiere medidas de resguardo."
        },
        {
            icon: Search,
            step: "3. Investigación",
            desc: "Registro de evidencias y entrevistas en un entorno digital seguro."
        },
        {
            icon: Scale,
            step: "4. Resolución",
            desc: "Generación de informe final y plan correctivo sugerido por la IA."
        }
    ];

    return (
        <section id="como-funciona" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Flujo de seguimiento en tiempo real</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Desde la denuncia hasta la resolución, cada paso está optimizado.</p>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Connecting Line */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '10%',
                        right: '10%',
                        height: '1px',
                        background: 'linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%)',
                        zIndex: 0,
                        display: 'block' // Ensure it's visible mostly on desktop
                    }} className="flow-line"></div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
                        {steps.map((item, idx) => (
                            <div key={idx} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Icon Circle */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: '#0f172a',
                                    border: '1px solid #334155',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)'
                                }} className="hover-scale">
                                    <item.icon size={32} color={idx === 3 ? '#10b981' : idx === 2 ? '#f472b6' : idx === 1 ? '#a78bfa' : '#60a5fa'} />
                                </div>

                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold' }}>{item.step}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '240px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Quick responsiveness for the line */}
            <style>
                {`
                @media (max-width: 768px) {
                    .flow-line { display: none !important; }
                }
                `}
            </style>
        </section>
    );
};

export default FlowSection;
