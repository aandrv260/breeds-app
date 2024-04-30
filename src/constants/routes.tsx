const ROUTES = {
  breedListing: '/breeds',
  breedGallery: (id: string) => `/breed/${id}`,
  favorites: '/favorites',
} as const;

export default ROUTES;
