import React from "react";
import Modal from "react-bootstrap/Modal";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Button from "../../components/form/Button";
import { reduxForm, Field } from "redux-form";
import { renderInputWithLabel } from "../../components/form/FormComponent";
import { connect } from "react-redux";

let AccountModalDetail = (props) => {
  const { show, onHide } = props;

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

AccountModalDetail = reduxForm({
  form: "AccountModalDetail",
  shouldError: () => true,
  enableReinitialize: true,
})(AccountModalDetail);

AccountModalDetail = connect(({ detailAccount }) => {
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
})(AccountModalDetail);

export default AccountModalDetail;
