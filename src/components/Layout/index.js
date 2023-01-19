import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
//funtional component used

const Layout = () =>{
    return(
     <div className='App'>
        <Sidebar/>
        
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
            <Outlet/>

            <span className='tags bottom-tags'>&lt;/body&gt;</span>
            <br/>
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            
        
        </div>
    </div>)
}

export default Layout