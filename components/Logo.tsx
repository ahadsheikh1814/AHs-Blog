import Image from 'next/image';
import React from 'react'
import type { LogoProps } from 'sanity'

const Logo = (props: LogoProps) => {
    const {renderDefault}=props;
  return (
    <div className='flex space-y-3 items-center'>
        <Image
        src={'/logo.webp'}
        alt='AHs'
        width={50}
        height={50}
        className='rounded-full object-cover'
        />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo