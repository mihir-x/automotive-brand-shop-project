import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

    const updateProduct = useLoaderData()
    const { name, image, brand, type, price, rating } = updateProduct
    console.log(name, image, brand, type, price, rating)

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        console.log(form)
        const name = form?.name?.value
        const brand = form?.brand?.value 
        const type = form?.type?.value
        const price = form?.price?.value
        const image = form?.image?.value
        const rating = form?.rating?.value
        const newProduct = {name, brand, price, type, image, rating}
        console.log(newProduct)
        //update to database
        fetch(`http://localhost:5000/${updateProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <div className="mt-5 md:mt-8 lg:mt-12 max-w-screen-md mx-auto">
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">Update Product</h1>
                </div>
                <form onSubmit={handleUpdate} className="mt-5 md:mt-8 lg:mt-12">
                    <div className="md:flex gap-5 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Name</span>
                                <input defaultValue={name} type="text" name="name" placeholder="name" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Brand</span>
                                <select name="brand" className="select select-bordered w-[70%]" defaultValue={brand}>
                                    <option disabled selected>Select Brand</option>
                                    <option value='Toyota'>Toyota</option>
                                    <option value='Ford'>Ford</option>
                                    <option value='BMW'>BMW</option>
                                    <option value='Mercedes-Benz'>Mercedes-Benz</option>
                                    <option value='Tesla'>Tesla</option>
                                    <option value='Honda'>Honda</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-5 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Type</span>
                                <input defaultValue={type} type="text" name="type" placeholder="type" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Price</span>
                                <input defaultValue={price} type="text" name="price" placeholder="price" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-5 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Image</span>
                                <input defaultValue={image} type="text" name="image" placeholder="image url" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Rating</span>
                                <select name="rating" className="select select-bordered w-[70%]" defaultValue={rating}>
                                    <option disabled selected>Select Rating</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block mt-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;