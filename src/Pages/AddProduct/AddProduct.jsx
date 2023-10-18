import swal from "sweetalert";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value 
        const price = form.price.value 
        const image = form.image.value 
        const rating = form.rating.value 
        const description = form.description.value 

        const product = {name, brand, type, price, image, rating, description}

        //add product data to the database
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                swal('Congratulations!', 'Product has been added to the database', 'success')
                form.reset()
            }
        })

    }

    return (
        <div>
            <div className="mt-5 md:mt-8 lg:mt-12 max-w-screen-md mx-auto">
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">Add New Product</h1>
                </div>
                <form onSubmit={handleAddProduct} className="mt-5 md:mt-8 lg:mt-12">
                    <div className="md:flex gap-5 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Name</span>
                                <input type="text" name="name" placeholder="name" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Brand</span>
                                <select name="brand" className="select select-bordered w-[70%]">
                                    <option disabled selected>Select Brand</option>
                                    <option>Toyota</option>
                                    <option>Ford</option>
                                    <option>BMW</option>
                                    <option>Mercedes-Benz</option>
                                    <option>Tesla</option>
                                    <option>Honda</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-5 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Type</span>
                                <input type="text" name="type" placeholder="type" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Price</span>
                                <input type="text" name="price" placeholder="price" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-5 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Image</span>
                                <input type="text" name="image" placeholder="image url" className="w-[70%] input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="input-group w-full">
                                <span className="w-[30%]">Rating</span>
                                <select name="rating" className="select select-bordered w-[70%]">
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

                    <div className="mt-5">
                        <div className="form-control w-full">
                            <label className="input-group w-full">
                                <span className="w-[15%]">Short Description</span>
                                <input type="text" name="description" placeholder="write short description" className="w-[85%] input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block mt-5">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;