import React from "react";
import Modal from "react-bootstrap/Modal";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Button from "../../components/form/Button";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { renderInputWithLabel } from "../../components/form/FormComponent";
import { addAccount, listAccount } from "../../actions/account_action";

let AccountModalAdd = (props) => {
  const { pending } = useSelector((state) => state.addAccount);
  const dispatch = useDispatch();
  const { show, onHide, handleSubmit, reset } = props;
  console.log("kepanggil");

  const tryAddAccount = async (param) => {
    const test = await dispatch(addAccount(param));
    if (test) {
      await dispatch(listAccount());
      onHide();
      reset();
    }
  };
  const onSubmit = ({ name, type, description }) => {
    let param = {
      name,
      type,
      description,
    };
    tryAddAccount(param);
  };

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
              name="description"
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

AccountModalAdd = reduxForm({
  // a unique name for the form
  form: "AccountModalAdd",
  validate: validate,
  // keepDirtyOnReinitialize: true,
  shouldError: () => true,
  enableReinitialize: true,
})(AccountModalAdd);

export default AccountModalAdd;
