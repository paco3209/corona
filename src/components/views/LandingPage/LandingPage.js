import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Layout } from 'antd';
import './LandingPage.css';

const { Header, Content, Footer } = Layout;

function LandingPage() {

    const [TotalCorona, setTotalCorona] = useState({})

    useEffect(() => {

        getTotalInfectados()

    })

    const getTotalInfectados = () => {
        Axios.get('https://coronavirus-19-api.herokuapp.com/all')
            .then(response => {

                
                setTotalCorona(response.data)
            } )
    }

    return (
    <Layout>
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <div className="content">
                    <h1>Total casos: {TotalCorona.cases}</h1> 
                    <h1>Total muertes: {TotalCorona.deaths}</h1>
                    <h1>Total recuperados: {TotalCorona.recovered}</h1>                             
                </div>
            </div>
        </Content>
    </Layout>
        
    )
}

export default LandingPage
