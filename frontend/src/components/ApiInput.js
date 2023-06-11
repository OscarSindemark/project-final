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
          <div key={thought._id} className="container-child">
            <p className="message">{thought.message}</p>
            <div className="btn-container">
              <div className="like-contianer">
                <button
                  type="button"
                  className="btn-heart"
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
                <p className="likes"> x {thought.hearts} </p>
              </div>
              <div className="time">
                <p className="date">{formatDistance(new Date(thought.creadedAt), Date.now(), { addSuffix: true })} </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ApiInput