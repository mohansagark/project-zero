import { FaPencilAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles.css";

function Table(props) {
  const { headers, data, displayTotal, editable } = props;

  const editTable = (row) => {
    toast.info(row.expenseName ?? "Name unavailable");
  };
  return (
    <div className="table-responsive">
      <table className="table table-hover" id="table-data">
        <thead>
          <tr>
            <th>#</th>
            {headers.map((header, index) => {
              return <th key={String(index)}>{header.value}</th>;
            })}
            {editable && <th />}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => {
            return (
              <tr key={String(rowIndex)}>
                <td>{rowIndex + 1}</td>

                {Object.entries(headers).map((cell, index) => {
                  return (
                    <td key={String(cell)}>
                      {rowData[headers[index].label] ?? (
                        <span style={{ fontWeight: "bold", color: "black" }}>
                          NA
                        </span>
                      )}
                    </td>
                  );
                })}

                {editable && (
                  <td>
                    <FaPencilAlt onClick={() => editTable(rowData)}  className="edit-icon" />
                  </td>
                )}
              </tr>
            );
          })}
          {displayTotal && (
            <tr>
              <td />
              <td />
              <td />
              <td className="dispalyTotal">Total</td>
              <td className="dispalyTotal">20000</td>
              <td />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

Table.defaultProps = {
  data: [],
  headers: [],
};

export default Table;
