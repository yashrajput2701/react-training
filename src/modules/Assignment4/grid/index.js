import React from "react";
import "./index.css";

import Card from "../Components/Card";
import Header from "../Components/Header";
import Gridcontainer from "../Components/Gridcontainer";

function ForMobile() {
  return (
    <div className={"mainContainer"}>
      <Header />
      <Gridcontainer />

      <div className={"main"}>
        <div className={"sectionA"}>
          <h3>{"Support"}</h3>
          <div className={"sectionARight"}>
            <select>
              <option value="0" selected>
                EN
              </option>
              <option value="0">ES</option>
            </select>

            <button>{"Back to xcoins"}</button>
          </div>
          <div className={"toggle"}>
            <div className={"toggleLine"}></div>
            <div className={"toggleLine"}></div>
            <div className={"toggleLine"}></div>
          </div>
        </div>
        <input type={"text"} placeholder={"Search Xcoins support"} />

        <div className={"cardsContainer"}>
          <Card
            heading={"Buy currency"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"Verification"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"Orders"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"Wallet"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"Payment methods"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"Others"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"Security"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"Referral programme"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
          <Card
            heading={"My Xcoin Account"}
            link1={"What currencies do we accept?"}
            link2={"What currencies do we accept?"}
            link3={"How do I reset my password?"}
          />
        </div>
      </div>
    </div>
  );
}

export default ForMobile;