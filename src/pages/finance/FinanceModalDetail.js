import React from "react";
import Modal from "react-bootstrap/Modal";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Button from "../../components/form/Button";
import { reduxForm, Field } from "redux-form";
import {
  renderInputWithLabel,
  renderSelectWithLabel,
} from "../../components/form/FormComponent";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

let FinanceModalDetail = (props) => {
  const { show, onHide } = props;
  let options = [];
  const { data: dataAcount } = useSelector((state) => state.listAccount);

  if (dataAcount && dataAcount.data.length !== 0) {
    console.log("dataAcount", dataAcount);
    options = dataAcount.data.map(({ id, name }) => ({
      label: name,
      value: id,
    }));
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-md"
      centered
    >
      <Modal.Header closeButton>
        {/* <p style={{ fontSize: 20, fontWeight: 600 }}>Hapus Post</p> */}
      </Modal.Header>
      <Modal.Body>
        <form style={{ width: "100%" }}>
          <Column
            vertical="center"
            horizontal="stretch"
            className={css(styles.bodyModal)}
          >
            <Field
              name="title"
              label="title"
              placeholder="input your title"
              component={renderInputWithLabel}
              req
              disable
            />
            <Field
              name="finance_account_id"
              label="Finance Account"
              options={options}
              placeholder="select your finance account"
              component={renderSelectWithLabel}
              req
              isDisabled
            />
            <Field
              name="debit_amount"
              label="Debit Amount"
              type="number"
              placeholder=""
              component={renderInputWithLabel}
              req
              disable
            />
            <Field
              name="credit_amount"
              label="Creadit Amount"
              type="number"
              placeholder=""
              component={renderInputWithLabel}
              req
              disable
            />
            <Field
              name="description"
              label="Description"
              placeholder=""
              component={renderInputWithLabel}
              disable
            />
          </Column>
          <Row
            horizontal="center"
            vertical="center"
            className={css(styles.footerModal)}
          >
            <div style={{ margin: 10 }}>
              <Button type="button" title="Kembali" onClick={props.onHide} />
            </div>
          </Row>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const styles = StyleSheet.create({
  approveButton: {
    background: "#2CB96A 0% 0% no-repeat padding-box",
    boxShadow: "none",
  },
  rejectButton: {
    background: "#EAEBED 0% 0% no-repeat padding-box",
    marginRight: 10,
    color: "#495057",
    boxShadow: "none",
  },
  footerModal: {
    backgroundColor: "#FBFBFD",
    padding: "20px 40px",
  },
  bodyModal: {
    padding: "0px 40px 20px",
    width: "100%",
  },
});

FinanceModalDetail = reduxForm({
  form: "FinanceModalDetail",
  shouldError: () => true,
  enableReinitialize: true,
})(FinanceModalDetail);

FinanceModalDetail = connect(({ detailFinance }) => {
  let initialValues = {};
  if (detailFinance.data) {
    const {
      data: {
        title,
        debit_amount,
        credit_amount,
        description,
        finance_account_id,
        finance_account_name,
        finance_account_type,
      },
    } = detailFinance;

    initialValues = {
      title,
      debit_amount,
      credit_amount,
      description,
      finance_account_id: {
        label: finance_account_name,
        value: finance_account_id,
        type: finance_account_type,
      },
    };
  }
  return { initialValues: initialValues };
})(FinanceModalDetail);

export default FinanceModalDetail;
