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
import { editFinance, listFinance } from "../../actions/finance_action";
import { connect } from "react-redux";

let FinanceModalEdit = (props) => {
  const { data } = useSelector((state) => state.detailFinance);
  const { data: dataAcount } = useSelector((state) => state.listAccount);

  console.log(data);
  const { pending } = useSelector((state) => state.editFinance);
  const dispatch = useDispatch();
  const { show, onHide, handleSubmit, reset } = props;

  const tryEditFinance = async (param) => {
    const id = data.id;
    console.log(id);
    const test = await dispatch(editFinance(id, param));
    if (test) {
      await dispatch(listFinance());
      onHide();
      reset();
    }
  };
  let options = [];
  if (dataAcount && dataAcount.data.length !== 0) {
    console.log("dataAcount", dataAcount);
    options = dataAcount.data.map(({ id, name, type }) => ({
      label: name,
      value: id,
      type,
    }));
  }

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
      aaa: "asdfsdf",
    };
    console.log(param);

    tryEditFinance(param);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-md"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
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
                title={pending ? "loading" : "Simpan"}
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
  const { title, debit_amount, credit_amount } = values;
  const errors = {};
  if (!title) {
    errors.title = "Title required";
  }

  if (!debit_amount) {
    errors.debit_amount = "Debit amount required";
  }
  if (!credit_amount) {
    errors.credit_amount = "Credit amount required";
  }
  return errors;
}

FinanceModalEdit = reduxForm({
  form: "FinanceModalEdit",
  validate: validate,
  shouldError: () => true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(FinanceModalEdit);

FinanceModalEdit = connect(({ detailFinance }) => {
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
})(FinanceModalEdit);

export default FinanceModalEdit;
