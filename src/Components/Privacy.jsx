import React from 'react';
import Navbar from '../Components/Layout/NavbarFOrPrevTerm.jsx'; // Adjust the import path if necessary

export default function PrivacyComponent() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans min-h-screen py-16 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64 selection:bg-[#0685B1]/10">
      <div className="max-w-4xl mx-auto text-left">

        <Navbar  />

        {/* Main Header */}
        <div className="mt-[100px] mb-8 border-b border-slate-200 pb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0685B1] mb-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg font-semibold text-slate-700">Conversion Matrix 360</p>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Company Address: H70, H Block, Sector 63, Noida, India
          </p>
          <p className="text-sm font-medium text-slate-500">
            Effective Date: July 16, 2026 | Last Updated: July 16, 2026
          </p>
        </div>

        {/* Policy Content Body */}
        <div className="space-y-8 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-normal">

          {/* INTRODUCTION */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              INTRODUCTION
            </h2>
            <p>
              Conversion Matrix 360 is a leading digital marketing and lead generation company specializing in performance marketing, conversion optimization, and customer acquisition strategies. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you interact with our services, website, and marketing platforms.
            </p>
            <p>
              By using our services or providing your information to us, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          {/* SMS MESSAGING PROGRAM */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              SMS MESSAGING PROGRAM
            </h2>
            <p>
              Conversion Matrix 360 may use SMS messaging to send transactional account notifications, marketing messages, and promotional communications to registered users and clients who have opted in to our SMS program. These messages may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>One-time passcodes and authentication codes</li>
              <li>Account notifications and alerts</li>
              <li>Campaign activity updates and performance reports</li>
              <li>Marketing and promotional offers</li>
              <li>Service updates and announcements</li>
              <li>Meeting reminders and notifications</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Opt-In and Consent</h3>
            <p>
              SMS messages are sent only to users who provide their mobile phone number, actively opt in to receive SMS messages, and verify their phone number where applicable.
            </p>
            <p className="text-sm text-slate-500">
              * Message frequency varies based on your account activity and the services you use. Message and data rates may apply based on your mobile carrier's plan.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Opt-Out Instructions</h3>
            <p>You may opt out of SMS messages at any time by:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>Replying <strong>STOP</strong> to any SMS message</li>
              <li>Contacting us at <a href="mailto:info@conversionmatrix360.com" className="text-[#0685B1] underline">info@conversionmatrix360.com</a></li>
              <li>Calling our support line</li>
            </ul>
            <p className="text-sm text-slate-600">
              For assistance with SMS messages, reply <strong>HELP</strong> or contact us directly.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">SMS Data Protection</h3>
            <p>
              Conversion Matrix 360 does not sell, rent, share, or disclose mobile phone numbers, SMS opt-in records, or SMS consent data to third parties or affiliates for their marketing or promotional purposes. SMS opt-in information is used solely to provide the SMS messaging program to which you have consented.
            </p>
            <p>
              Consent to receive SMS messages is not a condition of purchase or use of our services. Messaging and telecommunications service providers may process mobile phone numbers solely to deliver SMS messages on behalf of Conversion Matrix 360 and may not use SMS opt-in data for their own marketing or promotional purposes.
            </p>
          </section>

          {/* INFORMATION WE COLLECT FROM YOU */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              INFORMATION WE COLLECT FROM YOU
            </h2>
            <p>
              To provide our digital marketing and lead generation services effectively, Conversion Matrix 360 collects various types of information:
            </p>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Personal Information</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>Full name, Age, Date of birth, and Gender</li>
              <li>Physical address, Email address, and Phone numbers (mobile and landline)</li>
              <li>Household information, Income level, Marital status, and Employment info</li>
              <li>Business information, Industry, and Company details (for B2B clients)</li>
              <li>Marketing preferences and interests</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Technical and Usage Information</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>IP address, Browser type/version, and Operating system</li>
              <li>Device type (desktop, mobile, tablet) and Geographic location</li>
              <li>Time and date of visit, Pages viewed, and Time spent on pages</li>
              <li>Referring website, Click-through data, and Search terms used</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Marketing and Campaign Data</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>Campaign interaction data and Ad engagement metrics</li>
              <li>Conversion behavior, Customer journey data, and A/B testing results</li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-md border-l-4 border-[#0685B1] my-4">
              <h4 className="font-semibold text-slate-800">Separate Treatment of SMS Data</h4>
              <p className="text-sm text-slate-600 mt-1">
                Mobile phone numbers and SMS opt-in consent data collected for Conversion Matrix 360 SMS messaging programs are treated separately from general personal information. SMS opt-in consent data is used only for the SMS program and is not sold, rented, shared, or disclosed to third parties or affiliates for marketing purposes.
              </p>
            </div>
          </section>

          {/* HOW WE USE YOUR INFORMATION */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              HOW WE USE YOUR INFORMATION
            </h2>
            
            <h3 className="text-lg font-semibold text-slate-800">Primary Business Uses</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>Provide digital marketing services, campaign management, and qualify leads.</li>
              <li>Optimize conversion rates and match requests with our partner network.</li>
              <li>Analyze customer behavior, personalize marketing messages, and manage accounts.</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Marketing and Promotional Uses</h3>
            <p>
              We may use personal information for lawful marketing purposes, including marketing communications, targeted advertising, market research, and audience segmentation.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Service Providers & Business Transfers</h3>
            <p>
              We share information with trusted third-party contractors (hosting, analytics, CRM, payment processors) bound by contract to process data solely on our behalf. Data may also be transferred during corporate mergers, acquisitions, or sales of assets.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 pt-2">Legal Compliance</h3>
            <p>
              Disclosures may occur when obligated by law, to prevent fraud, respond to court orders, or protect physical safety and legal rights.
            </p>
          </section>

          {/* COOKIES AND TRACKING TECHNOLOGIES */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              COOKIES AND TRACKING TECHNOLOGIES
            </h2>
            <p>
              We use cookies, web beacons, pixel tags, and local storage to enhance user experience, track campaign performance, and analyze traffic.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help analyze how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings</li>
            </ul>
            <p className="text-sm text-slate-500">
              Cookies typically expire after 30 days. You can adjust your browser settings to reject or manage cookies.
            </p>
          </section>

          {/* DO NOT TRACK & INTEREST-BASED ADVERTISING */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              INTEREST-BASED ADVERTISING & DO NOT TRACK
            </h2>
            <p>
              Our website does not currently respond to browser "Do Not Track" (DNT) signals due to lack of uniform industry standards.
            </p>
            <p>
              We engage in retargeting and cross-device tracking via third-party partners (Google Ads, Meta, LinkedIn). You can opt out using industry tools such as:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600 text-sm">
              <li><a href="http://optout.aboutads.info" target="_blank" rel="noreferrer" className="text-[#0685B1] underline">AboutAds Opt-Out Tool</a></li>
              <li><a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noreferrer" className="text-[#0685B1] underline">Network Advertising Initiative</a></li>
              <li><a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-[#0685B1] underline">Google Ads Settings</a></li>
            </ul>
          </section>

          {/* REVOKING CONSENT & OPTING OUT */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              YOUR RIGHTS, OPT-OUTS, AND REVOKING CONSENT
            </h2>
            <p>
              You have the right to revoke consent or opt out of marketing communications at any time.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li><strong>Email Marketing:</strong> Click "unsubscribe" in any marketing email or contact us. Requests are processed within 10 business days.</li>
              <li><strong>Revoking Consent:</strong> Contact <a href="mailto:info@conversionmatrix360.com" className="text-[#0685B1] underline">info@conversionmatrix360.com</a> to request data deletion.</li>
              <li><strong>Transactional Emails:</strong> Note that administrative/transactional emails (security alerts, billing) cannot be opted out of.</li>
            </ul>
          </section>

          {/* CHILDREN'S PRIVACY */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              INFORMATION RELATING TO CHILDREN
            </h2>
            <p>
              Our services are intended strictly for adults and businesses (18+). We do not knowingly collect information from children under 13. If you believe we have inadvertently collected data from a child under 13, please notify us immediately for deletion.
            </p>
          </section>

          {/* CALIFORNIA PRIVACY RIGHTS (CCPA) */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              YOUR CALIFORNIA PRIVACY RIGHTS (CCPA)
            </h2>
            <p>
              California residents have specific rights under the CCPA: Right to Know, Right to Delete, Right to Opt-Out of sale, and Right to Non-Discrimination.
            </p>
            <p className="text-sm text-slate-600">
              * Conversion Matrix 360 does not sell personal information in exchange for monetary consideration.
            </p>
          </section>

          {/* CONTACT US */}
          <section className="pt-6 border-t border-slate-200 mt-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              CONTACT US
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:
            </p>
            <div className="bg-slate-50 p-4 rounded-md text-slate-700 space-y-1 text-sm">
              <p className="font-semibold text-slate-800">Conversion Matrix 360</p>
              <p>Email: <a href="mailto:info@conversionmatrix360.com" className="text-[#0685B1] underline">info@conversionmatrix360.com</a></p>
              <p>Address: H70, H Block, Sector 63, Noida, India</p>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              We strive to respond to all general inquiries within 10 business days and CCPA requests within statutory timeframes.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}