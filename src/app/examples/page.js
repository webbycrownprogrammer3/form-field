"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Form, StepForm } from "field-validation";
import {
  countrySchema,
  examSchema,
  formSchema,
  formSchemaThree,
  formSchemaTwo,
  genderSchema,
  stepSchema,
  stepSchemaThree,
  stepSchemaTwo,
} from "@/utils/schema";

export default function ExamplesPage() {
  const [selectedExample, setSelectedExample] = useState("form");
  // ✅ Separate states
  const [formLoading, setFormLoading] = useState(false);
  const [formApiError, setFormApiError] = useState(null);

  // form layout two states
  const [formLoadingTwo, setFormLoadingTwo] = useState(false);
  const [formApiErrorTwo, setFormApiErrorTwo] = useState(null);

  // form layout three states
  const [formLoadingThree, setFormLoadingThree] = useState(false);
  const [formApiErrorThree, setFormApiErrorThree] = useState(null);

  const [stepLoading, setStepLoading] = useState(false);
  const [stepApiError, setStepApiError] = useState(null);

  // stepform layout two states
  const [stepLoadingTwo, setStepLoadingTwo] = useState(false);
  const [stepApiErrorTwo, setStepApiErrorTwo] = useState(null);

  // stepform layout three states
  const [stepLoadingThree, setStepLoadingThree] = useState(false);
  const [stepApiErrorThree, setStepApiErrorThree] = useState(null);

  // exam form
  const [examstepLoading, setexamStepLoading] = useState(false);
  const [examstepApiError, setexamStepApiError] = useState(null);

  // dependentform
  const [dependentformLoading, setdependentFormLoading] = useState(false);
  const [dependentformApiError, setdependentFormApiError] = useState(null);

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
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setFormApiError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  // form layout two submit
  const handleFormSubmitTwo = async (data) => {
    console.log("Form Data:", data);

    setFormLoadingTwo(true);
    setFormApiErrorTwo(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject(new Error("Form API failed")); // ❌ simulate error
        }, 1500),
      );
    } catch (err) {
      setFormApiErrorTwo(err.message);
    } finally {
      setFormLoadingTwo(false);
    }
  };

  // form layout three submit
  const handleFormSubmitThree = async (data) => {
    console.log("Form Data:", data);

    setFormLoadingThree(true);
    setFormApiErrorThree(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject(new Error("Form API failed")); // ❌ simulate error
        }, 1500),
      );
    } catch (err) {
      setFormApiErrorThree(err.message);
    } finally {
      setFormLoadingThree(false);
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

  // stepformtwo submit
  const handleStepSubmitTwo = async (data) => {
    console.log("Step Data:", data);

    setStepLoadingTwo(true);
    setStepApiErrorTwo(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject(new Error("Form API failed")); // ❌ simulate error
        }, 1500),
      );
    } catch (err) {
      setStepApiErrorTwo(err.message);
    } finally {
      setStepLoadingTwo(false);
    }
  };

  // stepformthree submit
  const handleStepSubmitThree = async (data) => {
    console.log("Step Data:", data);

    setStepLoadingThree(true);
    setStepApiErrorThree(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setStepApiErrorThree(err.message);
    } finally {
      setStepLoadingThree(false);
    }
  };

  // examformsubmit
  const handleexamStepSubmit = async (data) => {
    console.log("Step Data:", data);

    setexamStepLoading(true);
    setexamStepApiError(null);

    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setexamStepApiError(err.message);
    } finally {
      setexamStepLoading(false);
    }
  };

  const handleFormSubmitdependent = async (data) => {
    console.log("Form Data:", data);

    setdependentFormLoading(true);
    setdependentFormApiError(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setdependentFormApiError(err.message);
    } finally {
      setdependentFormLoading(false);
    }
  };

  const answer = {
    q1: "a",
    q2: ["color", "font-size"],
    q3: "netscape",
    q4: "22",
    q5: "ui",
    q6: ["vdom", "component"],
    q7: "ollehs",
    q8: "react",
  };

  const examples = [
    {
      id: "form",
      title: "Simple Form",
      icon: "📝",
      description:
        "Basic form using layoutOne with schema-based validation. Includes API-based loading state and displays submitted data after successful submission. Ideal for contact forms, login, and simple data collection.",
      color: "blue",
    },
    {
      id: "form-layout-two",
      title: "Simple Form Layout Two",
      icon: "📝",
      description:
        "LayoutTwo variation of the form . Uses errorType='beforField' to display validation messages above inputs and shows API errors after submission.",
      color: "blue",
    },
    {
      id: "form-layout-three",
      title: "Simple Form Layout Three",
      icon: "📝",
      description:
        "Advanced LayoutThree version of the form with custom UI and enhanced features. Includes different styled error icons, supports multi-select dropdowns using multiSelect: true, and allows images inside radio and checkbox options via schema configuration. ",
      color: "blue",
    },
    {
      id: "exam-form",
      title: "Simple Exam Form ",
      icon: "📝",
      description:
        "An advanced LayoutThree version of the form with a custom UI and enhanced features. It includes styled error indicators, supports multi-select dropdowns using multiSelect: true, and allows images or icons within radio and checkbox options through schema configuration.",
      color: "blue",
    },
    {
      id: "dependent-form",
      title: "Dependent Form ",
      icon: "📝",
      description:
        "A dynamic form that updates fields based on user input. Fields can appear, hide, or change depending on the selected values, enabling conditional logic and seamless dependency handling between form inputs.",
      color: "blue",
    },
    {
      id: "step",
      title: "Multi Step Form",
      icon: "📊",
      description:
        "Step-by-step form with built-in validation, custom error messages, error icons, loading state, and API error handling. You can also view submitted data after submit. Step indicators are enabled using stepShow=true for better user flow.",
      color: "purple",
    },
    {
      id: "step-form-layout-two",
      title: "Step Form Layout Two",
      icon: "📊",
      description:
        "LayoutTwo variation of the step form without step indicators. Uses errorType='beforField' to display validation messages above inputs and shows API errors after submission.",
      color: "purple",
    },
    {
      id: "step-form-layout-three",
      title: "Step Form Layout Three",
      icon: "📊",
      description:
        "Advanced LayoutThree version of the step form with custom UI and enhanced features. Includes different styled error icons, supports multi-select dropdowns using multiSelect: true, and allows images inside radio and checkbox options via schema configuration. ",
      color: "purple",
    },
  ];

  const renderExample = () => {
    switch (selectedExample) {
      case "form":
        return (
          <Form
            key="form-1"
            schema={formSchema}
            // schema={countrySchema}
            onSubmit={handleFormSubmit}
            loading={formLoading}
            apiError={formApiError}

          />
        );
      case "form-layout-two":
        return (
          <Form
            key="form-2"
            schema={formSchemaTwo}
            onSubmit={handleFormSubmitTwo}
            loading={formLoadingTwo}
            apiError={formApiErrorTwo}
            errorType={"beforField"}
            type={"layoutTwo"}
            gridType={3}
          />
        );
      case "form-layout-three":
        return (
          <Form
            key="form-3"
            schema={formSchemaThree}
            onSubmit={handleFormSubmitThree}
            loading={formLoadingThree}
            apiError={formApiErrorThree}
            type={"layoutThree"}
            errorType={"popup"}
          />
        );
      case "exam-form":
        return (
          <StepForm
            key="step-form-1"
            schema={examSchema}
            onSubmit={handleexamStepSubmit}
            loading={examstepLoading}
            apiError={examstepApiError}
            percentageResult={true}
            apiMode={true} // ✅ NEW
            answer={answer} // ✅ NEW (API answers)
          />
        );
      case "dependent-form":
        return (
          <Form
            key="dependent-form-1"
            schema={countrySchema}
            onSubmit={handleFormSubmitdependent}
            loading={dependentformLoading}
            apiError={dependentformApiError}
          />
        );
      case "step":
        return (
          <StepForm
            key="step-form-1"
            schema={stepSchema}
            onSubmit={handleStepSubmit}
            loading={stepLoading}
            apiError={stepApiError}
            stepShow={true}

          />
        );
      case "step-form-layout-two":
        return (
          <StepForm
            key="step-form-2"
            schema={stepSchemaTwo}
            type={"layoutTwo"}
            onSubmit={handleStepSubmitTwo}
            errorType={"beforField"}
            loading={stepLoadingTwo}
            apiError={stepApiErrorTwo}

          />
        );
      case "step-form-layout-three":
        return (
          <StepForm
            key="step-form-3"
            schema={stepSchemaThree}
            type={"layoutThree"}
            onSubmit={handleStepSubmitThree}
            stepShow={true}
            loading={stepLoadingThree}
            apiError={stepApiErrorThree}
            errorType={"popup"}
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
                  className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive
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
            💡 Configuration
          </h3>

          {selectedExample === "form" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import { useState } from "react";
import { Form } from "field-validation";
import { formSchema } from "@/utils/schema";

export default function Page() {
  const [formLoading, setFormLoading] = useState(false);
  const [formApiError, setFormApiError] = useState(null);

  // =========================
  // ✅  Form Submit
  // =========================
  const handleFormSubmit = async (data) => {
    console.log("Form Data:", data);

    setFormLoading(true);
    setFormApiError(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setFormApiError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <>
      <Form
        schema={formSchema}
        onSubmit={handleFormSubmit}
        loading={formLoading}
        apiError={formApiError}
      />
    </>
  );
}
`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const formSchema = {
  fields: {

    infoBlock: {
      type: "content",
      content: (
        <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            About This Form
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            This form is designed to collect user information in a structured and user-friendly manner.
            It supports dynamic validation, conditional fields, and multi-step navigation to provide a seamless
            experience for both users and developers.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            The system is built using a schema-driven approach, which means all form fields, validation rules,
            and UI behavior are controlled through configuration rather than hardcoded components. This allows
            for flexible customization and easy scalability.
          </p>

          <div>
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Key Features
            </h3>

            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>Dynamic field rendering based on schema configuration</li>
              <li>Real-time validation with custom error messages</li>
              <li>Support for multiple field types (text, select, checkbox, file, etc.)</li>
              <li>Conditional fields using dependency logic (<code>showWhen</code>)</li>
              <li>Step-by-step form navigation with progress indicators</li>
              <li>Custom UI components like multi-select, password fields, and dropzones</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">
              How It Works
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Each field in the form is defined inside a schema object, where you can specify its type, label,
              validation rules, and behavior. The form engine reads this schema and dynamically renders the UI
              accordingly. This makes it easy to update forms without modifying the core logic.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Usage
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              This form can be used for various purposes such as user registration, surveys, onboarding flows,
              and data collection systems. It is highly adaptable and can be extended with additional features
              like API integration, async validation, and role-based field visibility.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-blue-50 text-blue-700 text-sm">
            💡 Tip: You can customize this form by updating the schema configuration. Add new fields, modify
            validation rules, or introduce conditional logic without changing the core form component.
          </div>

        </div>
      ),
    },
    name: {
      type: "text",
      label: "Name",
      tooltip: "Name Is required.",
      description: "This will be used on your official documents",
      rules: {
        required: true,
        requiredMessage: "Name is required",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    password: {
      type: "password",
      label: "Password",

      rules: {
        required: true,
        requiredMessage: "Password is required",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    confirmPassword: {
      type: "password",
      label: "Confirm Password",
      rules: {
        required: true,
        requiredMessage: "Confirm Password is required",
        validate: (value, values) => {
          if (value !== values?.password) {
            return "Passwords do not match";
          }
          return true;
        },
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    gender: {
      type: "radio",
      label: "Gender",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
      rules: {
        required: true,
        requiredMessage: "Gender is required",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    hobbies: {
      type: "checkbox",
      label: "Hobbies",
      options: [
        { label: "Cricket", value: "cricket" },
        { label: "Music", value: "music" },
      ],
      rules: {
        required: true,
        requiredMessage: "Hobbies is required",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    resume: {
      type: "file",
      label: "Upload Resume",
      accept: ".pdf,.doc",
      rules: {
        required: true,
        requiredMessage: "File is required",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    profileImage: {
      type: "dropzone",
      label: "Upload Profile Image",
      multiple: true,
      accept: "image/*",
      rules: {
        required: true,
        requiredMessage: "Profile is required",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    username: {
      type: "text",
      label: "Username",
      rules: {
        minLength: 3,
        requiredMessage: "Name is required",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    bio: {
      type: "textarea",
      label: "Bio",
      rules: {
        required: true,
        maxLength: 10,
        requiredMessage: (
          <div style={{ fontSize: "12px", color: "#ef4444" }}>
            ❗{" "}
            <b>
              <span>Bio</span> is required
            </b>
          </div>
        ),
      },
      errorImage: "images/man.jpg", // ✅ Add image to field
    },

    email: {
      type: "email",
      label: "Email",
      rules: {
        required: true,
        requiredMessage: "Email is required",
        validate: (value) => {
          if (!value) return true;

          // ❌ No @ symbol
          if (!value.includes("@")) {
            return (
              <div style={{ fontSize: "12px", color: "#f59e0b" }}>
                Email must contain{" "}
                <span style={{ color: "#ef4444", fontWeight: 600 }}>@</span>{" "}
                symbol
              </div>
            );
          }

          // ❌ Block specific email
          if (value === "admin@gmail.com") {
            return (
              <div style={{ fontSize: "12px", color: "#ef4444" }}>
                <span style={{ fontWeight: 600 }}>{value}</span> is not
                available and not safe
              </div>
            );
          }

          // ❌ Invalid email format
          if (!/\S+@\S+\.\S+/.test(value)) {
            return (
              <div style={{ fontSize: "12px", color: "#f97316" }}>
                Please enter a valid email format
              </div>
            );
          }

          return true;
        },
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    phone: {
      type: "text",
      label: "Phone",
      rules: {
        required: true,
        pattern: /^[0-9]{10}$/,
        patternMessage: "Phone must be 10 digits",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    customField: {
      type: "text",
      label: "Custom Field",
      rules: {
        required: true,
        validate: (value) =>
          value !== "admin" || (
            <div style={{ color: "red", fontSize: "12px" }}>
              <span style={{ color: "orange", fontWeight: "1200" }}>Admin</span>{" "}
              is not allowed
            </div>
          ),
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },

    country: {
      type: "select",
      label: "Country",
      multiSelect: true, // ✅ enables multi select
      options: [
        { label: "India", value: "india" },
        { label: "USA", value: "usa" },
        { label: "Canada", value: "canada" },
      ],
      rules: {
        required: true,
        requiredMessage: "Please select a country",
      },
      errorIcon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
      ),
    },
  },
};`}
                </pre>
              </div>
            </div>
          )}

          {selectedExample === "form-layout-two" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import { useState } from "react";
import { Form } from "field-validation";
import { formSchemaTwo } from "@/utils/schema";

export default function Page() {
  const [formLoadingTwo, setFormLoadingTwo] = useState(false);
  const [formApiErrorTwo, setFormApiErrorTwo] = useState(null);

  // =========================
  // ✅  Form Submit
  // =========================
  const handleFormSubmitTwo = async (data) => {
    console.log("Form Data:", data);

    setFormLoadingTwo(true);
    setFormApiErrorTwo(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject(new Error("Form API failed")); // ❌ simulate error
        }, 1500),
      );
    } catch (err) {
      setFormApiErrorTwo(err.message);
    } finally {
      setFormLoadingTwo(false);
    }
  };

  return (
    <>
      <Form
        key="form-2"
        schema={formSchemaTwo}
        onSubmit={handleFormSubmitTwo}
        loading={formLoadingTwo}
        apiError={formApiErrorTwo}
        errorType={"beforField"}
        type={"layoutTwo"}
      />
    </>
  );
}
`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const formSchemaTwo = {
    fields: {
        name: {
            type: "text",
            label: "Name",
            rules: {
                required: true,
                requiredMessage: "Name is required",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        username: {
            type: "text",
            label: "Username",
            rules: {
                minLength: 3,
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        bio: {
            type: "textarea",
            label: "Bio",
            rules: {
                required: true,
                maxLength: 10,
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        email: {
            type: "email",
            label: "Email",
            rules: {
                required: true,
                email: true,
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        phone: {
            type: "text",
            label: "Phone",
            rules: {
                required: true,
                pattern: /^[0-9]{10}$/,
                patternMessage: "Phone must be 10 digits",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        customField: {
            type: "text",
            label: "Custom Field",
            rules: {
                required: true,
                validate: (value) =>
                    value !== "admin" || "Value 'admin' is not allowed",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        country: {
            type: "select",
            label: "Country",
            options: [
                { label: "India", value: "india" },
                { label: "USA", value: "usa" },
                { label: "Canada", value: "canada" },
            ],
            rules: {
                required: true,
                requiredMessage: "Please select a country",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        gender: {
            type: "radio",
            label: "Gender",
            options: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
            ],
            rules: {
                required: true,
                requiredMessage: "Gender is required",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        hobbies: {
            type: "checkbox",
            label: "Hobbies",
            options: [
                { label: "Cricket", value: "cricket" },
                { label: "Music", value: "music" },
            ],
            rules: {
                required: true,
                requiredMessage: "Hobbies is required",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        resume: {
            type: "file",
            label: "Upload Resume",
            accept: ".pdf,.doc",
            rules: {
                required: true,
                requiredMessage: "File is required",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },

        profileImage: {
            type: "dropzone",
            label: "Upload Profile Image",
            accept: "image/*",
            rules: {
                required: true,
                requiredMessage: "Profile is required",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                </svg>
            ),
        },
    },
};`}
                </pre>
              </div>
            </div>
          )}

          {selectedExample === "form-layout-three" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import { useState } from "react";
import { Form } from "field-validation";
import { formSchemaThree } from "@/utils/schema";

export default function Page() {
  const [formLoadingThree, setFormLoadingThree] = useState(false);
  const [formApiErrorThree, setFormApiErrorThree] = useState(null);

  // =========================
  // ✅  Form Submit
  // =========================
  const handleFormSubmitThree = async (data) => {
    console.log("Form Data:", data);

    setFormLoadingThree(true);
    setFormApiErrorThree(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve()
        }, 1500),
      );
    } catch (err) {
      setFormApiErrorThree(err.message);
    } finally {
      setFormLoadingThree(false);
    }
  };

  return (
    <>
      <Form
        key="form-3"
        schema={formSchemaThree}
        onSubmit={handleFormSubmitThree}
        loading={formLoadingThree}
        apiError={formApiErrorThree}
        type={"layoutThree"}
      />
    </>
  );
}
`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const formSchemaThree = {
    fields: {
        name: {
            type: "text",
            label: "Name",
            rules: {
                required: true,
                requiredMessage: "Name is required",
            },
            // 🔥 pass custom SVG
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="red"
                        strokeWidth="2"
                        fill="none"
                    />
                    <line
                        x1="8"
                        y1="8"
                        x2="16"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                    <line
                        x1="16"
                        y1="8"
                        x2="8"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                </svg>
            ),
        },
        
        username: {
            type: "text",
            label: "Username",
            rules: {
                minLength: 3,
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="red"
                        strokeWidth="2"
                        fill="none"
                    />
                    <line
                        x1="8"
                        y1="8"
                        x2="16"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                    <line
                        x1="16"
                        y1="8"
                        x2="8"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                </svg>
            ),
        },

        country: {
            type: "select",
            label: "Country",
            multiSelect: true, // ✅ enables multi select
            options: [
                { label: "India", value: "india" },
                { label: "USA", value: "usa" },
                { label: "Canada", value: "canada" },
            ],
            rules: {
                required: true,
                requiredMessage: "Please select a country",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="red"
                        strokeWidth="2"
                        fill="none"
                    />
                    <line
                        x1="8"
                        y1="8"
                        x2="16"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                    <line
                        x1="16"
                        y1="8"
                        x2="8"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                </svg>
            ),
        },

        gender: {
            type: "radio",
            label: "Gender",
            options: [
                { image: "/images/man.jpg", value: "male" },
                { image: "/images/female.jpg", value: "female" },
            ],
            rules: {
                required: true,
                requiredMessage: "Gender is required",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="red"
                        strokeWidth="2"
                        fill="none"
                    />
                    <line
                        x1="8"
                        y1="8"
                        x2="16"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                    <line
                        x1="16"
                        y1="8"
                        x2="8"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                </svg>
            ),
        },

        hobbies: {
            type: "checkbox",
            label: "Hobbies",
            options: [
                // { label: "Cricket", value: "cricket" },
                { image: "/images/cricket.jpg", value: "cricket" },
                { label: "Music", value: "music" },
            ],
            rules: {
                required: true,
                requiredMessage: "Hobbies is required",
            },
            errorIcon: (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="red"
                        strokeWidth="2"
                        fill="none"
                    />
                    <line
                        x1="8"
                        y1="8"
                        x2="16"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                    <line
                        x1="16"
                        y1="8"
                        x2="8"
                        y2="16"
                        stroke="red"
                        strokeWidth="2"
                    />
                </svg>
            ),
        },
    },
};`}
                </pre>
              </div>
            </div>
          )}

          {selectedExample === "step" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import { useState } from "react";
import { StepForm } from "field-validation";
import { stepSchema } from "@/utils/schema";

export default function Page() {
  const [stepLoading, setStepLoading] = useState(false);
  const [stepApiError, setStepApiError] = useState(null);

  const handleStepSubmit = async (data) => {
    setStepLoading(true);
    setStepApiError(null);

    try {
      await new Promise((resolve) =>
        setTimeout(() => resolve(), 1500)
      );
    } catch (err) {
      setStepApiError(err.message);
    } finally {
      setStepLoading(false);
    }
  };

  return (
    <StepForm
      schema={stepSchema}
      onSubmit={handleStepSubmit}
      loading={stepLoading}
      apiError={stepApiError}
      stepShow={true}
    />
  );
}`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const stepSchema = {
    steps: [
        // ✅ Step 1: Basic Info
        {
            title: "Basic Info",
            fields: {
                name: {
                    type: "text",
                    label: "Name",
                    rules: {
                        required: true,
                        requiredMessage: "Name is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                username: {
                    type: "text",
                    label: "Username",
                    rules: {
                        minLength: 3,
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                dob: {
                    type: "date",
                    label: "Date of Birth",
                    rules: {
                        required: true,
                        requiredMessage: "Please select your date of birth",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                dobtime: {
                    type: "time",
                    label: "Time of Birth",
                    rules: {
                        required: true,
                        requiredMessage: "Please select your time of birth",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
            },
        },

        // ✅ Step 2: Profile Info
        {
            title: "Profile Info",
            fields: {
                bio: {
                    type: "textarea",
                    label: "Bio",
                    rules: {
                        required: true,
                        maxLength: 10,
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                customField: {
                    type: "text",
                    label: "Custom Field",
                    rules: {
                        required: true,
                        validate: (value) =>
                            value !== "admin" || "Value 'admin' is not allowed",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
            },
        },

        // ✅ Step 3: Contact Info
        {
            title: "Contact Info",
            fields: {
                email: {
                    type: "email",
                    label: "Email",
                    rules: {
                        required: true,
                        email: true,
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                phone: {
                    type: "text",
                    label: "Phone",
                    rules: {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                        patternMessage: "Phone must be 10 digits",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                country: {
                    type: "select",
                    label: "Country",
                    options: [
                        { label: "India", value: "india" },
                        { label: "USA", value: "usa" },
                        { label: "Canada", value: "canada" },
                    ],
                    rules: {
                        required: true,
                        requiredMessage: "Please select a country",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                gender: {
                    type: "radio",
                    label: "Gender",
                    options: [
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                    ],
                    rules: {
                        required: true,
                        requiredMessage: "Gender is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                hobbies: {
                    type: "checkbox",
                    label: "Hobbies",
                    options: [
                        { label: "Cricket", value: "cricket" },
                        { label: "Music", value: "music" },
                    ],
                    rules: {
                        required: true,
                        requiredMessage: "Hobbies is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                resume: {
                    type: "file",
                    label: "Upload Resume",
                    accept: ".pdf,.doc",
                    rules: {
                        required: true,
                        requiredMessage: "File is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                profileImage: {
                    type: "dropzone",
                    label: "Upload Profile Image",
                    accept: "image/*",
                    rules: {
                        required: true,
                        requiredMessage: "Profile is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
            },
        },
    ],
};`}
                </pre>
              </div>
            </div>
          )}

          {selectedExample === "step-form-layout-two" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import { useState } from "react";
import { StepForm } from "field-validation";
import { stepSchemaTwo } from "@/utils/schema";

export default function Page() {
  const [stepLoadingTwo, setStepLoadingTwo] = useState(false);
  const [stepApiErrorTwo, setStepApiErrorTwo] = useState(null);

  // =========================
  // ✅ Step Form Submit
  // =========================
  const handleStepSubmitTwo = async (data) => {
    console.log("Step Data:", data);

    setStepLoadingTwo(true);
    setStepApiErrorTwo(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          reject(new Error("Form API failed")); // ❌ simulate error
        }, 1500),
      );
    } catch (err) {
      setStepApiErrorTwo(err.message);
    } finally {
      setStepLoadingTwo(false);
    }
  };

  return (
    <>
      <StepForm
        key="step-form-2"
        schema={stepSchemaTwo}
        type={"layoutTwo"}
        onSubmit={handleStepSubmitTwo}
        errorType={"beforField"}
        loading={stepLoadingTwo}
        apiError={stepApiErrorTwo}
      />
    </>
  );
}`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const stepSchemaTwo = {
    steps: [
        // ✅ Step 1: Basic Info
        {
            title: "Basic Info",
            fields: {
                name: {
                    type: "text",
                    label: "First Name",
                    rules: {
                        required: true,
                        requiredMessage: "First Name is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                username: {
                    type: "text",
                    label: "Username",
                    rules: {
                        minLength: 3,
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                dob: {
                    type: "date",
                    label: "Date of Birth",
                    rules: {
                        required: true,
                        requiredMessage: "Please select your date of birth",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                dobtime: {
                    type: "time",
                    label: "Time of Birth",
                    rules: {
                        required: true,
                        requiredMessage: "Please select your time of birth",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
            },
        },

        // ✅ Step 2: Profile Info
        {
            title: "Profile Info",
            fields: {
                bio: {
                    type: "textarea",
                    label: "Bio",
                    rules: {
                        required: true,
                        maxLength: 10,
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                customField: {
                    type: "text",
                    label: "Custom Field",
                    rules: {
                        required: true,
                        validate: (value) =>
                            value !== "admin" || "Value 'admin' is not allowed",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
            },
        },

        // ✅ Step 3: Contact Info
        {
            title: "Contact Info",
            fields: {
                email: {
                    type: "email",
                    label: "Email",
                    rules: {
                        required: true,
                        email: true,
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                phone: {
                    type: "text",
                    label: "Phone",
                    rules: {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                        patternMessage: "Phone must be 10 digits",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
                country: {
                    type: "select",
                    label: "Country",
                    options: [
                        { label: "India", value: "india" },
                        { label: "USA", value: "usa" },
                        { label: "Canada", value: "canada" },
                    ],
                    rules: {
                        required: true,
                        requiredMessage: "Please select a country",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                gender: {
                    type: "radio",
                    label: "Gender",
                    options: [
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                    ],
                    rules: {
                        required: true,
                        requiredMessage: "Gender is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                hobbies: {
                    type: "checkbox",
                    label: "Hobbies",
                    options: [
                        { label: "Cricket", value: "cricket" },
                        { label: "Music", value: "music" },
                    ],
                    rules: {
                        required: true,
                        requiredMessage: "Hobbies is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                resume: {
                    type: "file",
                    label: "Upload Resume",
                    accept: ".pdf,.doc",
                    rules: {
                        required: true,
                        requiredMessage: "File is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },

                profileImage: {
                    type: "dropzone",
                    label: "Upload Profile Image",
                    accept: "image/*",
                    rules: {
                        required: true,
                        requiredMessage: "Profile is required",
                    },
                    errorIcon: (
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
                        </svg>
                    ),
                },
            },
        },
    ],
};`}
                </pre>
              </div>
            </div>
          )}

          {selectedExample === "step-form-layout-three" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import { useState } from "react";
import { StepForm } from "field-validation";
import { stepSchemaThree } from "@/utils/schema";

export default function Page() {
  const [stepLoadingThree, setStepLoadingThree] = useState(false);
  const [stepApiErrorThree, setStepApiErrorThree] = useState(null);

  // =========================
  // ✅ Step Form Submit
  // =========================
  const handleStepSubmitThree = async (data) => {
    console.log("Step Data:", data);

    setStepLoadingThree(true);
    setStepApiErrorThree(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setStepApiErrorThree(err.message);
    } finally {
      setStepLoadingThree(false);
    }
  };

  return (
    <>
      <StepForm
        key="step-form-3"
        schema={stepSchemaThree}
        type={"layoutThree"}
        onSubmit={handleStepSubmitThree}
        stepShow={true}
        loading={stepLoadingThree}
        apiError={stepApiErrorThree}
      />
    </>
  );
}
`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const stepSchemaThree = {
  steps: [
    // ✅ Step 1: Basic Info
    {
      title: "Basic Info",
      fields: {
        name: {
          type: "text",
          label: "Name",
          rules: {
            required: true,
            requiredMessage: "Name is required",
          },
          // 🔥 pass custom SVG
          errorIcon: (
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="red"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        username: {
          type: "text",
          label: "Username",
          rules: {
            minLength: 3,
          },
          errorIcon: (
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="red"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          ),
        },
      },
    },

    // ✅ Step 3: Contact Info
    {
      title: "Contact Info",
      fields: {
        country: {
          type: "select",
          label: "Country",
          multiSelect: true, // ✅ enables multi select
          options: [
            { label: "India", value: "india" },
            { label: "USA", value: "usa" },
            { label: "Canada", value: "canada" },
          ],
          rules: {
            required: true,
            requiredMessage: "Please select a country",
          },
          errorIcon: (
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="red"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          ),
        },

        gender: {
          type: "radio",
          label: "Gender",
          options: [
            { image: "/images/man.jpg", value: "male" },
            { image: "/images/female.jpg", value: "female" },
          ],
          rules: {
            required: true,
            requiredMessage: "Gender is required",
          },
          errorIcon: (
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="red"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          ),
        },

        hobbies: {
          type: "checkbox",
          label: "Hobbies",
          options: [
            // { label: "Cricket", value: "cricket" },
            { image: "/images/cricket.jpg", value: "cricket" },
            { label: "Music", value: "music" },
          ],
          rules: {
            required: true,
            requiredMessage: "Hobbies is required",
          },
          errorIcon: (
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="red"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          ),
        },
      },
    },
  ],
};`}
                </pre>
              </div>
            </div>
          )}

          {selectedExample === "exam-form" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import React, { useState } from "react";
import { examSchema } from "@/utils/schema";
import { Form, StepForm } from "field-validation";

export default function Page() {
  const [examstepLoading, setexamStepLoading] = useState(false);
  const [examstepApiError, setexamStepApiError] = useState(null);

  // =========================
  // ✅ Step Form Submit
  // =========================
  const handleexamStepSubmit = async (data) => {
    console.log("Step Data:", data);

    setexamStepLoading(true);
    setexamStepApiError(null);

    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setexamStepApiError(err.message);
    } finally {
      setexamStepLoading(false);
    }
  };

  const answer = {
    q1: "a",
    q2: ["color", "font-size"],
    q3: "netscape",
    q4: "22",
    q5: "ui",
    q6: ["vdom", "component"],
    q7: "ollehs",
    q8: "react",
  };

  return (
    <>
      {/* ✅ Normal Form */}
      <StepForm
        key="step-form-1"
        schema={examSchema}
        onSubmit={handleexamStepSubmit}
        loading={examstepLoading}
        apiError={examstepApiError}
        percentageResult={true}
        apiMode={true} // ✅ NEW
        answer={answer} // ✅ NEW (API answers)
      />
    </>
  );
}
`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const examSchema = {
  steps: [
    // =========================
    // STEP 1 - HTML + CSS
    // =========================
    {
      title: "HTML & CSS Basics",
      fields: {
        userId: {
          type: "hidden",
          value: 2, // dynamic user id (can come from auth)
        },
        q1: {
          type: "radio",
          label: "1. What does HTML stand for?",
          options: [
            { label: "Hyper Text Markup Language", value: "a" },
            { label: "High Text Machine Language", value: "b" },
            { label: "Hyperloop Machine Language", value: "c" },
          ],
          rules: {
            required: true,
            requiredMessage: "Please select an answer",
          },
          correctAnswer: "a",
        },

        q2: {
          type: "checkbox",
          label: "2. Which are CSS properties?",
          options: [
            { label: "color", value: "color" },
            { label: "font-size", value: "font-size" },
            { label: "onclick", value: "onclick" },
          ],
          rules: {
            required: true,
            requiredMessage: "Select at least one",
          },
          correctAnswer: ["color", "font-size"],
        },
      },
    },

    // =========================
    // STEP 2 - JAVASCRIPT
    // =========================
    {
      title: "JavaScript Basics",
      fields: {
        PageId: {
          type: "hidden",
          value: 20, // dynamic user id (can come from auth)
        },
        q3: {
          type: "radio",
          label: "3. Which company developed JavaScript?",
          options: [
            { label: "Microsoft", value: "ms" },
            { label: "Netscape", value: "netscape" },
            { label: "Google", value: "google" },
          ],
          rules: {
            required: true,
          },
          correctAnswer: "netscape",
        },

        q4: {
          type: "text",
          label: "4. What is the output of 2 + '2' in JS?",
          rules: {
            required: true,
          },
          correctAnswer: "22",
        },
      },
    },

    // =========================
    // STEP 3 - REACT
    // =========================
    {
      title: "React Basics",
      fields: {
        q5: {
          type: "radio",
          label: "5. React is mainly used for?",
          options: [
            { label: "Database", value: "db" },
            { label: "UI Development", value: "ui" },
            { label: "Backend API", value: "api" },
          ],
          rules: {
            required: true,
          },
          correctAnswer: "ui",
        },

        q6: {
          type: "checkbox",
          label: "6. Which are React features?",
          options: [
            { label: "Virtual DOM", value: "vdom" },
            { label: "Two-way binding", value: "twoway" },
            { label: "Component-based", value: "component" },
          ],
          correctAnswer: ["vdom", "component"],
        },
      },
    },

    // =========================
    // STEP 4 - CODING QUESTION
    // =========================
    {
      title: "Coding & Logic",
      fields: {
        q7: {
          type: "text",
          label: "7. Reverse string of 'hello'?",
          rules: {
            required: true,
          },
          correctAnswer: "olleh",
        },

        q8: {
          type: "radio",
          label: "8. Which is a JavaScript framework?",
          options: [
            { label: "Laravel", value: "laravel" },
            { label: "Django", value: "django" },
            { label: "React", value: "react" },
          ],
          correctAnswer: "react",
        },
      },
    },
  ],
};`}
                </pre>
              </div>
            </div>
          )}

          {selectedExample === "dependent-form" && (
            <div className="space-y-6">
              {/* ================= Setup Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚙️ Setup Code
                </h4>

                <pre className="bg-black text-green-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`"use client";

import React, { useState } from "react";
import { examSchema } from "@/utils/schema";
import { Form, StepForm } from "field-validation";

export default function Page() {
  const [dependentformLoading, setdependentFormLoading] = useState(false);
  const [dependentformApiError, setdependentFormApiError] = useState(null);

  // =========================
  // ✅ Step Form Submit
  // =========================
  const handleFormSubmitdependent = async (data) => {
    console.log("Form Data:", data);

    setdependentFormLoading(true);
    setdependentFormApiError(null);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );
    } catch (err) {
      setdependentFormApiError(err.message);
    } finally {
      setdependentFormLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Normal Form */}
      <Form
        key="dependent-form-1"
        schema={countrySchema}
        onSubmit={handleFormSubmitdependent}
        loading={dependentformLoading}
        apiError={dependentformApiError}
      />
    </>
  );
}

