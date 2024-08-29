import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import React from "react";
// import { resume } from "../Hero/resume.pdf";

export const Hero = () => {
  const handleDownload = () => {
    const pdfUrl = "resume.pdf";

    // Open the PDF in a new window
    window.open(pdfUrl, "_blank");
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
