import React from 'react'

type Props = {
    size: string
    children: React.ReactNode
   
}

const Heading = ({size, children}: Props) => {
    
  return (
    <h1 className={`${size} text-2xl md:text-3xl text-center lg:text-left font-integral font-bold text-dark tracking-[2px] lg:leading-[54px]`}>{children}</h1>
  )
}

export default Heading