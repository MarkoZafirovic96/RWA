import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArrangements } from "../actions/arrangmentsActions";

class Arrangments extends Component {
  componentDidMount() {
    this.props.fetchArrangements();
  }

  render() {
    const arrangementsItems = this.props.arrangements.map((arrangement) => (
      <label key={arrangement.id}>{arrangement.country}</label>
    ));
    return (
      <div>
        Arrangments
        <br />
        {arrangementsItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrangements: state.arrangements.items,
});
export default connect(mapStateToProps, { fetchArrangements })(Arrangments);
