import React from 'react'

const ThougthInput = ({ newThought, onSend, onNewThought }) => {
  return (
    <form onSubmit={onSend} className="container mx-auto flex items-center flex-col ">

      <p className="mx-auto flex items-center flex-col">What are you thinking?</p>

      <textarea
        value={newThought}
        onChange={onNewThought}
        className="mx-auto flex items-center flex-col"
        placeholder="What's on your mind? " />

      <div className="max-length">{140 - newThought.length}  chracters left</div>
      <button type="submit" className="btn-send" disabled={newThought.length < 6 || newThought > 140}>  Post ❤️</button>
    </form>
  )
}
export default ThougthInput;