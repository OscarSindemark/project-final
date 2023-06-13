import React from 'react'
import { formatDistance } from 'date-fns'

const ApiInput = ({ ApiThought, loading, handleOnlikeChange }) => {
  if (loading) {
    return <h1>loading in progress... </h1>
  }

  return (
    <>
      {ApiThought.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div key={thought._id} className="mb-4 overflow-hidden bg-2gray-100 shadow-5 rounded-3xl">
            <p className="py-3 text-center text-black bg-white">{thought.message}</p>
            <div className="flex items-center justify-between px-2 py-2 bg-dark1">
              <div className="flex items-center justify-start">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full outline-none"
                  onClick={() => {
                  // eslint-disable-next-line no-underscore-dangle
                    handleOnlikeChange(thought._id)
                  }}
                  style={{
                    background: thought.hearts >= 1 ? '#D0F200' : '#EAEAEA',
                    color: thought.hearts >= 1 ? 'black' : 'black'
                  }}>
                  <span className="joystick-emoji"> <i className="bi bi-controller" />
                  </span>
                </button>
                <p className="flex justify-center ml-1"> x {thought.hearts} </p>
              </div>
              <div className="time">
                <p className="text-inherit">{formatDistance(new Date(thought.creadedAt), Date.now(), { addSuffix: true })} </p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ApiInput