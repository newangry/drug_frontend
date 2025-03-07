import { BRAND_NAMES } from "@/utils/app/consts";
import { Box, Flex, SimpleGrid, Text } from "@mantine/core";
import Link from "next/link";

const BrandNames = () => {
    return (
        <Box mt={90} p={10}>
            <Flex justify='space-between' align='center'>
                <Box>
                    <Text size={26} weight={500}>
                        Pharmaceutical Drug & Brand Names
                    </Text>
                    <Text className="opacity-50" size={14} weight={400}>
                        World famous pharmaceutical drug and brand names
                    </Text>
                </Box>
                <Link href='/trade_names'>
                    <Text color="#6B9FFF" className="cursor-pointer">
                        See All
                    </Text>
                </Link>
            </Flex>
            <Box mt={50}>
                <SimpleGrid cols={5}
                    breakpoints={[
                        { maxWidth: '62rem', cols: 5, spacing: 'md' },
                        { maxWidth: '48rem', cols: 1, spacing: 'sm' },
                    ]}
                >
                    {
                        BRAND_NAMES.map((item, index) =>
                            <Flex
                                gap={15}
                                mt={35}
                                align='center'
                            >
                                <Text size={40} weight={100} className="font-thin"
                                >
                                    {index + 1}
                                </Text>
                                <div>
                                    <Text size={14} weight={600} >{item.title}</Text>
                                    <Text className="opacity-50 font-small" weight={400} size={12}>{item.content}</Text>
                                </div>
                            </Flex>
                        )
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default BrandNames;