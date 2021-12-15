import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Contact_component from ''

// You can write App as a class like so:
// class App extends React.Component {
  // render() {
    // return (
      // <div className='app'>
        {/* <h1>React Router demo</h1> */}
        {/* <Navigation /> */}
        {/* <Main /> */}
      {/* </div> */}
// 
    // )
  // }
// }

// OR you can write it as a constant like this:
const App = () => (
 <div className='app'>
   <h1>React Router demo</h1>
   <Navigation />
   <Main />
 </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink exact to='/about'>About</NavLink></li>
      <li><NavLink exact to='/contact'>Contact</NavLink></li>
      {/* <li><NavLink exact activeClassName="current" to='/contact_component'>Contact-component</NavLink></li> */}
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to the portfolio</h1>
    <p>Feel free to roam around</p>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About me</h1>
    <table border='1'>
      <th>greeting</th>
      <tr><td>hello</td></tr>
      <tr><td>hoi</td></tr>
    </table>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact</h1>
    <p>Reach out</p>
  </div>
);

//const Books = () => (
//  <div className='contact'>
//    <h1>Books</h1>
//      <table className="table table-bordered border-info">
//          <thead>
//              <tr>
//              <th>Id</th>
//              <th>Book Name</th>
//              <th>Book Author</th>
//              <th>Price</th>
//              </tr>
//          </thead>
//          <tbody>
//              {/* { */}
//                  {/* // this.state.books.map(books => */}
//                          <tr key = {books.id}>
//                                  <td>{books.id}</td>
//                                  <td>{books.bookName}</td>
//                                  <td>{books.authorName}</td>
//                                  <td>{books.price}</td>
//                          </tr>
//                  {/* ) */}
//              {/* } */}
//          </tbody>
//
//      </table>
//    
//  </div>
//);

const Main = () => (
  // In react-router-dom v6, "Switch" is replaced by routes "Routes". See:
  //  https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    {/* <Route exact path='/contact_component' element={<Contact_component/>}></Route> */}
  </Routes>
);
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
