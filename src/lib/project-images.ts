export function getProjectImages(gallery: string[], count = 8): string[] {
  if (gallery.length > 0) return gallery.slice(0, count);
  return Array.from({ length: count }, () => "");
}
