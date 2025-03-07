import { Box, Flex, Text } from "@mantine/core";
import Link from "next/link";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

const Chemical = () => {

    const data = [
        { title: "Metformin", content: "The chemical that makes Glucophage", bg: "#53C1C1" },
        { title: "Diazepam", content: "The chemical that makes Valium", bg: "#FF8587" },
        { title: "Diazepam", content: "The chemical that makes Valium", bg: "#FF8587" },
        { title: "Alprazolam", content: "Xanax", bg: "#5D656F" },
        { title: "Levothyroxine", content: "The chemical that makes Synthroid", bg: "#5BD37B" },
        { title: "Levothyroxine", content: "The chemical that makes Synthroid", bg: "#5BD37B" },
        { title: "Omeprazole", content: "The chemical that makes Prilosec", bg: "#85BEFF" },
        { title: "Ibuprofen", content: "The chemical that makes Advil", bg: "#5D6166" },
        { title: "Atorvastatin", content: "The chemical that makes Lipitor", bg: "#FF85AC" },
        { title: "Alprazolam", content: "Xanax", bg: "#5D656F" },
        { title: "Hydrochlo", content: "The chemical that makes Hydrodiuril", bg: "#DDAB4E" },
        { title: "Ibuprofen", content: "The chemical that makes Advil", bg: "#5D6166" },
        { title: "Ibuprofen", content: "The chemical that makes Advil", bg: "#5D6166" },
        { title: "Atorvastatin", content: "The chemical that makes Lipitor", bg: "#FF85AC" },
        { title: "Ibuprofen", content: "The chemical that makes Advil", bg: "#5D6166" },
        { title: "Lisinopril", content: "The chemical that makes Zestril", bg: "#E5D286" },
        { title: "Ibuprofen", content: "The chemical that makes Advil", bg: "#5D6166" },

    ];

    const options = {
        size: 180,
        minSize: 80,
        gutter: 8,
        provideProps: true,
        numCols: 5,
        fringeWidth: 160,
        yRadius: 130,
        xRadius: 220,
        cornerRadius: 50,
        showGuides: false,
        compact: true,
        gravitation: 5
    }

    const children = data?.map((data, i) => {
        return (
            <ChildComponent data={data} className="child" key={i} />
        );
    });

    return (
        <Box mt={90}
        >
            <Flex justify='space-between' align='center'>
                <Box>
                    <Text size={26} weight={500}>
                        Chemical Composition
                    </Text>
                    <Text className="opacity-50" size={14} weight={14}>
                        Here are the most searched ingredients
                    </Text>
                </Box>
                <Link href='/ingredients'>
                    <Text color="#6B9FFF" className="cursor-pointer">
                        See All
                    </Text>
                </Link>
            </Flex>
            <BubbleUI key={1} options={options} style={{ width: "100%", height: "550px", marginTop: '30px' }}>
                {children}
            </BubbleUI>
        </Box>
    )
}

function ChildComponent({ data, setClick }) {
    return (

        <Flex
            w="100%"
            h="100%"
            bg={data.bg}
            justify='center'
            align="center"
            direction='column'
            p={20}
            style={{ borderRadius: '50%' }}
        >
            <div className="text-[21px] text-white font-bold">
                {data.title}
            </div>
            <div className="text-[12px] text-white mt-[10px]">
                {data.content}
            </div>
        </Flex>
    );
}


export default Chemical;