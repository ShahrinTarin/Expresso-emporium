import React, { use } from 'react';

const Users = ({userPromise}) => {
    const initialUsers=use(userPromise)
    console.log(initialUsers);
    
    const handleAddSubmit=(e)=>{
         e.preventDefault()
         const name =e.target.name.value
         const email =e.target.email.value
         const newUser={name,email}
         console.log(newUser);

         fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log('data after create in the db',data);
            if(data.insertedId){
                alert('user added successfully')
                e.target.reset()
            }
         })
    }
    return (
        <div>
            <div>
                
                <form onSubmit={handleAddSubmit}>
                    <input type="text" name='name' />
                    <br />
                    <input type="email" name='email' />
                    <br />
                    <input type="submit" value="Add user" />
                </form>
            </div>
        </div>
    );
};

export default Users;