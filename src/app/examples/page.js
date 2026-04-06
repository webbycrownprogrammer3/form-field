"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Form, StepForm } from "field-validation";
import { formSchema, stepSchema } from "@/utils/schema";

export default function ExamplesPage() {
  const [selectedExample, setSelectedExample] = useState("form");
  // ✅ Separate states
  const [formLoading, setFormLoading] = useState(false);
  const [formApiError, setFormApiError] = useState(null);

  const [stepLoading, setStepLoading] = useState(false);
  const [stepApiError, setStepApiError] = useState(null);

  // =========================
  // ✅ Normal Form Submit
  // =========================
  const handleFormSubmit = async (data) => {
    console.log("Form Data:", data);

    setFormLoading(true);
    setFormApiError(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject(new Error("Form API failed")); // ❌ simulate error
        }, 1500),
      );
    } catch (err) {
      setFormApiError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  // =========================
  // ✅ Step Form Submit
  // =========================
  const handleStepSubmit = async (data) => {
    console.log("Step Data:", data);

    setStepLoading(true);
    setStepApiError(null);

    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setStepApiError(err.message);
    } finally {
      setStepLoading(false);
    }
  };

  const examples = [
    {
      id: "form",
      title: "Simple Form Validation",
      icon: "📝",
      description:
        "Basic form with validation using schema. Ideal for contact forms, login, and simple data collection.",
      color: "blue",
    },
    {
      id: "step",
      title: "Multi Step Form",
      icon: "📊",
      description:
        "Step-by-step form with validation at each stage. Perfect for onboarding, checkout, and long forms.",
      color: "purple",
    },
  ];

  const renderExample = () => {
    switch (selectedExample) {
      case "form":
        return (
          <Form
            schema={formSchema}
            onSubmit={handleFormSubmit}
            loading={formLoading}
            apiError={formApiError}
          />
        );
      case "step":
        return (
          <StepForm
            schema={stepSchema}
            onSubmit={handleStepSubmit}
            loading={stepLoading}
            apiError={stepApiError}
          />
        );
      default:
        return null;
    }
  };

  const currentExample = examples.find((ex) => ex.id === selectedExample);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Field Validation Package
          </span>

          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4">
            Form Examples
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore how to use our form validation package with simple and
            multi-step forms.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-2 flex gap-2">
            {examples.map((example) => {
              const isActive = selectedExample === example.id;

              return (
                <button
                  key={example.id}
                  onClick={() => setSelectedExample(example.id)}
                  className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span className="mr-2">{example.icon}</span>
                  {example.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Example Card */}
        <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              {currentExample?.icon} {currentExample?.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {currentExample?.description}
            </p>

            <div className="h-1 w-20 mt-3 bg-blue-600 rounded-full"></div>
          </div>

          <div className="animate-fadeIn">{renderExample()}</div>
        </div>

        {/* Info Section */}
        <div className="mt-10 bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
            💡 Use Cases
          </h3>

          {selectedExample === "form" && (
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Login & Signup forms</li>
              <li>Contact forms</li>
              <li>Basic CRUD operations</li>
            </ul>
          )}

          {selectedExample === "step" && (
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Checkout flow</li>
              <li>User onboarding</li>
              <li>Survey forms</li>
            </ul>
          )}
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
