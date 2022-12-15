import React, { useState } from "react";
import { GiUsaFlag } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";

export default function Language() {
  const [open, setOpen] = useState(false);
  const styles = {
    "Language": {
      "color": "white",
      "fontSize": ".8em",
      "padding": "0",
      "paddingBottom": ".2em",
      "margin": "0",
      "fontWeight": "bold",
    },
    "FlagIcon": {
      "color": "white",
    },
    "ArrowIcon": {
      "color": "white",
      "paddingLeft": "3px",
    },
    "Bottom": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "center",
    },
    "hide": {
      "display": open ? "block" : "none",
    },
    "HeaderVerticalCenter": {
      "marginTop": "5px",
      "marginBottom": "5px",
      "paddingLeft": "7px",
      "paddingRight": "7px",
      "paddingTop": "5px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "border": "1.5px solid transparent",
    },
  };
  return (
    <div style={styles.hover} onMouseEnter={() => setOpen(true)}>
      <div style={styles.HeaderVerticalCenter}>
        <div>
          <p style={styles.Language}>English</p>
        </div>
        <div style={styles.Bottom}>
          <div style={styles.Flag}>
            <GiUsaFlag style={styles.FlagIcon} />
          </div>
          <div className="Arrow">
            <AiFillCaretDown style={styles.ArrowIcon} />
          </div>
        </div>
      </div>
      <div
        style={styles.hide}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div>asdf</div>
      </div>
    </div>
  );
}
