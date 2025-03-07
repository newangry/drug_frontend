import { FOOTER_PAGES } from "@/utils/app/consts";
import { Flex, Text } from "@mantine/core";
import Link from "next/link";

const Footer = () => {
    return (
        <Flex
            justify={'space-between'}
            mt={90}
            h={44}
            align={'center'}
            pl={20}
            pr={20}
            sx={(theme) => ({
                borderTop: `1px solid ${theme.colors.gray[5]}`
            })}
        >
            <Text color="black" className="opacity-50" size={14} weight={400}>
                Copyright © 2025 Pharmacy Wiki. All rights reserved.
            </Text>
            <Flex
                gap={40}
            >
                {
                    FOOTER_PAGES.map((item) =>
                        <Link href={item.path}>
                            <Text color="black" className="opacity-50" size={12} weight={400}>
                                { item.name }
                            </Text>
                        </Link>
                    )
                }
            </Flex>
        </Flex>
    )
}

export default Footer;