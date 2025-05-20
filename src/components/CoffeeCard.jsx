import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, photo, name, chef, price } = coffee
    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/coffees/${_id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('after delete',data);
    })

    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
    }
    return (
        <div className='w-8/12 mx-auto'>
            <div className='bg-[#F5F4F1] rounded-2xl mx-auto p-8 items-center flex justify-evenly '>
                <figure >
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>

                <div className=''>
                    <h1 className='font font-light mb-3'><span className='font font-semibold'>Name</span> : {name}</h1>
                    <h2 className='font font-light mb-3'><span className='font font-semibold'>Chef</span> : {chef}</h2>
                    <h3 className='font font-light'><span className='font font-semibold'>Price</span> : {price}</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <button className='w-[40px] flex items-center justify-center h-[40px] bg-[#3C393B] rounded-lg text-white cursor-pointer'><MdModeEdit size={18} /></button>
                    <button className='w-[40px] flex items-center justify-center h-[40px] bg-[#D2B48C] rounded-lg text-white cursor-pointer'><FaEye size={18} /></button>
                    <button onClick={() => handleDelete(_id)} className='w-[40px] flex cursor-pointer items-center justify-center h-[40px] bg-[#EA4744] rounded-lg text-white'><MdDelete size={18} /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;