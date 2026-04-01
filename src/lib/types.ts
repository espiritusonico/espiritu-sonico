export type ProductoAPI = {
  id?: number;
  nombre?: string | null;
  slug: string;
  tipo?: string | null;
  mezcla?: string | null;
  descripcionCorta?: string | null;
  descripcionLarga?: string | null;
  precio?: number | string | null;
  imagenUrl?: string | null;
  activo?: boolean | null;
  destacado?: boolean | null;
  orden?: number | null;
  beneficiosDestacados?: unknown;
  propiedadesCombinacion?: unknown;
  recomendacionesRituales?: string[] | null;
  viajeSonoroTitulo?: string | null;
  viajeSonoroSlug?: string | null;
  viajeSonoroTexto?: string | null;
};

export type ViajeSonoroAPI = {
  id?: number;
  titulo?: string | null;
  slug: string;
  descripcion?: string | null;
  audioUrl?: string | null;
  imagenUrl?: string | null;
  duracion?: string | null;
  publicado?: boolean | null;
  destacado?: boolean | null;
  categoria?: string | null;
};

export type ProductoCard = {
  nombre: string;
  descripcion: string;
  href: string;
  imagen: string;
  estado: string;
  tipo: string;
  slug: string;
  activo: boolean;
  orden: number;
  precio: number | string | null;
};

export type ProductoDetail = {
  nombre: string;
  slug: string;
  tipo: string;
  mezcla: string;
  descripcionCorta: string;
  descripcionLarga: string;
  precio: number | string | null;
  imagenUrl: string;
  activo: boolean;
  destacado: boolean;
  orden: number;
  beneficiosDestacados: unknown;
  propiedadesCombinacion: unknown;
  recomendacionesRituales: string[];
  viajeSonoroTitulo: string;
  viajeSonoroSlug: string;
  viajeSonoroTexto: string;
};

export type ViajeCard = {
  titulo: string;
  slug: string;
  href: string;
  descripcion: string;
  imagen: string;
  duracion: string;
  destacado: boolean;
  publicado: boolean;
  categoria: string;
  audioUrl: string;
};

export type ViajeDetail = {
  titulo: string;
  slug: string;
  descripcion: string;
  imagenUrl: string;
  duracion: string;
  destacado: boolean;
  publicado: boolean;
  categoria: string;
  audioUrl: string;
};