import List from "@/components/search/list";
import SearchInput from "@/components/utils/search_input";
import { Box, Image, Skeleton } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Search = () => {
    const router = useRouter();
    const [searcHValue, setSearchValue] = useState<string | null>('');
    useEffect(() => {
        const time = setTimeout(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('query');
            if (query) {
                setSearchValue(query);
            }
        }, 200)
        return () => {
            clearTimeout(time);
        };
    }, [])

    return (
        <Box>
            <Box style={{ position: "absolute", top: "250px" }}>
                <Image src="/images/background-home.svg" width="100%" />
            </Box>
            <SearchInput
            />
            <List
                query={searcHValue}
            />
        </Box>
    )
}


export default Search;