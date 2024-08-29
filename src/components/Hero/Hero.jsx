// import React from "react";
// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";
// import { saveAs } from "file-saver";

// export const Hero = () => {
//   const handleDownload = () => {
//     const pdfUrl =
//       "https://drive.google.com/file/d/1N4oa_f2wc6hfkLYtcCNOFEJWwRTPnFBp/view?usp=sharing";
//     const pdfName = "Soumya-Patra-Resume.pdf";

//     saveAs(pdfUrl, pdfName);
//   };

//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hi, I'm Soumya Subham Patra</h1>
//         <p className={styles.description}>
//           I'm a full-stack developer with NodeJS. Reach out if you'd like to
//           learn more!
//         </p>
//         <button onClick={handleDownload} className={styles.contactBtn}>
//           My Resume
//         </button>
//       </div>
//       <img
//         src={getImageUrl("hero/Logo.png")}
//         alt="Hero image of me"
//         className={styles.heroImg}
//       />
//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import React from "react";
import { saveAs } from "file-saver";

export const Hero = () => {
  const handleDownload = () => {
    const pdfUrl = "../../../assets/resume/resume.pdf"; // URL or path to your PDF file
    const pdfName = "downloaded-file.pdf"; // Name of the downloaded file

    saveAs(pdfUrl, pdfName);
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Soumya Subham Patra</h1>
        <p className={styles.description}>
          I'm a full-stack developer with NodeJS. Reach out if you'd like to
          learn more!
        </p>
        <button onClick={handleDownload} className={styles.contactBtn}>
          Download Resume
        </button>
      </div>
      <img
        src={getImageUrl("hero/Logo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
