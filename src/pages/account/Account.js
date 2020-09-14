import React, { useEffect, useState } from "react";
import { Row } from "simple-flexbox"; 
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MaterialTable from "material-table";
import MenuItem from "@material-ui/core/MenuItem";

import DetailButtonComponent from "../../components/global-components/DetailButtonComponent";
import PaginationComponent from "../../components/table/PaginationComponent";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountHeader from "./AccountHeader";
import { listAccount, detailAccount } from "../../actions/account_action";

import { useSelector, useDispatch } from "react-redux";
import AccountModalAdd from "./AccountModalAdd";
import AccountModalEdit from "./AccountModalEdit";
import AccountModalDetail from "./AccountModalDetail";
import AccountModalDelete from "./AccountModalDelete"; 

const Account = () => {
  const { data } = useSelector((state) => state.listAccount);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAccount());
  }, [dispatch]);

  let records = [];
  if (data) {
    records = data.data;
  }

  const handleDetail = async (id) => {
    const data = await dispatch(detailAccount(id));
    if (data) {
      setShowModalDetail(true);
    }
  };
  const handleEdit = async (id) => {
    const data = await dispatch(detailAccount(id));
    if (data) {
      setShowModalEdit(true);
    }
  };
  const handleDelete = async (id) => {
    const data = await dispatch(detailAccount(id));
    if (data) {
      setShowModalDelete(true);
    }
  };
  return (
    <>
      <AccountHeader setShowModalAdd={setShowModalAdd} />
      <AccountModalAdd
        show={showModalAdd}
        onHide={() => setShowModalAdd(false)}
      />
      <AccountModalDetail
        show={showModalDetail}
        onHide={() => setShowModalDetail(false)}
      />
      <AccountModalEdit
        show={showModalEdit}
        onHide={() => setShowModalEdit(false)}
      /> 
      <AccountModalDelete
        show={showModalDelete}
        onHide={() => setShowModalDelete(false)}
      /> 
      <MaterialTable
        columns={[
          {
            title: "Account Name",
            field: "account_account_type",
            render: ({ name }) => (name ? name : "-"),
          },
          {
            title: "Account Type",
            field: "account_account_type",
            render: ({ type }) => (type ? type : "-"),
          },
          {
            title: "Account Description",

            render: ({ Description }) => (Description ? Description : "-"),
          },

          {
            title: "Action",

            render: ({ id }) => (
              <DetailButtonComponent
                button={
                  <Row
                    vertical="center"
                    horizontal="center"
                    style={{
                      color: "#fff",
                      width: 80,
                      padding: "4px 0",
                      backgroundColor: "#A9E270",
                      borderRadius: 5,
                    }}
                  >
                    Actions
                    <ArrowDropDownIcon />
                  </Row>
                }
              >
                <MenuItem
                  style={{ width: 140 }}
                  onClick={() => handleDetail(id)}
                >
                  <VisibilityIcon style={{ fontSize: 14, marginRight: 4 }} />
                  View
                </MenuItem>
                <MenuItem onClick={() => handleEdit(id)}>
                  <CreateIcon style={{ fontSize: 14, marginRight: 4 }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={() => handleDelete(id)}>
                  <DeleteIcon style={{ fontSize: 14, marginRight: 4 }} />
                  Delete
                </MenuItem>
              </DetailButtonComponent>
            ),
          },
        ]}
        data={records}
        options={{
          pageSize: 10,
          pageSizeOptions: [],
          showTitle: false,
          search: false,
          headerStyle: {
            zIndex: 0,
          },
        }}
        localization={{
          body: {
            emptyDataSourceMessage: "Tidak ada data",
          },
        }}
        components={{
          Toolbar: () => <div />,
          Container: (props) => <div {...props} elevation={0} />,
          Pagination: (props) => (
            <PaginationComponent records={10} {...props} />
          ),
        }}
      />
    </>
  );
};

export default Account;
