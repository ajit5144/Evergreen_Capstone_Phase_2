import type { CoverageType } from "./types";

export const BASE_RATES: Record<CoverageType, number> = {
  auto: 85,
  home: 130,
  life: 65,
};