import React, { Component } from "./node_modules/react";
import { Link } from "./node_modules/reac-router-dom";
import Table from "../table/table";
import ArrangementImage from "./arrangementDefaultImage";

class ArrangementsTable extends Component {
  colomuns = [
    { path: "country", label: "Država" },
    { path: "destination", label: "Destinacija" },
    {
      key: "immage",
      content: (arrangment) => <ArrangementImage arrangment={arrangment} />,
    },
    { path: "depatureDate", label: "Datum polaska" },
    { path: "nights", label: "Noćenja" },
    { path: "price", label: "Cena" },
    { path: "destination", label: "Destinacija" },
    { path: "accommodation", label: "Smeštaj" },
    { path: "type", label: "Tip aranžmana" },
  ];
  render() {
    const { data, sortColumn, onSort } = this.props;
    return (
      <Table
        data={data}
        sortColumn={sortColumn}
        onSort={onSort}
        colomuns={this.colomuns}
      />
    );
  }
}

export default ArrangementsTable;
