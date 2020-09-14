import React, { useState } from "react";
import { Row, Column } from "simple-flexbox";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import SearchIcon from "@material-ui/icons/Search";
import { listAccount } from "../../actions/account_action";
import { useDispatch } from "react-redux";
import _ from "lodash";

const AccountHeader = (props) => {
  const dispatch = useDispatch();

  const [Account, setAccount] = useState("");
  const delayedQuery = _.debounce((value) => {
    dispatch(listAccount(value));
  }, 500);

  const handleSearchChange = (e) => {
    setAccount(e.target.value);
    delayedQuery(e.target.value);
  };
  return (
    <Column style={{ marginTop: 40 }}>
      <h2 style={{ fontSize: 18, margin: "10px 0" }}>
        All Account Transaction
      </h2>
      <Row horizontal="space-between" style={{ padding: "20px 0 " }}>
        <div style={{ width: 300 }}>
          <Input
            placeholder="Search"
            endIcon={SearchIcon}
            value={Account}
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

export default AccountHeader;
