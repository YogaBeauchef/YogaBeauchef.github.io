// cSpell:locale es,en
import type { CollectionEntry } from 'astro:content';

export const siteConfig = {
  title: 'Yoga Beauchef',
  subtitle: 'Conocete a Ti Mismo',
  description:
    'Grupo Yoga Beauchef organiza un taller de Yoga & Desarrollo Humano, entendiendo la Yoga, como una herramienta para nuestro desarrollo integral.',
  url: 'https://yogabeauchef.cl',
  language: 'es',
  author: {
    name: 'Yoga Beauchef',
    email: 'YogaBeauchef@ing.uchile.cl',
    facebook: 'yogabeauchef',
    instagram: 'yoga.beauchef',
  },
  avatar: '/assets/img/logo/mini.png',
  navLinks: [
    { label: 'Noticias', href: '/articulos.html' },
    { label: 'Taller', href: '/detalles.html' },
    { label: 'Lugares', href: '/lugares.html' },
  ],
} as const;

const fullMonths = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const categoryIcons: Record<string, string> = {
  documental: 'glyphicon glyphicon-facetime-video',
  evento: 'glyphicon glyphicon-calendar',
  artículo: 'glyphicon glyphicon-education',
  noticia: 'glyphicon glyphicon-pencil',
};

export function formatSpanishDate(date: Date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Santiago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== 'literal')
      .map((part) => [part.type, part.value]),
  );

  return `${Number(values.day)} de ${fullMonths[Number(values.month) - 1]}, ${values.year}`;
}

export function getCategory(post: CollectionEntry<'posts'>) {
  const { categories } = post.data;
  if (Array.isArray(categories)) {
    return categories[0];
  }
  return categories;
}

export function getCategoryIcon(post: CollectionEntry<'posts'>) {
  const category = getCategory(post);
  return category ? categoryIcons[category] : undefined;
}

export function getPostSlug(post: CollectionEntry<'posts'>) {
  const match = post.id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+?)(?:\.md)?$/);
  if (!match) {
    return post.id.replace(/\.md$/, '');
  }
  return match[4];
}

export function getPostPath(post: CollectionEntry<'posts'>) {
  const match = post.id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+?)(?:\.md)?$/);
  if (!match) {
    return `/posts/${getPostSlug(post)}/`;
  }
  const [, year, month, day, slug] = match;
  return `/posts/${year}/${month}/${day}/${slug}/`;
}

export function sortPosts(posts: CollectionEntry<'posts'>[]) {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function stripMarkup(value: string) {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
