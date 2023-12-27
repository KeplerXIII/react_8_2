import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Data } from '../models'

export const UseFetchTst = () => {
  const apiUrl = 'http://localhost:7070/'
  const options = ['data', 'error', 'loading']
  const [selectedOption, setSelectedOption] = useState('')

  const { data, isLoading, hasError } = useFetch<Data>(apiUrl, selectedOption)
  console.log(data, isLoading, hasError)

  return (
    <>
      <div>
        {options.map((opt) => (
          <button key={opt} onClick={() => setSelectedOption(opt)}>
            {opt}
          </button>
        ))}
      </div>
      {hasError && !isLoading && (
        <>
          {hasError.name}: {hasError.message}
        </>
      )}
      {isLoading && <>Загрузка</>}
      {data && !hasError && !isLoading && <>Статус: {data.status} </>}
    </>
  )
}
