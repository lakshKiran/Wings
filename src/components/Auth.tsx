import { FunctionComponent } from "react";
import styles from "./Auth.module.css";

const Auth: FunctionComponent = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.linkCollection}>
        <div className={styles.navigation}>
          <img
            className={styles.wings1Icon}
            loading="lazy"
            alt=""
            src="/wings-1.svg"
          />
          <div className={styles.symbolSwapper}>
            <h2 className={styles.wings}>WINGS</h2>
          </div>
          <div className={styles.tableSizeAdjuster}>
            <div className={styles.articles}>Articles</div>
          </div>
          <div className={styles.pathBender}>
            <button className={styles.symbolMergerWrapper}>
              <div className={styles.symbolMerger}>
                <div className={styles.destinationsWrapper}>
                  <div className={styles.destinations}>Destinations</div>
                </div>
              </div>
            </button>
          </div>
          <div className={styles.shapeColorPicker}>
            <div className={styles.hotels}>Hotels</div>
          </div>
          <div className={styles.tableSizeAdjuster1}>
            <div className={styles.cruises}>Cruises</div>
          </div>
          <div className={styles.italicController}>
            <button className={styles.button}>
              <div className={styles.signUp}>Sign Up</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.logicGate}>
        <div className={styles.createAnAccount}>Create an account</div>
      </div>
      <div className={styles.inputFilter}>
        <div className={styles.enterYourEmail}>
          Enter your email to sign up for this app
        </div>
      </div>
      <div className={styles.tableStyle}>
        <div className={styles.field}>
          <input
            className={styles.label}
            placeholder="email@figmasfakedomain.net"
            type="text"
          />
        </div>
      </div>
      <div className={styles.tableStyle1}>
        <button className={styles.button1}>
          <div className={styles.primary}>Sign up with email</div>
        </button>
      </div>
      <div className={styles.authInner}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.orContinueWith}>or continue with</div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
      <div className={styles.tableStyle2}>
        <button className={styles.button2}>
          <div className={styles.googleWrapper}>
            <img className={styles.googleIcon} alt="" src="/google.svg" />
          </div>
          <div className={styles.google}>Google</div>
        </button>
      </div>
      <div className={styles.byClickingContinueYouAgreWrapper}>
        <div className={styles.byClickingContinueContainer}>
          <span>{`By clicking continue, you agree to our `}</span>
          <span className={styles.termsOfService}>Terms of Service</span>
          <span>{` and `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy</span>
        </div>
      </div>
      <div className={styles.navigationFooter}>
        <div className={styles.divider} />
        <div className={styles.frameGroup}>
          <div className={styles.wingsWrapper}>
            <b className={styles.wings1}>WINGS</b>
          </div>
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

export default Auth;
