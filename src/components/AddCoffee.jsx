import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())

        // send coffee data to the db 
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee added Successflly!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className='p-8 max-w-7xl mx-auto bg-[url(https://i.ibb.co/R4PJZ08t/11.png)]  bg-auto bg-no-repeat'>
            <Link to='/' className='text-[#374151] flex items-center gap-2 text-lg mb-8'><FaArrowLeft />Back to home</Link>
            <div className='bg-[#F4F3F0]'>
                <div className='p-12 text-center space-y-4'>
                    <h1 className="text-5xl mb-5 text-[#374151]">Add New Coffee</h1>
                    <p className='font font-light text-[12px]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                </div>
            </div>

            <form onSubmit={handleAddCoffee} className='bg-[#F4F3F0] p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 '>

                    <fieldset className="fieldset bg-[#F4F3F0] border-none w-full border p-4">
                        <label className="label text-lg">Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>

                    <fieldset className="fieldset bg-[#F4F3F0] border-none w-full border p-4">
                        <label className="label text-lg">Chef</label>
                        <input name='chef' type="text" className="input w-full" placeholder="Enter coffee chef" />
                    </fieldset>

                    <fieldset className="fieldset bg-[#F4F3F0] border-none w-full border p-4">
                        <label className="label text-lg">Supplier</label>
                        <input name='supplier' type="text" className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>

                    <fieldset className="fieldset bg-[#F4F3F0] border-none w-full border p-4">
                        <label className="label text-lg">Taste</label>
                        <input name='taste' type="text" className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-[#F4F3F0] border-none w-full border p-4">
                        <label className="label text-lg">Price</label>
                        <input name='price' type="text" className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>

                    <fieldset className="fieldset bg-[#F4F3F0] border-none w-full border p-4">
                        <label className="label text-lg">Details</label>
                        <input name='details' type="text" className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>

                </div>
                <fieldset className="fieldset bg-[#F4F3F0] border-none w-full border p-4">
                    <label className="label text-lg">Photo</label>
                    <input name='photo' type="text" className="input w-full" placeholder="Enter photo URL" />
                </fieldset>

                <button className='btn my-5 w-full bg-[#D2B48C] text-[#331A15]' type="submit" >Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;