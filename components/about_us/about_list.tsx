import { Box, Divider, Flex, List, Text } from "@mantine/core";

const AboutList = () => {
    return (
        <Box>
            <Text size={31}>About us</Text>
            <Text mt={30} className="opacity-50">Welcome to Pharmacy.Wiki-your free, independent resource for exploring the world of generic medicines. Our mission is to empower you with accurate, unbiased information about high-quality, safe, and effective generics from India and around the globe.</Text>
            <Text mt={15} size={17}>Our Vision</Text>
            <Text mt={15} className="opacity-50">In many parts of the world, pharmaceutical laws are outdated and heavily influenced by big pharma, corporate interests, and political greed. These forces often drive policies that limit access to affordable medications, promote brand-name products, and stifle competition-even when equivalent or superior generics are available. At Pharmacy. Wiki, we believe that everyone deserves access to reliable information that empowers them to make informed choices about their healthcare. We are here to shine a light on safe and effective generic alternatives that are often as good as, if not better than, their brand-name counterparts.</Text>
            <Text mt={15} size={17}>What we do</Text>
            <Text mt={15} className="opacity-50">
                Pharmacy. Wiki is dedicated to providing comprehensive, well-researched content on generic medicines, including:
            </Text>
            <List withPadding listStyleType="disc" mt={15}>
                <List.Item>
                    <Text className="opacity-50">Detailed Comparisons: We break down the similarities between well-known brand names (like Cialis) and their chemical equivalents (like tadalafil), highlighting the many manufacturers producing these generics.</Text>
                </List.Item>
                <List.Item>
                    <Text className="opacity-50">Up-to-Date Information: Our content is regularly updated to reflect the latest research, regulatory changes, and industry trends.</Text>
                </List.Item>
                <List.Item>
                    <Text className="opacity-50">Educational Resources: We offer guides, reviews, and insights that help you navigate the complex world of pharmaceuticals, ensuring you are well-informed before making any health-related decisions.</Text>
                </List.Item>
            </List>
            <Flex mt={15}>
                <Text>Please note: <span className="opacity-50">Our content is for informational purposes only. We do not sell or distribute medications, nor do we offer medical advice. Always consult with a qualified healthcare professional before making any decisions regarding your health or medication.</span></Text>
            </Flex>
            <Text size={17} mt={15}>
                How we've founded
            </Text>
            <Text mt={15} className="opacity-50">
                Pharmacy.Wiki is a free resource that is made possible through the support of our readers and sponsors. We do not charge for access to our content, and we remain committed to keeping our site free of paywalls and
            </Text>
            <List withPadding listStyleType="disc" mt={15}>
                <List.Item>
                    <Text className="opacity-50">Donations: We gratefully accept voluntary donations from our readers. These contributions help us cover hosting, development, and research costs.</Text>
                </List.Item>
                <List.Item>
                    <Text className="opacity-50">Sponsorship: We work with sponsors who share our commitment to transparency and accessible healthcare information. Sponsorships are clearly marked on our site and do not influence our editorial content.</Text>
                </List.Item>
                <List.Item>
                    <Text className="opacity-50">Advertising: When appropriate, we may display unobtrusive advertisements from trusted partners that are aligned with our mission. Our advertising policies ensure that these ads do not compromise the integrity or independence of our content.</Text>
                </List.Item>
            </List>
            <Text mt={25} size={17}>
                Get Involved
            </Text>
            <Text mt={15} size={17}>List Your Company or Drugs on Our Site</Text>
            <Text mt={15} className="opacity-50">
                If you represent a company or have products you'd like to feature on Pharmacy. Wiki, we welcome collaboration. We offer a platform for companies to list their generic drugs, share detailed product information, and reach a wide audience interested in safe, effective, and affordable medications. To inquire about placement or sponsorship opportunities, please contact us at [insert email address]. We review all submissions carefully to ensure they align with our commitment to providing accurate, unbiased information.</Text>
            <Text mt={15} size={17}>
                Join the Conversation
            </Text>
            <Text mt={15} className="opacity-50">
                We believe in the power of community. Whether you're a healthcare professional, a researcher, or simply someone passionate about accessible healthcare, we invite you to explore our content, share your insights, and join th conversation on social media and in our comments sections.
            </Text>
            <Text mt={15} size={17}>
                Our Commitment
            </Text>
            <Text mt={15} className="opacity-50">
                At Pharmacy. Wiki, our commitment is to transparency, accuracy, and independence. We strive to provide you with the best possible information, free from the influence of corporate or political pressures. Our goal is to help you understand that there are effective, safe, and often more affordable generic alternatives available-giving you the power to make informed choices about your health.
            </Text>
            <Divider mt={30} mb={30}/>
            <Text className="opacity-50 italic" >
                Our content is for informational purposes only. Always consult a healthcare professional before making any health or medication-related decisions.
            </Text>
        </Box>
    )
}

export default AboutList;