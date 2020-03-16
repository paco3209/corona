import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Input, Descriptions, Typography,Spin } from 'antd';
import './DetailPage.css'

const { Title } = Typography;
const { Search } = Input;


function DetailPage() {

    const [Countries, setCountries] = useState([])
    const [SearchTerm, setSearchTerm] = useState("")
    const [Loading, setLoading] = useState(true)
    

    

    useEffect(() => {
        if(SearchTerm == ""){
            setCountries([])
            getData()
            
        }else{
            const result = Countries.filter(response =>
                response.country.toLowerCase().includes(SearchTerm)
            );
            setCountries(result)
        }
    }, [SearchTerm])

    const getData = () => {
        Axios.get("https://coronavirus-19-api.herokuapp.com/countries")   
            .then(response => {
                    setCountries([...Countries, ...response.data]) 
                    setLoading(false)             
            })
            
    }   

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2}>  Detalle por Pais    </Title>
            </div>
            <div>
                <Search
                    type="text"
                    placeholder="Buscar"
                    value={SearchTerm}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                />
            </div>
            <hr />
            <div>
                {Loading ? 
                <div className="loading">
                    <Spin size="large" />
                </div> :
                
                Countries && Countries.map((response, index) => (
                    <React.Fragment key={index}>
                         <Descriptions>
                            <Descriptions.Item label="Pais">{response.country}</Descriptions.Item>
                            <Descriptions.Item label="Casos">{response.cases}</Descriptions.Item>
                            <Descriptions.Item label="Casos de hoy">{response.todayCases}</Descriptions.Item>
                            <Descriptions.Item label="Muertes">{response.deaths}</Descriptions.Item>
                            <Descriptions.Item label="Muertes de hoy">
                                {response.todayDeaths}
                            </Descriptions.Item>
                            <Descriptions.Item label="Recuperados">{response.recovered}</Descriptions.Item>
                            <Descriptions.Item label="Personas portadoras del virus">{response.active}</Descriptions.Item>
                            <Descriptions.Item label="Personas en estado critico">{response.critical}</Descriptions.Item>
                        </Descriptions>
                        < hr />
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}

export default DetailPage
