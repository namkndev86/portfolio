import { TranslationDictionary } from '../types';

export const enDictionary: TranslationDictionary = {
  common: {
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    submit: 'Submit',
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back',
    tryAgain: 'Try Again',
  },
  navigation: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    resume: 'Resume',
    contact: 'Contact',
  },
  pages: {
    heroTitle: 'Frontend Developer & Fullstack Developer',
    heroSubtitle: 'Building enterprise-grade distributed systems and modern web applications.',
    projectsTitle: 'Featured Projects',
    experienceTitle: 'Career Journey',
    contactTitle: 'Get in Touch',
  },
  forms: {
    nameLabel: 'Full Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email Address',
    emailPlaceholder: 'john@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Your message details...',
  },
  validation: {
    required: 'This field is required.',
    invalidEmail: 'Please enter a valid email address.',
    minLength: 'Must be at least {min} characters long.',
  },
  project: {
    viewProject: 'View Project',
    sourceCode: 'Source Code',
    technologies: 'Technologies',
  },
};
