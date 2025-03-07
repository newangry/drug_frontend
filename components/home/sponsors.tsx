import { Box, Flex, Grid, Image, Text } from "@mantine/core";

const Sponsors = () => {
    const data = [
        { title: 'CVS Health', content: 'CVS Health is a leading healthcare innovation company, offering a broad range of pharmacy services, health and wellness solutions to millions of customers nationwide.' },
        { title: 'McKesson Corporation', content: 'McKesson Corporation is a global healthcare company that provides pharmaceuticals, medical supplies, and healthcare technology solutions to improve the quality of patient care.' },
        { title: 'Walgreens Boots Alliance', content: 'Walgreens Boots Alliance is a global leader in retail pharmacy, providing accessible healthcare, wellness, and pharmacy services to communities around the world.' },
        { title: 'Rite Aid', content: 'Rite Aid is a nationwide pharmacy chain focused on providing high-quality healthcare services, including prescription medications, over-the-counter products, and wellness solutions.' },
        { title: 'Cigna Pharmacy', content: 'Cigna Pharmacy offers a wide range of pharmacy services, including prescription fulfillment, specialty medications, and health programs to help customers manage their health and wellness.' },
        { title: 'Express Scripts', content: 'Express Scripts is a leading pharmacy benefit management organization, helping patients access affordable medications while improving healthcare outcomes through innovative services.' },
        { title: 'OptumRx', content: 'OptumRx is a pharmacy care services company that works to improve the affordability and quality of medications through personalized care solutions and efficient delivery systems.' },
        { title: 'GoodRx', content: 'GoodRx provides users with access to discounted prescription medications, offering a transparent and easy-to-use platform that helps people save on their pharmacy costs.' },
        { title: 'Pharmacyclics', content: 'Pharmacyclics, an AbbVie company, is a biopharmaceutical firm dedicated to developing and commercializing therapies for hematologic diseases, particularly blood cancers.' },
    ]
    return (
        <Box mt={90}>
            <Box>
                <Text size={26} weight={500}>
                    Our Sponsors & Affiliations
                </Text>
                <Text className="opacity-50" size={14} weight={400}>
                    We proudly partner with leading organizations to drive innovation and excellence in our industry
                </Text>
            </Box>
            <Grid
                mt={50}
            >   
                {
                    data.map((item) =>
                        <Grid.Col md={4} sm={1}>
                            <Flex
                                gap={16}
                                align='center'
                                bg='white'
                                mt={20}
                                className="rounded-[20px]"
                            >
                                <Image src={`/images/empty_image.svg`} w={120} h={'100%'} />
                                <Box>
                                    <Text color="black" size={14} weight={600}>{ item.title }</Text>
                                    <Text color="black" size={12} className="opacity-50 font-small" weight={300}>{ item.content }</Text>
                                </Box>
                            </Flex>
                        </Grid.Col>
                    )
                }
            </Grid>
        </Box>
    )
}

export default Sponsors;