"use client";
import Editor from "@webbycrown/react-advanced-richtext-editor";
import "@webbycrown/react-advanced-richtext-editor/dist/styles.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function FeaturesPage() {
  const sampleContent = `
    <h1>Welcome to the Rich Text Editor</h1>
    <p>This is a <strong>comprehensive demo</strong> showcasing all features of the editor.</p>
    <h2>Features Include:</h2>
    <ul>
      <li>Rich text formatting</li>
      <li>Headings and lists</li>
      <li>Tables and images</li>
      <li>Custom plugins</li>
    </ul>
    <p>Try editing this content to see the editor in action!</p>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              Choose Your Package
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Select Your Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Customize your package step by step based on your needs.
            Choose features, services, and options that best fit your requirements.
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Choose features, customize settings, and configure everything in a guided step-by-step process designed for flexibility and ease.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {/* Step Form */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4"><i className="fas fa-stream"></i></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Step-Based Form</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Organize your package creation process into multiple steps for better user experience.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Multi-step navigation</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Progress tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Step-wise validation</span>
              </li>
            </ul>
          </div>

          {/* Custom Fields */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4"><i className="fas fa-edit"></i></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Custom Fields</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Add and manage dynamic fields based on your package requirements.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Text, select, checkbox, radio inputs</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Dynamic field rendering</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Conditional fields</span>
              </li>
            </ul>
          </div>

          {/* Validation */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4"><i className="fas fa-check-circle"></i></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Validation System</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Ensure data accuracy with customizable validation rules.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Required field validation</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Custom validation rules</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Real-time error messages</span>
              </li>
            </ul>
          </div>

          {/* Layouts */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4"><i className="fas fa-th-large"></i></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Flexible Layouts</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Design your package forms with different layouts and structures.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Grid & column layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Responsive design</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Section-based grouping</span>
              </li>
            </ul>
          </div>

          {/* API Error Customization */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4"><i className="fas fa-exclamation-triangle"></i></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">API Error Customization</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Customize and handle API error responses with flexible configurations.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Custom API error messages</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Field-level error mapping</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Dynamic error handling</span>
              </li>
            </ul>
          </div>

          {/* Submitted Data Preview */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4"><i className="fas fa-database"></i></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Submitted Data View</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Display all submitted form data after successful submission for review and confirmation.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Show submitted form data</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Structured data preview</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-blue-600 dark:text-blue-400"></i>
                <span>Confirmation screen after submit</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Feature Demo */}


        {/* Feature Comparison */}

        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-2xl p-8 md:p-12 mb-16 border border-blue-200 dark:border-blue-800">

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Package Builder Comparison
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how our package builder compares with traditional forms and other solutions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white dark:bg-black rounded-xl overflow-hidden">

              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <th className="p-4 text-sm font-semibold">Feature</th>
                  <th className="p-4 text-sm font-semibold text-center">Our Builder</th>
                  <th className="p-4 text-sm font-semibold text-center">Basic Forms</th>
                  <th className="p-4 text-sm font-semibold text-center">Advanced Tools</th>
                </tr>
              </thead>

              <tbody className="text-sm">

                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <td className="p-4 font-medium text-gray-800 dark:text-white">Step-Based Form</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center text-gray-400"><i className="fas fa-times"></i></td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                </tr>

                <tr className="border-b border-blue-200 dark:border-blue-800 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-4 font-medium text-gray-800 dark:text-white">Custom Fields</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center text-gray-400">Limited</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                </tr>

                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <td className="p-4 font-medium text-gray-800 dark:text-white">Validation System</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center text-gray-400">Basic</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                </tr>

                <tr className="border-b border-blue-200 dark:border-blue-800 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-4 font-medium text-gray-800 dark:text-white">Dynamic Logic</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center text-gray-400"><i className="fas fa-times"></i></td>
                  <td className="p-4 text-center">Limited</td>
                </tr>

                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <td className="p-4 font-medium text-gray-800 dark:text-white">Flexible Layouts</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center text-gray-400">Fixed</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                </tr>

                <tr className="border-b border-blue-200 dark:border-blue-800 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-4 font-medium text-gray-800 dark:text-white">Reusable Components</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center text-gray-400"><i className="fas fa-times"></i></td>
                  <td className="p-4 text-center">Limited</td>
                </tr>

                <tr>
                  <td className="p-4 font-medium text-gray-800 dark:text-white">Easy Integration</td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center"><i className="fas fa-check text-blue-600 dark:text-blue-400 text-xl"></i></td>
                  <td className="p-4 text-center text-gray-400">Complex</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Feature List */}
        <div className="bg-white dark:bg-black rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  Package System Overview
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Complete breakdown of all package builder capabilities
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This package builder allows you to create fully dynamic forms and step-based workflows.
              You can define custom fields, apply validations, control layouts, and build flexible
              configurations tailored to your requirements.
            </p>
          </div>

          <div className="space-y-10">

            {/* Step Form */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <i className="fas fa-stream text-3xl"></i>
                Step Form System
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Organize your package into multiple steps to guide users through a structured process.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Multi-Step Flow", desc: "Divide form into steps" },
                  { name: "Progress Tracking", desc: "Track user progress" },
                  { name: "Step Validation", desc: "Validate per step" },
                  { name: "Navigation Control", desc: "Next/Previous steps" },
                ].map((item) => (
                  <div key={item.name} className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                    <div className="font-semibold text-gray-800 dark:text-white text-sm">{item.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Fields */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <i className="fas fa-edit text-3xl"></i>
                Custom Fields
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Add flexible input fields to capture user data based on your package requirements.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  "Text Input",
                  "Textarea",
                  "Select Dropdown",
                  "Checkbox",
                  "Radio Button",
                  "Number Input",
                  "Date Picker",
                  "File Upload",
                  "Switch Toggle",
                  "Multi Select",
                ].map((field) => (
                  <div key={field} className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {field}
                  </div>
                ))}
              </div>
            </div>

            {/* Validation */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <i className="fas fa-check-circle text-3xl"></i>
                Validation System
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ensure accurate data collection with customizable validation rules.
              </p>

              <ul className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-2">
                <li>• Required field validation</li>
                <li>• Pattern & regex validation</li>
                <li>• Email, number, and format validation</li>
                <li>• Custom error messages</li>
                <li>• Real-time validation feedback</li>
              </ul>
            </div>

            {/* Layouts */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <i className="fas fa-th-large text-3xl"></i>
                Layout System
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Design flexible and responsive layouts for your  steps.
              </p>

              <ul className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-2">
                <li>• Layout One </li>
                <li>• Layout Two </li>
                <li>• Layout Three </li>
                <li>• Responsive design for all layouts</li>
                <li>• Custom spacing & alignment control</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <i className="fas fa-exclamation-triangle text-3xl"></i>
                API Error Customization
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Easily handle and customize API error responses with flexible UI control.
              </p>

              <ul className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-2">
                <li>• Set custom error messages from API responses</li>
                <li>• Display package-specific validation errors</li>
                <li>• Fully customizable error UI styling</li>
                <li>• Add custom error icons for better UX</li>
                <li>• Centralized error handling for all fields</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <i className="fas fa-database text-3xl"></i>
                Submitted Data View
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                View and manage submitted form data with structured output and customization.
              </p>

              <ul className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-2">
                <li>• Preview submitted form data instantly</li>
                <li>• Easy debugging and validation tracking</li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
