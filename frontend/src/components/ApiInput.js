import React from 'react'
import { formatDistance } from 'date-fns'

const ApiInput = ({ ApiThought, loading, handleOnlikeChange }) => {
  if (loading) {
    return <h1>loading in progress... </h1>
  }

  return (
    <section className="test">
      {ApiThought.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div key={thought._id} className="w-full border-2 rounded-lg my-2">
            <p className="text-white">{thought.message}</p>
            <div className="btn-container">
              <div className="like-contianer">
                <button
                  type="button"
                  className="rounded-m"
                  onClick={() => {
                  // eslint-disable-next-line no-underscore-dangle
                    handleOnlikeChange(thought._id)
                  }}
                  style={{
                    background: thought.hearts >= 1 ? '#F6C6E9' : '#f2f2f2'
                  }}>
                  <span aria-label="heart emoji" className="heart-emoji"> ❤️
                  </span>
                </button>
                <p className="text-white"> x {thought.hearts} </p>
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