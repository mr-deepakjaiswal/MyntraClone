import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routs/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bag from './routs/Bag.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './routs/Main.jsx'
import { Provider } from 'react-redux'
import myntraStore from './store/index.js'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/", element: <Main /> /*, loader: postLoader */
    },
    {
      path: "/bag",
      element: <Bag />
      /*,Action: creatPostAction*/
    },
  ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
