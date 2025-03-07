import { Flex, Image, Input, Text } from "@mantine/core";
import { FC, useContext, useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import { PAGES } from "@/utils/app/consts";
import Link from "next/link";
import HomeContext from "@/state/index.context";
import { useRouter } from "next/router";

interface Props {

}

interface PageType {
    name: string,
    path: string
}

const MyHeader: FC<Props> = ({ }) => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    return (
        <Flex
            justify='space-between'
            align='center'
        >
            <Flex align='center' gap='sm'>
                <Image src='/images/logo.svg' />
                <Flex align='baseline' gap='2px'>
                    <Text color="black" weight="bold" size='17px' className="opacity-80">Pharmacy</Text>
                    <Text color="black" weight="bold" size='14px' className="opacity-50">wiki</Text>
                </Flex>
            </Flex>
            <Flex
                align={'center'}
                justify={'space-between'}
                gap={40}
            >
                {
                    PAGES.map((item: PageType) =>
                        <Link href={item.path}>
                            <Text color={`${item.path == router.pathname ? '#6B9FFF' : 'black'}`} weight={`${item.path == router.pathname ? '700' : '400'}`} className="opacity-80 font-small" size={12}>
                                {item.name}
                            </Text>
                        </Link>
                    )
                }
            </Flex>
            <Input
                size="xs"
                placeholder="Search..."
                className="header-input"
                rightSection={
                    <IconSearch size="1rem" className="opacity-50" />
                }
                radius='lg'
                onChange={(e: any) => {
                    setValue(e.currentTarget.value);
                }}
                onKeyDown={(e: KeyboardEvent) => {
                    if(e.key === "Enter") {
                        e.preventDefault();
                        router.push("/search?query="+value)
                    }
                }}
            />
        </Flex>
    )
}

export default MyHeader;