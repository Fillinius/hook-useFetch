import useFetch from './hook/useFetch.tsx'
import React from 'react'

export default function Demo() {
  const { data, isLoading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  return (
    <div>
      <div>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data &&
        !isLoading &&
        data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  )
}
