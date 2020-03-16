import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="home">
                <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="pais">
                <a href="/paises">Por pais</a>
            </Menu.Item>
        </Menu>
    )
}

export default LeftMenu
