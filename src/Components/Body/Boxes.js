// import React, { useState, useEffect } from "react";
import React from "react";
import img from "./Img/Test.png";
//import axios from "axios";

export default function Boxes() {
  // const [post, setPost] = useState(null);

  //const baseURL = "https://fakestoreapi.com/products/";
  const box = ["item1", "item2", "item3", "item4", "item5", "item6"];

  // useEffect(() => {
  //   axios
  //     .get(baseURL)
  //     .then((response) => {
  //       setPost(response.data);
  //     })
  //     .catch(() => {
  //       setPost([]);
  //     });
  // }, []);

  // console.log(post);

  // const boxOne = [post[0], post[1], post[2], post[3]];
  // //console.log(boxOne);
  // const boxTwo = [post[4], post[5], post[6], post[7]];
  // const boxThree = [post[8], post[9], post[10], post[11]];
  // const boxFour = [post[12], post[13], post[14], post[15]];
  // const boxFive = [post[16], post[17], post[18], post[19]];

  return (
    <div className="body-content">
      <div className="Grid-Layout-Boxes-Body">
        {box.map((item, index) => {
          return (
            <img
              src={img}
              alt="img"
              key={index}
              className="Body-Content-Box"
            ></img>
          );
        })}
      </div>
    </div>
    // <div className="body-content">
    //   <div className="Grid-Layout-Boxes-Body">
    //     <div styles={styles.Box}>
    //       Gifts for fathers day
    //       <div className="Grid-Box-Internal">
    //         {boxOne.map((item) => {
    //           return (
    //             <img
    //               src={item.image}
    //               alt="img"
    //               key={item}
    //               className="Body-Content-Box"
    //             ></img>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div styles={styles.Box}>
    //       Epic holiday deals
    //       <div className="Grid-Box-Internal">
    //         {boxTwo.map((item) => {
    //           return (
    //             <img
    //               src={item.image}
    //               alt="img"
    //               key={item}
    //               className="Body-Content-Box"
    //             ></img>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div styles={styles.Box}>
    //       Tech for the whole family
    //       <div className="Grid-Box-Internal">
    //         {boxThree.map((item) => {
    //           return (
    //             <img
    //               src={item.image}
    //               alt="img"
    //               key={item}
    //               className="Body-Content-Box"
    //             ></img>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div styles={styles.Box}>
    //       Great
    //       <div className="Grid-Box-Internal">
    //         {boxFour.map((item) => {
    //           return (
    //             <img
    //               src={item.image}
    //               alt="img"
    //               key={item}
    //               className="Body-Content-Box"
    //             ></img>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div styles={styles.Box}>
    //       Fall styles
    //       <div className="Grid-Box-Internal">
    //         {boxFive.map((item) => {
    //           return (
    //             <img
    //               src={item.image}
    //               alt="img"
    //               key={item}
    //               className="Body-Content-Box"
    //             ></img>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
