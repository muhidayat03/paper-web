import React, { useState } from "react";
import { Row, Column } from "simple-flexbox";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import SearchIcon from "@material-ui/icons/Search";
import { listFinance } from "../../actions/finance_action";
import { useDispatch } from "react-redux";
import _ from "lodash";

const FinanceHeader = (props) => {
  const dispatch = useDispatch();

  const [Finance, setFinance] = useState("");
  const delayedQuery = _.debounce((value) => {
    dispatch(listFinance(value));
  }, 500);

  const handleSearchChange = (e) => {
    setFinance(e.target.value);
    delayedQuery(e.target.value);
  };
  return (
    <Column style={{ marginTop: 40 }}>
      <h2 style={{ fontSize: 18, margin: "10px 0" }}>
        All Finance Transaction
      </h2>
      <Row horizontal="space-between" style={{ padding: "20px 0 " }}>
        <div style={{ width: 300 }}>
          <Input
            placeholder="Search"
            endIcon={SearchIcon}
            value={Finance}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <Button
            title="Add New Transaaction"
            onClick={() => props.setShowModalAdd(true)}
            color="primary"
          />
        </div>
      </Row>
    </Column>
  );
};

export default FinanceHeader;
