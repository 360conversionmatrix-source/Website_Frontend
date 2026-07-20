import React from 'react';
import Navbar from '../Components/Layout/NavbarFOrPrevTerm.jsx'; // Adjust the import path if necessary

export default function TermsComponent() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans min-h-screen py-16 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64 selection:bg-[#0685B1]/10">
      <div className="max-w-4xl mx-auto text-left">

        <Navbar />

        {/* Main Header */}
        <div className="mt-[100px] mb-8 border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0685B1] mb-3 tracking-tight">
            Employment Terms & Conditions
          </h1>
          <p className="text-lg font-semibold text-slate-700">Conversion Matrix 360</p>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Company Address: H70, H Block, Sector 63, Noida, India
          </p>
        </div>

        {/* Policy Content Body */}
        <div className="space-y-8 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-normal">

          {/* 1. Salary Payment */}
          <section className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              1. Salary Payment
            </h2>
            <p>
              Salary will be credited on the <strong>10th of every month</strong>, subject to attendance, performance, and company policies.
            </p>
          </section>

          {/* 2. Probation Period */}
          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              2. Probation Period
            </h2>
            <p>
              Every employee will be on a <strong>6-month probation period</strong>. Confirmation of employment will be based on satisfactory performance and conduct.
            </p>
          </section>

          {/* 3. Notice Period */}
          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              3. Notice Period
            </h2>
            <p>
              Employees are required to serve a <strong>1-month notice period</strong> before resigning.
            </p>
          </section>

          {/* 4. Experience Letter & Relieving Letter */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              4. Experience Letter & Relieving Letter
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
              <li>
                Experience Letter, Relieving Letter, and Full & Final Settlement will be issued only after the successful completion of the required notice period and clearance of all company formalities.
              </li>
              <li>
                If the company terminates an employee, the company will provide the Experience Letter, Relieving Letter, and Final Settlement as per company policy.
              </li>
              <li>
                If an employee resigns without serving the required notice period or leaves the job without proper approval, the company reserves the right not to issue the Experience Letter, Relieving Letter, or other employment-related documents.
              </li>
            </ul>
          </section>

          {/* 5. Leave Policy */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              5. Leave Policy
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
              <li>
                Any leave taken without prior information will be treated as unauthorized leave, and salary will be deducted accordingly.
              </li>
              <li>
                Leave taken without prior approval may result in the employee's salary being held for up to 15 days. Repeated violations may also lead to disciplinary action, including termination.
              </li>
            </ul>
          </section>

          {/* 6. Attendance Allowance */}
          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              6. Attendance Allowance
            </h2>
            <p>
              Employees who maintain 100% attendance throughout the month without taking any leave will receive an Attendance Allowance of <strong>₹1,000</strong>.
            </p>
          </section>

          {/* 7. Friday & Monday Leave Policy */}
          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              7. Friday & Monday Leave Policy
            </h2>
            <p>
              If an employee takes leave on Friday and Monday without prior approval, it will be considered an unauthorized extended weekend. In such cases, the company reserves the right to deduct <strong>3 days' salary</strong> as per company policy.
            </p>
          </section>

          {/* 8. Late Login Policy */}
          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              8. Late Login Policy
            </h2>
            <p>
              <strong>Three (3) late logins</strong> in a month will be treated as <strong>one (1) day absent</strong>, and salary will be deducted accordingly.
            </p>
          </section>

          {/* 9. Company Rights */}
          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1]">
              9. Company Rights
            </h2>
            <p>
              Conversion Matrix 360 reserves the right to amend, revise, or update these terms and conditions at any time based on business requirements and operational needs.
            </p>
          </section>

          {/* Contact / Footer Note */}
          <section className="pt-6 border-t border-slate-200 mt-8 space-y-3">
            <div className="bg-slate-50 p-4 rounded-md text-slate-700 space-y-1 text-sm">
              <p className="font-semibold text-slate-800">Conversion Matrix 360</p>
              <p>Email: <a href="mailto:info@conversionmatrix360.com" className="text-[#0685B1] underline">info@conversionmatrix360.com</a></p>
              <p>Address: H70, H Block, Sector 63, Noida, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}