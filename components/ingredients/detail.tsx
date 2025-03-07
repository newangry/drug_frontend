import { Box, Flex, Text } from "@mantine/core";
import { FC } from "react";

interface Props {
    data: any
}

const Detail: FC<Props> = ({
    data
}) => {
    return (
        <Box mt={30}>
            <Box>
                <Text size={26} weight={500}>{data.name}</Text>
                <Text size={14} className="opacity-50" weight={400}></Text>
            </Box>
            <Box mt={25}>
                <Flex
                    sx={(theme) => ({
                        background: "rgba(121, 145, 190, 0.1)"
                    })}
                    direction='column'
                >
                    <Flex
                        sx={(theme) => ({
                            background: "rgba(121, 145, 190, 0.4)"
                        })}
                        p={10}
                        w='100%'
                    >
                        <Text size={14} w='30%' weight={700}>Active Ingredients</Text>
                        <Text size={14} w='70%' weight={700}>Trade names | Pharmaceutical companies</Text>
                    </Flex>
                    <Flex
                        sx={(theme) => ({
                            background: "rgba(121, 145, 190, 0.1)"
                        })}
                        p={10}
                        w='100%'
                    >
                        <Box w='30%' style={{ borderRight: '1px solid gray' }} p={10}>
                            {
                                data.information.active_ingredients.map((item: any) =>
                                    <Text size={14} weight={400}>
                                        {item}
                                    </Text>
                                )
                            }
                        </Box>
                        <Flex align='center' p={10} h='100%' w='70%' direction='column'>
                            {
                                data.information.companies.map((item: any) =>
                                    <Text size={14}>
                                        <span style={{fontWeight: 700}}>{item}</span> - <span style={{ color: "gray" }}>{data.information.trade_names.join(";")}</span>
                                    </Text>
                                )
                            }
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default Detail;