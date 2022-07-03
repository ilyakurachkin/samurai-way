import React from 'react';
import app from './App.module.css';
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Profile} from "./Profile";
import s from './Main.module.css';


function App() {
    return (
        <div className={app.App}>
            <Header/>
            <main className={s.main}>
                <Navbar/>
                <Profile/>
            </main>
        </div>
    );
}

export default App;
