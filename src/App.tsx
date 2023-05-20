import React from 'react';

import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenresPage, MoviePage, MoviesPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'movies'} element={<MoviesPage/>}>
                </Route>
                <Route path={'movies/:id'} element={<MoviePage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
