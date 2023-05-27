// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import A from './Components/ContextAPIs/A';
import AClass from './Components/ContextAPIs/AClass';
import { StdProvider } from './Components/ContextAPIs/StudentContext';
import { TeacherProvider } from './Components/ContextAPIs/TeacherContext';
import Basic from './Components/Formik/Basic';
// import Navbar from './Components/Router/Navbar';
// import Home from './Components/Router/Home';
// import Students from './Components/Router/Students';
// import NoPage from './Components/Router/NoPage';
// import Contact from './Components/Router/Contact';
// import StudentContainer from './Components/Router/StudentContainer';
// import Form from './Components/Router/PassData.js/Form';
// import EducationContainer from './Components/Router/EducationContainer';
// import ClickButtonCount from './Components/RenderProps/ClickButtonCount';
// import MouseHoverCount from './Components/RenderProps/MouseHoverCount';
// import Counter from './Components/RenderProps/Counter';
import ClickCounter from './Components/HOC/ClickCounter';
// import UpdateComponent from './Components/HOC/Counter';
import HoverCounter from './Components/HOC/HoverCounter';
import Mounting from './Components/LifeCycleMethods2/Mount';
import Update from './Components/LifeCycleMethods2/Update';
import Application from './Components/UseEffect/Application';
import Application2 from './Components/UseEffect/Application2';
import WindowResize from './Components/UseEffect/WindowResize';
// import Mount from './Components/LifeCycleMethods/MountMethods';
// import Unmount from './Components/LifeCycleMethods/UnMount';
// import CRender from './Components/Conditional/ConditionalRender';
// import ConditionalRender from './ConditionalRender';
// import Counter from './Components/CounterFC';

function App() {
  // const NewComponent = UpdateComponent(ClickCounter);
  return (
    <div className="">
      {/* HOC - Higher Order Components */}
      {/* <ClickCounter name={'Ameer'}/>
      <HoverCounter name='Hamza'/> */}

      

      {/* Rendering Props */}
      {/* <Counter render={(counter, incrementCount)=><ClickButtonCount count={counter} incrementCount={incrementCount}/>}/>
      <Counter render={(counter, incrementCount)=><MouseHoverCount count={counter} incrementCount={incrementCount}/>}/> */}


      {/* Mounting Life Cycle 2 */}
      {/* <Mounting/>
      <Update/> */}

      {/* Use Effect */}
      {/* <Application/> */}
      {/* <WindowResize/> */}
      {/* <Application2/> */}


      {/* Context APIs */}
      {/* <StdProvider value='Ameer Hamza'>
        <TeacherProvider value={{name:'khan', age:12}}>
          <A/>
          <AClass/>
        </TeacherProvider>
      </StdProvider> */}

      {/* Formik */}
      <Basic/>
      

      {/* <Counter/> */}
      {/* <Counter/> */}
      {/* <ConditionalRender isLoggedIn={true}/> */}
      {/* <CRender/> */}
      {/* <Mount movie={'DHOOM 3'}/> */}
      {/* <Unmount/> */}
      
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='home' element={<Home/>}/>
            <Route path='students' element={<Students/>}>
                <Route path=':stdID' element={<StudentContainer/>}>
                  <Route path=':eduID' element={<EducationContainer/>}/>
                </Route>
                <Route index element={<h3>Select a student from above</h3>}/>
            </Route>
            <Route path='contact' element={<Contact/>}/>
  
            <Route path='form' element={<Form/>}/>
          
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
        
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
