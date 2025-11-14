import SocialLinks from "../social-links/SocialLinks";
import { socialLinks } from "@/constants/socialLinks";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 md:flex-row-reverse md:items-center md:justify-between ${styles.footerContainer}`}
    >
      <div className="flex gap-6">
        {socialLinks.map(({ href, icon, label, width, height }) => (
          <SocialLinks
            key={label}
            href={href}
            icon={icon}
            label={label}
            width={width}
            height={height}
          />
        ))}
      </div>
      <p className={styles.footerText}>Made with ❤️ and 🥑</p>
    </div>
  );
};

export default Footer;
