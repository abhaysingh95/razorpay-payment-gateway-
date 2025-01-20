import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';


const PaymentSuccess = () => {
    const searchQUery = useSearchParams()[0]
    const referenceNum =  searchQUery.get("reference")
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>
                <Heading textTransform={"uppercase"}>Order Successful</Heading>

                <Text>
                    Reference No. {referenceNum}
                </Text>
                
            </VStack>
        </Box>
    )


}

export default PaymentSuccess;