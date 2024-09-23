import './style.scss'
import { useState } from 'react'
import AddImagePng from "../../assets/imgs/addImage.png"
import { toast } from 'react-toastify'
import axios from "axios"
import { BASE_URL } from "../../store"


function SellCar() {
    const [form, setForm] = useState({
        images: [],
        brand: "",
        model: "",
        generation: "",
        price: "",
        year: "",
        drive: "",
    })

    const optionsBrand = [
        { label: "Brand", value: 0 },
        { label: "Bmw", value: 1 },
        { label: "Mercedes", value: 2 },
        { label: "Toyota", value: 3 }
    ]

    async function submit(e) {
        e.preventDefault()

        // Create form data
        const formData = new FormData()
        // GET ONLY FIRST image as image for now
        formData.append("image", form.images[0][0])
        formData.append("brand", form.brand)
        formData.append("model", form.model)
        formData.append("generation", form.generation)
        formData.append("price", form.price)
        formData.append("year", form.year)
        formData.append("drive", form.drive)
        formData.append("description", form.description)
        formData.append("color", form.color)
        formData.append("horsePower", form.horsePower)
        formData.append("run", form.run)
        // -------------------------
        // TODO: Add multiple images
        // form.images.forEach((image, index) => {
        //     formData.append(`images[${index}]`, image)
        // })
        // -------------------------
        const URL = BASE_URL + "/api/products/"
        try {
            const response = await axios.post(URL, formData)
            // TODO:  'Authorization': `Bearer ${token}`
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
        e.target.reset()
        toast.success("You are selling your car!", { position: "top-center", theme: "dark" })
        removeImage(null, true)
    }

    function setFormValue(e) {
        const { name, value } = e.target;
        if (name === "images") {
            const file = e.target.files[0]
            const imageUrl = URL.createObjectURL(file)

            // set form images and image URLs
            setForm({ ...form, images: [...form.images, [file, imageUrl]] })
        } else {
            setForm({ ...form, [name]: value })
        }
    }

    function removeImage(e = null, all = false) {
        if (all == true) {
            for (let i = 0; i < form.images.length; i++) {
                let imageUrl = form.images[i][1]
                let imgTag = document.querySelector(`img[src="${imageUrl}"]`)
                imgTag.remove()
            }
            form.images = []
        } else {
            let imageUrl = e.target.src
            setForm({ ...form, images: form.images.filter(img => img[1] !== imageUrl) })

            try {
                let imageEl = document.querySelector(`${e.target.getAttribute("data-del")}`)
                imageEl.remove()
            } catch (error) {
                console.log("Image has been deleted")
                toast.warn("Image has been deleted", { position: "top-center", theme: "dark" })
            }
        }
    }

    return (
        <div className="main">
            <h1>Sell a car!</h1>
            <form onSubmit={submit} className='sellForm'>
                <div className="inputs">
                    <div className="brand">
                        <input type="text" name='brand' placeholder='Brand' onChange={setFormValue} />
                        {/* <select name='brand' className="form-select">
                        {optionsBrand.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                        </select> */}
                    </div>
                    <div className="model">
                        <input type="text" name='model' placeholder='Model' onChange={setFormValue} required />
                    </div>
                    <div className="generation">
                        <input type="number" name='generation' placeholder='Generation' onChange={setFormValue} required />
                    </div>
                    <div className="price">
                        <input type="number" name='price' placeholder='Price' onChange={setFormValue} required />
                    </div>
                    <div className="year">
                        <input type="number" name='year' placeholder='Year' onChange={setFormValue} required />
                    </div>
                    <div className="wheelDrive">
                        <input type="text" name='drive' placeholder='Wheel Drive' onChange={setFormValue} required />
                    </div>

                    <div className="color">
                        <input type="text" name='color' placeholder='Color' onChange={setFormValue} required />
                    </div>
                    <div className="horsePower">
                        <input type="text" name="horsePower" placeholder='Horse Power' onChange={setFormValue} required />
                    </div>
                    <div className="run">
                        <input type="text" name="run" placeholder='Run km' onChange={setFormValue} required />
                    </div>
                </div>
                <div className="description">
                    <textarea id="description"
                        placeholder="Description"
                        rows={8}
                        name="description"
                        onChange={setFormValue}
                        value={form.description}
                    />
                </div>
                <div className="images">
                    <input type="file" name='images' placeholder='Images' onChange={setFormValue} required />
                    <img src={AddImagePng} alt="addImages" />
                    <small>Upload or drag here</small>
                </div>
                <div className="show-image" >
                    {
                        form.images.map((image, index) =>
                            <img
                                key={index}
                                src={image[1]}
                                alt="product"
                                onClick={removeImage}
                                data-del={image[1].slice(image[1].length - 10)} // last 10 characters of the image URL
                            />
                        )
                    }
                </div>
                <div className="show">
                    <button type='submit'>Show</button>
                </div>
            </form>
        </div>
    );
}
export default SellCar;