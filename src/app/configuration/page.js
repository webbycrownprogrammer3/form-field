"use client";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ConfigurationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              Complete Configuration Guide
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Configuration Options
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn how to configure and customize the editor to match your application's needs.
            From basic setup to advanced customization, this guide covers everything you need to know.
          </p>
        </div> */}

        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              Package Configuration Guide
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Configure Your Package
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Set up and customize your package builder with flexible options including step forms,
            custom fields, validation rules, and layout configurations.
          </p>
        </div>

        {/* <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                All Available Props
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Complete reference of all configuration options
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            The editor accepts various props to customize its behavior, appearance, and functionality.
            All props are optional except <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">value</code> and
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">onChange</code> for controlled usage.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Prop</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Type</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Default</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">value</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">""</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">HTML content of the editor</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">onChange</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">function</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">undefined</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Callback when content changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">height</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string | number</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">"auto"</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Editor height (px, "auto", "responsive")</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">width</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string | number</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">"100%"</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Editor width</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">minHeight</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">number</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">200</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Minimum height in pixels</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">className</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">""</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Additional CSS class</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">allowedTags</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">array</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">null</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Array of allowed HTML tags</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">storageKey</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">"rte-editor-content"</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">localStorage key ("" to disable)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">plugins</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">array</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">[]</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Array of custom plugins</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

        <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                All Available Props
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Complete reference of Form & StepForm configuration options
              </p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            React Smart Forms provides flexible props to control form behavior, validation, layout,
            and API handling. The only required prop is{" "}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              schema
            </code>{" "}
            along with{" "}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              onSubmit
            </code>{" "}
            to handle form submission.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Prop</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Type</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Default</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Description</th>
                </tr>
              </thead>

              <tbody className="text-sm">

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">schema</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">object</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">required</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Defines form structure, fields, validation rules, and steps
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">onSubmit</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">function</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">required</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Callback triggered when form is successfully validated and submitted
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">loading</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">boolean</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">false</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Displays loader state during API calls
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">apiError</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">null</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Displays API error message when submission fails
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">type</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">"default"</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    StepForm layout type (e.g., "layoutTwo", "layoutThree")
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">fields</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">object</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">-</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Defines input fields for normal Form (inside schema)
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">steps</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">array</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">-</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Defines multi-step structure for StepForm
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">rules</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">object</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">{ }</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Validation rules like required, pattern, email, etc.
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">label</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">""</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">
                    Label for form fields
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Code Examples */}
        {/* Code Examples */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Code Examples
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Practical examples for common use cases
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Basic Usage */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-rocket text-xl text-blue-600"></i>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Basic Form Usage
                </h4>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Simple form setup using schema validation and API handling.
              </p>

              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
                {`import { useState } from "react";
import { Form } from "field-validation";
import { formSchema } from "@/utils/schema";

export default function MyForm() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async (data) => {
    setLoading(true);
    setApiError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      schema={formSchema}
      onSubmit={handleSubmit}
      loading={loading}
      apiError={apiError}
    />
  );
}`}
              </pre>
            </div>

            {/* Step Form */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-layer-group text-xl text-purple-500"></i>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Step Form Usage
                </h4>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Multi-step form with validation, loading state, and API integration.
              </p>

              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
                {`import { useState } from "react";
import { StepForm } from "field-validation";
import { stepSchema } from "@/utils/schema";

export default function MyStepForm() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async (data) => {
    setLoading(true);
    setApiError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StepForm
      schema={stepSchema}
      onSubmit={handleSubmit}
      loading={loading}
      apiError={apiError}
    />
  );
}`}
              </pre>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

