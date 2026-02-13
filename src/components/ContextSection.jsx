import React from 'react';
import { AlertTriangle, Clock, Gavel, AlertCircle } from 'lucide-react';

const ContextSection = () => {
    return (
        <section className="context-section" id="ley-karin" style={{ padding: '5rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Left Content */}
                    <div>
                        <div className="section-tag" style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.1)' }}>
                            <AlertTriangle size={14} /> CONTEXTO CRÍTICO
                        </div>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>
                            ¿Tu empresa está preparada para la <span style={{ color: '#60a5fa' }}>Ley 21.643</span>?
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                            La nueva normativa de prevención del acoso laboral, sexual y violencia en el trabajo exige protocolos estrictos, plazos definidos y una investigación imparcial. Un error en el proceso puede costar caro en multas y reputación.
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { icon: Clock, text: "Plazos legales estrictos e impostergables" },
                                { icon: Gavel, text: "Exigencia de imparcialidad comprobable" },
                                { icon: AlertCircle, text: "Multas elevadas por incumplimiento" }
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e2e8f0' }}>
                                    <div style={{ padding: '8px', background: 'rgba(139, 61, 255, 0.1)', borderRadius: '8px', color: '#a78bfa', flexShrink: 0 }}>
                                        <item.icon size={20} />
                                    </div>
                                    <span style={{ fontSize: '1.05rem' }}>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '100%' }}>

                        <div className="card" style={{ background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.1) 0%, rgba(30, 41, 59, 0.5) 100%)', borderLeft: '4px solid #ef4444', padding: '1.5rem' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></div>
                                Riesgo de Multas
                            </h4>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Sanciones financieras significativas por no contar con protocolos activos.</p>
                        </div>

                        <div className="card" style={{ background: 'linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0%, rgba(30, 41, 59, 0.5) 100%)', borderLeft: '4px solid #f97316', padding: '1.5rem' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Daño Reputacional</h4>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Pérdida de talento y confianza de los empleados por mala gestión de denuncias.</p>
                        </div>

                        <div className="card" style={{ background: 'rgba(30, 41, 59, 0.5)', borderLeft: '4px solid #475569', padding: '1.5rem' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Carga Administrativa</h4>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Horas perdidas en redacción manual de informes y seguimiento de plazos.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContextSection;
