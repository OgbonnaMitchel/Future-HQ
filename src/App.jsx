// import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router"
// import Layout from "./Layout/Layout"
// import AnnouncementCardList from "./Components/AnnouncementCardList"
// import ClassroomCardList from "./Components/ClassroomCardList"
// // import SignUp from "./Pages/SignUp"

// function App() {
//     return (
//         <BrowserRouter>
//             {/* <Route element={ <SignUp/>} /> */}
//             <Layout>
//                  <Routes>
//                 <Route element={<Layout/>}/>
//                     <Route path="/general-announcements" element={<AnnouncementCardList />} />
//                     <Route path="/classroom-announcements" element={<ClassroomCardList/>} />
//                 </Routes>
//            </Layout>
//         </BrowserRouter>

//     )
 
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AnnouncementCardList from "./Components/AnnouncementCardList";
import ClassroomCardList from "./Components/ClassroomCardList";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/general-announcements" element={<AnnouncementCardList />} />
            <Route path="/classroom-announcements" element={<ClassroomCardList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

