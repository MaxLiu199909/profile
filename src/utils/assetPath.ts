export const assetPath = (path: string): string => {
  if (/^(?:https?:)?\/\//.test(path) || path.startsWith('data:')) {
    return path;
  }

  const runtimeBasePath = (() => {
    if (!window.location.hostname.endsWith('github.io')) {
      return '/';
    }

    const [repoSegment] = window.location.pathname.split('/').filter(Boolean);
    return repoSegment ? `/${repoSegment}/` : '/';
  })();

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${runtimeBasePath}${normalizedPath}`;
};
