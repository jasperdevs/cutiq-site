"use client";

import { useTheme } from "@/hooks/useTheme";
import { findSrcForTheme, withBasePath } from "@/lib/utils";
import { ImageSrcsetEntry } from "../../types/shared";
import styles from "./app_icon.module.css";

interface AppIconProps {
  src: string;
  srcset?: ImageSrcsetEntry[];
  mask?: boolean;
  size?: number;
  filter?: "none" | "grayscale";
}

export function AppIcon({
  src,
  srcset,
  mask = false,
  size = 40,
  filter = "none",
}: AppIconProps) {
  const theme = useTheme();

  if (theme === null) {
    return null;
  }

  const targetSrc = findSrcForTheme(src, srcset, theme);

  let filterClassName;
  switch (filter) {
    case "grayscale":
      filterClassName = styles.grayscale;
      break;
    default:
      filterClassName = "";
  }

  return (
    <figure
      className={`${styles.appIcon} ${
        mask ? styles.mask : ""
      } ${filterClassName}`}
    >
      <img
        src={withBasePath(targetSrc)}
        alt="App Icon"
        width={size}
        height={size}
        style={{ display: "block" }}
      />
    </figure>
  );
}
