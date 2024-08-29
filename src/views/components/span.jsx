import React from 'react'

export const Span = (props) => {
  return (
    <div className='flex gap-4 justify-center'>
        <span>
            <img
                src="src\assets\images\movetogether.png"
                style={{ width: props.width, height: props.height }}
            />
        </span>
          <span className="font-semibold tracking-tight " style={{ fontSize: props.fontSize, marginTop: props.marginTop }}>MoveTogether</span>
    </div>
  )
}

export default Span;