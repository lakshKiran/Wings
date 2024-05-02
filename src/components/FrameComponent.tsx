import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  wakatobi?: string;
  sandAndSerenityAtWakatobi?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  wakatobi,
  sandAndSerenityAtWakatobi,
  propPadding,
  propAlignSelf,
}) => {
  const redBlackTreeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sandAndSerenityStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.redBlackTree} style={redBlackTreeStyle}>
      <div className={styles.heightBalancedTree}>
        <h1 className={styles.wakatobi}>{wakatobi}</h1>
        <div className={styles.sandAndSerenity} style={sandAndSerenityStyle}>
          {sandAndSerenityAtWakatobi}
        </div>
        <button className={styles.button}>
          <div className={styles.open}>Open</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
