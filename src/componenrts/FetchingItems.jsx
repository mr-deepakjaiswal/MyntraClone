import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsAction } from '../store/itemsSlice';
import { fatchStatusAction } from '../store/fatchStatusSlice';

export default function FetchingItems() {
  const fetchStatus = useSelector(store => store.fatchStatus)
  const dispach = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispach(fatchStatusAction.markFetchingStarted())
    fetch('http://localhost:8080/items', { signal })
      .then(res => res.json())
      .then(({ items }) => {
        dispach(fatchStatusAction.markFetchDone());
        dispach(fatchStatusAction.markFetchingFinished())
        dispach(itemsAction.addInitialItems(items));
      })

    return () => {
      controller.abort;
    }
  }, [fetchStatus])
  return (
    <></>
  )
}
