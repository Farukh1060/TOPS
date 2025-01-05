

import {FaRegCircleUser} from "react-icons/fa6"
import {FaUserEdit} from "react-icons/fa"
import {MdDeleteForever} from "react-icons/md"
import React from 'react'

const Contact_card = () => {


  return (
    <div className="m-4 flex justify-between items-center bg-orange-300 p-2 rounded-xl">
    <div className="text-4xl text-orange-900"><FaRegCircleUser/>  </div>
    <div>
        <div className="text-2xl">username</div>
        <div>email</div>
    </div>
    <div className="flex text-4xl gap-1">
        <FaUserEdit className="text-green-800 cursor-pointer"></FaUserEdit>
        <MdDeleteForever className="text-red-500 cursor-pointer"/>
     </div>
    
</div>
  )
}

export default Contact_card