import { API_FALLBACK_URL } from "./constants";
import type { ProductoAPI, ViajeSonoroAPI } from "./types";

const API_URL = import.meta.env.PUBLIC_API_URL || API_FALLBACK_URL;

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status} al consultar ${endpoint}`);
  }

  return response.json();
}

export async function getProductos(): Promise<ProductoAPI[]> {
  return fetchFromAPI<ProductoAPI[]>("/productos");
}

export async function getProductoBySlug(slug: string): Promise<ProductoAPI> {
  return fetchFromAPI<ProductoAPI>(`/productos/${slug}`);
}

export async function getViajes(): Promise<ViajeSonoroAPI[]> {
  return fetchFromAPI<ViajeSonoroAPI[]>("/viajes-sonoros");
}

export async function getViajeBySlug(slug: string): Promise<ViajeSonoroAPI> {
  return fetchFromAPI<ViajeSonoroAPI>(`/viajes-sonoros/${slug}`);
}

export { API_URL };