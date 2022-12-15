import React from "react";

export default function Link() {
  const links = [
    "BestSellers",
    "Amazon Basics",
    "Customer Service",
    "Today's Deals",
    "Prime",
    "New Releases",
    "Music",
    "Books",
    "Pharmacy",
    "Registry",
    "Amazon Home",
    "Fashion",
    "Kindle Books",
    "Gift Cards",
    "Toys & Games",
    "Sell",
    "Coupons",
  ];

  const style = {
    "linkDiv": {
      "display": "flex",
      "flexDirection": "row",
    },
  };

  return (
    <div className="Header-Vertical-Center-Links">
      <div style={style.linkDiv}>
        {links.map((item) => {
          return (
            <a href=" " key={item} className="link">
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}
