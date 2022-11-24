// import React, { Component } from 'react';
// // import './App.css';

//  class App extends Component {

//    constructor(props){
//      super(props);
//      this.state = {
//        data: [],
//        postsPerPage: 10,
//        currentPage: 1
//      }
//    }

//    getPosts = async () => {
//      const url = "https://serene-journey-13143.herokuapp.com/apis/Donor/";
//      const obj = {
//        method: "GET",
//        headers: {
//          Accept: "application/json",
//          "Content-Type": "application/json"
//        }
//      }

//      await fetch(`${url}`, obj)
//      .then((response) => response.json())
//      .then((responseJson) => {
//        console.warn(responseJson);
//        this.setState({ data: responseJson })
//      })
//      .catch((error) => {
//        console.warn(error);
//      })
//    }



//    showData = () => {

//       const { postsPerPage, currentPage, data } = this.state;
//       const indexOfLastPage = currentPage * postsPerPage;
//       const indexOfFirstPage = indexOfLastPage - postsPerPage;
//       const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage)

//      try{
//      return currentPosts.map((item, index) => {
//        return(
//          <tbody>
//          <tr>
//          <td>{postsPerPage * (currentPage-1)+index+1}</td>
//          <td>{item.first_name}</td>
//          <td>{item.last_name}</td>
//          <td>{item.address}</td>
//          <td>{item.email}</td>
//          <td>{item.phone_number}</td>
//          <td>{item.age}</td>
//          <td>{item.blood_type}</td>
//          <td>{item.last_time_donated}</td>
        
//          </tr>
//          </tbody>
//        )
//      })
//    }catch(e){
//      alert(e.message)
//    }
//    }

//    showPagination = () => {
//      const { postsPerPage, data } = this.state;
//      const pageNumbers = [];
//      const totalPosts = data.length;

//      for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
//        pageNumbers.push(i)
//      }

//      const pagination = (pageNumbers) => {
//        this.setState({currentPage: pageNumbers})
//      }

//      return(
//        <nav>
//        <ul className="pagination">
//        {pageNumbers.map(number => (
//          <li key={number} className={this.state.currentPage === number ? 'page-item active' : 'page-item' }>
//          <button onClick={()=> pagination(number)} className="page-link"> {number} </button>
//          </li>
//        ))}
//        </ul>
//        </nav>
//      )


//    }

//    componentDidMount(){
//      this.getPosts()
//    }

//    render() {
//      return (
//        <div className="container">
//        <table className="table align-items-center justify-content-center mb-0">
//        <thead>
//        <tr>
//        <th>first_name</th>
//        <th>last_name</th>
//        <th>address</th>
//        <th>email</th>
//        <th>phone_number</th>
//        <th>Age</th>
//        <th>blood_type</th>
//        <th>last_time_donated</th>
       
//        </tr>
//        </thead>
//        {this.showData()}
//        </table>

//        <div style={{ float: 'right' }}>
//        {this.showPagination()}
//        </div>

//        </div>
//      );
//    }
//  }

// export default App;