import React from 'react';

export default function NavBar(props) {
    return(
        <section className='NavBar'>
            <div className='logo'></div>
            <section className='name'><h1>MATHEW B WILLIAMSON</h1></section>
            <ul className='links'>
                <li><a href="#AboutMe">About</a></li>
                <li><a href="#MajorProjects">Major Projects</a></li>
                <li><a href="#MinorProjects">Minor Projects</a></li>
                <li><a href="#WorkWithMe">Work with Me</a></li>
            </ul>
        </section>
    )
}