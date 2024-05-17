import '../App.css'
import Headder from '../componenrts/Headder'
import Footer from '../componenrts/Footer'
import { Outlet } from 'react-router-dom'
import FetchingItems from '../componenrts/FetchingItems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../componenrts/LoadingSpinner'
function App() {

  const fetchStatus = useSelector(store => store.fatchStatus)

  return (
    <>
      <Headder />
      <FetchingItems></FetchingItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
