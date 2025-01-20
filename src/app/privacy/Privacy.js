import React from "react";

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Privacy Policy
        </h1>

        {/* Privacy Policy Content */}
        <section>
          <p className="text-gray-700 leading-relaxed">
            At <strong>[Supplement Site Name]</strong>, we are committed to
            protecting your privacy. This Privacy Policy outlines how we
            collect, use, and protect your personal information when you visit
            our website and purchase products from us.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When you visit our website or make a purchase, we collect personal
            information such as your name, email address, shipping address,
            payment details, and order history. We may also collect non-personal
            information, such as your IP address and browsing data, to improve
            the user experience.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect to process and fulfill your
            orders, communicate with you about your purchases, and improve our
            website and services. We may also send promotional emails or
            newsletters, but you can opt-out at any time.
          </p>
        </section>

        {/* Sharing Your Information */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, rent, or share your personal information with third
            parties except for necessary purposes, such as payment processing
            and shipping. We may share information with trusted partners who
            help us operate our website and conduct business, but they are
            obligated to keep your information confidential.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement a variety of security measures to protect your personal
            information from unauthorized access, alteration, or destruction.
            Your payment information is processed securely through trusted
            payment gateways.
          </p>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to enhance your experience
            on our website. Cookies help us analyze site traffic, remember your
            preferences, and personalize your browsing experience. You can
            control cookie settings through your browser preferences.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or delete the personal
            information we hold about you. If you wish to update your
            information or have any concerns about your privacy, please contact
            us at{" "}
            <a
              href="mailto:[contact information]"
              className="text-blue-600 hover:underline"
            >
              [contact information]
            </a>
            .
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with the effective date.
          </p>
        </section>

        {/* Conclusion Section */}
        <section>
          <p className="text-gray-700 leading-relaxed">
            By using our website, you agree to the terms of this Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you have any questions or concerns, please feel free to contact
            us at{" "}
            <a
              href="mailto:[contact details]"
              className="text-blue-600 hover:underline"
            >
              [contact details]
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
