import './style.scss'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../store/index"

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
        <div>
            <div className="left">
                <img className="image" src={products.image} alt="It is image of the car!" />
            </div>
            <div className="right">
                <h1 className="brandModel">{products.brand} {products.model}</h1>
                <h3 className="price">{products.price}$</h3>
                <h3 className="price">{products.drive}</h3>
                <h3 className="yearGeneration">Year: {products.year} Generation: {products.generation}</h3>
                <p className="generation">
                    {
                        products.description ? products.description : "Salesman hasn't written description yet!"
                    }
                </p>
            </div>
        </div>
    );
}

export default CarDetails;