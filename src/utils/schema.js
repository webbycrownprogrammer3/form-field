export const stepSchema = {
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
};

export const stepSchemaTwo = {
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
};

export const stepSchemaThree = {
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
};

export const formSchema = {
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
                    value !== "admin" || (
                        <div style={{ color: "red", fontSize: "12px" }}>
                            <span style={{ color: "orange", fontWeight: "1200" }}>Admin</span> is not allowed
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
};

export const formSchemaTwo = {
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
};

export const formSchemaThree = {
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
};

