/* eslint-disable react/style-prop-object */
import React from "react";

export default function Footer() {
    let footerStyle={position:'absolute',width:"100%",bottom:0,}
  return (
    <footer>
      <div className="bg-dark text-light text-center py-3"style={footerStyle}>
        <p className="text-center">

        &copy;Copyright Coder
        </p>
        </div>
    </footer>
  );
}
