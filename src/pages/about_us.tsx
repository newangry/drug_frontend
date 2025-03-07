import AboutList from "@/components/about_us/about_list";
import SearchInput from "@/components/utils/search_input";
import { Box } from "@mantine/core";

const AboutUs = () => {
    return(
        <Box>
            <SearchInput />
            <Box>
                <AboutList />
            </Box>
        </Box>
    )
}

export default AboutUs;