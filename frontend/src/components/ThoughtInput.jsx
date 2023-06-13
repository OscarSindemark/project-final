import React from 'react'

const ThougthInput = ({ newThought, onSend, onNewThought }) => {
  return (
    <form onSubmit={onSend} className="container border-solid my-30 pb-30 mr-30 w-1/3 h-180 bg-gray-100 shadow-5 rounded-3xl flex flex-col justify-items-center items-center my-2 py-2">

      <p className="mx-auto flex items-center flex-col">What are you thinking?</p>

      <textarea
        value={newThought}
        onChange={onNewThought}
        className="mx-auto flex items-center flex-col"
        placeholder="What's on your mind? " />

      <div className="max-length">{140 - newThought.length}  characters left</div>
      <button type="submit" className="post-btn" disabled={newThought.length < 6 || newThought > 140}>  Post </button>
    </form>
  )
}
export default ThougthInput;