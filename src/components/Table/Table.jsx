import React, { useState } from "react";
import "./Table.scss";

const Table = (props) => {
  let pages = 1;
  let range = [];

  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;

  if (props.limit != undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  //state Show pagination
  const [dataShow, setDataShow] = useState(initDataShow);

  //state currPage
  const [currPage, setCurrPage] = useState(0);

  //pagination
  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setDataShow(props.bodyData.slice(start, end));
    setCurrPage(page);
  };

  return (
    <div className="table-wrapper">
      <table>
        {props.headData && props.renderHead ? (
          <thead>
            <tr>
              {props.headData.map((item, index) =>
                props.renderHead(item, index)
              )}
            </tr>
          </thead>
        ) : null}

        {props.bodyData && props.renderBody ? (
          <tbody>
            {dataShow.map((item, index) => props.renderBody(item, index))}
          </tbody>
        ) : null}
      </table>
      {pages > 1 ? (
        <div className="table__pagination">
          {range.map((item, index) => (
            <div
              onClick={() => selectPage(index)}
              key={index}
              className={`table__pagination-item ${
                currPage === index ? "active" : ""
              }`}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
