import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Button from "../../components/form/Button";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { renderInputWithLabel } from "../../components/form/FormComponent";
import { editAccount, listAccount } from "../../actions/account_action";
import { connect } from "react-redux";

let AccountModalEdit = (props) => {
  const { data } = useSelector((state) => state.detailAccount);

  const { pending } = useSelector((state) => state.editAccount);
  const dispatch = useDispatch();
  const { show, onHide, handleSubmit, reset } = props;
  console.log("data", data);
  const tryEditAccount = async (param) => {
    const id = data.id;
    console.log(id);
    const test = await dispatch(editAccount(id, param));
    if (test) {
      await dispatch(listAccount());
      props.onHide();
      reset();
    }
  };

  const onSubmit = ({ name, type, Description }) => {
    let param = {
      name,
      type,
      description: Description,
    };
    tryEditAccount(param);
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
              name="name"
              label="Account Name"
              placeholder="input account name"
              component={renderInputWithLabel}
              req
            />

            <Field
              name="type"
              label="Account Type"
              placeholder="input account type"
              component={renderInputWithLabel}
              req
            />
            <Field
              name="Description"
              label="Description"
              placeholder="input account description"
              component={renderInputWithLabel}
              req
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
  const { name, type, description } = values;
  const errors = {};
  if (!name) {
    errors.name = "Account name required";
  }

  if (!type) {
    errors.type = "Account type required";
  }
  if (!description) {
    errors.description = "Account Description required";
  }
  return errors;
}

AccountModalEdit = reduxForm({
  form: "AccountModalEdit",
  validate: validate,
  shouldError: () => true,
  enableReinitialize: true,
})(AccountModalEdit);

AccountModalEdit = connect(({ detailAccount }) => {
  let initialValues = {};
  if (detailAccount.data) {
    const {
      data: { name, type, Description },
    } = detailAccount;
    initialValues = {
      name,
      type,
      Description,
    };
  }
  return { initialValues: initialValues };
})(AccountModalEdit);

export default AccountModalEdit;
