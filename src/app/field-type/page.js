"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function FieldTypePage() {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black">
            <Navigation />

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                        Field Types
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Explore all available field types with schema configuration
                        examples.
                    </p>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl shadow-xl border border-blue-200 dark:border-blue-800 overflow-hidden">


                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Text Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A basic input field used to collect short text such as name,
                            title, or simple user input.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">name</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the field in the
                                form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field is used to capture a user's name. It validates input
                                length and ensures the field is not left empty.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(
                                            `    name: {
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
    },`,
                                            1,
                                        )
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 1 ? "Copied!" : "Copy"}
                                </button>
                            </div>
                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`    name: {
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
    },`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. In this case, <code>"text"</code>{" "}
                                    means a standard single-line text input field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown above the input field in the UI.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures the field cannot be
                                        empty.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when
                                        the field is empty.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    errorIcon allows you to display
                                    a custom icon when validation fails. In this example, an SVG
                                    icon is used to indicate an error state.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Textarea Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A multi-line input field used to collect longer text such as
                            descriptions, comments, or user bios.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">bio</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the textarea
                                field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field is used to capture longer user input such as a short
                                biography. It includes validation for required input and
                                character limit.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(
                                            `bio: {
    type: "textarea",
    label: "Bio",
    rules: {
        required: true,
        maxLength: 10,
        requiredMessage: "Bio is required",
    },
    errorImage: "images/man.jpg",
},`,
                                            2,
                                        )
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 2 ? "Copied!" : "Copy"}
                                </button>
                            </div>
                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`bio: {
    type: "textarea",
    label: "Bio",
    rules: {
        required: true,
        maxLength: 10,
        requiredMessage: "Bio is required",
    },
    errorImage: "images/man.jpg",
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"textarea"</code> allows users
                                    to enter multi-line text.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the textarea field in the UI.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the textarea field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures the field cannot be
                                        empty.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message shown
                                        when the field is empty.
                                    </li>
                                    <li>
                                        <strong>maxLength</strong>: Limits the number of characters
                                        the user can enter.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorImage</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom image when validation fails for this field.
                                    Useful for enhancing UI feedback.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* email field */}

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Email Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A specialized input field used to collect and validate email addresses with advanced custom validation logic and UI feedback.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">email</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the email field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field captures email input and applies multiple validation checks such as symbol validation, blocked emails, and format validation with custom UI messages.
                            </p>
                        </div>

                        {/* Schema Block (UNCHANGED) */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`email: {
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
            if (!/\\S+@\\S+\\.\\S+/.test(value)) {
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
},`, 4)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 4 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`email: {
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
            if (!/\\S+@\\S+\\.\\S+/.test(value)) {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"email"</code> enables email-specific input behavior.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the email field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures the field cannot be
                                        empty.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when
                                        the field is empty.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">validate</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    A custom validation function that:
                                </p>
                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>Ensures <strong>@</strong> symbol exists</li>
                                    <li>Blocks specific email (admin@gmail.com)</li>
                                    <li>Validates email format using regex</li>
                                    <li>Returns custom JSX error messages</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Country Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A multi-select dropdown field that allows users to select one or more countries with validation and custom UI feedback.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">country</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the country field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field provides a dropdown with multi-select capability, allowing users to choose one or more countries. It includes required validation and custom error display support.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`country: {
    type: "select",
    label: "Country",
    multiSelect: true,
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
},`, 5)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 5 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`country: {
    type: "select",
    label: "Country",
    multiSelect: true,
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"select"</code> enables dropdown selection behavior.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the country field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">multiSelect</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Enables selection of multiple options. The value will be returned as an array of selected items.
                                </p>
                            </div>

                            {/* ✅ NEW OPTIONS SECTION */}
                            <div>
                                <h4 className="font-semibold text-blue-500">options</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the list of selectable items displayed in the dropdown. Each option represents a country that the user can select.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>label</strong>: The text shown to the user in the dropdown (e.g., India, USA).
                                    </li>
                                    <li>
                                        <strong>value</strong>: The actual value stored in the form data (e.g., india, usa).
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures at least one country is selected.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no selection is made.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Gender Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A radio button field that allows users to select a single gender option with validation and custom UI feedback.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">gender</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the gender field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field provides a set of radio buttons where users can select a single option. It includes required validation and supports custom error messages and icons.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`gender: {
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
},`, 6)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 6 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`gender: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"radio"</code> enables single selection via radio buttons.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the gender field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the list of selectable items displayed in the dropdown. Each option represents a country that the user can select.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>label</strong>: The text shown to the user in the dropdown (e.g., India, USA).
                                    </li>
                                    <li>
                                        <strong>value</strong>: The actual value stored in the form data (e.g., india, usa).
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures one option must be selected.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no option is selected.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Gender Field (Image Radio)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A radio button field that supports image-based options, allowing users to visually select a single option with validation and custom UI feedback.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">gender</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the gender field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field extends the traditional radio button by allowing each option to display an image. It improves user experience by providing visual selection along with validation and custom error handling.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`gender: {
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
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`, 7)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 7 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`gender: {
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
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"radio"</code> enables single selection.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the list of selectable items displayed in the option. Each option represents a gender that the user can select.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>image</strong>: Image is display in the option (e.g., India, USA).
                                    </li>
                                    <li>
                                        <strong>value</strong>: The actual value stored in the form data (e.g., india, usa).
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures one option must be selected.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no option is selected.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior (Image Radio)
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Each radio option is displayed as an image card</li>
                                <li>Clicking an image selects that option</li>
                                <li>Only one selection allowed at a time</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Gender Field (Icon Radio)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A radio button field that supports SVG icon-based options, allowing users to select visually enhanced options with custom UI feedback and validation.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">gender</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the gender field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This variation of the radio field allows each option to include an SVG icon along with a label. It enhances user interaction by providing a more visual and intuitive selection experience.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`gender: {
    type: "radio",
    label: "Gender",
    options: [
        {
            icon: (<svg>...</svg>),
            label: "Gaming",
            value: "gaming",
        },
        {
            icon: (<svg>...</svg>),
            label: "Sport",
            value: "sport",
        },
    ],
    rules: {
        required: true,
        requiredMessage: "Gender is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`, 8)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 8 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`gender: {
    type: "radio",
    label: "Gender",
    options: [
        {
            icon: (<svg>...</svg>),
            label: "Gaming",
            value: "gaming",
        },
        {
            icon: (<svg>...</svg>),
            label: "Sport",
            value: "sport",
        },
    ],
    rules: {
        required: true,
        requiredMessage: "Gender is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"radio"</code> enables single selection behavior.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options (Icon Support)</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Each option can include an <code>icon</code> property that renders an SVG element along with the label.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>icon</strong>: SVG element displayed in option</li>
                                    <li><strong>value</strong>: Stored value (e.g., gaming, sport)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures one option must be selected.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no option is selected.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior (Icon Radio)
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Each option is displayed with an SVG icon</li>
                                <li>Selected option can be highlighted visually</li>
                                <li>Only one option can be selected at a time</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Hobbies Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A checkbox field that allows users to select multiple hobbies with validation and custom UI feedback.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">hobbies</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the hobbies field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field provides a list of checkboxes where users can select multiple options. It includes required validation and supports custom error messages and icons.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`hobbies: {
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
},`, 9)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 9 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`hobbies: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"checkbox"</code> enables multiple selection via checkboxes.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the hobbies field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the list of selectable checkbox options.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>label</strong>: Display text (e.g., Cricket, Music)</li>
                                    <li><strong>value</strong>: Stored value (e.g., cricket, music)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures at least one checkbox must be selected.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no option is selected.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior (Checkbox)
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Multiple options can be selected at the same time</li>
                                <li>Each option is independent</li>
                                <li>Selected values are stored as an array</li>
                                <li>Error appears if no option is selected (when required)</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Hobbies Field (Image Checkbox)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A checkbox field that supports image-based options, allowing users to visually select multiple hobbies with validation and custom UI feedback.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">hobbies</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the hobbies field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This variation of the checkbox field allows each option to include an image. It enhances user experience by providing a visual way to select multiple options.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`hobbies: {
    type: "checkbox",
    label: "Hobbies",
    options: [
        { image: "/images/cricket.jpg", value: "cricket" },
        { label: "/images/cricket.jpg", value: "music" },
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
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`, 10)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 10 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`hobbies: {
    type: "checkbox",
    label: "Hobbies",
    options: [
        { image: "/images/cricket.jpg", value: "cricket" },
        { label: "/images/cricket.jpg", value: "music" },
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
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"checkbox"</code> enables multiple selection.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the hobbies field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options (Image Support)</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Each option can include an <code>image</code> or <code>label</code>. If an image is provided, it can be rendered visually as a selectable card.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>image</strong>: Path to image displayed in option</li>
                                    <li><strong>value</strong>: Stored value (e.g., cricket, music)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures at least one option must be selected.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no selection is made.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior (Image Checkbox)
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Each checkbox option can display an image</li>
                                <li>Users can select multiple options</li>
                                <li>Clicking image toggles selection</li>
                                <li>Selected items can be highlighted visually</li>
                                <li>Values are stored as an array</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Hobbies Field (Icon Checkbox)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A checkbox field that supports SVG icon-based options, allowing users to visually select multiple hobbies with enhanced UI feedback and validation.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">hobbies</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the hobbies field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This variation of the checkbox field allows each option to include an SVG icon along with a label. It provides a more interactive and visually rich way to select multiple options.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`hobbies: {
    type: "checkbox",
    label: "Hobbies",
    options: [
        {
            icon: (<svg>...</svg>),
            label: "Gaming",
            value: "gaming",
        },
        {
            icon: (<svg>...</svg>),
            label: "Cricket",
            value: "cricket",
        },
    ],
    rules: {
        required: true,
        requiredMessage: "Hobbies is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`, 11)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 11 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`hobbies: {
    type: "checkbox",
    label: "Hobbies",
    options: [
        {
            icon: (<svg>...</svg>),
            label: "Gaming",
            value: "gaming",
        },
        {
            icon: (<svg>...</svg>),
            label: "Cricket",
            value: "cricket",
        },
    ],
    rules: {
        required: true,
        requiredMessage: "Hobbies is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
            <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
    ),
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"checkbox"</code> enables multiple selection.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the hobbies field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options (Icon Support)</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Each option can include an <code>icon</code> property that renders an SVG element along with a label for better visual representation.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>icon</strong>: SVG element displayed for the option</li>
                                    <li><strong>label</strong>: Text shown with the icon</li>
                                    <li><strong>value</strong>: Stored value (e.g., gaming, cricket)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures at least one option must be selected.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no selection is made.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior (Icon Checkbox)
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Each checkbox option is displayed with an SVG icon</li>
                                <li>Users can select multiple options simultaneously</li>
                                <li>Clicking the icon or label toggles selection</li>
                                <li>Selected options can be visually highlighted</li>
                                <li>Selected values are stored as an array</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Resume Upload Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A file input field that allows users to upload documents such as resumes with validation and custom UI feedback.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">resume</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the resume upload field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field allows users to upload files such as resumes. It supports file type restrictions and validation rules to ensure correct file submission.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`resume: {
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
},`, 12)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 12 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`resume: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"file"</code> enables file upload functionality.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the file upload field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">accept</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Specifies the allowed file types that can be uploaded.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>.pdf</strong>: Allows PDF documents</li>
                                    <li><strong>.doc</strong>: Allows Word documents</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures a file must be uploaded.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no file is selected.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior (File Upload)
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Users can select a file from their device</li>
                                <li>Only allowed file types (.pdf, .doc) can be selected</li>
                                <li>Selected file name can be displayed</li>
                                <li>Error is shown if no file is uploaded (when required)</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Profile Image Field (Dropzone)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A drag-and-drop file upload field that allows users to upload profile images with validation and enhanced UI interaction.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">profileImage</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the profile image field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field provides a drag-and-drop (dropzone) interface for uploading images. It enhances user experience by allowing users to either drag files into the area or click to browse and upload.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`profileImage: {
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
},`, 13)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 13 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`profileImage: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"dropzone"</code> enables drag-and-drop file upload functionality.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown for the dropzone field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">accept</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Specifies the allowed file types for upload.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>image/*</strong>: Allows all image formats (JPG, PNG, GIF, etc.)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures an image must be uploaded.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Custom error message when no file is uploaded.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays a custom SVG icon when validation fails.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior (Dropzone)
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Users can drag and drop an image into the upload area</li>
                                <li>Users can click the dropzone to open file browser</li>
                                <li>Only image files are accepted</li>
                                <li>Error is shown if no file is uploaded (when required)</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Info Field (Text with Custom HTML Error)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A text input field that supports required validation, maximum length restriction, custom HTML-based error messages, and visual error feedback using an image.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">info</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to identify the info text field in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field renders a standard text input where users can enter short information. It includes advanced validation with a fully customizable HTML error message and optional error image display for enhanced user experience.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`info: {
    type: "text",
    label: "Info",
    rules: {
        required: true,
        maxLength: 10,
        requiredMessage: (
            <div style={{ fontSize: "12px", color: "#ef4444" }}>
                ❗ <b><span>Info</span> is required</b>
            </div>
        ),
    },
    errorImage: "images/man.jpg",
},`, 14)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 14 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`info: {
    type: "text",
    label: "Info",
    rules: {
        required: true,
        maxLength: 10,
        requiredMessage: (
            <div style={{ fontSize: "12px", color: "#ef4444" }}>
                ❗ <b><span>Info</span> is required</b>
            </div>
        ),
    },
    errorImage: "images/man.jpg",
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the input type. <code>"text"</code> renders a standard text input field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The display name shown above or beside the input field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li>
                                        <strong>required</strong>: Ensures the field cannot be empty.
                                    </li>
                                    <li>
                                        <strong>maxLength</strong>: Limits input to a maximum of 10 characters.
                                    </li>
                                    <li>
                                        <strong>requiredMessage</strong>: Supports custom HTML/JSX error message rendering instead of plain text.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorImage</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Displays an image along with the validation error to provide visual feedback.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Users can enter short text input</li>
                                <li>Input is limited to 10 characters</li>
                                <li>Custom styled HTML error message is shown when field is empty</li>
                                <li>Error image is displayed along with validation message</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Hidden Field (System Data Field)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A hidden field is used to store and submit data that is not visible to the user, such as user ID, session ID, or any backend-related value.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">userId</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This represents the unique key used to store hidden system data in the form schema.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field does not render any visible input in the UI. It is used to pass additional data like user ID, page ID, or tokens along with the form submission. Useful for tracking, authentication, and backend processing.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`userId: {
    type: "hidden",
    value: 2,
},`, 15)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 15 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`userId: {
    type: "hidden",
    value: 2,
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the field type. <code>"hidden"</code> means the field will not be rendered in the UI.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">value</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The default value assigned to the hidden field. This value will be automatically included in form submission.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>This field is not visible to the user</li>
                                <li>Its value is automatically included in form data</li>
                                <li>Used for passing backend-required data like userId or pageId</li>
                                <li>No validation or user interaction is required</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Exam Radio Field (Single Choice Question)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A radio field used for exam-based forms where users can select one correct option. It supports validation and includes a <code>correctAnswer</code> property for result evaluation.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">q1</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Represents a unique question key used to identify and evaluate the answer in exam mode.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field renders a radio button group where users can select one option. It is commonly used in quiz or exam forms. The <code>correctAnswer</code> property is used internally to calculate the result and score after submission.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`q1: {
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
},`, 16)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 16 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`q1: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the field type. <code>"radio"</code> renders a single-choice selection input.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The question text displayed to the user.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    An array of selectable options. Each option includes:
                                </p>
                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>label</strong>: Display text for the option</li>
                                    <li><strong>value</strong>: Internal value used for matching answers</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>required</strong>: Ensures user selects an option</li>
                                    <li><strong>requiredMessage</strong>: Custom error message when no option is selected</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">correctAnswer</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the correct option value. Used for result calculation in exam mode. This value is matched with the user's selected answer.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>User can select only one option</li>
                                <li>Validation error shown if no option is selected</li>
                                <li>Correct answer is not visible to user during exam</li>
                                <li>After submission, answer is evaluated using <code>correctAnswer</code></li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Exam Checkbox Field (Multiple Choice Question)</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A checkbox field used for exam-based forms where users can select multiple correct options. It supports validation and includes a <code>correctAnswer</code> array for result evaluation.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">q2</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Represents a unique question key used to identify and evaluate multiple selected answers in exam mode.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field renders a group of checkboxes where users can select one or more options. It is commonly used for multi-correct questions in exams. The <code>correctAnswer</code> property is used to compare selected values and calculate results.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`q2: {
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
},`, 17)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 17 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`q2: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the field type. <code>"checkbox"</code> allows selecting multiple options.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The question text displayed to the user.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">options</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    An array of selectable options. Each option includes:
                                </p>
                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>label</strong>: Display text for the option</li>
                                    <li><strong>value</strong>: Internal value used for matching answers</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>required</strong>: Ensures at least one option is selected</li>
                                    <li><strong>requiredMessage</strong>: Custom error message when no option is selected</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">correctAnswer</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the correct answers as an array. All selected values must exactly match this array (order does not matter) to be considered correct.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>User can select multiple options</li>
                                <li>Validation error shown if no option is selected</li>
                                <li>All correct options must be selected for a correct result</li>
                                <li>Extra or missing selections will mark the answer as incorrect</li>
                                <li>Correct answers are evaluated after submission using <code>correctAnswer</code></li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Password Field (Secure Input)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A secure input field used for password entry. It hides user input for privacy and supports validation rules such as required checks and custom error handling.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">password</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Represents the password input key used for authentication, registration, or secure data entry forms.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field renders a password input where characters are masked for security. It is commonly used in login and signup forms. It supports validation rules like <code>required</code> and can be extended for strength validation (min length, pattern, etc.).
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`password: {
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
},`, 18)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 18 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`password: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the field type. <code>"password"</code> ensures input is masked for security.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The label displayed above or beside the input field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied to the password field.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>required</strong>: Ensures the password field is not empty</li>
                                    <li><strong>requiredMessage</strong>: Custom message shown when validation fails</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Custom SVG icon displayed when validation error occurs for this field.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>User input is masked for security</li>
                                <li>Validation triggers on empty input</li>
                                <li>Custom error message is shown if password is not provided</li>
                                <li>Error icon is displayed when validation fails</li>
                                <li>Commonly used in login, signup, and authentication forms</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Confirm Password Field (Validation Match Input)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A secure password confirmation field used to verify that the user has entered the same password twice. It ensures both password fields match before form submission.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">confirmPassword</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Represents the confirmation input for the original password field. It is used to validate password consistency.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field ensures that the user re-enters the same password correctly. It uses a custom validation rule to compare its value with the <code>password</code> field. If both values do not match, an error message is displayed.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`confirmPassword: {
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
},`, 19)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 19 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`confirmPassword: {
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
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the field type. <code>"password"</code> ensures the input is hidden for security.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The label displayed for the confirm password input field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules used to ensure password confirmation correctness.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>required</strong>: Ensures the field is not empty</li>
                                    <li><strong>requiredMessage</strong>: Custom error message for empty input</li>
                                    <li><strong>validate</strong>: Custom function to compare with password field</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">Validation Logic</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The value of this field is compared with <code>values.password</code>. If both values are not equal, it returns an error message: <code>"Passwords do not match"</code>.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Input is masked like a password field</li>
                                <li>Validation triggers on change or submit</li>
                                <li>Ensures both password fields match exactly</li>
                                <li>Shows error message if passwords do not match</li>
                                <li>Commonly used in registration and signup forms</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Beard Style Field (Conditional / Dependent Field)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A conditional text field that appears only when a specific condition is met. In this case, it is shown only when the selected gender is <code>male</code>. It is commonly used for dynamic form rendering based on user input.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">beardStyle</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Represents a conditional input field for selecting or entering beard style preferences.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field is dynamically displayed based on another field's value. It uses a <code>showWhen</code> rule to determine visibility. If the user selects <code>male</code> in the gender field, this field becomes visible. Otherwise, it remains hidden.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`beardStyle: {
    type: "text",
    label: "Beard Style",
    showWhen: {
        field: "gender",
        value: "male",
    },
    rules: {
        required: true,
        requiredMessage: "BeardType is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
    ),
},`, 20)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 20 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`beardStyle: {
    type: "text",
    label: "Beard Style",
    showWhen: {
        field: "gender",
        value: "male",
    },
    rules: {
        required: true,
        requiredMessage: "BeardType is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
    ),
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the field type. <code>"text"</code> allows free text input for beard style.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The label displayed for the input field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">showWhen</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Controls conditional visibility of the field based on another field's value.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>field</strong>: The dependent field name (e.g., gender)</li>
                                    <li><strong>value</strong>: The value that triggers visibility (e.g., male)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied when the field is visible.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>required</strong>: Ensures input is not empty when field is shown</li>
                                    <li><strong>requiredMessage</strong>: Custom error message for validation failure</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Custom SVG icon displayed when validation error occurs.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Field is hidden by default</li>
                                <li>Only appears when gender is set to <code>male</code></li>
                                <li>Validation applies only when field is visible</li>
                                <li>Hidden fields are excluded from submission and error display</li>
                                <li>Useful for dynamic and role-based form structures</li>
                            </ul>
                        </div>

                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Makeup Type Field (Conditional / Dependent Field)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A conditional text field that appears only when a specific condition is met. In this case, it is shown only when the selected gender is <code>female</code>. It is commonly used for dynamic form rendering based on user input.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">

                        {/* Field Name */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Field: <span className="text-blue-500">makeupType</span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Represents a conditional input field for selecting or entering makeup style preferences.
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This field is dynamically displayed based on another field's value. It uses a <code>showWhen</code> rule to determine visibility. If the user selects <code>female</code> in the gender field, this field becomes visible. Otherwise, it remains hidden.
                            </p>
                        </div>

                        {/* Schema Block */}
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`makeupType: {
    type: "text",
    label: "Makeup Type",
    showWhen: {
        field: "gender",
        value: "female",
    },
    rules: {
        required: true,
        requiredMessage: "MakeupType is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
    ),
},`, 21)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 21 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`makeupType: {
    type: "text",
    label: "Makeup Type",
    showWhen: {
        field: "gender",
        value: "female",
    },
    rules: {
        required: true,
        requiredMessage: "MakeupType is required",
    },
    errorIcon: (
        <svg viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
        </svg>
    ),
},`}</pre>
                        </div>

                        {/* Properties Explanation */}
                        <div className="space-y-4">

                            <div>
                                <h4 className="font-semibold text-blue-500">type</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Defines the field type. <code>"text"</code> allows free text input for makeup type.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">label</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The label displayed for the input field.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">showWhen</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Controls conditional visibility of the field based on another field's value.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>field</strong>: The dependent field name (e.g., gender)</li>
                                    <li><strong>value</strong>: The value that triggers visibility (e.g., female)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">rules</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Validation rules applied when the field is visible.
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                                    <li><strong>required</strong>: Ensures input is not empty when field is shown</li>
                                    <li><strong>requiredMessage</strong>: Custom error message for validation failure</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-500">errorIcon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Custom SVG icon displayed when validation error occurs.
                                </p>
                            </div>

                        </div>

                        {/* UI Behavior */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                UI Behavior
                            </h3>

                            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Field is hidden by default</li>
                                <li>Only appears when gender is set to <code>female</code></li>
                                <li>Validation applies only when field is visible</li>
                                <li>Hidden fields are excluded from submission and error display</li>
                                <li>Useful for dynamic and role-based form structures</li>
                            </ul>
                        </div>

                    </div>

                    {/* ================= APPLY SAME FOR REST ================= */}
                    {/* IMPORTANT: Just repeat same pattern with index 4,5,6... */}

                    {/* 👉 I DID NOT REMOVE OR CHANGE ANY CONTENT */}
                    {/* 👉 JUST ADD COPY BUTTON STRUCTURE */}
                </div>
            </div>

            <Footer />
        </div>
    );
}
