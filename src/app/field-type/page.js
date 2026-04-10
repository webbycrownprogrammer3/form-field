// "use client";
// import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";

// export default function FieldTypePage() {
//     const textFieldSchema = {
//         name: {
//             type: "text",
//             label: "Name",
//             placeholder: "Enter your name",
//             rules: {
//                 required: true,
//                 requiredMessage: "Name is required",
//                 minLength: 3,
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black">
//             <Navigation />

//             <div className="max-w-6xl mx-auto px-4 py-12">
//                 {/* Page Header */}
//                 <div className="mb-12 text-center">
//                     <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
//                         Field Types
//                     </h1>
//                     <p className="text-gray-600 dark:text-gray-400 text-lg">
//                         Explore all available field types with schema configuration
//                         examples.
//                     </p>
//                 </div>

//                 {/* TEXT FIELD CARD */}
//                 <div className="bg-white dark:bg-black rounded-2xl shadow-xl border border-blue-200 dark:border-blue-800 overflow-hidden">
//                     {/* Header */}
//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             Text Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A basic input field used to collect short text such as name,
//                             title, or simple user input. Supports validation rules like
//                             required and minimum length.
//                         </p>
//                     </div>

//                     {/* Code Block */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
//                             {/* Code Header */}
//                             <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 <span>schema.js</span>
//                                 <button className="text-blue-400 hover:text-blue-300">
//                                     Copy
//                                 </button>
//                             </div>

//                             {/* Code */}
//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {` name: {
//             type: "text",
//             label: "Name",
//             rules: {
//                 required: true,
//                 requiredMessage: "Name is required",
//             },
//              errorIcon: (
//                  <svg viewBox="0 0 24 24">
//                      <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//                  </svg>
//              ),
//         },`}
//                             </pre>
//                         </div>
//                     </div>

//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             Textarea Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A multi-line input field used to collect longer text such as
//                             descriptions, comments, or messages. Ideal for capturing detailed
//                             user input and supports validation rules like required, minimum
//                             length, and maximum length.
//                         </p>
//                     </div>

//                     {/* Code Block */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
//                             {/* Code Header */}
//                             <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 <span>schema.js</span>
//                                 <button className="text-blue-400 hover:text-blue-300">
//                                     Copy
//                                 </button>
//                             </div>

//                             {/* Code */}
//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`bio: {
//             type: "textarea",
//             label: "Bio",
//             rules: {
//                 required: true,
//                 maxLength: 10,
//             },
//             errorIcon: (
//                 <svg viewBox="0 0 24 24">
//                     <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//                 </svg>
//             ),
//         },`}
//                             </pre>
//                         </div>
//                     </div>

//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             Email Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A specialized input field designed to collect valid email
//                             addresses. It ensures proper email format validation (e.g.,
//                             user@example.com) and supports custom validation rules such as
//                             required, pattern matching, and restricted emails.
//                         </p>
//                     </div>

//                     {/* Code Block */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
//                             {/* Code Header */}
//                             <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 <span>schema.js</span>
//                                 <button className="text-blue-400 hover:text-blue-300">
//                                     Copy
//                                 </button>
//                             </div>

//                             {/* Code */}
//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`email: {
//   type: "email",
//   label: "Email",
//   placeholder: "Enter your email",
//   rules: {
//     required: true,
//     validate: (value) => {
//       if (!value) return true;

//       if (!value.includes("@")) {
//         return "Email must contain @ symbol";
//       }

//       if (value === "admin@gmail.com") {
//         return (
//           <div style={{ fontSize: "12px", color: "#ef4444" }}>
//             <span style={{ fontWeight: 600 }}>{value}</span> is not available and not safe
//           </div>
//         );
//       }

//       if (!/\\S+@\\S+\\.\\S+/.test(value)) {
//         return "Invalid email format";
//       }

//       return true;
//     },
//   },
// }`}
//                             </pre>
//                         </div>
//                     </div>

//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             Select Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A dropdown field used to select a single option from a predefined list.
//                             Ideal for selecting values like country, category, or type. Supports validation
//                             rules and custom error handling.
//                         </p>
//                     </div>

//                     {/* Code Block */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">

//                             {/* Code Header */}
//                             <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 <span>schema.js</span>
//                                 <button className="text-blue-400 hover:text-blue-300">
//                                     Copy
//                                 </button>
//                             </div>

//                             {/* Code */}
//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`country: {
//   type: "select",
//   label: "Country",
//   options: [
//     { label: "India", value: "india" },
//     { label: "USA", value: "usa" },
//     { label: "Canada", value: "canada" },
//   ],
//   rules: {
//     required: true,
//     requiredMessage: "Please select a country",
//   },
//   errorIcon: (
//     <svg viewBox="0 0 24 24">
//       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//     </svg>
//   ),
// }`}
//                             </pre>

