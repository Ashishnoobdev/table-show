import React from 'react';

import './Table.css';

const TableView = (props) => {

    const information = props.tableContents.map((data) => {
        return (
          <tbody key={data.id}>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.website}</td>
              <td>{data.address.street}</td>
              <td>{data.company.name}</td>
            </tr>
          </tbody>
        )
    });

    return (
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th onClick={props.onSort}>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Street_Address</th>
                <th>Company_Name</th>
                </tr>
            </thead>       
            {information}
        </table>
    )
};

export default TableView;