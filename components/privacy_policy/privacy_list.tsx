import { Box, Divider, Flex, List, Text } from "@mantine/core"
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem"

const PrivacyList = () => {
    return (
        <Box>
            <Text>Pharmacy. Wiki is a free informational site. We do not require or request that you log in, sign up, or provide your email address or any other personal data to access our content.</Text>
            <Text className="opacity-50" mt={15}>This Privacy Policy explains how we collect, use, and safeguard any information that may be incidentally collected when you visit our website (the "Site"). Pharmacy. Wiki is a fictional site for a book project that provides information about generic medicines, including pharmacy brand names (e.g., Cialis), their chemical names (e.g., tadalafil), and listings of manufacturers producing generic equivalents.</Text>
            <Text className="opacity-50" mt={15}>By accessing or using our Site, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use the Site.</Text>
            <Divider mt={20}></Divider>
            <Box mt={20}>
                <Text size={17} weight={600}>1. Information We collect</Text>
                <Text mt={15} className="opacity-50">Since we do not require user registration or account creation, we do not collect any Personal Information directly from our visitors. However, we may still collect certain information automatically through your use of the Site.</Text>
                <Text size={17} className="opacity-50" mt={15} weight={600}>Non-personal Information</Text>
                <Text className="opacity-50">
                    We may automatically collect Non-Personal Information that does not directly identify you. This includes:
                </Text>
                <List withPadding listStyleType="disc" mt={15}>
                    <List.Item>
                        <Text className="opacity-50">Browser and Device Information: Such as browser type, version, and operating system.</Text>
                    </List.Item>
                    <List.Item>
                        <Text className="opacity-50">IP Address: Used for statistical and analytical purposes.</Text>
                    </List.Item>
                    <List.Item>
                        <Text className="opacity-50">Usage Data: Including referring/exit pages, date/time stamps, clickstream data, and aggregated statistical data.</Text>
                    </List.Item>
                </List>
                <Text className="opacity-50" mt={15}>This information is used solely to enhance and optimize the performance of our Site and to better understand our audience.</Text>
                <Text size={17} weight={600}>2. How We Use Your Information</Text>
                <Text mt={15} className="opacity-50">Since no Personal Information is collected through user registrations or logins, our use of the automatically collected Non-Personal Information is limited to the following purposes:</Text>
                <List withPadding listStyleType="disc" mt={15}>
                    <List.Item>
                        <Text className="opacity-50">Site Functionality: To provide, operate, and maintain the Site.</Text>
                    </List.Item>
                    <List.Item>
                        <Text className="opacity-50">Performance Analysis: To analyze how the Site is used, monitor trends, and improve our content and functionality.</Text>
                    </List.Item>
                    <List.Item>
                        <Text className="opacity-50">Security: To help protect against unauthorized access or security breaches.</Text>
                    </List.Item>
                    <List.Item>
                        <Text className="opacity-50">Legal Compliance: To comply with applicable laws and respond to legal requests or proceedings.</Text>
                    </List.Item>
                </List>
                <Text size={17} weight={600} mt={15}>3. Cookies and Tracking Technologies</Text>
                <Text className="opacity-50" mt={15}>
                    Our Site may use cookies, web beacons, and similar tracking technologies to enhance your user experience and collect Non-Personal Information. Cookies are small data files stored on your device that help us analyze usage patterns and improve the Site.
                </Text>
                <Text className="opacity-50" mt={15}>
                    You can set your browser to refuse cookies, but note that some parts of the Site may not function properly if you do so.
                </Text>
                <Text size={17} weight={600} mt={15}>4. Third-Party Websites</Text>
                <Text className="opacity-50" mt={15}>Our Site may include links to third-party websites for additional information or resources. This Privacy Policy does not apply to those sites. We encourage you to review the privacy policies of any third-party sites you visit.</Text>
                <Text size={17} weight={600} mt={15}>5. Data Security</Text>
                <Text className="opacity-50">We implement reasonable administrative, technical, and physical safeguards to protect the information collected through the Site against unauthorized access, disclosure, alteration, and destruction. However, please note that no security system is completely infallible, and we cannot guarantee the absolute security of your data.</Text>
                <Text size={17} weight={600} mt={15}>6. Data Retention</Text>
                <Text className="opacity-50">Since we do not collect Personal Information through registrations or logins, we retain only Non-Personal Information for as long as necessary to fulfill the purposes outlined above and to comply with our legal obligations. Non-Personal Information may be retained indefinitely in aggregated form.</Text>
                <Text size={17} weight={600} mt={15}>7. Your Rights and Choices</Text>
                <Text className="opacity-50">Because we do not collect Personal Information from you, your ability to exercise rights such as access, correction, or deletion is limited. However, if you have any questions or concerns about the Non-Personal Information we collect or its use, please contact us using the details provided below.</Text>
                <Text size={17} weight={600} mt={15}>8. Changes to This Privacy Policy</Text>
                <Text className="opacity-50" mt={15}>
                    We reserve the right to modify this Privacy Policy at any time. If we make material changes, we will update the "Last Updated" date at the top of this Privacy Policy. Your continued use of the Site after such changes indicates your acceptance of the updated Privacy Policy.
                </Text>
                <Text size={17} weight={600} mt={15}>9. Contact Us</Text>
                <Flex align='baseline' gap={5}>
                    <Text className="opacity-50" mt={15}>If you have any questions, concerns, or comments about this Privacy Policy or our data practices, please contact us at:</Text>
                    <Text>
                        support@phamarcy.wiki
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default PrivacyList