import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import FunctionalComponent from './Pages/FunctionalComponent';
import ClassComponent from './Pages/ClassComponent';
import AppComponent from "./Pages/AppComponent";
// import BaseHoc from "./HOC/BaseHoc.jsx";


function App() {
  const company = "TATA";
  const [name, setName] = useState("Diamond");

  return (

    // <div className='App'>
    //   <h1>Class components</h1>
    //   <ClassComponent />
    //   <h1>Functional Component</h1>
    //   <FunctionalComponent name={name} Height={"175cm"} Company={company} setName={setName} />
    // </div>
    

    // We can also show above on UI by creating Routes like below 
    <Routes>
      <Route path='/' element={<AppComponent />} />
      <Route path='/ClassComponent' element={<ClassComponent />} />
      <Route path='/FunctionalComponent' element={<FunctionalComponent
        name={name}
        Height="175cm"
        company={company}
        setName={setName} />
      }
      />
    </Routes>
  );
}

export default App;
