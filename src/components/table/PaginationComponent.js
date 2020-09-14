import React from "react";
import { Row } from "simple-flexbox";
import { TablePagination } from "@material-ui/core";

const PaginationComponent = (props) => {
  const { records, records_total, ...resProps } = props;
  return (
    <td style={{ width: "100%", display: "block", }}>
      <Row
        // vertical="center"
        horizontal="center"
        style={{
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <div>
          <table>
            <tbody>
              <tr>
                <TablePagination {...resProps} />
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </td>
  );
};

export default PaginationComponent;
