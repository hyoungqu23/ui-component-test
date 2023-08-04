export const cls = (...className: (string | boolean | null | undefined)[]) => {
  return className.filter(name => name && typeof name === 'string').join(' ');
};
