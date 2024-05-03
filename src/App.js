// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// // import { ApiIntegration } from './components/ApiIntegration';
// import Header from "./components/Header";
// import Tasks from "./components/Tasks";
// import Practice1 from "./components/Practice1";
// import Practice2 from "./components/Practice2";
// import Practice3 from "./components/Practice3";
// import Practice4 from "./components/Practice4";
// import SplitApp from "./components/SplitApp";
// // import {  useState } from 'react';
import Popcorn from "./components/Popcorn";
// import StarRating from "./components/StarRating";
// import UseReducerP from "./components/UseReducerP";
// import TodoApp from "./components/TodoApp";

// import ContextSample from "./components/Contextfolder/ContextSample";
// import UserContextProvider from "./components/context/UserContextProvider";
// import ContextLvl1 from "./components/Contextfolder/ContextLvl1";
// import ContextLvl2 from "./components/Contextfolder/ContextLvl2";
// import Pagination from "./components/Pagination";
// import FormHandling from "./components/FormHandling";
// import Counterapp from "./components/Counterapp";
// import Option from "./components/Option";
export default function App() {
  return (
    <>
      {/* <Pagination /> */}
      {/* <Option /> */}
      {/* <UserContextProvider>
        {" "}
        <ContextSample />
        <ContextLvl1 />
      </UserContextProvider> */}

      {/* <SplitApp/> */}
      <Popcorn />
      {/* <StarRating/> */}
      {/* <UseReducerP/> */}
      {/* <TodoApp/> */}
      {/* <FormHandling/> */}
      {/* <Counterapp /> */}
      {/* <BrowserRouter>
        // <Header />
        <Routes>
          <Route path="/todoapp" element={<TodoApp />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/popcorn" element={<Popcorn />} />
          <Route path="/splitapp" element={<SplitApp />} />
          <Route path="/counter" element={<Counterapp />} />
          <Route path="/practice1" element={<Practice1 />} />
          <Route path="/practice2" element={<Practice2 />} />
          <Route path="/practice3" element={<Practice3 />} />
          <Route path="/practice4" element={<Practice4 />} />
          <Route path="/starrating" element={<StarRating />} />
          <Route path="/formhandling" element={<FormHandling />} />
          <Route path="/usereducer" element={<UseReducerP />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
