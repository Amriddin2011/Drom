import './style.scss'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../store/index"
import { zeroes } from "../../helpers"

function CarDetails(props) {
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const URL = BASE_URL + "/api/products/" + parseInt(id)
        try {
            let response = await axios.get(URL)
            console.log(response.data)
            if (response.status == 200) {
                setProducts(response.data)
                console.log(products)
            } else {
                console.log(products)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='car-details'>
            <div className="left">
                <img className="image" src={products.image} alt="It is image of the car!" />
            </div>
            <div className="right">
                <div className="brand"><b>Brand:</b><span>{products.brand}</span></div>
                <div className="model"><b>Model:</b><span>{products.model}</span></div>
                <div className="price"><b>Price:</b><span>{zeroes(products.price)}</span>$</div>
                <div className="drive"><b>Wheel drive:</b><span>{products.drive}</span></div>
                <div className="year"><b>Year:</b><span>{products.year}</span></div>
                <div className="generation"><b>Generation:</b><span>{products.generation}</span></div>
                <p className="description">
                    <b>Description:</b>
                    <span>{
                        products.description ? products.description : "Salesman hasn't written description yet!"
                    }</span>
                </p>
                <div><b>Run:</b><span>{products.run} kilometers</span></div>
                <div><b>Horse Power:</b><span>{products.horsePower} h.p</span></div>
                <div><b>Color:</b><span>{products.color}</span></div>
            </div>
        </div>
    );
}

export default CarDetails;