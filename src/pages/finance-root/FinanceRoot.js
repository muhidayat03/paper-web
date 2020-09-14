import React, { useState } from "react";
import Tab from "../../components/tab/Tab";
import TabItem from "../../components/tab/TabItem";
import Finance from "../../pages/finance/Finance";
import Account from "../../pages/account/Account";

const FinanceRoot = () => {
  const [selectedItem, setSelectedItem] = useState("Account");

  return (
    <>
      <Tab>
        <TabItem
          title="Account"
          onClick={() => setSelectedItem("Account")}
          active={selectedItem === "Account"}
        />
        <TabItem
          title="Finance"
          onClick={() => setSelectedItem("Finance")}
          active={selectedItem === "Finance"}
        />
      </Tab>
      {selectedItem === "Finance" ? <Finance /> : <Account />}
    </>
  );
};

export default FinanceRoot;
