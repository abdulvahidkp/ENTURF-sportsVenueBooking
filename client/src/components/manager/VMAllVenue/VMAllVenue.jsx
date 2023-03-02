import React, { useState } from 'react'
import turfImage from '../../../assets/turfImage.jpeg'
import { ShareIcon } from '../../../assets/ShareIcon'
import { Cricket,Football } from '../../../assets/Sports'
import { Link } from 'react-router-dom'

function VMAllVenue() {

    const [section,setSection] = useState('venues')
    

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
        
          <div class="grid gap-4 mb-4">
            <div>
                <Link to='/vm/venues/add' className='bg-green-400 font-roboto p-3 rounded-md shadow-lg hover:bg-green-500 duration-300 cursor-pointer float-right'>Add new venue</Link>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Photo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Venue name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Activity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Facility
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Slots
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          
        </div>
      
      </div>
    </div>
  )
}

export default VMAllVenue