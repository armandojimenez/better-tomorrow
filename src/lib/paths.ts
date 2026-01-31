export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getImagePath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
