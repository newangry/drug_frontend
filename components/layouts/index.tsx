import { AppShell, Box, Divider, Footer, Header, Navbar, Text, useMantineTheme } from "@mantine/core";
import { FC, JSX, useState } from "react";
import MyHeader from "./header";
import MyFooter from "./footer";
import { SCREEN_WIDTH } from "@/utils/app/consts";

interface Props {
    children: JSX.Element,
}

const Layout: FC<Props> = ({ children }) => {
    const theme = useMantineTheme();
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            header={
                <Header height={{ base: 55 }} p="md"
                    className={`border-none`}
                >
                    <Box className={`m-auto`} style={{lineHeight: 55}} w={SCREEN_WIDTH}>
                        <MyHeader />
                    </Box>
                </Header>
            }
        >
            <Box className={`m-auto`} w={SCREEN_WIDTH}>
                {children}
            </Box>
            <Box className={`m-auto`} w={SCREEN_WIDTH} 
            >
                <MyFooter />
            </Box>
        </AppShell>
    );
}

export default Layout;