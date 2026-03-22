/* eslint-disable @next/next/no-img-element */
"use client";

import { withBasePath } from "@/lib/utils";
import styles from "./style_gallery.module.css";

export function StyleGallery() {
  return (
    <div className={styles.wrapper}>
      <img
        src={withBasePath("/cutiq/style-mosaic.jpg")}
        alt="Gallery of AI-generated hairstyles"
        className={styles.mosaic}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
