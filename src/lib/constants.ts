export const API_FALLBACK_URL = "http://localhost:3000";

export const ROUTES = {
  inicio: "/inicio",
  tienda: "/tienda",
  viajes: "/viajes",
  productos: "/productos",
  formaciones: "/formaciones",
} as const;

export const CTA_TEXT = {
  entrarProducto: "Entrar al producto",
  agregarCarrito: "Agregar al carrito",
  verViajes: "Ver viajes sonoros",
  explorarViajeAsociado: "Explorar viaje asociado",
  acceder: "Acceder",
  verMas: "Ver más",
  verFormacion: "Ver formación",
  verLibro: "Ver libro",
} as const;

export const LABELS = {
  productoDefault: "Producto ritual",
  tipoProductoDefault: "Sahumerio musical",
  viajeDefault: "Viaje sonoro",
  gratis: "Gratuito",
  disponible: "Disponible",
  proximamente: "Próximamente",
  accesoInicial: "Acceso inicial",
  coleccion: "Colección",
  portalEscucha: "Portal de escucha",
  precio: "Precio",
  descripcion: "Descripción",
  recomendacionesRituales: "Recomendaciones rituales",
  propiedadesCombinacion: "Propiedades de la combinación",
} as const;

export const PLACEHOLDERS = {
  productoDescripcion:
    "Pieza ritual disponible dentro del universo de Espíritu Sónico.",
  viajeDescripcion:
    "Una experiencia sonora dentro del universo de Espíritu Sónico.",
  busquedaTienda: "Explorar sahumerios, recursos y materiales",
} as const;

export const SHOP_FILTERS = {
  all: "all",
  gratuitos: "gratuitos",
  rituales: "rituales",
  biblioteca: "biblioteca",
} as const;