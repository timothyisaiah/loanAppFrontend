import React from 'react';
import './RegisterClient.css';
import ReactTable from "react-table";
import { MDBDataTable } from 'mdbreact';
import Real from './Real';
import axios from 'axios';
import "react-table/react-table.css"
class ApproveLoan extends React.Component{

constructor(props){
  super(props);

  this.state = {
    clients:[],
    client: []
  }
}

componentDidMount(){
  axios({
    method: 'get',
    url: 'http://localhost:8080/fetchAllLoanDetails',
    params: {}
  })
    .then((response) => {
      // console.log(response);
      this.setState({clients: response.data});
      console.log(this.state.clients);
    })
    .catch((error) => console.log(error));

}
render (){
     
 
  const columns = [

    {
      Header: 'Firstname',
      accessor:'firstname',
      sortable: false,
      filterable:false
    },
    {
      Header: 'Lastname',
      accessor:'lastname',
      sortable: false,
      filterable:false
    },
    {
      Header: 'Installment',
      accessor:'installment',
      sortable: false,
      filterable:false
    },
    {
      Header: 'Interest',
      accessor: 'interest',
      sortable: false,
      filterable:false
    },
    // {
    //   Header: 'Loanid',
    //   accessor:'loanid'

    // },
    // {
    //   Header: 'permutation',
    //   accessor:'permutation1'

    // },
    // {
    //   Header: 'permutation2',
    //   accessor:"permutation2"

    // },
    {
      Header: 'Principal',
      accessor: 'principal',
      sortable: false,
      filterable:false
    },
    {
      Header: 'returndate',
      accessor:'returndate',
      sortable: false,
      filterable:false
    },
    {
      Header: 'telephone',
      accessor:'telephone',
      sortable: false,
      filterable:false
    },
  ]
 
  return (
    <div>
          <Real/>

       <ReactTable
          columns={columns}
          data={this.state.clients}
          filterable
          defaultPageSize={10}
          noDataText={"Loading..."}
          >
          </ReactTable>
     
    </div>
  );
}}

export default ApproveLoan;
