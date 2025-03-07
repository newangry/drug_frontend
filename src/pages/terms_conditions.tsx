import List from "@/components/terms_conditions/list";
import SearchInput from "@/components/utils/search_input";
import { Box } from "@mantine/core"

const TermsConditions = () => {
    return (
        <Box>
            <SearchInput />
            <List />
        </Box>
    )
}

export default TermsConditions;