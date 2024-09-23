import './style.scss'
import m5cs from './../../assets/imgs/m5cs.jpg';
import img from './../../assets/imgs/default.jpg';
import Product from './Product'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../store'
import { Link } from 'react-router-dom'

function Products(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const URL = BASE_URL + "/api/products"
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
        <>
            {
                products.map((product, index) => {
                    return (
                        <Link key={index} to={"/car/" + product.id}>
                            <div key={index}>
                                <Product
                                    price={product.price}
                                    image={product.image}
                                    brand={product.brand}
                                    model={product.model}
                                    description={product.description}
                                    year={product.year}
                                    generation={product.generation}
                                    drive={product.drive}
                                />
                            </div>
                        </Link>
                    )
                })
            }

            <Product image={m5cs} />
        </>
    );
}

export default Products;