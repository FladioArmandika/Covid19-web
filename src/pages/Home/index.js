import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFetch from '../../helpers/useEffect'
import GlobalData from './GlobalData'
import '../../Constants/gaya.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CountTo from 'react-count-to';

export default function Home() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const [isComplete2, setIsComplete2] = useState(false)
    const [isComplete3, setIsComplete3] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://coronavirus-19-api.herokuapp.com/all')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    //format
    const format = amount => {
        return Number(amount)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    };

    return (
        <>
            <Container className="vh-100">
                <Row className="center-universe">
                    {
                        isLoading ?
                            <h3>Loading</h3>
                            :
                            <>
                                <Col xs={12} md={4} lg={4}>
                                    <div className="box">
                                        <p className="text-center title-header">Jumlah Kasus</p>
                                        <p className="text-center title-detail mt-3">
                                            {
                                                !isComplete ?
                                                    <CountTo to={data.cases} speed={5000} onComplete={() => setIsComplete(true)} />
                                                    :
                                                    <p className="text-center title-detail mt-3">{format(data.cases)}</p>
                                            }
                                        </p>
                                    </div>
                                </Col>

                                <Col xs={12} md={4} lg={4}>
                                    <div className="box">
                                        <p className="text-center title-header">Jumlah Sembuh</p>
                                        <p className="text-center title-detail mt-3" style={{color:'#57A773'}}>{format(data.recovered)}</p>
                                    </div>
                                </Col>

                                <Col xs={12} md={4} lg={4}>
                                    <div className="box">
                                        <p className="text-center title-header">Jumlah Meninggal</p>
                                        <p className="text-center title-detail mt-3" style={{color: '#FF3C38'}}>{format(data.deaths)}</p>
                                    </div>
                                </Col>
                            </>
                    }
                </Row>
            </Container>
        </>
    )
}
