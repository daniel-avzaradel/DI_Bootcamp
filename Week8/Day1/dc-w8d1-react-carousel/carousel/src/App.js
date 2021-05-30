import React from 'react';
import './App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.webp';

function App(props) {
    console.log(props)
        return (
            <Carousel>
                <div>
                    <img src={img1} alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} alt=""/>
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    };

export default App;
