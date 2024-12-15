import React from 'react';
import './Faq.css';
import { FaQuestionCircle, FaRegCheckCircle } from 'react-icons/fa';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
const FAQ = () => {
  const faqs = [
    {
      question: "How do I adopt a pet?",
      answer: "To adopt a pet, visit our adoption center or browse our available pets online. Fill out an adoption application form and schedule a meeting with the pet you are interested in. Our staff will guide you through the process."
    },
    {
      question: "What do I need to bring to adopt a pet?",
      answer: "You will need to bring a valid ID, proof of residence, and any relevant information about your living situation (e.g., landlord approval if you rent). For certain pets, additional requirements may apply."
    },
    {
      question: "Are there any adoption fees?",
      answer: "Yes, we charge an adoption fee to cover the cost of veterinary care, vaccinations, and other expenses. The fee varies depending on the type and age of the pet. Please check our website for the latest fee structure."
    },
    {
      question: "Can I adopt a pet if I have other animals at home?",
      answer: "Yes, many of our pets are suitable for homes with other animals. During the adoption process, we will ask about your current pets and provide guidance to ensure a smooth introduction."
    },
    {
      question: "Do you offer post-adoption support?",
      answer: "Absolutely! We offer post-adoption support to help you with any questions or issues that may arise. Our team is here to assist with training tips, behavioral advice, and general care guidance."
    },
    {
      question: "What should I do if I need to return an adopted pet?",
      answer: "If you need to return an adopted pet, please contact us as soon as possible. We understand that circumstances change, and we will work with you to ensure a smooth transition for the pet."
    },
    {
      question: "Can I volunteer or foster pets?",
      answer: "Yes, we are always looking for volunteers and foster homes. If you’re interested in helping, please visit our website or contact us to learn more about volunteer opportunities and the fostering process."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="faq-container">
      
      <div className="faq-content">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-icon-container">
                <FaQuestionCircle className="faq-icon-question" />
                <FaRegCheckCircle className="faq-icon-answer" />
              </div>
              <div className="faq-text">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default FAQ;
