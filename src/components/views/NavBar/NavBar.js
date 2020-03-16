import React,{useState} from 'react';
import { Drawer,Icon, Button } from 'antd';
import LeftMenu from "./Sections/LeftMenu";
import './Sections/NavBar.css';

function NavBar() {

    const [visible, setvisible] = useState(false)

    const showDrawer = () => {
        setvisible(true)
    }

    const onClose = () => {
        setvisible(false)
    }

    

    return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }} >
        <div className="menu__logo">
                <a href="/">Logo</a>
            </div>
        <div className="menus__container">
            
            <div className="menu_left">
                <LeftMenu mode="horizontal" />
            </div>
            <Button className="barsMenu" type="primary" onClick={showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <LeftMenu />
            </Drawer>    

        </div>
        
        
    </nav>
    )
}

export default NavBar
