import React from 'react'

function Pagination({pageNo,next,prev}) {
    const Page2=()=>{
        if(pageNo==1){
            return(" ")
        }
        else{
            return(<p className='font-bold pr-4'>{pageNo-1}</p>)
        }
    }
    const Page1=()=>{
        if(pageNo==1 || pageNo==2){
            return(" ")
        }
        else{
            return(<p className='font-bold pr-4'>{pageNo-2}</p>)
        }
    }

  return (     
    <div className='bg-gray-400 p-1 mt-4 flex justify-center'>
            <div>
                <img onClick={prev} src='./src/assets/backward.svg' className='w-6 h-6 mr-8 hover:scale-125 ease-in-out duration-200'></img>
            </div>
            <div className='flex'>
                {Page1()}
                {Page2()}
                <p className='font-bold border-2 border-black pl-1 pr-1 py-0 rounded-xl'>{pageNo}</p>
                <p className='font-bold pl-4'>{pageNo+1}</p>
                <p className='font-bold pl-4'>{pageNo+2}</p>
            </div>
            <div>
                <img onClick={next} src='./src/assets/forward.svg' className='w-6 h-6 ml-8 hover:scale-125 ease-in-out duration-200'></img>
            </div>
        </div>
  )
}

export default Pagination