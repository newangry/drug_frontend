import BrandNames from "@/components/home/brand_names";
import PopularSearches from "@/components/home/popular_searches";
import SearchInput from "@/components/home/search_input";
import { Box, Flex, Image, Text } from "@mantine/core";
import Chemical from '@/components/home/chemical';
import Manufacturers from "@/components/home/manufacturers";
import Sponsors from "@/components/home/sponsors";

const Home = () => {
    return (
        <Box pt={90}>
            <Box style={{position: "absolute", top: "220px"}}>
                <Image src="/images/background-home.svg" width="100%"/>
            </Box>
            <Flex justify='center' gap='10px' align='center'>
                <Text color="black" weight={600} size='48px'>Pharmacy</Text>
                <Text color="transparent" weight={600} size='48px' className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl font-bold">wiki</Text>
            </Flex>
            <Box className={`m-auto`} w='80%' pt={50}>
                <SearchInput />
                <PopularSearches />
            </Box>
            <BrandNames />
            <Chemical />
            <Manufacturers />
            <Sponsors />
        </Box>
    )
}

export default Home;