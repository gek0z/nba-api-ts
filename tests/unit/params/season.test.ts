import { describe, expect, test } from "bun:test";
import {
	currentSeason,
	currentSeasonYear,
	formatSeason,
	formatSeasonId,
} from "../../../src/params/season.js";

describe("formatSeason", () => {
	test("formats year into NBA season string", () => {
		expect(formatSeason(2024)).toBe("2024-25");
		expect(formatSeason(2023)).toBe("2023-24");
		expect(formatSeason(1999)).toBe("1999-00");
		expect(formatSeason(2009)).toBe("2009-10");
	});
});

describe("formatSeasonId", () => {
	test("prefixes year with 2", () => {
		expect(formatSeasonId(2024)).toBe("22024");
		expect(formatSeasonId(2023)).toBe("22023");
	});
});

describe("currentSeasonYear", () => {
	test("returns a reasonable year", () => {
		const year = currentSeasonYear();
		expect(year).toBeGreaterThanOrEqual(2024);
		expect(year).toBeLessThanOrEqual(2030);
	});
});

describe("currentSeason", () => {
	test("returns formatted season string", () => {
		const season = currentSeason();
		expect(season).toMatch(/^\d{4}-\d{2}$/);
	});
});
