import { useState } from 'react';
import {useDispatch} from "react-redux";
import {updateName} from '../../redux/user/userSlice.js'
import {useNavigate} from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState('');

  const disaptch = useDispatch()
    const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();

    disaptch(updateName(username))

    if(!username) return;

    navigate('/menu')

  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
          className='input mb-8 w-72 '
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <button type='primary'>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
