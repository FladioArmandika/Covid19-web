import React from 'react'
import useFetch from '../../helpers/useEffect'
import isLoading from '../../helpers/isLoading'
import { Flex, Box } from '@chakra-ui/core'
import { numbers } from '../../helpers/number'

export default function GlobalData() {

    const {data, loading} = useFetch('https://coronavirus-19-api.herokuapp.com/all')

    return (
        <Box p={3} maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Flex direction='row' wrap=''>
                <Flex p={2}>
                    Kasus<br/>
                    {loading ? 'loading' : numbers(data.cases)}
                </Flex>
                <Flex p={2}>
                    Meninggal<br/>
                    {loading ? 'loading' : numbers(data.deaths)}
                </Flex>
                <Flex p={2}>
                    Sembuh<br/>
                    {loading ? 'loading' : numbers(data.recovered)}
                </Flex>
            </Flex>
            
        </Box>
    )
}
