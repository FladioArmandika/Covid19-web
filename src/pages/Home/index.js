import React, { useState, useEffect } from 'react'
import { Button, Box, Flex } from '@chakra-ui/core'
import axios from 'axios'
import useFetch from '../../helpers/useEffect'
import GlobalData from './GlobalData'



export default function Home() {

    const {data, loading} = useFetch('https://coronavirus-19-api.herokuapp.com/all')

    // useEffect(() => {
    //     axios.get('https://coronavirus-19-api.herokuapp.com/all','')
    //         .then(res => {
    //             setGlobalData(res.data)
    //         })
    //         .catch(err => {
    //             console.error(err); 
    //         })

    // })

    return (
        <div>
            <Flex align='center' justify='center'>
                <Flex>
                    <Box maxW="lg" borderWidth="1px" rounded="lg" overflow="hidden">
                        <Flex>
                            <GlobalData/>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </div>
    )
}
