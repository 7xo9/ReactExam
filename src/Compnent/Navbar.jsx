import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Navbar() {

    const [City, getCity] = useState()

    let local = localStorage.getItem("id")

    useEffect(()=>{
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/users/${local}`,

          })
            .then(function (response) {
                getCity(response.data.address.city);
              
            })

    },[])

    const singou = () =>{
        localStorage.clear()

    }




    if (local == null){
        return (
            <div className='max-sm:flex max-sm:flex-col'>
                <div className='w-[100vw] h-[6vh] flex items-center bg-[#00453e] max-sm:h-[30vh] max-md:h-[20vh] '>
        
                    {/* Logo and loc block */}
                    <div className='flex gap-8 max-sm:flex max-sm:w-[100vw] max-md:flex max-md:w-[100vw]'>
                        <Link to='/'>
                        <img width={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
        
                        </Link>
                        <div className='flex items-center text-white max-sm:flex max-sm:flex-wrap max-md:flex max-md:flex-wrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                         </svg>
                        <div >
                        <h1>Delever to</h1>
                        <p className='font-bold'></p>
                        </div>
        
                        {/* Search block */}
        
                        <div className='flex w-[70vw] justify-center max-sm:w-[0vw] max-sm:flex  max-md:w-[0vw] max-md:flex' >
                        <input type="text" className='w-[60vw] h-[3vh] pl-2 text-black max-sm:w-[0vw] max-sm:h-[0vh] max-md:w-[0vw] max-md:h-[0vh]' placeholder='Search Amazon' />
                        <button className='bg-[#ffdfd7] text-black border-[1px] border-soild w-[2vw] flex justify-center items-center max-sm:w-[0vw] max-sm:h-[0vh] max-md:w-[0vw] max-md:h-[0vh] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        </button>
                        </div>  
        
                        {/* Sing in And Cart block */}
        
        
                        <div className='max-sm:flex  max-sm:mt-10 max-md:flex  max-md:ml-10'>
                          <div className='flex justify-around items-center gap-3  max-sm:flex max-sm:flex-wrap max-md:flex max-md:flex-wrap'>
                            <Link to='/Singin'>
                            <button className='bg-[#ffd812] text-black w-[6vw] rounded-md h-[3vh] ax-sm:w-[60vw] max-md:w-[30vw]'>
                                Sing in
                                </button>
                            </Link>
                 
        
                                <div className='cursor-pointer'>
                                <h1>Returns </h1>
                                <p className='text-[1.2rem] font-bold'>& orders</p>
                                </div>  
        
                                <div className=' cursor-pointer flex items-end'>   
        
                                <img width={50} src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png" alt="" />
                                Cart
        
                                </div>
        
                            </div>
                        </div>
        
        
                        </div>
                    </div>
        
                </div>
        
                <div className='flex w-[100vw] h-[3vh] bg-[#185851] text-white gap-10'>
        
                    <button className='pl-5'>Today's Deals</button>
                    <button> Registry</button>
                    <button>Customer Service</button>
                    <button>Gift Cards</button>
                    <button>Sell</button>
        
                </div>
            </div>
          )

    }else{

        return (
            <div  className=''  >
                <div className='w-full h-[7vh] flex items-center  bg-[#00453e] max-sm:h-[30vh] max-md:h-[20vh] '>
        
                    {/* Logo and loc block */}
                    <div className='flex gap-8 max-sm:flex max-sm:w-[100vw] max-md:flex max-md:w-[100vw] '>
                        <Link to='/'>
                        <img width={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
                        </Link>
                        
                        <div className='flex items-center text-white max-sm:flex max-sm:flex-wrap max-md:flex max-md:flex-wrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                         </svg>
                        <div >
                        <h1>Delever to</h1>
                        <p className='font-bold'>{City}</p>
                        </div>
        
                        {/* Search block */}
        
                        <div className='flex w-[70vw] justify-center max-sm:w-[0vw] max-sm:flex  max-md:w-[0vw] max-md:flex  '  >
                        <input type="text" className='w-[60vw] h-[3vh] pl-2 text-black max-sm:w-[0vw] max-sm:h-[0vh] max-md:w-[0vw] max-md:h-[0vh]' placeholder='Search Amazon' />
                        <button className='bg-[#ffdfd7] text-black border-[1px] border-soild w-[2vw] flex justify-center items-center max-sm:w-[0vw] max-sm:h-[0vh] max-md:w-[0vw] max-md:h-[0vh] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        </button>
                        </div>  
        
                        {/* Sing in And Cart block */}
        
        
                        <div className='max-sm:flex  max-sm:mt-10 max-md:flex  max-md:ml-10'>
                          <div className='flex justify-around items-center gap-3  max-sm:flex max-sm:flex-wrap max-md:flex max-md:flex-wrap'>
                    
                            <button onClick={singou} className='bg-[#ffd812] text-black w-[6vw] rounded-md h-[3vh] max-sm:w-[60vw] max-md:w-[30vw]' type='Submit'>
                                Sing out
                                </button>
                        
                 
        
                                <div className='cursor-pointer'>
                                <h1>Returns </h1>
                                <p className='text-[1.2rem] font-bold'>& orders</p>
                                </div>  
        
                                  

                            <Link to='/Cart'>
                            <div className=' cursor-pointer flex items-end'>
                            <img width={50} src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png" alt="" />
                                Cart
                                </div>
                            </Link>
                              
        
                        
        
                            </div>
                        </div>
        
        
                        </div>
                    </div>
        
                </div>
        
                <div className='flex w-[100vw] h-[3vh] bg-[#185851] text-white gap-10 max-sm:flex-wrap max-sm:h-[9vh]'>
        
                    <button className='pl-5'>Today's Deals</button>
                    <button> Registry</button>
                    <button>Customer Service</button>
                    <button>Gift Cards</button>
                    <button>Sell</button>
        
                </div>
            </div>
          )

    }


  
}

export default Navbar