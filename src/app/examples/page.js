"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Form, StepForm } from "field-validation";
import {
  formSchema,
  formSchemaThree,
  formSchemaTwo,
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
