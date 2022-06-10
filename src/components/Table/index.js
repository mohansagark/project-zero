function Table(props) {
  const { headers, data, displayTotal, editable } = props;
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            {headers.map((header, index) => {
              return <th key={String(index)}>{header.value}</th>;
            })}
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
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          NA
                        </span>
                      )}
                    </td>
                  );
                })}
                {editable && <td>Edit</td>}
              </tr>
            );
          })}
          {displayTotal && (
            <tr>
              <td />
              <td />
              <td />
              <td>Total</td>
              <td>20000</td>
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
