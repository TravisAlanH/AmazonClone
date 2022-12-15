import React from "react";

const styles = {
  "text": {
    "textDecoration": "none",
    "color": "white",
    "fontSize": ".8em",
  },
};

export default function FootTop() {
  return (
    <div
      className="Foot-Top"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <div className="Foot-Vertical-Center">
        <a href=" " style={styles.text}>
          Back to top
        </a>
      </div>
    </div>
  );
}
