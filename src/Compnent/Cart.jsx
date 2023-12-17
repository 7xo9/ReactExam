import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Cart() {

    const [Data, getData] = useState([])
    const [pro, getpro] = useState([])
    const nav =useNavigate()
    let id = localStorage.getItem("id")
    useEffect(()=>{
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/carts?userId=${id}`})
            .then(function (response) {

                getData(response.data);
                console.log(response.data);
          
            })

    },[])


    useEffect(()=>{
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/products`,

          })
            .then(function (response) {
                getpro(response.data)
              
            })

    },[])

    const checkout = () =>{
        nav('/Check')

    }



  return (
    <div>
        <div className='flex w-full h-full'>
            <div className='w-[100vw] h-[50vh] flex items-center justify-end  flex-wrap gap-10'>

            <div>
               {Data.map((items)=>{

                if (items.userId == id){
                   
                     return(
                        <>
                        <h1>{items.products.map((i)=>{
                            return(
                                <>
                                <h1>{pro.map((items)=>{

                                    if (i.productId === items.id){
                                        return(
                                            <>
                                            
                                             <div className='bg-white w-[100vw] h-[37vh] rounded-md shadow-xl flex justify-end text-center max-sm:w-[100vw] max-md:w-[90vw]  '>
                                            
                                            <div className='flex max-sm:flex-col max-sm:items-center max-md:flex-col max-md:items-center '>
                                            <div className='flex flex-col gap-4'>         
                                            <h1 className='font-bold'>{items.title}</h1>
                                            <h1 className='font-bold'>{items.category}</h1>

                                            </div>
                                            <div className='w-[8vw]  max-sm:w-[80vw]   max-md:w-[80vw]'>
                                                
                                            <img width={130}  src={items.image} alt=""  className=''/>
                                            <h1> Quantity: {i.quantity}</h1>

                                             </div>
                                             </div>
                                            </div>
                                            <hr />
                                            </>
                                        )
                                    }

                                })}</h1>
                                </>
                            )

                        })}</h1>
                        </>
                     )
                        
                    
                }

               })}
            </div>
               <div className='flex flex-col items-center justify-center w-[100vw]' >
            <h1 className=''>Are Ready to Check Out?</h1>
            <button onClick={checkout} className='bg-[#ffd812] text-black w-[6vw] rounded-md h-[3vh] max-sm:w-[60vw] ms-10'>CheckOut</button>
        </div>
            
            </div>

        </div>
     
    </div>

    
  )
}

export default Cart