import React, { Component } from "./node_modules/react";
import { Like } from "./node_modules/react-router-dom";

class ArrangementImage extends Component {
  render() {
    return (
      <div className="card" style="width: 100%; height: auto;">
        <img
          src={this.props.arrangment.defaulImmage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">Opis</p>
          <Link
            to={`/arrangments/${arrangment.id}`}
            className="btn btn-primary"
          >
            Prikaži više
          </Link>
        </div>
      </div>
    );
  }
}

export default ArrangementImage;
