import React from 'react'
import useFetch from '../../helpers/useEffect'
import isLoading from '../../helpers/isLoading'
import { Flex, Box, Center } from '@chakra-ui/core'
import { numbers } from '../../helpers/number'
import { Container, Row, Col, Button } from 'react-bootstrap';
export default function GlobalData() {

    const { data, loading } = useFetch('https://coronavirus-19-api.herokuapp.com/all')

    return (
        <>
            <center>
                <b>Kasus</b><br />
                {loading ? 'loading' : numbers(data.cases)}
            </center>

            <center>
                <b>Meninggal</b><br />
                {loading ? 'loading' : numbers(data.deaths)}
            </center>

            <center>
                <b>Sembuh</b><br />
                {loading ? 'loading' : numbers(data.recovered)}
            </center>
        </>
    )
}
