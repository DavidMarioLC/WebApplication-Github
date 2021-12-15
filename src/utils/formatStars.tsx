export const formatStars = (value: number): string => {
  const stars = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);

  return stars;
};
