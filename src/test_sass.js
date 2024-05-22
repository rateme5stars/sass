import React from 'react';
import './test_sass.scss';

export default function TestSass() {
    return (
        <nav>
            <ul className='navigation'>
                <li><a href="#">About us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className='button'>
                <a className='btn-main' href="#">Sign up</a>
                <a className='btn-hot' href="#">Get a quote</a>
            </div>
        </nav>
    );
}