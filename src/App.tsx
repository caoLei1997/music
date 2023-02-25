
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { RouterProvider, } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './router'
import { store } from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <IconStyle />
        <RouterProvider router={router} />
      </Provider>

    </div>

  )
}

export default App
