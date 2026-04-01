import { LABELS, PLACEHOLDERS, ROUTES } from "./constants";
import type {
  ProductoAPI,
  ProductoCard,
  ProductoDetail,
  ViajeCard,
  ViajeDetail,
  ViajeSonoroAPI,
} from "./types";

export function mapProductoCard(producto: ProductoAPI): ProductoCard {
  return {
    nombre: producto.mezcla || producto.nombre || LABELS.productoDefault,
    descripcion: producto.descripcionCorta || PLACEHOLDERS.productoDescripcion,
    href: `${ROUTES.productos}/${producto.slug}`,
    imagen: producto.imagenUrl || "/iconos/icon-sahumerio.png",
    estado: producto.activo ? LABELS.disponible : LABELS.proximamente,
    tipo: producto.tipo || LABELS.tipoProductoDefault,
    slug: producto.slug,
    activo: producto.activo ?? true,
    orden: producto.orden ?? 0,
    precio: producto.precio ?? null,
  };
}

export function mapProductoDetail(producto: ProductoAPI): ProductoDetail {
  return {
    nombre: producto.nombre || LABELS.productoDefault,
    slug: producto.slug,
    tipo: producto.tipo || LABELS.tipoProductoDefault,
    mezcla: producto.mezcla || producto.nombre || LABELS.productoDefault,
    descripcionCorta: producto.descripcionCorta || "",
    descripcionLarga: producto.descripcionLarga || "",
    precio: producto.precio ?? null,
    imagenUrl: producto.imagenUrl || "",
    activo: producto.activo ?? true,
    destacado: producto.destacado ?? false,
    orden: producto.orden ?? 0,
    beneficiosDestacados: producto.beneficiosDestacados ?? [],
    propiedadesCombinacion: producto.propiedadesCombinacion ?? [],
    recomendacionesRituales: Array.isArray(producto.recomendacionesRituales)
      ? producto.recomendacionesRituales
      : [],
    viajeSonoroTitulo: producto.viajeSonoroTitulo || "",
    viajeSonoroSlug: producto.viajeSonoroSlug || "",
    viajeSonoroTexto: producto.viajeSonoroTexto || "",
  };
}

export function mapViajeCard(viaje: ViajeSonoroAPI): ViajeCard {
  return {
    titulo: viaje.titulo || LABELS.viajeDefault,
    slug: viaje.slug,
    href: `${ROUTES.viajes}/${viaje.slug}`,
    descripcion: viaje.descripcion || PLACEHOLDERS.viajeDescripcion,
    imagen: viaje.imagenUrl || "/iconos/icon-viaje.png",
    duracion: viaje.duracion || "",
    destacado: viaje.destacado ?? false,
    publicado: viaje.publicado ?? true,
    categoria: viaje.categoria || LABELS.viajeDefault,
    audioUrl: viaje.audioUrl || "",
  };
}

export function mapViajeDetail(viaje: ViajeSonoroAPI): ViajeDetail {
  return {
    titulo: viaje.titulo || LABELS.viajeDefault,
    slug: viaje.slug,
    descripcion: viaje.descripcion || "",
    imagenUrl: viaje.imagenUrl || "/iconos/icon-viaje.png",
    duracion: viaje.duracion || "",
    destacado: viaje.destacado ?? false,
    publicado: viaje.publicado ?? true,
    categoria: viaje.categoria || LABELS.viajeDefault,
    audioUrl: viaje.audioUrl || "",
  };
}