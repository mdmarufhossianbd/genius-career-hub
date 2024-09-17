import PageIntro from "@/components/shared/pageIntro";
import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-7xl mx-auto xl:px-0 px-5">
            <PageIntro pageName={'Privacy Policy'}/>
            <div className="space-y-5 mb-10">
                <p className="text-justify">Your privacy is important to us. It is Genius Career Hub&apos;s policy to respect your privacy regarding any information we may collect from you across our website, <Link className="font-medium text-blue-600" href={'/'}>https://geniuscareerhub.com</Link>, and other sites we own and operate.</p>
                <p className="text-justify">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.</p>

                <p className="text-justify">
                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
                </p>
                <p className="text-justify"> We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                <p className="text-justify">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                <p className="text-justify">You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                <p className="text-justify">
                    Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                </p>

                <p>This policy is effective as of 16 september 2024.</p>

                <p>Feel free to contact info@geniuscareerhub.com</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;