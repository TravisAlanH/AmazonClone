import React from "react";
import Address from "./Address";
import AmazonLogo from "./AmazonLogo";
import Bar from "./Bar";
import Language from "./Language";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      <div className="Header-Bar">
        <AmazonLogo />
        <Address />
        <SearchBar />
        <Language />
      </div>
      <div className="Link-Bar">
        <Bar />
      </div>
    </>
  );
}
