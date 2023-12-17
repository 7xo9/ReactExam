import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Singin() {
    const [Data, setData] = useState([])
    const [Name, getName] = useState()
    const [Pass, getPass] = useState()
    const nav = useNavigate()

    const Singinbtn = () =>{


        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/users',

          })
            .then(function (response) {
                setData(response.data)
              
            })
            Data.map((items)=>{

                if(Name == items.email || Name == items.phone && Pass== items.password  ){
                    nav('/')
                    localStorage.setItem("id" , items.id)
                }

            })


   

    }
  return (
    <div>
        <div className='flex w-[100vw] h-[100vh] items-center justify-center '>

            <div className='w-[30vw] h-[50vh] shadow-lg'>

                <div className='flex flex-col gap-3 justify-center p-10 '>
                <h1 className='text-[2rem] font-bold'>Sing in</h1>

                <p>Email or Phone Number</p>
                <input value={Name} onChange={(e)=>getName(e.target.value)} type="text"  className='w-[20vw]  border-b-stone-200 border-[2px] border-solid' placeholder='Email or Phone Number...'/>
                <p>Password</p>
                <input value={Pass}  onChange={(e)=>getPass(e.target.value)} type="password"  className='w-[20vw]  border-b-stone-200 border-[2px] border-solid' />

                <button onClick={Singinbtn} className='bg-[#ffd812] text-black w-[20vw] rounded-md h-[3vh]'>
                        Sing in
                </button>
                <div>
                    <p>By continuing, you agree to Amazon's <span className='text-blue-500'>Conditions of Use </span> and <span className='text-blue-500'>Privacy Notice</span>.</p>
                </div>

                </div>

                <hr />
                <div className='flex w-[30vw] items-center flex-col gap-10'>
                <p>New to Amazon?</p>

                <button className='bg-[##ffffff] text-black w-[15vw] rounded-md h-[3vh] shadow-xl border-b-stone-200 border-[2px] border-solid'>
                       Create your Amazon Account
                        </button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Singin