import { useEffect, useState } from 'react'
import Image from 'next/image'
export default function IndexPage() {
  const [inputValue, setInputValue] = useState('')
  const [name,setName] = useState('')
  const [list, setlist] = useState([])

  useEffect(() => {
    loadlist()
  }, [])
  const loadlist = () => {
    fetch('https://api.zenon.si/post')
      .then(response => response.json())
      .then(data => setlist(data))
  }
  const tweet = () => {
    if (inputValue !== '' && name !== '') {
      setInputValue('')
      fetch('https://api.zenon.si/post', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, content: inputValue })
      })
        .then(() => loadlist())
    }
  }
  return (
    <div className="min-h-full bg-gray-100 flex flex-col items-center">
      <form className="w-1/2 flex flex-col items-end"
      onSubmit={(event) =>{
      event.preventDefault()
      tweet()
      }}
      >

        <div className="w-full mt-32 bg-white p-6 rounded-lg shadow">
          <label for="first">Name:</label>
          <div>
            <input type='text' className="bg-gray-300 border-gray-500 w-full p-2 rounded-lg mt-2" 
            
            onChange={({target:{value}}) =>setName(value)}
            value={name}
            required
            />
          </div>
        </div>
        <div className="w-full mt-3 bg-white p-6 rounded-lg shadow">
          <textarea rows={10} className="outline-none w-full resize-none"
            value={inputValue}
            onChange={(event) => {
              const value = event.target.value;
              setInputValue(value)
            }} />
           
        </div>
        <button
          className="mt-6 bg-gray-800 text-white font-bold p-6 rounded-lg shadow-lg"
type='submit'
        >
          Tweet
        </button>
        <button
          className='bg-gray-400 text-white p-4 rounded-lg'
          type='button'
          onClick={loadlist}
        >
          Refresh

        </button>
      </form>
      <div className='w-1/2 mt-8'>
        {list.map((data) => {
          return (
            <div key={data.id} className='mt-4 bg-white rounded-lg shadow-lg p-6'>
              <h1 className='text-xl font-bold'>{data.name}</h1>
              <div className='mt-2 text-gray-600'>
                {data.content}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}