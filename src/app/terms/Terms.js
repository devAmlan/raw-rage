"use client";
import React from "react";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:mx-0 mx-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg md:p-8 p-4 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Terms & Conditions
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>rawrage.shop</strong> – Your Health and Wellness
            Hub Powered by Alpha Pharma!
            <br />
            <br />
            <strong>rawrage.shop</strong> is the comprehensive online healthcare
            platform backed by Alpha Pharma, a trusted name under the Indian
            Companies Act, 2018. Our mission at Alpha Pharma is to provide
            seamless access to pharmaceuticals, diagnostics, and medical
            consultancy through rawrage.shop, ensuring your well-being is our
            top priority.
          </p>
          <div className="text-gray-700 leading-relaxed mt-4">
            <strong>Why Choose rawrage.shop by Alpha Pharma?</strong>
            <br />
            <ul className="list-disc pl-5 mt-2">
              <li>
                <strong>User-Centric:</strong> Our commitment to your health is
                evident in the user-friendly design of our platform.
              </li>
              <li>
                <strong>Trust and Transparency:</strong> Prioritizing openness
                and honesty in every interaction, Alpha Pharma ensures a
                user-friendly experience.
              </li>
              <li>
                <strong>Trusted Partnerships:</strong> Collaborating with
                reputable Third-Party Service Providers, Alpha Pharma ensures
                the highest standards of quality and reliability.
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Thank you for choosing <strong>rawrage.shop</strong> – Your Trusted
            Health and Wellness Companion Powered by Alpha Pharma!
          </p>
        </section>

        {/* Terms of Use Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Terms of Use
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Introduction:</strong> These Terms and Conditions govern
            your use of the Alpha Pharma online pharmacy platform, accessible at
            www.rawrage.shop. By accessing or using this platform, you agree to
            these terms, which form a binding legal agreement.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Company Information:</strong> Alpha Pharma, operating
            www.rawrage.shop, is a company incorporated under the Indian
            Companies Act, 2018. Our registered office is in New Delhi, India.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Acceptance of Terms:</strong> By using our website, you
            acknowledge and agree to these Terms and Conditions and our Privacy
            Policy.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Service Description:</strong> Alpha Pharma is a digital
            platform facilitating the online purchase of pharmaceutical
            products, diagnostic services, and medical consultancy.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>User Account and Security:</strong> Users must register to
            access certain services. You agree to provide accurate information
            and maintain the confidentiality of your account and password.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Use of the Platform:</strong> The platform is intended for
            personal, non-commercial use. You agree not to misuse the platform
            or its content.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Financial Terms:</strong> Alpha Pharma facilitates payments
            for services and products offered by Third-Party Service Providers.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Intellectual Property:</strong> All content on Alpha Pharma,
            including text, graphics, logos, and software, is the property of
            Alpha Pharma or its licensors and is protected under intellectual
            property laws.
          </p>
        </section>

        {/* Privacy Policy Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Alpha Pharma ("we" or "Alpha Pharma") values the privacy of your
            information. This privacy notice ("Privacy Notice") details the
            personal information we collect through our website www.rawrage.shop
            and our practices regarding its collection, use, and sharing.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>What Data We Collect:</strong> We collect various data
            types, including contact information, financial information,
            technical details, transaction information, health-related
            information, and more.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>How We Collect Data:</strong> Information you provide
            directly, automated collection through cookies, and third-party
            websites.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Data Security:</strong> We implement measures to safeguard
            your data, including storing it on secure servers.
          </p>
        </section>

        {/* Shipping Policy Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Shipping Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Shipping Time:</strong> All in-stock items will ship within
            24-48 hrs. of receiving the order. Shipping times are Monday to
            Saturday (only working days) from 10:30 AM to 6:00 PM.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Free Shipping:</strong> Free shipping applies wherever
            mentioned.
          </p>
        </section>

        {/* Return, Refund, Cancellation, and Shipping Charges Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Return, Refund, Cancellation, and Shipping Charges Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Alpha Pharma, we ensure that our customers receive accurate
            medicines and products in perfect condition. Customers are
            encouraged to inspect items at the time of delivery.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            For any inquiries regarding returns, refunds, or cancellations,
            please contact us at{" "}
            <a
              href="mailto:info@rawrage.shop"
              className="text-blue-600 hover:underline"
            >
              info@rawrage.shop
            </a>
            .
          </p>
        </section>

        {/* Footer Section */}
        <footer className="text-center text-gray-500 mt-8">
          <p>&copy; 2025 rawrage.shop</p>
        </footer>
      </div>
    </div>
  );
}

export default Terms;
