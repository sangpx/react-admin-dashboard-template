import React from "react";
import StatusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/StatusCard/StatusCard";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import Table from "../components/Table/Table";
import Badge from "../components/Badge/Badge";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 50, 40, 16, 40, 25, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "jack_smith",
      order: "250",
      price: "$12,251",
    },
    {
      username: "john_smith",
      order: "120",
      price: "$10,840",
    },
    {
      username: "Ervin Howell",
      order: "110",
      price: "$9,251",
    },
    {
      username: "Patricia Lebsack",
      order: "80",
      price: "$8,840",
    },
  ],
};

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1",
      user: "john doe",
      date: "17 Jun 2022",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD2",
      user: "jack_smith",
      date: "1 Jun 2022",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD3",
      user: "john_smith",
      date: "27 Jun 2022",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD4",
      user: "Ervin Howell",
      date: "1 Jun 2022",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD5",
      user: "Patricia Lebsack",
      date: "27 Jun 2022",
      price: "$200",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

//renderCustomers
const renderCustomers = (item, index) => <th key={index}>{item}</th>;

//renderCustomerBody
const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

//renderOrderHead
const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

//renderOrderBody
const renderOrderBody = (item, index) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {StatusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-6">
          <div className="card full-height">
            {/* Chart */}
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Top Customers</h3>
            </div>

            <div className="card__body">
              {/* Table */}
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomers(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>

            <div className="card__footer">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>Latest Order</h3>
            </div>

            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>

            <div className="card__footer">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
