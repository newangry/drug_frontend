import { POPULAR_SEARCHES } from "@/utils/app/consts";
import { Box, Flex, Grid, SimpleGrid, Text } from "@mantine/core";

const PopularSearches = () => {
    return (
        <Flex mt={30} justify='center' gap={10} w='80%' pl={30}>
            <Text size={14} className="color-black opacity-50" weight={400} w={150}>Popular searches: </Text>
            <SimpleGrid cols={8} >
                {
                    POPULAR_SEARCHES.map((item: string) => 
                        <Text size={12} weight={400} className="opacity-90 cursor-pointer font-small"
                            onClick={() => {
                                window.location.href="/search?query="+item
                            }}
                        >{ item }</Text>
                    )
                }
            </SimpleGrid>
        </Flex>
    )
}

export default PopularSearches;