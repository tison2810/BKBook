import {memo} from 'react'
import Header from "../header"
import Footer from "../footer"
const MasterLayout = ({children}) =>{
  return (
    <div>
      {children}
    </div>

  )
}
export default memo(MasterLayout)