import React from 'react';
import web from "../src/img/startup.jpg";
import Sdata from './Sdata';
import Card from './Card';

const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className="text-center"><span className='title_services'>Our Services</span></h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row gy-4'>
                            {
                                Sdata.map((val, ind) => {
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Service;