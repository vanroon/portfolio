import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className='app'>
    <h1>React Router demo</h1>
    <Navigation />
    <Main />
  </div>
)

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName=".current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
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

const Main = () => (
  // In react-router-dom v6, "Switch" is replaced by routes "Routes". See:
  //  https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
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
