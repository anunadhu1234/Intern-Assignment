import React from 'react'
import planet from './images/planet.png'
import Image from 'next/image'
function LogoBar() {
  return (
    <div>
      <section className="absolute z-10 bg-white left-0 top-[850px] flex flex-col items-center p-[60px 55px 0px] gap-[10px] w-[1440px] h-[312.06px]">
          <div className="flex flex-row justify-between items-center p-[60px 0px] gap-[64px] w-[1330px] h-[192.06px] border-t border-b border-[#D8D8D8]">
            <Image src={planet} alt="palnet" className='w-[163px] h-[140px]'/>
            <Image src={planet} alt="palnet" className='w-[163px] h-[140px]'/>
            <Image src={planet} alt="palnet" className='w-[163px] h-[140px]'/>
            <Image src={planet} alt="palnet" className='w-[163px] h-[140px]'/>
            <Image src={planet} alt="palnet" className='w-[163px] h-[140px]'/>
          </div>
        </section>
    </div>
  )
}

export default LogoBar
