import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


function Landing() {

    const [Data, getData] = useState([])
    const nav = useNavigate()

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',

          })
            .then(function (response) {
                getData(response.data)
                console.log(response.data);
              
            })

    },[])


    // get with the email of the user then get the address he's in

    const Details = (id) =>{
    //   Nav To the Detailes Page
    nav(`/Det/${id}`)

    }



  return (
    <div className='  bg-[#5b5c5c18] '>

    <div className='w-full h-full '>

        {/* Header for the landing page */}

        <div className='flex h-[60vh] w-[100vw] main  justify-center items-center'>
            <div className='text-center'>
            <h1 className='text-[4rem] text-white'> All the things you need </h1>
            <h1 className='text-[3rem] text-white'>From <span className='text-[#ff9a01]'>A</span> to <span className='text-[#ff9a01]'>Z</span></h1>

            </div>

            </div>

        <div className='flex w-[100vw] flex-wrap gap-10 justify-center pt-10 max-sm:w-[100vw] max-md:w-[100vw] max-lg:w-[100vw] '>
            {Data.map((items)=>{
                return(
                    <>

                    <div className='bg-white w-[20vw] h-[37vh] rounded-md shadow-xl flex justify-center text-center max-sm:w-[100vw] max-md:w-[100vw] max-lg:w-[40vw]'>


                        <div className='flex flex-col items-center justify-center '>

                        <h1 className='font-bold'>{items.title}</h1>
                        <h1>{items.category}</h1>
                        <div className='w-[8vw] pt-4 max-sm:w-[40vw] max-md:w-[40vw]'>
                        <img width={130}  src={items.image} alt=""  className=''/>
                        </div>

                        <h1 className='pt-4'>{items.price}$</h1>

                        <button onClick={()=>{Details(items.id)}} className='mt-10 text-blue-500'>View Details...</button>

                        </div>

                    </div>


                    </>
                )
            })}
        </div>
        
    </div>
    </div>

  )
}

export default Landing