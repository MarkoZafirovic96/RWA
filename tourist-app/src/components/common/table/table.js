import React from "react";
import TableHeader from "./tableHeader";
import TabeleBody from "./tableBody";

const Table = (props) => {
  const { colomuns, sortColumn, onSort, data } = this.props;

  return (
    <table>
      <TableHeader
        colomuns={colomuns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TabeleBody data={data} colomuns={colomuns} />
    </table>
  );
};

export default Table;