//                         </div>
//                     </div>

//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             MultiSelect Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A dropdown field used to select a MultiSelect option from a predefined list.
//                             Ideal for selecting values like category or type. Supports validation
//                             rules and custom error handling.
//                         </p>
//                     </div>

//                     {/* Code Block */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">

//                             {/* Code Header */}
//                             <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 <span>schema.js</span>
//                                 <button className="text-blue-400 hover:text-blue-300">
//                                     Copy
//                                 </button>
//                             </div>

//                             {/* Code */}
//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`country: {
//   type: "select",
//   label: "Country",
//   multiSelect: true,
//   options: [
//     { label: "India", value: "india" },
//     { label: "USA", value: "usa" },
//     { label: "Canada", value: "canada" },
//   ],
//   rules: {
//     required: true,
//     requiredMessage: "Please select a country",
//   },
//   errorIcon: (
//     <svg viewBox="0 0 24 24">
//       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//     </svg>
//   ),
// }`}
//                             </pre>

//                         </div>
//                     </div>

//                     {/* Header */}
//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             Radio Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A radio field allows users to select a single option from a list of choices.
//                             Commonly used for selecting gender, type, or preferences. Supports validation rules,
//                             custom error messages, and also allows displaying options with images or SVG icons.
//                         </p>
//                     </div>

//                     {/* Code Block */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">

//                             {/* Code Header */}
//                             <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 <span>schema.js</span>
//                                 <button className="text-blue-400 hover:text-blue-300">
//                                     Copy
//                                 </button>
//                             </div>

//                             {/* Code */}
//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`gender: {
//   type: "radio",
//   label: "Gender",
//   options: [
//     { label: "Male", value: "male" },
//     { label: "Female", value: "female" },
//   ],
//   rules: {
//     required: true,
//     requiredMessage: "Gender is required",
//   },
//   errorIcon: (
//     <svg viewBox="0 0 24 24">
//       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//     </svg>
//   ),
// }`}
//                             </pre>

//                         </div>
//                     </div>

//                     {/* Header */}
//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             Checkbox Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A checkbox field allows users to select multiple options from a list.
//                             Commonly used for hobbies, interests, or preferences. Supports validation,
//                             custom error messages, and can display options using labels, images, or SVG icons.
//                         </p>
//                     </div>

//                     {/* Code */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
//                             <div className="px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 schema.js
//                             </div>

//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`hobbies: {
//   type: "checkbox",
//   label: "Hobbies",
//   options: [
//     { label: "Cricket", value: "cricket" },
//     { label: "Music", value: "music" },
//   ],
//   rules: {
//     required: true,
//     requiredMessage: "Hobbies is required",
//   },
//   errorIcon: (
//     <svg viewBox="0 0 24 24">
//       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//     </svg>
//   ),
// }`}
//                             </pre>
//                         </div>
//                     </div>

//                     {/* Header */}
//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             File Upload Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A file input field used to upload documents such as resumes, PDFs, or other files.
//                             Supports file type restrictions using the <code>accept</code> property and validation
//                             rules like required fields.
//                         </p>
//                     </div>

//                     {/* Code */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
//                             <div className="px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 schema.js
//                             </div>

//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`resume: {
//   type: "file",
//   label: "Upload Resume",
//   accept: ".pdf,.doc",
//   rules: {
//     required: true,
//     requiredMessage: "File is required",
//   },
//   errorIcon: (
//     <svg viewBox="0 0 24 24">
//       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//     </svg>
//   ),
// }`}
//                             </pre>
//                         </div>
//                     </div>

//                     {/* Header */}
//                     <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//                             Dropzone Field
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             A drag-and-drop file upload field designed for better user experience.
//                             Users can either drag and drop files or click to upload. Commonly used
//                             for uploading images or large files with validation support.
//                         </p>
//                     </div>

//                     {/* Code */}
//                     <div className="p-6">
//                         <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
//                             <div className="px-4 py-2 bg-gray-800 text-gray-300 text-xs">
//                                 schema.js
//                             </div>

//                             <pre className="p-4 text-green-400 text-sm overflow-x-auto">
//                                 {`profileImage: {
//   type: "dropzone",
//   label: "Upload Profile Image",
//   accept: "image/*",
//   rules: {
//     required: true,
//     requiredMessage: "Profile is required",
//   },
//   errorIcon: (
//     <svg viewBox="0 0 24 24">
//       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
//     </svg>
//   ),
// }`}
//                             </pre>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }

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
                    {/* Helper for copy button */}
                    {/*
                        usage:
                        onClick={() => handleCopy(`code`, index)}
                        {copiedIndex === index ? "Copied!" : "Copy"}
                    */}

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
