import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Pricing1.module.css";

export type Pricing1Type = {
  monthlyPlan?: string;
  prop?: string;
  perMonth?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const Pricing1: FunctionComponent<Pricing1Type> = ({
  monthlyPlan,
  prop,
  perMonth,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const monthlyPlanStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const errorHandlerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const perMonthStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={styles.pricing}>
      <button className={styles.ruleSet}>
        <div className={styles.monthlyPlan} style={monthlyPlanStyle}>
          {monthlyPlan}
        </div>
      </button>
      <div className={styles.header}>
        <div className={styles.price}>
          <div className={styles.errorHandler} style={errorHandlerStyle}>
            {prop}
          </div>
          <div className={styles.perMonth} style={perMonthStyle}>
            {perMonth}
          </div>
        </div>
      </div>
      <div className={styles.featureList}>
        <div className={styles.articles}>
          <ul className={styles.articles1}>
            <li>Articles</li>
          </ul>
        </div>
        <div className={styles.destinations}>
          <ul className={styles.destinations1}>
            <li>Destinations</li>
          </ul>
        </div>
        <div className={styles.hotels}>
          <ul className={styles.hotels1}>
            <li>Hotels</li>
          </ul>
        </div>
        <div className={styles.cruises}>
          <ul className={styles.cruises1}>
            <li>Cruises</li>
          </ul>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.select}>Select</div>
      </div>
    </div>
  );
};

export default Pricing1;
