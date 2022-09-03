import React from "react";
import Table from "../components/Table/Table";

import customerList from "../assets/JsonData/customers-list.json";

const customersTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

//renderHead
const renderHead = (item, index) => <th key={index}>{item}</th>;

//renderBody
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  return (
    <div>
      <h2 className="page-header">Customers</h2>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customersTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                renderBody={(item, index) => renderBody(item, index)}
                bodyData={customerList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
