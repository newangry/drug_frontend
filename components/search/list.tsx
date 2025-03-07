import { getData } from "@/api/search";
import Pagination from "@/components/utils/pagination";
import { Box, Flex, LoadingOverlay, Text, Highlight, Skeleton } from "@mantine/core";
import { FC, useEffect, useState } from "react";

interface Props {
    query: string | null
}

const List: FC<Props> = ({
    query
}) => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [perPage, setPerpage] = useState<number>(12);
    const [pageCount, setPageCount] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1)
    const [searchValue, setSearchValue] = useState<any>('');

    useEffect(() => {
        setSearchValue(query);
    }, [query])

    useEffect(() => {
        if (searchValue !== '' && searchValue) {
            fetchData();
        }
    }, [searchValue, pageCount, pageIndex])

    const Loader = () => {
        return (
            <Box>
                {Array.from({ length: 12 }).map((_, index) => (
                    <Box mt={15}>
                        <Skeleton key={index} variant="rectangular" width='100%' height='20px' style={{ marginBottom: '10px' }} />
                        <Skeleton key={index} variant="rectangular" width='100%' height='20px' style={{ marginBottom: '10px' }} />
                    </Box>
                ))}
            </Box>
        )
    }

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = await getData({
                query: searchValue,
                per_page: perPage,
                page_index: pageIndex
            })
            setData(data.data);
            setTotalPageCount(Math.floor(data.total_count / perPage));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }
    const replaceHighLight = () => {

    }
    return (
        isLoading ? Loader() :
        <Box className="min-h-full">
            <Flex
                justify='space-between'
                align='center'
                pb={13}
                className="border-b border-grey-dark"
            >
                <Flex gap={5} align='baseline'>
                    <Text size={17}>{totalPageCount * perPage}</Text>
                    <Text size={17} className="opacity-50">result of </Text>    
                    <Text size={17}>{searchValue}</Text>
                </Flex>
                <Pagination
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    totalPageCount={totalPageCount}
                    perPage={perPage}
                />
            </Flex>
            <Flex mt={20} gap={20} direction='column'>
                {
                    data.map((item: any) =>
                        <Box className="cursor-pointer">
                            <Highlight
                                highlight={[searchValue]}
                                sx={(theme) => ({
                                    '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
                                    '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] },
                                    fontSize: 17
                                })}
                            >
                                {item.category_name}
                            </Highlight>
                            <Highlight
                                highlight={[searchValue]}
                                sx={(theme) => ({
                                    '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
                                    '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] },
                                    color: 'gray'
                                })}
                            >
                                {item.name}
                            </Highlight>

                        </Box>
                    )
                }
            </Flex>
            <Pagination
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                totalPageCount={totalPageCount}
                perPage={perPage}
            />
        </Box>
    )
}

export default List;