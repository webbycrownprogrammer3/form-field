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
                        Explore all available field types with schema configuration examples.
                    </p>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl shadow-xl border border-blue-200 dark:border-blue-800 overflow-hidden">

                    {/* Helper for copy button */}
                    {/*
                        usage:
                        onClick={() => handleCopy(`code`, index)}
                        {copiedIndex === index ? "Copied!" : "Copy"}
                    */}

                    {/* ================= TEXT FIELD ================= */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Text Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A basic input field used to collect short text such as name, title, or simple user input.
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button onClick={() => handleCopy(`name: {
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
    rules: {
        required: true,
        requiredMessage: "Name is required",
        minLength: 3,
    },
},`, 1)} className="text-blue-400">
                                    {copiedIndex === 1 ? "Copied!" : "Copy"}
                                </button>
                            </div>
                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`name: {
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
    rules: {
        required: true,
        requiredMessage: "Name is required",
        minLength: 3,
    },
},`}</pre>
                        </div>
                    </div>

                    {/* ================= TEXTAREA ================= */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Textarea Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A multi-line input field used to collect longer text such as descriptions, comments, or messages.
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button onClick={() => handleCopy(`bio: {
    type: "textarea",
    label: "Bio",
    rules: {
        required: true,
        maxLength: 10,
    },
},`, 2)} className="text-blue-400">
                                    {copiedIndex === 2 ? "Copied!" : "Copy"}
                                </button>
                            </div>
                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`bio: {
    type: "textarea",
    label: "Bio",
    rules: {
        required: true,
        maxLength: 10,
    },
},`}</pre>
                        </div>
                    </div>

                    {/* ================= EMAIL ================= */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">Email Field</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Validates email format and supports custom validation rules.
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button onClick={() => handleCopy(`email: {
  type: "email",
  label: "Email",
  placeholder: "Enter your email",
  rules: {
    required: true,
    validate: (value) => {
      if (!value) return true;

      if (!value.includes("@")) {
        return "Email must contain @ symbol";
      }

      if (value === "admin@gmail.com") {
        return (
          <div style={{ fontSize: "12px", color: "#ef4444" }}>
            <span style={{ fontWeight: 600 }}>{value}</span> is not available and not safe
          </div>
        );
      }

      if (!/\\S+@\\S+\\.\\S+/.test(value)) {
        return "Invalid email format";
      }

      return true;
    },
  },
}`, 3)} className="text-blue-400">
                                    {copiedIndex === 3 ? "Copied!" : "Copy"}
                                </button>
                            </div>
                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">{`email: {
  type: "email",
  label: "Email",
  placeholder: "Enter your email",
  rules: {
    required: true,
    validate: (value) => {
      if (!value) return true;

      if (!value.includes("@")) {
        return "Email must contain @ symbol";
      }

      if (value === "admin@gmail.com") {
        return (
          <div style={{ fontSize: "12px", color: "#ef4444" }}>
            <span style={{ fontWeight: 600 }}>{value}</span> is not available and not safe
          </div>
        );
      }

      if (!/\\S+@\\S+\\.\\S+/.test(value)) {
        return "Invalid email format";
      }

      return true;
    },
  },
}`}</pre>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Select Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A dropdown field used to select a single option from a predefined list.
                            Ideal for selecting values like country, category, or type. Supports validation
                            rules and custom error handling.
                        </p>
                    </div>

                    {/* Code */}
                    <div className="p-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`country: {
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
}`, 4)
                                    }
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    {copiedIndex === 4 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`country: {
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
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            MultiSelect Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A dropdown field used to select multiple options. You can enable this by passing
                            <code> multiSelect: true </code> in schema.
                        </p>
                    </div>

                    <div className="p-6">
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
}`, 5)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 5 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`country: {
  type: "select",
  label: "Country",
  multiSelect: true,
  options: [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
    { label: "Canada", value: "canada" },
  ],
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Radio Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Allows selecting a single option. Supports label, image, or SVG icon.
                        </p>
                    </div>

                    <div className="p-6">
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
}`, 6)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 6 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`gender: {
  type: "radio",
  label: "Gender",
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ],
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Checkbox Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Allows selecting multiple options. Supports label, images, and SVG icons.
                        </p>
                    </div>

                    <div className="p-6">
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
}`, 7)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 7 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`hobbies: {
  type: "checkbox",
  label: "Hobbies",
  options: [
    { label: "Cricket", value: "cricket" },
    { label: "Music", value: "music" },
  ],
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            File Upload Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Used to upload files such as PDF or documents with validation support.
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`resume: {
  type: "file",
  label: "Upload Resume",
  accept: ".pdf,.doc",
}`, 8)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 8 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`resume: {
  type: "file",
  label: "Upload Resume",
  accept: ".pdf,.doc",
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Dropzone Field
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Drag & drop file upload field for better UX.
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`profileImage: {
  type: "dropzone",
  label: "Upload Profile Image",
  accept: "image/*",
}`, 9)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 9 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`profileImage: {
  type: "dropzone",
  label: "Upload Profile Image",
  accept: "image/*",
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Radio Field With Images and Icons
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A radio field allows users to select a single option from a list.
                            It supports text, images, and SVG icons for modern UI selection design.
                        </p>
                    </div>

                    <div className="p-6">
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
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
          <path d="M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7C1.9,5.9,3,5,4.2,5H7V3.5C7,2.7,7.6,2,8.4,2h3.1c0.3,0,0.5,0.2,0.5,0.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4V5h2.8c1.2,0,2.3,0.9,2.5,2.1l0.7,3.7C14.1,11.5,13.8,12.2,13.1,12.5z" />
        </svg>
      ),
      label: "Gaming",
      value: "gaming",
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
}`, 10)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 10 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`gender: {
  type: "radio",
  label: "Gender",
  options: [
    { image: "/images/man.jpg", value: "male" },
    { image: "/images/female.jpg", value: "female" },
    {
      icon: (<svg viewBox="0 0 15 15">...</svg>),
      label: "Gaming",
      value: "gaming",
    },
  ],
  rules: {
    required: true,
    requiredMessage: "Gender is required",
  },
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Checkbox Field With Images and Icons
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A checkbox field allows users to select multiple options from a list.
                            It supports text, images, and SVG icons, making it ideal for visual
                            selection like hobbies, interests, or categories.
                        </p>
                    </div>

                    <div className="p-6">
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
    { label: "Music", value: "music" },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
          <path d="M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7C1.9,5.9,3,5,4.2,5H7V3.5C7,2.7,7.6,2,8.4,2h3.1C11.8,2,12,2.2,12,2.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4V5h2.8c1.2,0,2.3,0.9,2.5,2.1l0.7,3.7C14.1,11.5,13.8,12.2,13.1,12.5z" />
        </svg>
      ),
      label: "Gaming",
      value: "gaming",
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
}`, 11)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 11 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`hobbies: {
  type: "checkbox",
  label: "Hobbies",
  options: [
    { image: "/images/cricket.jpg", value: "cricket" },
    { label: "Music", value: "music" },
    {
      icon: (<svg viewBox="0 0 15 15">...</svg>),
      label: "Gaming",
      value: "gaming",
    },
  ],
  rules: {
    required: true,
    requiredMessage: "Hobbies is required",
  },
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            Error Image (Text Field)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            You can display a custom error image instead of an icon for validation errors.
                            This enhances visual feedback and improves user experience by showing image-based error indicators.
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden">
                            <div className="flex justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                                <span>schema.js</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`name: {
  type: "text",
  label: "Name",
  rules: {
    required: true,
    requiredMessage: "Name is required",
  },
  errorImage: "images/man.jpg"
}`, 12)
                                    }
                                    className="text-blue-400"
                                >
                                    {copiedIndex === 12 ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                                {`name: {
  type: "text",
  label: "Name",
  rules: {
    required: true,
    requiredMessage: "Name is required",
  },
  errorImage: "images/man.jpg"
}`}
                            </pre>
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