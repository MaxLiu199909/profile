export const assetPath = (path: string): string => {
  if (/^(?:https?:)?\/\//.test(path) || path.startsWith('data:')) {
    return path;
  }

  const projectBase = '/username.github.io';
  const isProjectSitePath =
    window.location.pathname === projectBase ||
    window.location.pathname.startsWith(`${projectBase}/`);
  const runtimeBasePath = isProjectSitePath ? `${projectBase}/` : '/';
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${runtimeBasePath}${normalizedPath}`;
};
