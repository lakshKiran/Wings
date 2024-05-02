import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import Pricing1 from "./Pricing1";
import NavigationFooter from "./NavigationFooter";
import styles from "./Pricing.module.css";

const Pricing: FunctionComponent = () => {
  return (
    <div className={styles.pricing}>
      <div className={styles.navigation}>
        <FrameComponent1 propWidth="245px" propGap="14px" />
        <div className={styles.navigationInner}>
          <div className={styles.frameParent}>
            <div className={styles.articlesWrapper}>
              <div className={styles.articles}>Articles</div>
            </div>
            <div className={styles.frameWrapper}>
              <button className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.destinationsWrapper}>
                    <div className={styles.destinations}>Destinations</div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.hotelsWrapper}>
              <div className={styles.hotels}>Hotels</div>
            </div>
            <div className={styles.cruisesWrapper}>
              <div className={styles.cruises}>Cruises</div>
            </div>
            <button className={styles.button}>
              <div className={styles.signUp}>Sign Up</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.dataGatherer}>
        <div className={styles.logicGateParent}>
          <div className={styles.logicGate}>
            <div className={styles.valueHolder}>
              <h1 className={styles.pricing1}>Pricing</h1>
              <div className={styles.longLastingConnectionsThriv}>
                Long-lasting connections thrive on affordability as the
                cornerstone.
              </div>
            </div>
          </div>
          <div className={styles.conditionChecker}>
            <div className={styles.pricingGrid}>
              <Pricing1
                monthlyPlan="Monthly plan"
                prop="$5"
                perMonth="per month"
              />
              <Pricing1
                monthlyPlan="Annual plan"
                prop="$50"
                perMonth="per year"
                propMinWidth="90px"
                propMinWidth1="78px"
                propMinWidth2="64px"
              />
            </div>
          </div>
          <div className={styles.dataSampler}>
            <h1 className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </h1>
            <div className={styles.dataFilter}>
              <div className={styles.dataCompressor}>
                <div className={styles.dataExpander}>
                  <div className={styles.canUsersSet}>
                    Can users set preferences on the types of articles for them
                    to be notified
                  </div>
                  <div className={styles.wingsProvidesOptions}>
                    Wings provides options to set preferences based on
                    locations, destination types, among other attributes
                  </div>
                </div>
              </div>
              <h1 className={styles.dataSplitter}>+</h1>
            </div>
            <div className={styles.dataSink}>
              <div className={styles.dataStream}>
                <div className={styles.whatIsWings}>
                  What is wings cancellation policy ?
                </div>
              </div>
              <h1 className={styles.dataPool}>+</h1>
            </div>
            <div className={styles.dataSink1}>
              <div className={styles.doesWingsProvidePersonalizeWrapper}>
                <div className={styles.doesWingsProvide}>
                  Does Wings provide personalized dashboard ?
                </div>
              </div>
              <h1 className={styles.h1}>+</h1>
            </div>
          </div>
        </div>
      </div>
      <NavigationFooter />
    </div>
  );
};

export default Pricing;
