import React from 'react'

const ThougthInput = ({ newThought, onSend, onNewThought }) => {

  return (
    <div className='px-4 py-3 border-[1px] border-primary h-fit rounded-lg'>
      <form onSubmit={onSend} className="">
        <div className='flex items-center justify-between mb-2'>
          <p className="text-[24px] font-bold text-primary">Whassup bbygirl?</p>
          <p><span className='text-primary'>{newThought.length}</span>/140</p>
        </div>
        <textarea
          value={newThought.slice(0, 139)}
          onChange={onNewThought}
          className="w-full mb-4 bg-black"
          placeholder="Write something you’d like to share" 
        />
        <button type="submit" className="select-none post-btn disabled:opacity-50 disabled:pointer-events-none" disabled={newThought.length < 6 || newThought.length > 140}>Post</button>
      </form>
    </div>
  )
}
export default ThougthInput;