export const transformPath = (path: string) => {
  return path.split('/').pop()?.replace('.mdx', '');
}
