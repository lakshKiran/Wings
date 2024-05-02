import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import Input from "./Input";
import NavigationFooter from "./NavigationFooter";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.navigation}>
        <FrameComponent1 propWidth="245px" propGap="14px" />
        <div className={styles.dataValidator}>
          <nav className={styles.dataTransformers}>
            <div className={styles.dataControllers}>
              <div className={styles.articles}>Articles</div>
            </div>
            <div className={styles.dataAggregator}>
              <button className={styles.logicGate}>
                <div className={styles.inputConnectorWrapper}>
                  <div className={styles.inputConnector}>
                    <div className={styles.destinations}>Destinations</div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.dataControllers1}>
              <div className={styles.hotels}>Hotels</div>
            </div>
            <div className={styles.dataControllers2}>
              <div className={styles.cruises}>Cruises</div>
            </div>
            <button className={styles.button}>
              <div className={styles.signUp}>Sign Up</div>
            </button>
          </nav>
        </div>
      </div>
      <div className={styles.valueProcessor}>
        <div className={styles.iconLibraryParent}>
          <div className={styles.iconLibrary}>
            <div className={styles.tableStructure}>
              <h1 className={styles.contactUs1}>Contact us</h1>
              <div className={styles.colorPalette}>
                <div className={styles.doHaveAny}>
                  Do have any questions ? Get in touch with our team.
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div className={styles.form}>
                  <Input firstName="First name" labelPlaceholder="Jane" />
                  <Input
                    firstName="Last name"
                    labelPlaceholder="Smitherton"
                    propWidth="297px"
                    propMinWidth="159px"
                  />
                  <Input
                    firstName="Email address"
                    labelPlaceholder="email@janesfakedomain.net"
                    propWidth="626px"
                    propMinWidth="250px"
                  />
                  <div className={styles.input}>
                    <div className={styles.yourMessage}>Your message</div>
                    <textarea
                      className={styles.field}
                      placeholder="Enter your question or message"
                      rows={8}
                      cols={31}
                    />
                  </div>
                  <button className={styles.button1}>
                    <div className={styles.submit}>Submit</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.roadtrip15835263131Icon}
            loading="lazy"
            alt=""
            src="/roadtrip1583526313-1@2x.png"
          />
        </div>
      </div>
      <NavigationFooter />
    </div>
  );
};

export default ContactUs;
