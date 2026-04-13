"use client";

import React, { useState } from "react";
import { examSchema } from "@/utils/schema";
import { Form, StepForm } from "field-validation";


export default function Page() {
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
                }, 1500)
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
                }, 1500)
            );
        } catch (err) {
            setStepApiError(err.message);
        } finally {
            setStepLoading(false);
        }
    };

    return (
        <div style={{ padding: "200px" }}>
            <h1>Form Test</h1>

            {/* ✅ Normal Form */}
            <StepForm
                key="step-form-1"
                schema={examSchema}
                onSubmit={handleStepSubmit}
                loading={stepLoading}
                apiError={stepApiError}
                percentageResult={true}
            />
        </div>
    );
}

