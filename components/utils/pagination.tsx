import { Box } from "@mantine/core";
import { IconAlignRight, IconArrowLeft, IconChevronCompactLeft, IconChevronCompactRight } from "@tabler/icons-react";
import { FC } from "react";
import ReactPaginate from 'react-paginate';

interface Props {
    totalPageCount: number,
    perPage: number,
    setPageIndex: (page_index: number) => void,
    pageIndex: number
}

const Pagination: FC<Props> = ({
    totalPageCount,
    perPage,
    setPageIndex,
    pageIndex
}) => {
    const handlePageClick = (event: any) => {
        setPageIndex(event.selected);
    };

    return (
        <Box>
            <nav
                className="mt-[30px] mb-[30px]"
                aria-label="Navigation to other pages"
                id="paginationWrapper"
            >
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={
                        <IconChevronCompactRight />
                    }
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={totalPageCount}
                    marginPagesDisplayed={3}
                    previousLabel={
                        <IconChevronCompactLeft />
                    }
                    forcePage={pageIndex}
                    renderOnZeroPageCount={null}
                />
            </nav>
        </Box>
    )
}

export default Pagination;