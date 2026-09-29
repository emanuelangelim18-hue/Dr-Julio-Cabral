import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/cardiologistData';

export const RiskAssessmentCalculator: React.FC = () => {
  const [ageGroup, setAgeGroup] = useState<string>('35-49');
  const [familyHistory, setFamilyHistory] = useState<boolean>(true);
  const [bloodPressure, setBloodPressure] = useState<string>('borderline');
  const [exercise, setExercise] = useState<string>('sedentary');
  const [smoking, setSmoking] = useState<string>('no');
  const [symptom, setSymptom] = useState<string>('palpitations');

  const calculateResult = () => {
    let riskScore = 0;
    if (ageGroup === '50-64' || ageGroup === '65+') riskScore += 2;
    if (familyHistory) riskScore += 2;
    if (bloodPressure === 'high' || bloodPressure === 'borderline') riskScore += 2;
    if (exercise === 'sedentary') riskScore += 1;
    if (smoking === 'yes') riskScore += 2;
    if (symptom === 'chest_pain' || symptom === 'palpitations' || symptom === 'dizziness') riskScore += 2;

    if (riskScore >= 6) {
      return {
        level: 'Atenção Prioritária',
        colorClass: 'text-amber-800 bg-amber-50 border-amber-200',
        recommendation: 'Você possui múltiplos fatores que justificam uma avaliação cardiológica completa e exames de imagem preventiva (como Ecocardiograma e Teste Ergométrico).',
        suggestedExams: ['Check-up Cardiológico Completo', 'Ecocardiograma com Doppler', 'Eletrocardiograma de 12 derivações'],
      };
    } else if (riskScore >= 3) {
      return {
        level: 'Rastreio Preventivo Recomendado',
        colorClass: 'text-slate-900 bg-slate-100 border-slate-300',
        recommendation: 'Idade e histórico apontam para a necessidade de um check-up anual para mapear placas subclínicas, pressão arterial nas 24h e estratificação de risco.',
        suggestedExams: ['Consulta Clínica de 60 min', 'Eletrocardiograma', 'Perfil Lipídico Avançado'],
      };
    } else {
      return {
        level: 'Manutenção da Saúde Cardiovascular',
        colorClass: 'text-emerald-900 bg-emerald-50 border-emerald-200',
        recommendation: 'Seus hábitos atuais são favoráveis! O acompanhamento preventivo regular é a chave para preservar sua longevidade e liberar treinos com segurança.',
        suggestedExams: ['Check-up Anual Preventivo', 'Avaliação de Aptidão Esportiva'],
      };
    }
  };

  const result = calculateResult();

  const getAgeLabel = (val: string) => {
    switch (val) {
      case 'under-35': return 'Menos de 35 anos';
      case '35-49': return '35 a 49 anos';
      case '50-64': return '50 a 64 anos';
      default: return '65 anos ou mais';
    }
  };

  const getPressureLabel = (val: string) => {
    switch (val) {
      case 'normal': return 'Normal (< 12/8)';
      case 'borderline': return 'Limítrofe (~13/8)';
      case 'high': return 'Elevada (> 14/9)';
      default: return 'Não costumo aferir';
    }
  };

  const getSymptomLabel = (val: string) => {
    switch (val) {
      case 'palpitations': return 'Palpitações ou batimentos acelerados';
      case 'chest_pain': return 'Desconforto ou aperto no peito';
      case 'fatigue': return 'Cansaço fácil aos esforços normais';
      case 'dizziness': return 'Tonturas ou vertigens';
      default: return 'Sem sintomas (apenas prevenção e check-up)';
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Olá, Dr. Júlio e equipe! Fiz a autoavaliação no site da clínica.
- Faixa Etária: ${getAgeLabel(ageGroup)}
- Histórico Familiar de Infarto/AVC: ${familyHistory ? 'Sim' : 'Não'}
- Pressão Arterial: ${getPressureLabel(bloodPressure)}
- Queixa principal: ${getSymptomLabel(symptom)}
- Resultado sugerido: ${result.level}

Gostaria de agendar uma consulta no Jardim Paulista para avaliação médica.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculadora-risco" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-wider text-rose-700 font-bold mb-3 block">
            Ferramenta Interativa de Conscientização
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4 [text-wrap:balance]">
            Autoavaliação de Perfil Cardiovascular
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Responda 5 perguntas rápidas para entender quando foi a última vez que seu coração foi avaliado e qual o nível recomendado de investigação preventiva.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Question 1: Age */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                1. Sua faixa etária
              </label>
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="under-35">Menos de 35 anos</option>
                <option value="35-49">35 a 49 anos</option>
                <option value="50-64">50 a 64 anos</option>
                <option value="65+">65 anos ou mais</option>
              </select>
            </div>

            {/* Question 2: Family History */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                2. Histórico familiar de infarto ou AVC precoce?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFamilyHistory(true)}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                    familyHistory
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Sim (Pais ou Irmãos)
                </button>
                <button
                  type="button"
                  onClick={() => setFamilyHistory(false)}
                  className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                    !familyHistory
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Não / Desconheço
                </button>
              </div>
            </div>

            {/* Question 3: Blood Pressure */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                3. Níveis usuais de Pressão Arterial
              </label>
              <select
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="normal">Normal (menor que 12 por 8)</option>
                <option value="borderline">Limítrofe (~13 por 8)</option>
                <option value="high">Elevada (acima de 14 por 9) ou em tratamento</option>
                <option value="unknown">Não costumo medir com frequência</option>
              </select>
            </div>

            {/* Question 4: Symptoms */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                4. Notou algum sintoma recente?
              </label>
              <select
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="none">Nenhum sintoma (quero apenas check-up)</option>
                <option value="palpitations">Palpitações ou batimentos rápidos</option>
                <option value="chest_pain">Aperto ou desconforto no peito</option>
                <option value="fatigue">Cansaço desproporcional ao subir escadas</option>
                <option value="dizziness">Tontura ou escurecimento visual</option>
              </select>
            </div>

            {/* Question 5: Physical Activity */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                5. Nível de atividade física semanal
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setExercise('sedentary')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                    exercise === 'sedentary'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Sedentário
                </button>
                <button
                  type="button"
                  onClick={() => setExercise('moderate')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                    exercise === 'moderate'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  1 a 2x / semana
                </button>
                <button
                  type="button"
                  onClick={() => setExercise('regular')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                    exercise === 'regular'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  3x ou mais / semana
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Result Card */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="p-6 bg-white border border-slate-200 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Classificação Educativa:
                  </span>
                  <div className="font-serif text-xl font-bold text-slate-900">
                    {result.level}
                  </div>
                </div>
                <div className="text-xs text-slate-500 sm:text-right">
                  Baseado em diretrizes da SBC
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {result.recommendation}
              </p>

              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-900 block mb-2">
                  Exames sugeridos para discussão em consulta:
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {result.suggestedExams.map((exam, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 border border-slate-200/80 rounded-md font-medium"
                    >
                      {exam}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  *Esta autoavaliação tem caráter estritamente educativo e não substitui consulta médica.
                </span>

                <a
                  href={`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.183 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.765-5.769-5.769zm10.029 5.766c0 5.549-4.512 10.061-10.06 10.061-1.758 0-3.411-.458-4.85-1.258l-5.65 1.481 1.508-5.508c-.902-1.503-1.418-3.255-1.418-5.127 0-5.549 4.512-10.06 10.06-10.06 5.548 0 10.06 4.511 10.06 10.06z" />
                  </svg>
                  Enviar Meu Perfil para a Recepção no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
