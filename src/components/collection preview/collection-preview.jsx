import React from "react";
import CollectionItems from "../collection-items/collection-item.component";
import './collection-preview.scss';


const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item,idx)=> idx < 4)
            .map(({id, ...otherItemProps}) => (
                <CollectionItems key={id} {...otherItemProps} />
            ))}

        </div>
    </div>
);
export default CollectionPreview;