import React from 'react'
import BagSummary from '../componenrts/BagSummary'
import BagItems from '../componenrts/BagItems'
import { useSelector } from 'react-redux'

export default function Bag() {


  const bagItems = useSelector(store => store.bag)
  const items = useSelector(store => store.items)

  const finalItem = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0
  })
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map(item => <BagItems item={item}></BagItems>)}
        </div>

        <BagSummary></BagSummary>

      </div>
    </main>
  )
}
