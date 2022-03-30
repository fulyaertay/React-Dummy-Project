import React, { Component } from 'react';


//Adding component to list users
class Users extends Component {
    render(){
        return(
        <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">E-Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Fulya</td>
            <td>Ertay</td>
            <td>fulya@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Berk</td>
            <td>Ayvalı</td>
            <td>berk@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cem</td>
            <td>Adıgüzel</td>
            <td>cem@gmail.com</td>
          </tr>
        </tbody>
      </table>
        );
}
}
export default Users;