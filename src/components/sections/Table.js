import React from 'react';
import styles from '../../assets/styles/resume.module.css';

function Table() {
   return (
      <div className={styles.tableContainer}>
         <table className={styles.table}>
            <thead className={styles.tHead}>
               <tr>
                  <th></th>
                  <th
                     scope="col"
                     className={styles.th}
                  >
                     Zeynel Orulluoğlu
                  </th>

                  <th
                     scope="col"
                     className={styles.th}
                  >
                     Abdullah Ünal
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr className={styles.tableBody}>
                  <td className={styles.td}>Company:</td>
                  <td className={styles.td}>Doğuş Teknoloji</td>
                  <td className={styles.td}>Şeker Bank A.Ş</td>
               </tr>
               <tr className={styles.tableBody}>
                  <td className={styles.td}>title:</td>
                  <td className={styles.td}>Senior Software Engineer</td>
                  <td className={styles.td}>Jr. Fullstack Developer</td>
               </tr>
               <tr className={styles.tableBody}>
                  <td className={styles.td}>Phone:</td>
                  <td className={styles.td}>(+90) 552 295 50 27</td>
                  <td className={styles.td}>(+90) 535 468 41 66</td>
               </tr>
               <tr className={styles.tableBody}>
                  <td className={styles.td}>Linkedin:</td>
                  <td className={styles.td}>
                     <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/zeynel-orulluoglu/"
                     >
                        Click
                     </a>
                  </td>
                  <td className={styles.td}>
                     <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/unalabdullah"
                     >
                        Click
                     </a>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default Table;
