// "use client";

// import React from "react";
// import { Form, StepForm } from "field-validation";
// import { formSchema, stepSchema } from "@/utils/schema";

// export default function Page() {
//   const handleSubmit = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <div style={{ padding: "200px" }}>
//       <h1>Form Test</h1>

//       <Form
//         schema={formSchema}
//         onSubmit={handleSubmit}
//       />
//       <StepForm
//         schema={stepSchema}
//         onSubmit={(data) => console.log("Step Data:", data)}
//         // apiError="Server down"
//       />
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { Form, StepForm } from "field-validation";
import { formSchema, stepSchema } from "@/utils/schema";

export default function Page() {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ normal form submit
  const handleSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // ✅ step form submit (simulate API)
  // const handleStepSubmit = async (data) => {
  //   console.log("Step Data:", data);
  //   setLoading(true);

  //   setApiError(null); // reset first

  //   try {
  //     // 🔥 simulate API call
  //     await new Promise((resolve, reject) =>
  //       setTimeout(() => {
  //         reject(new Error("Server not working")); // ❌ simulate error
  //       }, 1500)
  //     );

  //     // ✅ success case (if needed)
  //     // setApiError(null);
  //   } catch (err) {
  //     setApiError(err.message);
  //     setLoading(false);
  //   }
  // };

  const handleStepSubmit = async (data) => {
    console.log("Step Data:", data);

    setLoading(true);
    setApiError(null);

    try {
      // ✅ simulate SUCCESS API
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(); // ✅ success
        }, 1500),
      );

      // ✅ set success data
      // setSubmittedData(data);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "200px" }}>
      <h1>Form Test</h1>

      {/* ✅ Normal Form */}
      <Form schema={formSchema} onSubmit={handleSubmit} />

      {/* ✅ Step Form */}
      <StepForm
        schema={stepSchema}
        onSubmit={handleStepSubmit}
        loading={loading}
        apiError={apiError} // 🔥 dynamic
        // type={"layoutThree"}
      />
    </div>
  );
}
