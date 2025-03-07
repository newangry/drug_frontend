import Title from "@/components/layouts/title";
import Detail from "@/components/trade_names/details";
import List from "@/components/trade_names/list";
import SearchInput from "@/components/utils/search_input";
import { Box } from "@mantine/core";
import { useState } from "react";

const TradeNames = () => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>(null);

    return (
        <Box>
            <SearchInput />
            {
                showDetail ? <Detail data={detail} /> :
                    <Box>
                        <Title
                            title="All Pharmaceutical Drug & Brand Names"
                            summary="All Pharmaceutical Drug & Brand Names All the pharmaceutical drug and brand names"
                            gradient_title="Drug & Brand Names"
                        />
                        <List
                            setDetail={(detail: any) => {
                                setShowDetail(true);
                                setDetail(detail)
                            }}
                        />
                    </Box>
            }

        </Box>
    )
}

export default TradeNames;