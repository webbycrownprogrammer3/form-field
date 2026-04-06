"use client";
import { useState } from "react";
import Link from "next/link";
import Editor from "@webbycrown/react-advanced-richtext-editor";
import "@webbycrown/react-advanced-richtext-editor/dist/styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Form, StepForm } from "field-validation";
import { formSchema, stepSchema } from "@/utils/schema";

export default function Home() {
  const [editorContent, setEditorContent] = useState("");
  const [savedContent, setSavedContent] = useState("");

  const handleSave = () => {
    setSavedContent(editorContent);
    alert("Content saved! Check the preview section below.");
  };

  const sampleContent = `
    <h1>Welcome to the Advanced Rich Text Editor</h1>
    <p>This is a <strong>comprehensive demonstration</strong> showcasing the powerful capabilities of our production-ready rich text editor component.</p>
    
    <h2><i className="fas fa-rocket mr-2"></i> Key Features Include:</h2>
    <ul>
      <li><strong>Rich Text Formatting:</strong> Bold, italic, underline, strikethrough, and more</li>
      <li><strong>Typography Control:</strong> 17+ font families, 16 font sizes, and 6 heading levels</li>
      <li><strong>Lists & Structure:</strong> Ordered and unordered lists with multiple styles</li>
      <li><strong>Media Support:</strong> Images, links, tables, and embedded content</li>
      <li><strong>Advanced Tools:</strong> Undo/redo, search & replace, emoji picker, and HTML view</li>
      <li><strong>Security First:</strong> DOMPurify integration for XSS protection</li>
      <li><strong>Customizable:</strong> Themes, plugins, and extensive configuration options</li>
    </ul>
    
    <h2><i className="fas fa-lightbulb mr-2"></i> Try It Out!</h2>
    <p>Select any text and use the toolbar above to format it. Insert images, create tables, add links, or try the emoji picker. The editor automatically saves your content and provides a seamless editing experience.</p>
    
    <blockquote>
      <p><em>"A powerful, secure, and extensible rich text editor built for modern web applications."</em></p>
    </blockquote>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                Production Ready • Fully Validated
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              React Smart
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Forms
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4 leading-relaxed">
              A powerful, schema-driven form system for React and Next.js with built-in validation, step forms, and dynamic field rendering.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Designed for scalability and developer productivity. Create complex forms with minimal code using dynamic schemas,
              advanced validation rules, multi-step workflows, reusable field components, and flexible layouts. Perfect for admin panels,
              onboarding flows, checkout processes, and enterprise-grade applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/features"
                className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <i className="fas fa-star mr-2"></i> Explore Features
              </Link>
              <a
                href="https://www.npmjs.com/package/@webbycrown/react-advanced-richtext-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <i className="fas fa-box mr-2"></i> Install via NPM
              </a>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl px-8 py-6 shadow-lg border border-blue-200 dark:border-blue-800">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">15+</div>
                <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Field Types</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Input, Select, Date, File & more</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl px-8 py-6 shadow-lg border border-blue-200 dark:border-blue-800">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">Dynamic</div>
                <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Schema Driven</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Build forms with JSON config</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl px-8 py-6 shadow-lg border border-blue-200 dark:border-blue-800">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">100%</div>
                <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Validation</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Custom rules & error handling</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl px-8 py-6 shadow-lg border border-blue-200 dark:border-blue-800">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">Step</div>
                <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Multi-Step Forms</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Wizard & workflow support</div>
              </div>
            </div>
          </div>

          {/* Main Editor Demo */}

          <Form
            schema={formSchema}
          // onSubmit={handleFormSubmit}
          // loading={formLoading}
          // apiError={formApiError}
          />

          {/* ✅ Step Form */}
          <StepForm
            schema={stepSchema}
          // onSubmit={handleStepSubmit}
          // loading={stepLoading}
          // apiError={stepApiError}
          // type={"layoutThree"}
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4"><i className="fas fa-shield-alt"></i></div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Powerful Validation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Built-in validation system with support for required fields, patterns, custom rules,
                and dynamic error handling. Ensure accurate data collection with minimal effort.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Required & pattern validation
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Custom validation rules
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Real-time error handling
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4"><i className="fas fa-code"></i></div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Schema Driven Forms</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Build forms dynamically using JSON schemas. Easily manage fields, validation,
                and layouts without rewriting components.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Dynamic field rendering
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Centralized form config
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Easy scalability
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4"><i className="fas fa-tasks"></i></div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Multi-Step Forms</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Create step-by-step workflows with built-in navigation, validation per step,
                and smooth user experience for complex forms.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Step-wise validation
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Progress tracking UI
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-600 dark:text-blue-400"></i> Multiple layout support
                </li>
              </ul>
            </div>
          </div>

          {/* What You Can Do */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden border border-blue-200 dark:border-blue-800">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white">What You Can Build</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                  From simple forms to complex multi-step workflows, React Smart Forms adapts to every use case
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:scale-105 shadow-md">
                  <div className="text-4xl mb-3 text-black dark:text-white"><i className="fas fa-layer-group"></i></div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Dynamic Forms</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Create fully dynamic forms using schema-based configuration. Perfect for admin panels,
                    dashboards, and systems where forms change frequently.
                  </p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:scale-105 shadow-md">
                  <div className="text-4xl mb-3 text-black dark:text-white"><i className="fas fa-tasks"></i></div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Step Form Workflows</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Build multi-step forms with validation per step, progress indicators,
                    and smooth navigation. Ideal for onboarding, checkout, and registration flows.
                  </p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:scale-105 shadow-md">
                  <div className="text-4xl mb-3 text-black dark:text-white"><i className="fas fa-shield-alt"></i></div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Advanced Validation</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Implement strong validation with custom rules, patterns, and real-time feedback.
                    Great for secure data collection and enterprise applications.
                  </p>
                </div>
                <div className="bg-white dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:scale-105 shadow-md">
                  <div className="text-4xl mb-3 text-black dark:text-white"><i className="fas fa-th-large"></i></div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Flexible Layouts</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Choose from multiple step form layouts and customize UI easily.
                    Switch between different designs like stepper, progress bar, or minimal layouts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-blue-200 dark:border-blue-800">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Real-World Use Cases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built for modern applications that require dynamic forms, validation, and multi-step workflows
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                <div className="text-5xl mb-4"><i className="fas fa-building"></i></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Enterprise Applications</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Build scalable admin panels, internal tools, and data management systems with dynamic forms,
                  strong validation, and reusable components.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                <div className="text-5xl mb-4"><i className="fas fa-graduation-cap"></i></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Onboarding & Registration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Create smooth multi-step onboarding flows, registration forms, and user journeys with
                  step-by-step validation and progress tracking.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                <div className="text-5xl mb-4"><i className="fas fa-shopping-cart"></i></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">E-Commerce Platforms</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Design flexible checkout forms, address forms, and order flows with validation,
                  dynamic fields, and optimized user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                Explore Documentation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Everything you need to build powerful forms with validation, step flows, and dynamic schemas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/features"
                className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform"><i className="fas fa-star"></i></div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">Features</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Explore form validation, schema-driven fields, step forms, and flexible layouts
                </p>
              </Link>
              <Link
                href="/configuration"
                className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform"><i className="fas fa-cog"></i></div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">Configuration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Learn how to define schemas, validation rules, field types, and layout options
                </p>
              </Link>
              <Link
                href="/examples"
                className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform"><i className="fas fa-lightbulb"></i></div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">Examples</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Real-world use cases and implementation examples
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Output Preview */}
        {savedContent && (
          <section className="mb-16">
            <div className="bg-white dark:bg-black rounded-2xl shadow-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Saved Content Preview
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    See how your content looks when rendered and the raw HTML output
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-eye text-lg"></i>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">Rendered Output</h4>
                  </div>
                  <div
                    className="border-2 border-gray-300 dark:border-gray-600 rounded-xl p-6 min-h-[300px] bg-gray-50 dark:bg-gray-900/50 shadow-inner"
                    dangerouslySetInnerHTML={{ __html: savedContent }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-code text-lg"></i>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">Raw HTML Code</h4>
                  </div>
                  <pre className="border-2 border-gray-300 dark:border-gray-600 rounded-xl p-6 min-h-[300px] bg-gray-900 dark:bg-gray-950 text-blue-400 text-sm overflow-auto font-mono shadow-inner">
                    {savedContent || "<!-- No content -->"}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Getting Started */}
        {/* <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/10 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Quick Start Guide</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get started in minutes with our simple installation and setup process
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-400 font-bold">$</span>
                  <code className="text-blue-400 text-sm md:text-base">npm install @webbycrown/react-advanced-richtext-editor</code>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                  or using yarn: <code className="text-gray-400">yarn add @webbycrown/react-advanced-richtext-editor</code>
                </div>
                <pre className="text-gray-300 text-xs md:text-sm overflow-x-auto bg-black/50 rounded-lg p-4">
                  {`import { useState } from 'react';
import Editor from '@webbycrown/react-advanced-richtext-editor';
import '@webbycrown/react-advanced-richtext-editor/dist/styles.css';

function MyEditor() {
  const [content, setContent] = useState('');
  
  return (
    <Editor
      value={content}
      onChange={setContent}
      height={400}
    />
  );
}`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl mb-2"><i className="fas fa-bolt"></i></div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Fast Setup</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Install and start using in under 2 minutes
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl mb-2"><i className="fas fa-book"></i></div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Comprehensive Docs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Detailed documentation and examples for every feature
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl mb-2"><i className="fas fa-tools"></i></div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Highly Customizable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Configure themes, plugins, and behavior to match your needs
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                That's it! The editor is ready to use. Check out the <Link href="/examples" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Examples</Link> page
                for more advanced usage patterns, explore the <Link href="/features" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Features</Link> page
                to see all capabilities, or visit the <Link href="/configuration" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Configuration</Link> page
                to customize the editor to your needs.
              </p>
            </div>
          </div>
        </section> */}

        {/* Why Choose This Editor */}
        <section className="mb-16">
          <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Why Choose React Smart Forms?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built for developers who need flexible, scalable, and production-ready form solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl">
                    <i className="fas fa-lock"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Powerful Validation System</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Built-in validation with support for required fields, patterns, and custom rules.
                    Easily handle errors, validations, and edge cases with minimal code.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl">
                    <i className="fas fa-bolt"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Performance Optimized</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Lightweight architecture with efficient state management ensures smooth rendering,
                    even for large and complex forms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl">
                    <i className="fas fa-palette"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Schema Driven Forms</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Define your entire form structure using JSON schemas. Easily manage fields,
                    validations, and layouts from a single configuration.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl">
                    <i className="fas fa-puzzle-piece"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Multi-Step Form Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Create smooth step-by-step workflows with built-in navigation,
                    validation per step, and multiple layout options.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Flexible Layouts</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Choose between multiple layouts like stepper, progress bar, or simple forms.
                    Customize UI to match your application design.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl">
                    <i className="fas fa-tools"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Developer Friendly</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Clean API, reusable components, and easy integration with React and Next.js.
                    Designed to reduce boilerplate and speed up development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
