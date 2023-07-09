import React from 'react';
import ReactBTK from '../../assets/pdfs/REACT__le_Web_Programc_l____Sertifika.pdf';
import ReactTR1 from '../../assets/pdfs/Ramazan Doğan-React101.pdf';
import ReactTR2 from '../../assets/pdfs/Ramazan Doğan-React201.pdf';
import ReactTR3 from '../../assets/pdfs/Ramazan Doğan-React301.pdf';
import ReactTR4 from '../../assets/pdfs/Ramazan Doğan-React401.pdf';
import Seo from '../../assets/pdfs/Arama_Motoru_Optimizasyonu_(SEO)_E_itimi__Sertifika.pdf';
import styles from '../../assets/styles/resume.module.css';
import İletişim from '../../assets/pdfs/Etkili__leti_im_Stratejileri_Sertifika.pdf';

function Certificates() {
   return (
      <ul className={styles.certificateList}>
         <a
            target="_blank"
            className={styles.listContainer}
            rel="noopener noreferrer"
            href={ReactBTK}
         >
            <li className={styles.certificateListItem}>
               Web Programming with React - BTK Akademi
            </li>
         </a>
         <a
            target="_blank"
            className={styles.listContainer}
            rel="noopener noreferrer"
            href={ReactTR4}
         >
            <li className={styles.certificateListItem}>
               React 401 - Turkcell Geleceği Yazanlar
            </li>
         </a>
         <a
            target="_blank"
            className={styles.listContainer}
            rel="noopener noreferrer"
            href={ReactTR3}
         >
            <li className={styles.certificateListItem}>
               React 301 - Turkcell Geleceği Yazanlar
            </li>
         </a>
         <a
            target="_blank"
            className={styles.listContainer}
            rel="noopener noreferrer"
            href={ReactTR2}
         >
            <li className={styles.certificateListItem}>
               React 201 - Turkcell Geleceği Yazanlar
            </li>
         </a>
         <a
            target="_blank"
            className={styles.listContainer}
            rel="noopener noreferrer"
            href={ReactTR1}
         >
            <li className={styles.certificateListItem}>
               React 101 - Turkcell Geleceği Yazanlar
            </li>
         </a>
         <a
            target="_blank"
            className={styles.listContainer}
            rel="noopener noreferrer"
            href={Seo}
         >
            <li className={styles.certificateListItem}>
               Search Engine Optimization (SEO) - BTK Akademi
            </li>
         </a>
         <a
            target="_blank"
            className={styles.listContainer}
            rel="noopener noreferrer"
            href={İletişim}
         >
            <li className={styles.certificateListItem}>
               Etkili İletişim Stratejileri
            </li>
         </a>
      </ul>
   );
}

export default Certificates;
