import React from "react";
import Modal from "react-bootstrap/Modal";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Button from "../../components/form/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteAccount, listAccount } from "../../actions/account_action";

let AccountModalDelete = (props) => {
  const { data } = useSelector((state) => state.detailAccount);
  console.log(data);
  const { pending } = useSelector((state) => state.deleteAccount);
  const dispatch = useDispatch();
  const { show, onHide } = props;

  const tryDeleteAccount = async (param) => {
    const id = data.id;
    console.log(id);
    const test = await dispatch(deleteAccount(id, param));
    if (test) {
      await dispatch(listAccount());
      props.onHide();
    }
  };

  let name;
  if (data) {
    name = data.name;
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
        <Column
          vertical="center"
          horizontal="stretch"
          className={css(styles.bodyModal)}
        >
          <p>
            apakah anda yakin ingin menghapus data <strong>{name}</strong>
          </p>
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
              onClick={tryDeleteAccount}
            />
          </div>
          <div style={{ margin: 10 }}>
            <Button title="Batal" onClick={props.onHide} />
          </div>
        </Row>
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

export default AccountModalDelete;
