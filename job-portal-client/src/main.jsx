import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterProvider router={router} />
  </BrowserRouter>
)
