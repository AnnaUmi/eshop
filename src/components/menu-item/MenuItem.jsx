import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    console.log('history', history)
    console.log('match', match)
    console.log('linkUrl', linkUrl)
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="content">
                <h2 className="title">
                    {title}
                </h2>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
