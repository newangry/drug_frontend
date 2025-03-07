import { getData } from "@/api/manufacturers";
import { Box, Flex, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel } from '@mantine/carousel';

const Manufacturers = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await getData({});
            setData(data.data);
        } catch (e) {
        }
    }

    return (
        <Box>
            <Flex
                justify='space-between'
                align='center'
            >
                <Box>
                    <Text size={26} weight={500}>
                        Manufacturers
                    </Text>
                    <Text className="opacity-50" size={14}>
                        Pharmaceutical companies, manufacturers and suppliers
                    </Text>
                </Box>
                <Link href='/manufacturers'>
                    <Text color="#6B9FFF" className="cursor-pointer">
                        See All
                    </Text>
                </Link>
            </Flex>
            <Box className="mt-[50px]">

                <Carousel
                    w='100%'
                    height={200}
                    dragFree
                    slideGap="md"
                    align="start"
                    slideSize="10%"
                >
                    {
                        data.map((item: any) =>
                            <Carousel.Slide>
                                <Flex
                                    bg='white'
                                    p={10}
                                    gap={15}
                                    direction='column'
                                    justify='center'
                                    align='center'
                                    className="rounded-[10px]"
                                >
                                    <Image src='/images/empty_image.svg' alt="" width={64} height={64} />
                                    <Flex
                                        h={30}
                                        justify='center'
                                        align='center'
                                    >
                                        <Text size={14} weight={400} align="center">
                                            {item.name}
                                        </Text>

                                    </Flex>
                                </Flex>
                            </Carousel.Slide>
                        )
                    }
                </Carousel>
            </Box>
        </Box>
    )
}

export default Manufacturers;