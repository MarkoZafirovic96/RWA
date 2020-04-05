import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArrangments } from "../actions/arrangmentsActions";

class Arrangments extends Component {
  componentWillMount() {
    this.props.fetchArrangments();
  }

  render() {
    const arranmentsItems = this.props.arrangments.map((arrangment) => (
      <div ket={arrangments.id}>
        <label>{arrangment.name}</label>
      </div>
    ));
    return (
      <div>
        Arrangments
        {arranmentsItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrangments: state.arrangments.items,
});
export default connect(mapStateToProps, { fetchArrangments })(Arrangments);
