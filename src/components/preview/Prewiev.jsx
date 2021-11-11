import React from 'react'
import CollectionItem from '../collection-item/CollectionItem';
import './preview.scss'

const Prewiev = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(({ id, name, ...restProps }) => <CollectionItem key={id} {...restProps}>{name}</CollectionItem>)}
            </div>
        </div>
    )
}

export default Prewiev
