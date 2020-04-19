import React, { Component } from "react";
import _ from "loadsh";

renderCell = (item, column) => {
  if (column.content) return column.content(item);

  return _.get(item, column.path);
};

createKey = (item, column) => {
  return item._id + (column.path || column.key);
};

class TabeleBody extends Component {
  render() {
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {colomuns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TabeleBody;
