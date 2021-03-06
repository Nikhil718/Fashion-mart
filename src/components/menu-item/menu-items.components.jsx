import React from 'react';

import './menu-items.style.scss';

const MenuItems= ({ title , imageUrl, size})=>(
    <div 
        className={`${size} menu-item`}>
        <div style= {{backgroundImage: `url(${imageUrl})`
    }} className='backgroundImage' />
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
);

export default MenuItems;