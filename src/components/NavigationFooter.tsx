import { FunctionComponent } from "react";
import styles from "./NavigationFooter.module.css";

const NavigationFooter: FunctionComponent = () => {
  return (
    <div className={styles.navigationFooter}>
      <div className={styles.divider} />
      <div className={styles.wingsParent}>
        <b className={styles.wings}>WINGS</b>
        <div className={styles.buttonsIconParent}>
          <img
            className={styles.buttonsIcon}
            loading="lazy"
            alt=""
            src="/buttons--icon@2x.png"
          />
          <img
            className={styles.buttonsIcon1}
            loading="lazy"
            alt=""
            src="/buttons--icon-1@2x.png"
          />
          <img
            className={styles.buttonsIcon2}
            loading="lazy"
            alt=""
            src="/buttons--icon-2@2x.png"
          />
          <img
            className={styles.buttonsIcon3}
            loading="lazy"
            alt=""
            src="/buttons--icon-3@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationFooter;
