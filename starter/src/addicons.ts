import {FaCar, FaHome, FaHeart, FaBuilding} from "react-icons/fa";
import type { CoverageType } from "./types";
import type { IconType } from "react-icons";

export const CoverageIcons: Record<CoverageType, IconType> = {
  auto: FaCar,
  home: FaHome,
  life: FaHeart,
  renters: FaBuilding,
};