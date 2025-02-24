import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagAction } from '../store/bagSlice';
export default function HomeItem({ item }) {

  const dispatch = useDispatch();
  const handleAddOnBag = () => {
    dispatch(bagAction.addToBag(item.id))
  }
  const handelOnRemove = () => {
    dispatch(bagAction.removeFromBag(item.id))
  }


  const bagItems = useSelector(store => store.bag)
  const elementFound = bagItems.indexOf(item.id) >= 0

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? <button type="button" class="btn btn-danger btn-add-bag" onClick={handelOnRemove}>Remove</button> : <button type="button" class="btn btn-success btn-add-bag" onClick={handleAddOnBag}>Add to Bag</button>}


    </div>
  )
}
