import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <header className={'header'}>
         <img className={'images'} src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="logo"/>
     </header>
        <main className={'main'}>
            <aside className={'nav'}>
                <ul className={'menu'}>
                    <li className={'menu__item'}><a href="#" className="menu__link">Profile</a></li>
                    <li className={'menu__item'}><a href="#" className="menu__link">Messages</a></li>
                    <li className={'menu__item'}><a href="#" className="menu__link">News</a></li>
                    <li className={'menu__item'}><a href="#" className="menu__link">Music</a></li>
                    <li className={'menu__item'}><a href="#" className="menu__link">Settings</a></li>
                </ul>
            </aside>
            <section className={'content'}>
                <img className={'content__images'} src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" alt="#"/>
                <div>
                    ava+description
                </div>
                <div>
                    my post
                    <div>
                        new post
                    </div>
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>

                        post 2
                    </div>
                </div>
            </section>

        </main>
    </div>
  );
}

export default App;
