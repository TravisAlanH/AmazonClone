import React from "react";

const style = {
  "content": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
  },
  "contentBox": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
  },
  "boxHeader": {
    "fontSize": "1.3em",
    "color": "white",
  },
  "boxLink": {
    "color": "white",
    "textDecoration": "none",
    "wordWrap": "normal",
  },
  "header": {
    "display": "inlineBlock",
  },
};

const GetToKnowUs = [
  "Careers",
  "Amazon Newsletter",
  "About Amazon",
  "Sustainability",
  "Press Center",
  "Investor Relations",
  "Amazon Devices",
  "Amazon Services",
];

const MakeMoneyWithUS = [
  "Sell products on Amazon",
  "Sell apps on Amazon",
  "Supply to Amazon",
  "Become an Affiliate",
  "Become a Delivery Driver",
  "Start a package delivery business",
  "Advertise your Products",
  "Self-Publish with us",
  "Host an Amazon Hub",
];

const AmazonPaymentProducts = [
  "Amazon Rewards Visa Signature Cards",
  "Amazon Store Card",
  "Amazon Secured Card",
  "Amazon Business Card",
  "Shop with Points",
  "Credit Card Marketplace",
  "Reload Your Balance",
  "Amazon Currency Converter",
];

const LetUsHelpYou = [
  "Amazon and COVID-19",
  "Your Account",
  "Your Orders",
  "Shipping Rates & Policies",
  "Amazon Prime",
  "Returns & Replacements",
  "Manage Your Content and Devices",
  "Your Recalls and Product Safety Alerts",
  "Amazon Assistant",
  "Help",
];

export default function FootMid() {
  return (
    <div className="Foot-Mid">
      <div style={style.content}>
        <div style={style.contentBox}>
          <h3>Get to Know Us</h3>
          {GetToKnowUs.map((item) => {
            return (
              <a href=" " style={style.boxLink} key={item}>
                {item}
              </a>
            );
          })}
        </div>
        <div style={style.contentBox}>
          <div style={style.header}>
            <h3>Make Money with Us</h3>
          </div>
          {MakeMoneyWithUS.map((item) => {
            return (
              <a href=" " style={style.boxLink} key={item}>
                {item}
              </a>
            );
          })}
        </div>
        <div style={style.contentBox}>
          <h3>Amazon Payment Products</h3>
          {AmazonPaymentProducts.map((item) => {
            return (
              <a href=" " style={style.boxLink} key={item}>
                {item}
              </a>
            );
          })}
        </div>
        <div style={style.contentBox}>
          <h3>Let Us Help You</h3>
          {LetUsHelpYou.map((item) => {
            return (
              <a href=" " style={style.boxLink} key={item}>
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
