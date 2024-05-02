import { FunctionComponent } from "react";
import LandingPage from "../components/LandingPage";
import Pricing from "../components/Pricing";
import ContactUs from "../components/ContactUs";
import Auth from "../components/Auth";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.pdf}>
      <div className={styles.landingPageWrapper}>
        <LandingPage />
      </div>
      <div className={styles.pricingWrapper}>
        <Pricing />
      </div>
      <div className={styles.dataSender}>
        <ContactUs />
      </div>
      <Auth />
    </div>
  );
};

export default Frame;
