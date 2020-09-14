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
import FinanceHeader from "./FinanceHeader";
import { listFinance, detailFinance } from "../../actions/finance_action";

import { useSelector, useDispatch } from "react-redux";
import FinanceModalAdd from "./FinanceModalAdd";
import FinanceModalEdit from "./FinanceModalEdit";
import FinanceModalDetail from "./FinanceModalDetail";
import FinanceModalDelete from "./FinanceModalDelete";
import moment from "moment";
import { listAccount } from "../../actions/account_action";

const Finance = () => {
  const { data } = useSelector((state) => state.listFinance); 

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listFinance());
    dispatch(listAccount());
  }, [dispatch]);

  let records = [];
  if (data) {
    records = data.data;
  }


  const handleDetail = async (id) => {
    const data = await dispatch(detailFinance(id));
    if (data) {
      setShowModalDetail(true);
    }
  };
  const handleEdit = async (id) => {
    const data = await dispatch(detailFinance(id));
    if (data) {
      setShowModalEdit(true);
    }
  };
  const handleDelete = async (id) => {
    const data = await dispatch(detailFinance(id));
    if (data) {
      setShowModalDelete(true);
    }
  };
  return (
    <>
      <FinanceHeader setShowModalAdd={setShowModalAdd} />
      <FinanceModalAdd
        show={showModalAdd}
        onHide={() => setShowModalAdd(false)}
      />
      <FinanceModalDetail
        show={showModalDetail}
        onHide={() => setShowModalDetail(false)}
      />
      <FinanceModalEdit
        show={showModalEdit}
        onHide={() => setShowModalEdit(false)}
      />
      <FinanceModalDelete
        show={showModalDelete}
        onHide={() => setShowModalDelete(false)}
      />
      <MaterialTable
        columns={[
          {
            title: "Transaaction Date",
            field: "updated",
            render: ({ updated_at }) =>
              updated_at ? moment(updated_at).format("DD-MM-YYYY") : "-",
          },
          {
            title: "Title",

            render: ({ title }) => (title ? title : "-"),
          },
          
          {
            title: "Finance Account Name",
            render: ({ finance_account_name }) =>
              finance_account_name ? finance_account_name : "-",
          },
          {
            title: "Account Type",
            field: "finance_account_type",
            render: ({ finance_account_type }) =>
              finance_account_type ? finance_account_type : "-",
          },
          {
            title: "Total Amount",

            render: ({ debit_amount, credit_amount }) =>
              debit_amount + credit_amount,
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

export default Finance;
