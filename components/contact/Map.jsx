import React from 'react'

function Map() {
  return (
    <div className='lg:mt-[120px] mt-[70px] p-[30px] '>
        <div className='lg:h-[600px] h-[450px]'>
            <div className='w-full h-full'>
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Armus Digital collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            />
            </div>
        </div>
    </div>
  )
}

export default Map