import React, { useState } from 'react';

let year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className='footer'>
            <h6>copyright ©️ {year}</h6>
        </div>
    )
}

export default Footer;