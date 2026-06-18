export interface Project {
  name: string;
  category: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: 'Lumen Health',
    category: 'Telehealth platform',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  },
  {
    name: 'Verdant Market',
    category: 'Sustainable e-commerce',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80',
  },
  {
    name: 'Northwind Trading',
    category: 'Fintech dashboard',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  },
  {
    name: 'Atlas Logistics',
    category: 'Fleet management app',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
  },
];
