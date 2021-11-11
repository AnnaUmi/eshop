import React from 'react'
import Prewiev from '../../components/preview/Prewiev';
import SHOP_DATA from './data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        console.log('collections', collections)
        return <div className="shop-page">
            {collections?.map(({ id, ...collection }) => <Prewiev key={id} {...collection}></Prewiev>)}
        </div>
    }
}
export default ShopPage