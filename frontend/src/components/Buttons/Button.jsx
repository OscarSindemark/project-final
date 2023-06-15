import React from 'react'

const Button = (props) => {
  return (
    <button
        type={props.type}
        className="px-3 py-2 text-sm font-semibold rounded-md shadow-sm text-primary bg-white/10 ring-1 ring-inset ring-primary hover:bg-white/20 h-fit"
        onClick={props.onclick}
    >
        {props.text}
    </button>
  )
}

export default Button