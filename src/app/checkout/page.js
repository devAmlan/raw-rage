import React from "react";
import Checkout from "./Checkout";
import RouteProtection from "../../context/RouteProtection";
function page() {
  return (
    <RouteProtection redirectPath="/">
      <Checkout />
    </RouteProtection>
  );
}

export default page;
