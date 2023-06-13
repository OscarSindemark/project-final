import React from 'react'
import { formatDistance } from 'date-fns'

const ApiInput = ({ ApiThought, loading, handleOnlikeChange }) => {
  if (loading) {
    return <h1>loading in progress... </h1>
  }

  return (
    <section className="w-1/3">
      {ApiThought.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div key={thought._id} className="border-solid my-2 bg-gray-100 shadow-5 rounded-3xl overflow-hidden">
            <p className="text-black text-center py-3 bg-gray-200 ">{thought.message}</p>
            <div className="flex justify-between items-center px-2">
              <div className="flex justify-start items-center">
                <button
                  type="button"
                  className="rounded-full h-10 w-10 outline-none"
                  onClick={() => {
                  // eslint-disable-next-line no-underscore-dangle
                    handleOnlikeChange(thought._id)
                  }}
                  style={{
                    background: thought.hearts >= 1 ? '#d4131d' : '#f2f2f2'
                  }}>
                  <span className="joystick-emoji"> <i className="bi bi-controller" />
                  </span>
                </button>
                <p className="text-black ml-1 flex justify-center"> x {thought.hearts} </p>
              </div>
              <div className="time">
                <p className="text-inherit">{formatDistance(new Date(thought.creadedAt), Date.now(), { addSuffix: true })} </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ApiInput