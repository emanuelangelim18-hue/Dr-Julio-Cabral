export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  duration: string;
  preparation: string[];
  equipmentInfo?: string;
  popular?: boolean;
}

export interface DifferentialItem {
  title: string;
  description: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  age: number;
  profession: string;
  neighborhood: string;
  situation: string;
  quote: string;
  timeframe: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'agendamento' | 'convenio' | 'exames' | 'consulta';
}

export interface ClinicSpace {
  title: string;
  subtitle: string;
  imagePath: string;
  fallbackImagePath?: string;
  description: string;
  highlights: string[];
  tag?: string;
}
