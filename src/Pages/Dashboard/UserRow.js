import React from 'react';
import {toast} from 'react-toastify';

const UserRow = ({user, role}) => {
    const {email} = user;
    const makeAdmin = () =>{
        fetch(`https://floating-tundra-88660.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }           
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success(`Successfully made an admin`)
        })
    }
    return (
        <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
                <td><button className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;