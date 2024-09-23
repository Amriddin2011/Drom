import { zeroes } from "../../helpers"

function Product(props) {
    return (
        <div>
            <div className="product" key={props.key ? props.key : 1}>
                <div className="top">
                    <p className="price">
                        { zeroes(props.price ? props.price : "Salesman hasn't written price yet!")}$
                    </p>
                    <img src={props.image} alt="It is image of the car!" width={'272'} height={'204'} />
                </div>
                <div className="bottom">
                    {
                        props.brand ? props.brand : "Salesman hasn't written brand and model yet!"
                    }
                    <span> </span>
                    {
                        props.model ? props.model : ""
                    }
                    <p className="city">City not found!</p>
                    <p className="describe">
                        {
                            props.description ? props.description.slice(0, 30)+"..." : "Salesman hasn't written a description yet".slice(0, 30) + "..."
                        }
                        <br />
                        {
                            props.year ? "Year : " + props.year + "," : "Year : nothing"
                        }
                        <span> </span>
                        {
                            props.generation ? "Generation : " + props.generation : "Generation : nothing"
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;



// import './style.scss'
// import m5cs from './../../assets/imgs/m5cs.jpg';
// import img from './../../assets/imgs/default.jpg';

// function Product(props) {
//     return (
//         <>
//             <div className="product">
//                 <div className="top">
//                     <p className="price">
//                         <span>1</span>
//                         <span>800</span>
//                         <span>000</span>
//                         <span>000</span>
//                         <span>UZS</span>
//                     </p>
//                     <img src={m5cs} alt="It is a car!" width={'272'} height={'204'} />
//                 </div>
//                 <div className="bottom">
//                     <a className="name" href='#'>Bmw m5 cs</a>
//                     <p className="city">Samarkand</p>
//                     <p className="describe">Motor 4.4, 635 hp, color is green.</p>
//                 </div>
//             </div>
//             <div className="product">
//                 <div className="top">
//                     <p className="price">
//                         <span>1</span>
//                         <span>200</span>
//                         <span>000</span>
//                         <span>000</span>
//                         <span>UZS</span>
//                     </p>
//                     <img src={img} alt="It is a car!" width={'272'} height={'204'} />
//                 </div>
//                 <div className="bottom">
//                     <a className="name" href='#'>Toyota Camry</a>
//                     <p className="city">Xuchand</p>
//                     <p className="describe">Motor 3.5, 301 hp, color is black.</p>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Product;