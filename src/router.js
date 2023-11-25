import {Routes,Route} from "react-router-dom"
import ViewPage from './pages/user/ViewPage'
import SearchPage from './pages/user/SearchPage'
import MenuPage from './pages/user/MenuPage'
import {ROUTERS} from "./utils/routers"
import MasterLayout from "./pages/user/theme/masterLayout"

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.VIEW,
      component:<ViewPage/>
    },
    {
      path: ROUTERS.USER.SEARCH,
      component: <SearchPage/>
    },
    {
      path: ROUTERS.USER.MENU,
      component:<MenuPage/>
    },
  ]
  return (
    <MasterLayout>
      <Routes>
        {
          userRouters.map((item,key) => (<Route key = {key} path = {item.path} element = {item.component}/>))
        }
      </Routes>
    </MasterLayout>
  )
}
const RouterCustom = () => {
  return renderUserRouter();
}
export default RouterCustom;