import Footer from './footer';
import Navbar from './navbar';
import './CSS/layout.css';

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      {/* <Footer/> */}
    </div>
  )
}

export default Layout;
