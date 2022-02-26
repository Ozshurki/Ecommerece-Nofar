import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";
import MainSite from "./Components/MainSite/MainSite";
import AdminRoutes from "./Components/AdminRoutes/AdminRoutes";


const App: React.FC = () => {

    return (
            <div className="App">
                <ScrollToTop/>
                <AnimatePresence exitBeforeEnter>
                    <Routes>
                        <Route path="/admin/*" element={<AdminRoutes/>}/>
                        <Route path="*" element={<MainSite/>}/>
                    </Routes>
                </AnimatePresence>
            </div>
    );
};

export default App;
