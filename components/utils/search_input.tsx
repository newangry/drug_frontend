import { Flex, Input, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface Props {

}

const SearchInput: FC<Props> = ({
}) => {
    const [searchValue, setSearchValue] = useState<string>("");
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
    const router = useRouter();
    return (
        <Input
            w='70%'
            radius={100}
            size="lg"
            mb={60}
            leftSection={
                <Flex
                    pl={10}
                    pr={10}
                    bg={"#1D1D1F"}
                    gap={10}
                >
                    <IconSearch />
                    <Flex>
                        <Text color="black" weight='bold'>Pharmacy</Text>
                        <Text color="transparent" weight='bold' className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  font-bold">wiki</Text>
                    </Flex>
                </Flex>
            }
            rightSection={
                <IconSearch size="1.5rem" className="opacity-50" />
            }
            value={searchValue}
            onChange={(e: any) => {
                setSearchValue(e.currentTarget.value);
            }}
            onKeyDown={(e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    window.location.href = ("/search?query=" + searchValue)
                }
            }}
        />
    )
}

export default SearchInput;