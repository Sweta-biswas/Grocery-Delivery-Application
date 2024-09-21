import React, { useState } from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShieldAlt,faMapMarkerAlt, faChevronDown, faChevronUp, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const FAQ = () => {
    const [selectedOption, setSelectedOption] = useState('Delivery Information');
    const [openQuestion, setOpenQuestion] = useState(null);

    const faqContent = {
        "Delivery Information": [
            { question: "How long does delivery take?", answer: "Delivery usually takes 3-5 business days." },
            { question: "Can I track my order?", answer: "Yes, you can track your order using the tracking number provided in your email." },
            { question: "What areas do you deliver to?", answer: "We deliver to all major cities and towns." },
            { question: "What happens if I am not home?", answer: "Our delivery agent will contact you to arrange a suitable time." },
            { question: "Is there a delivery charge?", answer: "Delivery is free for orders over a certain amount." },
        ],
        "Order Modification/Cancellation": [
            { question: "How can I modify my order?", answer: "You can modify your order within 2 hours of placing it." },
            { question: "How do I cancel my order?", answer: "To cancel your order, please contact our support team." },
            { question: "Can I add items to my order?", answer: "Yes, you can add items before the order is processed." },
            { question: "Will I get a full refund on cancellation?", answer: "Full refunds are provided for cancellations within the allowed time frame." },
            { question: "How do I know if my order is canceled?", answer: "You will receive a confirmation email once your order is canceled." },
        ],
        "Return and Refund Policy": [
            { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase." },
            { question: "How do I get a refund?", answer: "Refunds will be processed within 5-7 business days." },
            { question: "What if I received a damaged product?", answer: "Contact our support team to arrange a return and replacement." },
            { question: "Can I exchange an item?", answer: "Exchanges are allowed for certain items within the return period." },
            { question: "How do I return an item?", answer: "Follow the instructions in the return section of our website." },
        ],
        "Payment Related": [
            { question: "What payment methods do you accept?", answer: "We accept all major credit cards and PayPal." },
            { question: "Is my payment information secure?", answer: "Yes, we use secure payment gateways to protect your information." },
            { question: "Can I pay cash on delivery?", answer: "Cash on delivery is available in select locations." },
            { question: "What should I do if my payment fails?", answer: "Try again or contact our support team for assistance." },
            { question: "Can I save my payment details?", answer: "Yes, you can securely save your payment details for faster checkout." },
        ],
        "Vouchers/Discounts/Points": [
            { question: "How do I use a voucher?", answer: "You can apply the voucher code at checkout." },
            { question: "How do I earn points?", answer: "You earn points on every purchase, which can be redeemed later." },
            { question: "Can I combine multiple vouchers?", answer: "Only one voucher can be used per order." },
            { question: "How do I check my points balance?", answer: "Log in to your account to view your points balance." },
            { question: "Do points expire?", answer: "Points expire after 12 months if not redeemed." },
        ],
        "My Account & My Cart": [
            { question: "How do I create an account?", answer: "Click on 'Sign Up' and follow the instructions." },
            { question: "How can I view my cart?", answer: "Your cart is accessible from the top-right corner of the website." },
            { question: "How do I reset my password?", answer: "Click on 'Forgot Password' and follow the instructions." },
            { question: "Can I update my account details?", answer: "Yes, you can update your details in the 'My Account' section." },
            { question: "How do I remove items from my cart?", answer: "Click on the 'Remove' button next to the item in your cart." },
        ],
    };

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col lg:flex-row mt-24 p-4 lg:p-8 flex-grow">
                {/* Left Sidebar */}
                <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                    <ul className="space-y-2">
                        {Object.keys(faqContent).map((option, index) => (
                            <li
                                key={index}
                                className={`p-3 cursor-pointer rounded-lg transition-colors duration-300 ${
                                    selectedOption === option ? 'bg-gray-400 text-white font-bold' : 'bg-white text-gray-800 hover:bg-gray-200'
                                }`}
                                onClick={() => { setSelectedOption(option); setOpenQuestion(null); }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* FAQ Display */}
                <div className="w-full lg:w-3/4 lg:pl-8">
                    {faqContent[selectedOption].map((faq, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className="flex justify-between items-center cursor-pointer p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition duration-300"
                                onClick={() => toggleQuestion(index)}
                            >
                                <h2 className="text-lgcd font-semibold text-gray-700">{faq.question}</h2>
                                <FontAwesomeIcon icon={openQuestion === index ? faChevronUp : faChevronDown} className="text-gray-500" />
                            </div>
                            {openQuestion === index && (
                                <div className="p-4 bg-gray-100 rounded-b-lg shadow-inner">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Section */}
            <div className="bg-blue-50 py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-4 lg:px-0">
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <FontAwesomeIcon icon={faTruck} size="3x" className="text-blue-500 mb-4" />
                        <h3 className="text-lg font-semibold mt-2 text-gray-800">Reliable Local Delivery</h3>
                        <p className="text-gray-600 mt-1">Efficient delivery service within your local area. Enjoy fresh groceries delivered right to your door.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <FontAwesomeIcon icon={faShieldAlt} size="3x" className="text-green-500 mb-4" />
                        <h3 className="text-lg font-semibold mt-2 text-gray-800">100% Safe & Secure Payments</h3>
                        <p className="text-gray-600 mt-1">Pay using secure payment methods</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="text-pink-500 mb-4" />
                        <h3 className="text-lg font-semibold mt-2 text-gray-800">Live Order Tracking</h3>
                        <p className="text-gray-600 mt-1">Track your order in real-time from our website.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <FontAwesomeIcon icon={faPhoneAlt} size="3x" className="text-orange-500 mb-4" />
                        <h3 className="text-lg font-semibold mt-2 text-gray-800">24/7 Customer Support</h3>
                        <p className="text-gray-600 mt-1">We're here to help with any questions or issues at any time.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FAQ;
