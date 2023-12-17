import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios'
function Det() {

    const {id} = useParams()
    const [Data, getData] = useState([])
    const [AD, setAD] = useState()
    const nav = useNavigate()

    useEffect(()=>{
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/${id}`,

          })
            .then(function (response) {
                getData(response.data)
              
            })

    },[])

    const back = () =>{
        nav('/')
    }

   



  return (
    <div>
        <div onClick={back} className='flex text-blue-600 font-bold p-10'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>

        <button>Go back to
             Home Page
             </button>
        </div>


    <div className='flex'>
        <div className='flex w-[35vw] h-[80vh] items-center justify-end  max-sm:w-[100vw] max-sm:h-full max-md:w-[100vw] max-md:h-full'>

            <div className='w-full h-full shadow-lg '>

               <div className='flex w-[100vw] gap-3 justify-center p-10 items-center max-sm:w-[100vw] max-md:w-[100vw]'>

                <div>
                <img width={400} src={Data.image} alt="" className='bg-contain' />

                </div>
                <div className='flex h-[60vh] justify-around flex-col items-center w-[50vw] pl-10 max-sm:w-[100vw] max-md:w-[100vw]'>
                <div className=''>
                <h1 className='text-[2rem] font-bold'>{Data.title}</h1>
                <p>{Data.category}</p>
                <p>{Data.description}</p>
                </div>



</div>
                

    </div>
    <div className='pt-10 flex w-[30vw] justify-center max-sm:w-[100vw] max-md:w-[100vw]'>
    <div className='flex flex-col '>
        <h1 className='font-bold'>Price:  {Data.price}$</h1>
    <button onClick={()=>{
        localStorage.setItem("Proid", Data.id)
        setAD("ADDED")

    }} className='bg-[#ffd812] text-black w-[6vw] rounded-md h-[3vh] max-sm:w-[100vw] max-md:w-[100vw]'>
                        Add to Cart
                        </button>
                        <h1 className='bg-green-800 text-white flex justify-center mt-5'>{AD}</h1>
    </div>
    </div>



</div>

</div>





    </div>
    </div>
  )
}

export default Det