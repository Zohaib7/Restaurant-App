import React from "react";
import CountUp from "react-countup";

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <CountUp end={200} duration={2} />
              <p>Awesome Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <CountUp end={20} duration={2} />
              <p>Burger Types</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <CountUp end={300} duration={2} />
              <p>Satisfied Customers</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <CountUp end={15} duration={2} />
              <p>Branches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
