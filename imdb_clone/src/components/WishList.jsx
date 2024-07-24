import React from 'react'

function WishList() {
  return (
    <div className='wish-bck'>
        <div className='flex justify-center border-b p-3'>
          <p className='font-bold text-xl text-red-800 drop-shadow'>Sort By : Movie Gener</p>
        </div>
        <div className='flex justify-center gap-4 pb-4 mt-4 border-b'>
          <div className='bg-orange-200 p-2 rounded-xl shadow-md'>Action</div>
          <div className='bg-orange-200 p-2 rounded-xl shadow-md'>Drama</div>
          <div className='bg-orange-200 p-2 rounded-xl shadow-md'>Sci-fi</div>
        </div>
        <div className='flex justify-center mt-4'>
          <input type='text' placeholder='Enter your search' className='pb-1 pl-2 rounded-xl bg-gray-200 border-b-2 border-black'></input>
        </div>
        <div className='m-4 p-2'>
          <table className='w-full text-center'>
            <thead className='p-2 border text-sky-700 underline decoration-double'>
              <th className='w-3/12 item-center'>Movie Name</th>
              <th className='w-3/12 item-center'>Genre</th>
              <th className='w-3/12 item-center'>Rating</th>
              <th className='w-3/12 item-center'>Popularity</th>
              <th className='w-3/12 item-center'>Action</th>
            </thead>

            <tr className='border border-gray-200 text-sky-700 font-bold'>
              <td className='flex item-center '>
                <img src={'https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842753281-3T90U1EY5HUNCG43XERJ/A2_Poster_DC_v80_PAYOFF_221029_12trimHD.jpg'} className='m-2 w-20 h-28 rounded-lg'/>
                <div className='mt-12 ml-6 text-sky-700 font-bold'>The Avatar</div>
              </td>
              <td>
                <div>Sci-Fi</div>
              </td>
              <td>
                4/10
              </td>
              <td>
                345699
              </td>
              <td>
                <img src='./src/assets/delete.svg'/>
              </td>
            </tr>

            <tr className='border border-gray-200 text-sky-700 font-bold'>
              <td className='flex item-center '>
                <img src={'https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842753281-3T90U1EY5HUNCG43XERJ/A2_Poster_DC_v80_PAYOFF_221029_12trimHD.jpg'} className='m-2 w-20 h-28 rounded-lg'/>
                <div className='mt-12 ml-6'>The Avatar</div>
              </td>
              <td>
                <div>Sci-Fi</div>
              </td>
              <td>
                4/10
              </td>
              <td>
                345699
              </td>
              <td>
                <img src='./src/assets/delete.svg'/>
              </td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default WishList