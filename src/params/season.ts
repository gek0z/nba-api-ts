/** Returns the current NBA season year (the year the season starts). */
export function currentSeasonYear(): number {
	const now = new Date();
	return now.getMonth() + 1 <= 9 ? now.getFullYear() - 1 : now.getFullYear();
}

/**
 * Formats a season year into the NBA season string format.
 * e.g. 2024 → "2024-25"
 */
export function formatSeason(year: number): string {
	const next = String(year + 1).slice(2);
	return `${year}-${next}`;
}

/** Returns the current NBA season string, e.g. "2024-25". */
export function currentSeason(): string {
	return formatSeason(currentSeasonYear());
}

/** Returns the previous NBA season string, e.g. "2023-24". */
export function previousSeason(): string {
	return formatSeason(currentSeasonYear() - 1);
}

/** Formats a season ID from a year, e.g. 2024 → "22024". */
export function formatSeasonId(year: number): string {
	return `2${year}`;
}

/** Returns the current season ID, e.g. "22024". */
export function currentSeasonId(): string {
	return formatSeasonId(currentSeasonYear());
}
