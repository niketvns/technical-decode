import React from 'react';
import web from "../src/img/Pngtree.png";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                name='Grow Your Business with'
                imgsrc={web}
                visit="/service"
                btnname="Get Started"
            />
        </>
    );
};
export default Home;