`}
                </pre>
              </div>

              {/* ================= Schema Code ================= */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🧩 Schema Code
                </h4>

                <pre className="bg-black text-blue-400 text-sm p-4 rounded-xl overflow-x-auto">
                  {`export const countrySchema = {
  fields: {
    continent: {
      type: "select",
      label: "Continent",
      options: [
        { label: "Asia", value: "asia" },
        { label: "Europe", value: "europe" },
      ],
      rules: { required: true },
    },

    country: {
      type: "select",
      label: "Country",
      // 👇 NATIVE DEPENDENCY INJECTION
      dependsOn: "continent",
      getOptions: async (values) => {
        if (!values.continent) return [];

        try {
          // Fetch countries dynamically based on the continent chosen
          // Note: Backslashes added to \$ to keep it as text for the user
          const response = await fetch(\`https://restcountries.com/v3.1/region/\${values.continent}?fields=name\`);
          const data = await response.json();

          // Transform and sort data alphabetically
          return data
            .map((country) => ({
              label: country.name.common,
              value: country.name.common.toLowerCase().replace(/\\s+/g, ""), 
            }))
            .sort((a, b) => a.label.localeCompare(b.label));

        } catch (error) {
          console.error("Failed to fetch countries", error);
          return [];
        }
      },
      rules: { required: true },
    },

    state: {
      type: "select",
      label: "State",
      dependsOn: "country",
      getOptions: async (values) => {
        const map = {
          india: [
            { label: "Gujarat", value: "gujarat" },
            { label: "Maharashtra", value: "maharashtra" },
          ],
          uae: [
            { label: "Dubai", value: "dubai" },
            { label: "Abu Dhabi", value: "abudhabi" },
          ],
          germany: [
            { label: "Bavaria", value: "bavaria" },
            { label: "Berlin", value: "berlin" },
          ],
        };

        return map[values.country] || [];
      },
    },

    city: {
      type: "select",
      label: "City",
      dependsOn: "state",
      getOptions: async (values) => {
        const map = {
          gujarat: [
            { label: "Ahmedabad", value: "ahmedabad" },
            { label: "Rajkot", value: "rajkot" },
          ],
          maharashtra: [
            { label: "Mumbai", value: "mumbai" },
            { label: "Pune", value: "pune" },
          ],
        };

        return map[values.state] || [];
      },
      rules: { required: true },
    },

    area: {
      type: "select",
      label: "Area",
      dependsOn: "city",
      getOptions: async (values) => {
        if (values.city === "rajkot") {
          return [
            { label: "Kalavad Road", value: "kalavad" },
            { label: "Yagnik Road", value: "yagnik" },
          ];
        }
        return [];
      },
    },

    street: {
      type: "select",
      label: "Street",
      dependsOn: "area",
      getOptions: async (values) => {
        if (values.area === "kalavad") {
          return [
            { label: "Street 1", value: "s1" },
            { label: "Street 2", value: "s2" },
          ];
        }
        return [];
      },
    },
  },
};`}
                </pre>
              </div>
            </div>
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
