import React, {useCallback, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";
import MainSite from "./Components/MainSite/MainSite";
import AdminRoutes from "./Components/AdminRoutes/AdminRoutes";
import {LoaderContext} from "./Shared/Context/LoaderContext";


const App: React.FC = () => {

    const [isLoader, setIsLoader] = useState<boolean>(true);

    const toggleLoader = useCallback(() => {
        setIsLoader(!isLoader);
    }, []);

    return (
        <LoaderContext.Provider value={{
            isLoader,
            toggleLoader,
        }}>
            <div className="App">
                <ScrollToTop/>
                <AnimatePresence exitBeforeEnter>
                    <Routes>
                        <Route path="/admin/*" element={<AdminRoutes/>}/>
                        <Route path="*" element={<MainSite/>}/>
                    </Routes>
                </AnimatePresence>
            </div>
        </LoaderContext.Provider>
    );
};

export default App;
