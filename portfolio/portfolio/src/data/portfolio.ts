// src/data/portfolio.ts
// ✏️ Edita este archivo con tu información personal

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'twitter';
}

export const personal = {
  name: 'Nicolas Mantaras',
  role: 'Desarrollador Web',
  bio: 'Apasionado por construir interfaces limpias y código bien estructurado. Especializado en TypeScript y tecnologías web modernas.',
  available: true, // cambia a false si no buscas trabajo
  cvUrl: '/cv.pdf', // coloca tu CV en la carpeta public/
};

export const technologies: string[] = [
  'TypeScript',
  'Astro',
  'JavaScript',
  'HTML / CSS',
  'Node.js',
  'Git',
  'SQL',
  'C++',
];

export const projects: Project[] = [
  {
    title: 'Medicontrol',
    description: 'Proyecto educativo. Aplicacion por consola desarrollada para una clinica, CRUD a una base de datos SQL en Workbench. Funciones como agregar pacientes, editar su informacion y diagnosticosticos.',
    tags: ['C++', 'SQL'],
    github: 'https://github.com/Nefemer/proyecto_exposicion.git',
  },
  {
    title: 'Proximamente',
    description: 'Proximamente',
    tags: [''],
    github: '',
    url: '',
  },
];

export const contact: ContactLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/Nefemer',
    icon: 'github',
  },
  {
    label: 'nicolasmantarasinv@gmail.com',
    url: 'mailto:nicolasmantarasinv@gmail.com',
    icon: 'email',
  },
];
