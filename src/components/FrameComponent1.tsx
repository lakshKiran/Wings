import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  propWidth,
  propGap,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  return (
    <div className={styles.wings1Parent} style={frameDivStyle}>
      <img
        className={styles.wings1Icon}
        loading="lazy"
        alt=""
        src="/wings-1.svg"
      />
      <div className={styles.wingsWrapper}>
        <h2 className={styles.wings}>WINGS</h2>
      </div>
    </div>
  );
};

export default FrameComponent1;
