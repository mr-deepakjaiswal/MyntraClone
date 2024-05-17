import React from 'react'
import { useSelector } from 'react-redux'
import HomeItem from '../componenrts/HomeItem'

export default function Main() {
  const items = useSelector(store => store.items)

  return (
    <main>
      <div className="items-container">
        {items.map(item => <HomeItem key={item.id} item={item} />)}

      </div>
    </main>
  )
}

