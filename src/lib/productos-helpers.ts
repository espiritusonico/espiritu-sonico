import { CTA_TEXT, LABELS, ROUTES } from "./constants";
import type { ProductoDetail } from "./types";
import type { ProductoVisual } from "./productos-contenido";

type PropiedadItem = {
  titulo: string;
  texto: string;
};

type RecomendacionItem = {
  titulo: string;
  texto: string;
};

export function getProductoPropiedades(
  producto: ProductoDetail,
  visual: ProductoVisual
): PropiedadItem[] {
  const propiedadesRaw = producto?.propiedadesCombinacion;

  const propiedades = Array.isArray(propiedadesRaw)
    ? propiedadesRaw
        .map((item, index) => {
          if (typeof item === "string") {
            const limpio = item.trim();
            if (!limpio) return null;

            const [titulo, ...resto] = limpio.split(":");

            if (resto.length > 0) {
              return {
                titulo: titulo.trim(),
                texto: resto.join(":").trim(),
              };
            }

            return {
              titulo:
                index === propiedadesRaw.length - 1
                  ? "La combinación"
                  : `Propiedad ${index + 1}`,
              texto: limpio,
            };
          }

          if (item && typeof item === "object") {
            const titulo =
              typeof item.titulo === "string" && item.titulo.trim()
                ? item.titulo.trim()
                : `Propiedad ${index + 1}`;

            const texto =
              typeof item.texto === "string" ? item.texto.trim() : "";

            if (!texto) return null;

            return { titulo, texto };
          }

          return null;
        })
        .filter(Boolean) as PropiedadItem[]
    : [];

  return propiedades.length > 0 ? propiedades : visual.propiedadesFallback;
}

export function getProductoRecomendaciones(
  producto: ProductoDetail,
  visual: ProductoVisual
): RecomendacionItem[] {
  if (visual.recomendaciones?.length > 0) {
    return visual.recomendaciones;
  }

  return (producto.recomendacionesRituales ?? []).map((texto, i) => ({
    titulo: `Recomendación ${i + 1}`,
    texto,
  }));
}

export function getProductoPrecioFormateado(
  producto: ProductoDetail
): string {
  if (typeof producto.precio === "number") {
    return `$${producto.precio.toLocaleString("es-AR")}`;
  }

  if (producto.precio) {
    return `$${producto.precio}`;
  }

  return LABELS.proximamente;
}

export function getProductoViajeHref(producto: ProductoDetail): string {
  return producto.viajeSonoroSlug
    ? `${ROUTES.viajes}/${producto.viajeSonoroSlug}`
    : ROUTES.viajes;
}

export function getProductoViajeCta(producto: ProductoDetail): string {
  return producto.viajeSonoroSlug
    ? CTA_TEXT.explorarViajeAsociado
    : CTA_TEXT.verViajes;
}

export function getDots(value: number): ("full" | "half" | "empty")[] {
  return [1, 2, 3, 4, 5].map((n) => {
    if (value >= n) return "full";
    if (value >= n - 0.5) return "half";
    return "empty";
  });
}