import React from 'react';
import styles from './styles.module.css';
export default function IconExternalLink({ width = 16, height = 16 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 192 192" fill="none" className={styles.iconExternalLink} xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M150.364 41.636C153.879 45.1508 153.879 50.8492 150.364 54.364L54.364 150.364C50.8492 153.879 45.1508 153.879 41.636 150.364C38.1213 146.849 38.1213 141.151 41.636 137.636L137.636 41.636C141.151 38.1213 146.849 38.1213 150.364 41.636Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M57 48C57 43.0294 61.0294 39 66 39H144C148.971 39 153 43.0294 153 48V126C153 130.971 148.971 135 144 135C139.029 135 135 130.971 135 126V57H66C61.0294 57 57 52.9706 57 48Z" fill="currentColor" />
    </svg>

    // <svg
    //   width={width}
    //   height={height}
    //   aria-hidden="true"
    //   viewBox="0 0 24 24"
    //   className={styles.iconExternalLink}>
    //   <path
    //     fill="currentColor"
    //     d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
    //   />
    // </svg>
  );
}
