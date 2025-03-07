import { Box, Flex, List, Text, ThemeIcon } from "@mantine/core";
import Title from "../layouts/title";
import { IconCircleDashed, IconDots } from "@tabler/icons-react";

const data = [
    {
        title: "Acceptance of Terms",
        content: [
            "By using this Site, you agree that you have read, understood, and accepted these Terms and our Privacy Policy. If you do not agree, please refrain from accessing or using our Site."
        ]
    }, {
        title: "No Medicine Advice",
        content: [
            "Informational Purpose Only: The content on Pharmacy. Wiki is intended solely for general informational purposes. It is not intended as, and should not be construed as, professional medical advice, diagnosis, or treatment.",
            "Consult a Professional: Always consult with a qualified healthcare provider before making any decisions regarding your health, medications, or treatments.",
            "No Liability: Pharmacy. Wiki, its owners, and contributors are not responsible or liable for any outcomes that result from your reliance on the information provided on this Site. Use the information at your own risk."
        ]
    }, {
        title: "Use of Information",
        content: [
            "Due Diligence: You are solely responsible for verifying any information obtained from the Site before relying on it. We encourage you to conduct your own research and due diligence.",
            "Personal Responsibility: Any action you take based on the information on this Site is strictly at your own risk, and Pharmacy. Wiki assumes no liability or responsibility for any errors, omissions, or results obtained from the use of this information."
        ]
    }, {
        title: "Donations and Sponsorship",
        content: [
            "Donations: Pharmacy. Wiki is a free resource and may accept voluntary donations to help maintain and improve the Site. Donations do not entitle you to any additional rights or influence over the content.",
            "Sponsorship and Advertising: We welcome sponsorship and advertising inquiries. If you wish to have your company or products featured on Pharmacy. Wiki, please contact us via email at [insert email address]. Any such arrangements will be subject to separate agreements and will not affect the impartiality of our content."
        ]
    }, {
        title: "Intellectual Property",
        content: [
            "Content Ownership: All content on Pharmacy. Wiki, including text, images, and other materials, is the property of Pharmacy.Wiki or its licensors and is protected by copyright and other intellectual property laws.",
            "Limited Use: You may view, download, and print material from this Site for your personal, non-commercial use only. Any other use, including reproduction, distribution, or modification of any part of the Site, is prohibited without prior written consent from Pharmacy. Wiki."
        ]
    }, {
        title: "Third-Party Links",
        content: [
            "External Websites: Our Site may contain links to third-party websites for additional information or resources. These links are provided for your convenience only, and we do not endorse or have control over the content or practices of these sites.",
            "No Liability: Pharmacy. Wiki is not responsible for the privacy practices, content, or any other aspects of third-party websites. Your use of these sites is at your own risk."
        ]
    }, {
        title: "Limitation of Liability",
        content: [
            "General Disclaimer: In no event shall Pharmacy. Wiki, its owners, authors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or reliance on its content.",
            "No Guarantees: While we strive for accuracy, Pharmacy. Wiki makes no warranties or representations regarding the accuracy, completeness, or reliability of the information provided."
        ]
    }, {
        title: "Indemnification",
        content: [
            "You agree to indemnify, defend, and hold harmless Pharmacy. Wiki, its owners, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, or expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Site or your violation of these Terms"
        ]
    }, {
        title: "Modifications to the Terms",
        content: [
            "Pharmacy. Wiki reserves the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site after any such modifications constitutes your acceptance of the updated Terms."
        ]
    }, {
        title: "Contact Information",
        content: [
            "If you have any questions or concerns about these Terms or the practices of Pharmacy. Wiki, please contact us at: support@phamarcy.wiki"
        ]
    }
];

const ConditionList = () => {
    return (
        <Box>
            <Title
                title="Terms & Conditions for Pharmacy"
                summary="Last updated: 2/25/2025"
                gradient_title="wiki"
            />
            <Box mt={24}>
                <Text className="opacity-50">Welcome to Pharmacy.wiki ("Site"). By accessing or using this Site, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Site.</Text>
                <Text className="opacity-50" mt={15}>Pharmacy.wiki is a free, informational website that provides general information about generic medicines, pharmacy brand names, chemical names, and manufacturer listings. The content provided on this Site is for informational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. You should always seek the advice of your physician or other qualified healthcare providers regarding any medical condition or treatment.</Text>
            </Box>
            <List mt={15}>
                {
                    data.map((item, index) =>
                        <List.Item mt={10}>
                            <Text size={17}>{index + 1}. {item.title}</Text>
                            <List withPadding listStyleType="disc">
                                {
                                    item.content.map((content_item) =>
                                        <List.Item
                                        >
                                            <Text className="opacity-50">
                                                {content_item}
                                            </Text>
                                        </List.Item>
                                    )
                                }
                            </List>
                        </List.Item>
                    )
                }
            </List>
        </Box>
    )
}
export default ConditionList;