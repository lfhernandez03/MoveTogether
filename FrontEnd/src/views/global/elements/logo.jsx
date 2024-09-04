import React from 'react'

export const Span = (props) => {
  return (
    <div className='flex gap-4'>
        <span className='flex-shrink-0'>
            <img
                src="/images/movetogether.png"
                style={{ width: props.width, height: props.height }}
            />
        </span>
          <span className={` ml-2 font-semibold tracking-tight ${props.className}`} style={{lineHeight: props.height}} >MoveTogether</span>
    </div>
  )
}

export default Span;