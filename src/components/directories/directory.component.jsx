
import React from 'react';

import MenuItems from '../menu-item/menu-items.components';
import './directory.style.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
             sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://www.dapperconfidential.com/wp-content/uploads/2020/03/photo-of-man-wearing-sun-hat-3017918-e1614706072264.jpg.webp',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://jw-webmagazine.com/wp-content/uploads/2019/01/pexels-roman-pohorecki-16170-scaled.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
               ]
              
        }
    }

    render(){
        return(
            <div className='directory-menu'>
{ this.state.sections.map(({title,imageUrl,id,size})=>(
    <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} />
))}
  </div>
        );
    }
}
export default Directory;