import React from "react";
import Modal from "react-bootstrap/Modal";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Button from "../../components/form/Button";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  renderInputWithLabel,
  renderSelectWithLabel,
} from "../../components/form/FormComponent";
import { addFinance, listFinance } from "../../actions/finance_action";

let FinanceModalAdd = (props) => {
  const { pending } = useSelector((state) => state.addFinance);
  const { data: dataAcount } = useSelector((state) => state.listAccount);

  const dispatch = useDispatch();
  const { show, onHide, handleSubmit, reset } = props;
  console.log("kepanggil");

  const tryAddFinance = async (param) => {
    const test = await dispatch(addFinance(param));
    if (test) {
      await dispatch(listFinance());
      onHide();
      reset();
    }
  };
  const onSubmit = ({
    title,
    credit_amount,
    debit_amount,
    description,
    finance_account_id: { label, value, type },
  }) => {
    let param = {
      title,
      credit_amount: Number(credit_amount),
      debit_amount: Number(debit_amount),
      description,
      finance_account_id: value,
      finance_account_name: label,
      finance_account_type: type,
    };
    console.log(param)
    tryAddFinance(param);
  };

  let options = [];
  if (dataAcount && dataAcount.data.length !== 0) {
    console.log("dataAcount", dataAcount);
    options = dataAcount.data.map(({ id, name, type }) => ({
      label: name,
      value: id,
      type: type,
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
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
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
            />
            <Field
              name="finance_account_id"
              label="Finance Account"
              options={options}
              placeholder="select your finance account"
              component={renderSelectWithLabel}
              req
            />
            <Field
              name="debit_amount"
              label="Debit Amount"
              type="number"
              placeholder=""
              component={renderInputWithLabel}
              req
            />
            <Field
              name="credit_amount"
              label="Creadit Amount"
              type="number"
              placeholder=""
              component={renderInputWithLabel}
              req
            />
            <Field
              name="description"
              label="Description"
              placeholder=""
              component={renderInputWithLabel}
            />
          </Column>
          <Row
            horizontal="center"
            vertical="center"
            className={css(styles.footerModal)}
          >
            <div style={{ margin: 10 }}>
              <Button
                type="submit"
                title={pending ? "loading" : "Ya"}
                color="success"
                disabled={pending}
              />
            </div>
            <div style={{ margin: 10 }}>
              <Button title="Batal" onClick={props.onHide} />
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

function validate(values) {
  const { title, debit_amount, credit_amount, finance_account_id } = values;
  const errors = {};
  if (!title) {
    errors.title = "Title required";
  }
  if (!finance_account_id) {
    errors.finance_account_id = "Finance account required";
  }
  if (!debit_amount) {
    errors.debit_amount = "Debit amount required";
  }
  if (!credit_amount) {
    errors.credit_amount = "Creadit amount required";
  }
  return errors;
}

FinanceModalAdd = reduxForm({
  // a unique name for the form
  form: "FinanceModalAdd",
  validate: validate,
  // keepDirtyOnReinitialize: true,
  shouldError: () => true,
  enableReinitialize: true,
})(FinanceModalAdd);

export default FinanceModalAdd;
