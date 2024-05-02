import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Input.module.css";

export type InputType = {
  firstName?: string;
  labelPlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Input: FunctionComponent<InputType> = ({
  firstName,
  labelPlaceholder,
  propWidth,
  propMinWidth,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.input} style={inputStyle}>
      <div className={styles.firstName}>{firstName}</div>
      <div className={styles.field}>
        <input
          className={styles.label}
          placeholder={labelPlaceholder}
          type="text"
          style={labelStyle}
        />
      </div>
    </div>
  );
};

export default Input;
