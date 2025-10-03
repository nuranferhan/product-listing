export function calculatePopularityOutOfFive(score: number): number {
  return Number((score * 5).toFixed(1));
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2)}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}