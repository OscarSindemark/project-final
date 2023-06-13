import React, { useEffect, useState } from 'react';
import ThougthInput from './ThoughtInput';
import ApiInput from './ApiInput';

const ThoughtsContainer = () => {
  const [newThought, setNewThought] = useState('');
  const [ApiThought, setApiThought] = useState([]);
  const [loading, setLoading] = useState(false);

  const LIKES_URL = (LikeID) => `https://project-happy-thoughts-api-icpo5wm3kq-uc.a.run.app/thoughts/${LikeID}/like`

  const getData = () => {
    setLoading(true)
    fetch('https://project-happy-thoughts-api-icpo5wm3kq-uc.a.run.app/thoughts')
      .then((Response) => Response.json())
      .then((data) => setApiThought(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    getData();
  }, [])

  const handleNewThought = (event) => {
    setNewThought(event.target.value.slice(0, 139))
  }

  const onSend = (event) => {
    event.preventDefault();
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }
    fetch('https://project-happy-thoughts-api-icpo5wm3kq-uc.a.run.app/thoughts', option)
      .then((Response) => Response.json())
      .then(() => getData())
      .finally(() => setNewThought(''))
  }
  /* Add likes to messages  */

  const handleOnlikeChange = (LikeID) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(LIKES_URL(LikeID), option)
      .then((Response) => Response.json())
      .then(console.log('yey it works.'))
      .catch((error) => console.error(error))
      .finally(() => getData())
  }

  return (
    <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
      <ThougthInput
        newThought={newThought}
        onNewThought={handleNewThought}
        onSend={onSend} />
      <div className='max-h-[400px] overflow-scroll'>
      <ApiInput
        ApiThought={ApiThought}
        loading={loading}
        handleOnlikeChange={handleOnlikeChange} />
      </div>
    </div>
  )
}
export default ThoughtsContainer