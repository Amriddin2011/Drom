import m5cs from './../../assets/imgs/m5cs.jpg';
import img from './../../assets/imgs/default.jpg';
import './style.scss';

function Products(props) {
    return (
        <>
            <div className="product">
                <div className="top">
                    <p className="price">
                        <span>1</span>
                        <span>800</span>
                        <span>000</span>
                        <span>000</span>
                        <span>UZS</span>
                    </p>
                    <img src={m5cs} alt="It is a car!" width={'272'} height={'204'} />
                </div>
                <div className="bottom">
                    <a className="name" href='#'>Bmw m5 cs</a>
                    <p className="city">Samarkand</p>
                    <p className="describe">Motor 4.4, 635 hp, color is green.</p>
                </div>
            </div>
            <div className="product">
                <div className="top">
                    <p className="price">
                        <span>1</span>
                        <span>200</span>
                        <span>000</span>
                        <span>000</span>
                        <span>UZS</span>
                    </p>
                    <img src={img} alt="It is a car!" width={'272'} height={'204'} />
                </div>
                <div className="bottom">
                    <a className="name" href='#'>Toyota Camry</a>
                    <p className="city">Xuchand</p>
                    <p className="describe">Motor 3.5, 301 hp, color is black.</p>
                </div>
            </div>
        </>
    );
}

export default Products;