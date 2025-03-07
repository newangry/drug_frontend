import { Box, Flex, List, Text } from "@mantine/core";
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
                <Text size={14} weight={400} className="opacity-50"></Text>
            </Box>
            <List listStyleType="disc">
                {
                    data.information.map((item: any) =>
                        <List.Item>
                            <Flex gap={20} mt={10}>
                                <Text size={14} weight={400}>{item.trade_name}:</Text>
                                <Text className="opacity-50" size={14} weight={400}>{item.active_ingredients}</Text>
                            </Flex>
                        </List.Item>   
                    )  
                }
                
            </List>
        </Box>
    )
}

export default Detail;