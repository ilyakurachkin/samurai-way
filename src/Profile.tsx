import React from 'react';
import s from './Profile.module.css';


export const Profile = () => {
    return (
        <section className={s.content}>
            <img className={s.images} src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
                 alt="#"/>
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
    );
};

