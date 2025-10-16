import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./Layout/Layout"
import AnnouncementCardList from "./Components/AnnouncementCardList"
import ClassroomCardList from "./Components/ClassroomCardList"
// import AnnouncementCardList from "./Components/AnnouncementCardList"

function App() {
    return (
        <BrowserRouter>
            <Layout>
                 <Routes>
                <Route path="/" element={<Layout/>}/>
                    <Route path="/general-announcements" element={<AnnouncementCardList />} />
                    <Route path="/classroom-announcements" element={<ClassroomCardList/>} />
                </Routes>
           </Layout>
        </BrowserRouter>

    )
 
}

export default App
