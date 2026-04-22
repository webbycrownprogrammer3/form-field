export const stepSchema = {
  navigation: {
    nextLabel: "Continue →",
    prevLabel: "← Back",

    onNext: ({ values, step, allValues }) => {
      console.log("➡️ NEXT CLICKED", step, values);
      console.log("Current Step Values:", values);     // ✅ only current step
      console.log("Full Form Values:", allValues);     // ✅ full data

      // 🔥 Check empty fields
      const hasEmpty = Object.values(values).some(
        (val) =>
          val === "" ||
          val === null ||
          val === undefined ||
          (Array.isArray(val) && val.length === 0)
      );

      if (hasEmpty) {
        return {
          next: false,
          error: "Please fill all fields before continuing 🚫",
        };
      }

      return { next: true };
    },

    onPrev: ({ values, step }) => {
      console.log("⬅️ PREVIOUS CLICKED", step, values);

      const hasEmpty = Object.values(values).some(
        (val) =>
          val === "" ||
          val === null ||
          val === undefined ||
          (Array.isArray(val) && val.length === 0)
      );

      if (hasEmpty) {
        return {
          prev: false,
          error: "Complete this step before going back ⚠️",
        };
      }

      return { prev: true };
    },
  },

  steps: [
    // ✅ Step 1: Basic Info
    {
      title: "Basic Info",
      fields: {
        name: {
          type: "text",
          label: "Name",
          // rules: {
          //   required: true,
          //   requiredMessage: "Name is required",
          // },
          // errorIcon: (
          //     <svg viewBox="0 0 24 24">
          //         <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
          //     </svg>
          // ),
          errorImage: "images/man.jpg",
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

        beardStyle: {
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
        },

        makeupType: {
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

  navigation: {
    nextLabel: "Continue →",
    prevLabel: "← Back",

    onNext: () => {
      return {
        error: "Next is blocked by user 🚫",
        next: false
      }
    },

    onPrev: () => {
      return {
        error: "Previous is blocked by user 🚫",
        prev: false
      };
    },
  },
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
  navigation: {
    nextLabel: "Continue →",
    prevLabel: "← Back",

    onNext: () => {
      return {
        error: "Next Is BLocked",
        next: true
      }
    },

    onPrev: () => {
      return {
        error: "Previous is blocked by user 🚫",
        prev: false
      };
    },
  },
  steps: [
    // ✅ Step 1: Basic Info
    {
      title: "Basic Info",
      fields: {
        name: {
          type: "text",
          label: "Name",
          // rules: {
          //   required: true,
          //   requiredMessage: "Name is required",
          // },
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

    personalInfo: {
      type: "group",
      label: "Personal Information",
      description: "Enter your basic personal details",
      grid: 2,

      fields: {
        name: {
          type: "text",
          label: "Full Name",
          rules: {
            required: true,
            requiredMessage: "Name is required",
          },
        },

        username: {
          type: "text",
          label: "Username",
          rules: {
            required: true,
            minLength: 3,
          },
        },

        email: {
          type: "email",
          label: "Email",
          rules: {
            required: true,
            email: true,
          },
        },

        phone: {
          type: "text",
          label: "Phone Number",
          rules: {
            required: true,
            pattern: /^[0-9]{10}$/,
            patternMessage: "Phone must be 10 digits",
          },
        },
      },
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
          <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
          <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
        </svg>
      ),
    },

    gender: {
      type: "radio",
      label: "Gender",
      options: [
        { image: "/images/man.jpg", value: "male" },
        { image: "/images/female.jpg", value: "female" },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              version="1.1"
              id="gaming"
            >
              <path
                d="M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12l0,0c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7l0,0&#10;&#9;C1.9,5.9,3,5,4.2,5v0H7V3.5C7,2.7,7.6,2,8.4,2h3.1C11.8,2,12,2.2,12,2.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4c0,0,0,0.1,0,0.1V5h2.8&#10;&#9;v0c1.2,0,2.3,0.9,2.5,2.1l0,0l0.7,3.7l0,0C14.1,11.5,13.8,12.2,13.1,12.5z M6,7.5C6,6.7,5.3,6,4.5,6S3,6.7,3,7.5S3.7,9,4.5,9&#10;&#9;S6,8.3,6,7.5z M12,7.5C12,7.2,11.8,7,11.5,7H11V6.5C11,6.2,10.8,6,10.5,6S10,6.2,10,6.5V7H9.5C9.2,7,9,7.2,9,7.5S9.2,8,9.5,8H10v0.5&#10;&#9;C10,8.8,10.2,9,10.5,9S11,8.8,11,8.5V8h0.5C11.8,8,12,7.8,12,7.5z"
              />
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
    },

    hobbies: {
      type: "checkbox",
      label: "Hobbies",
      options: [
        // { label: "Cricket", value: "cricket" },
        { image: "/images/cricket.jpg", value: "cricket" },
        { label: "Music", value: "music" },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              version="1.1"
              id="gaming"
            >
              <path
                d="M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12l0,0c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7l0,0&#10;&#9;C1.9,5.9,3,5,4.2,5v0H7V3.5C7,2.7,7.6,2,8.4,2h3.1C11.8,2,12,2.2,12,2.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4c0,0,0,0.1,0,0.1V5h2.8&#10;&#9;v0c1.2,0,2.3,0.9,2.5,2.1l0,0l0.7,3.7l0,0C14.1,11.5,13.8,12.2,13.1,12.5z M6,7.5C6,6.7,5.3,6,4.5,6S3,6.7,3,7.5S3.7,9,4.5,9&#10;&#9;S6,8.3,6,7.5z M12,7.5C12,7.2,11.8,7,11.5,7H11V6.5C11,6.2,10.8,6,10.5,6S10,6.2,10,6.5V7H9.5C9.2,7,9,7.2,9,7.5S9.2,8,9.5,8H10v0.5&#10;&#9;C10,8.8,10.2,9,10.5,9S11,8.8,11,8.5V8h0.5C11.8,8,12,7.8,12,7.5z"
              />
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
    },
  },
};

export const examSchema = {
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
};

// export const countrySchema = {
//   fields: {
//     // =========================
//     // 🌍 COUNTRY
//     // =========================

//     personalInfo: {
//       type: "group",
//       label: "Contact Information",
//       description: "Enter your basic Conatct details",
//       grid: 1,

//       fields: {
//         // =========================
//         // 🌍 COUNTRY
//         // =========================
//         country: {
//           type: "select",
//           label: "Country",
//           tooltip: "Country Is required.",
//           description: "This will be used on your official documents",
//           options: [
//             { label: "India", value: "india" },
//             { label: "USA", value: "usa" },
//             { label: "UAE", value: "uae" },
//           ],
//           rules: {
//             required: true,
//             requiredMessage: "Country is required",
//           },
//         },

//         // =========================
//         // 🏙️ STATE (INDIA)
//         // =========================
//         stateIndia: {
//           type: "select",
//           label: "State",
//           showWhen: { field: "country", value: "india" },
//           options: [
//             { label: "Gujarat", value: "gujarat" },
//             { label: "Maharashtra", value: "maharashtra" },
//           ],
//           rules: {
//             required: true,
//             requiredMessage: "State is required",
//           },
//         },

//         // =========================
//         // 🏙️ STATE (USA)
//         // =========================
//         stateUSA: {
//           type: "select",
//           label: "State",
//           showWhen: { field: "country", value: "usa" },
//           options: [
//             { label: "California", value: "california" },
//             { label: "Texas", value: "texas" },
//           ],
//           rules: {
//             required: true,
//             requiredMessage: "State is required",
//           },
//         },

//         // =========================
//         // 🏙️ STATE (UAE)
//         // =========================
//         stateUAE: {
//           type: "select",
//           label: "State",
//           showWhen: { field: "country", value: "uae" },
//           options: [
//             { label: "Dubai", value: "dubai" },
//             { label: "Abu Dhabi", value: "abudhabi" },
//           ],
//           rules: {
//             required: true,
//             requiredMessage: "State is required",
//           },
//         },

//         // =========================
//         // 🏙️ CITY (INDIA)
//         // =========================
//         cityGujarat: {
//           type: "select",
//           label: "City",
//           showWhen: { field: "stateIndia", value: "gujarat" },
//           options: [
//             { label: "Ahmedabad", value: "ahmedabad" },
//             { label: "Rajkot", value: "rajkot" },
//           ],
//           rules: {
//             required: true,
//             requiredMessage: "City is required",
//           },
//         },

//         cityMaharashtra: {
//           type: "select",
//           label: "City",
//           showWhen: { field: "stateIndia", value: "maharashtra" },
//           options: [
//             { label: "Mumbai", value: "mumbai" },
//             { label: "Pune", value: "pune" },
//           ],
//         },

//         // =========================
//         // 🏙️ CITY (USA)
//         // =========================
//         cityCalifornia: {
//           type: "select",
//           label: "City",
//           showWhen: { field: "stateUSA", value: "california" },
//           options: [
//             { label: "Los Angeles", value: "la" },
//             { label: "San Francisco", value: "sf" },
//           ],
//         },

//         cityTexas: {
//           type: "select",
//           label: "City",
//           showWhen: { field: "stateUSA", value: "texas" },
//           options: [
//             { label: "Houston", value: "houston" },
//             { label: "Dallas", value: "dallas" },
//           ],
//         },

//         // =========================
//         // 🏙️ CITY (UAE)
//         // =========================
//         cityDubai: {
//           type: "select",
//           label: "City",
//           showWhen: { field: "stateUAE", value: "dubai" },
//           options: [
//             { label: "Dubai City", value: "dubai_city" },
//           ],
//         },

//         cityAbuDhabi: {
//           type: "select",
//           label: "City",
//           showWhen: { field: "stateUAE", value: "abudhabi" },
//           options: [
//             { label: "Abu Dhabi City", value: "abudhabi_city" },
//           ],
//         },

//         // =========================
//         // 📍 AREA (INDIA - GUJARAT)
//         // =========================
//         areaAhmedabad: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityGujarat", value: "ahmedabad" },
//           options: [
//             { label: "Navrangpura", value: "navrangpura" },
//             { label: "SG Highway", value: "sghighway" },
//           ],
//         },

//         areaRajkot: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityGujarat", value: "rajkot" },
//           options: [
//             { label: "Kalavad Road", value: "kalavad" },
//             { label: "150 Feet Ring Road", value: "ringroad" },
//           ],
//         },

//         // =========================
//         // 📍 AREA (MAHARASHTRA)
//         // =========================
//         areaMumbai: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityMaharashtra", value: "mumbai" },
//           options: [
//             { label: "Andheri", value: "andheri" },
//             { label: "Bandra", value: "bandra" },
//           ],
//         },

//         areaPune: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityMaharashtra", value: "pune" },
//           options: [
//             { label: "Hinjewadi", value: "hinjewadi" },
//             { label: "Kothrud", value: "kothrud" },
//           ],
//         },

//         // =========================
//         // 📍 AREA (USA)
//         // =========================
//         areaLA: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityCalifornia", value: "la" },
//           options: [
//             { label: "Hollywood", value: "hollywood" },
//             { label: "Beverly Hills", value: "beverly" },
//           ],
//         },

//         areaSF: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityCalifornia", value: "sf" },
//           options: [
//             { label: "Downtown", value: "downtown" },
//             { label: "Mission", value: "mission" },
//           ],
//         },

//         // =========================
//         // 📍 AREA (UAE)
//         // =========================
//         areaDubaiCity: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityDubai", value: "dubai_city" },
//           options: [
//             { label: "Marina", value: "marina" },
//             { label: "Jumeirah", value: "jumeirah" },
//           ],
//         },

//         areaAbuDhabiCity: {
//           type: "select",
//           label: "Area",
//           showWhen: { field: "cityAbuDhabi", value: "abudhabi_city" },
//           options: [
//             { label: "Yas Island", value: "yas" },
//             { label: "Saadiyat", value: "saadiyat" },
//           ],
//         },
//       },

//     },

//   },
// }

export const genderSchema = {
  fields: {
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
    },

    // =========================
    // 🧔 BEARD STYLE TYPE
    // =========================
    beardType: {
      type: "radio",
      label: "Beard Type",
      showWhen: {
        field: "gender",
        value: "male",
      },
      options: [
        { label: "Light Beard", value: "light" },
        { label: "Heavy Beard", value: "heavy" },
      ],
      rules: {
        required: true,
        requiredMessage: "Beard type is required",
      },
    },

    // =========================
    // 🧔 LIGHT BEARD OPTION
    // =========================
    lightBeardStyle: {
      type: "text",
      label: "Light Beard Style",
      showWhen: {
        field: "beardType",
        value: "light",
      },
      rules: {
        required: true,
        requiredMessage: "Light beard style is required",
      },
    },

    // =========================
    // 🧔 HEAVY BEARD OPTION
    // =========================
    heavyBeardStyle: {
      type: "text",
      label: "Heavy Beard Style",
      showWhen: {
        field: "beardType",
        value: "heavy",
      },
      rules: {
        required: true,
        requiredMessage: "Heavy beard style is required",
      },
    },

    // =========================
    // 💄 MAKEUP TYPE
    // =========================
    makeupCategory: {
      type: "radio",
      label: "Makeup Category",
      showWhen: {
        field: "gender",
        value: "female",
      },
      options: [
        { label: "Basic Makeup", value: "basic" },
        { label: "Advanced Makeup", value: "advanced" },
      ],
      rules: {
        required: true,
        requiredMessage: "Makeup category is required",
      },
    },

    // =========================
    // 💄 BASIC MAKEUP
    // =========================
    basicMakeupType: {
      type: "text",
      label: "Basic Makeup Type",
      showWhen: {
        field: "makeupCategory",
        value: "basic",
      },
      rules: {
        required: true,
        requiredMessage: "Basic makeup type is required",
      },
    },

    // =========================
    // 💄 ADVANCED MAKEUP
    // =========================
    advancedMakeupType: {
      type: "text",
      label: "Advanced Makeup Type",
      showWhen: {
        field: "makeupCategory",
        value: "advanced",
      },
      rules: {
        required: true,
        requiredMessage: "Advanced makeup type is required",
      },
    },
  },
};

// export const countrySchema = {
//   fields: {
// continent: {
//   type: "select",
//   label: "Continent",
//   options: [
//     { label: "Asia", value: "asia" },
//     { label: "Europe", value: "europe" },
//   ],
//   // events : {
//   //   [
//   //     { type: 'click,kewup.keydown', callBack: 'getcontry' }
//   //   ]
//   // }
//   rules: { required: true },
// },

//     country: {
//       type: "select",
//       label: "Country",
//       // 👇 NATIVE DEPENDENCY INJECTION
//       dependsOn: "continent",
//       getOptions: async (values) => {
//         if (!values.continent) return [];

//         try {
//           // Fetch countries dynamically based on the continent chosen using the RestCountries API
//           const response = await fetch(`https://restcountries.com/v3.1/region/${values.continent}?fields=name`);
//           const data = await response.json();

//           // Transform and sort data alphabetically
//           return data
//             .map((country) => ({
//               label: country.name.common,
//               value: country.name.common.toLowerCase().replace(/\s+/g, ""), // e.g. "India" -> "india"
//             }))
//             .sort((a, b) => a.label.localeCompare(b.label));

//         } catch (error) {
//           console.error("Failed to fetch countries", error);
//           return [];
//         }
//       },
//       rules: { required: true },
//     },

//     state: {
//       type: "select",
//       label: "State",
//       dependsOn: "country",
//       getOptions: async (values) => {
//         const map = {
//           india: [
//             { label: "Gujarat", value: "gujarat" },
//             { label: "Maharashtra", value: "maharashtra" },
//           ],
//           uae: [
//             { label: "Dubai", value: "dubai" },
//             { label: "Abu Dhabi", value: "abudhabi" },
//           ],
//           germany: [
//             { label: "Bavaria", value: "bavaria" },
//             { label: "Berlin", value: "berlin" },
//           ],
//         };

//         return map[values.country] || [];
//       },
//     },

//     city: {
//       type: "select",
//       label: "City",
//       dependsOn: "state",
//       getOptions: async (values) => {
//         const map = {
//           gujarat: [
//             { label: "Ahmedabad", value: "ahmedabad" },
//             { label: "Rajkot", value: "rajkot" },
//           ],
//           maharashtra: [
//             { label: "Mumbai", value: "mumbai" },
//             { label: "Pune", value: "pune" },
//           ],
//         };

//         return map[values.state] || [];
//       },
//       rules: { required: true },
//     },

//     area: {
//       type: "select",
//       label: "Area",
//       dependsOn: "city",
//       getOptions: async (values) => {
//         if (values.city === "rajkot") {
//           return [
//             { label: "Kalavad Road", value: "kalavad" },
//             { label: "Yagnik Road", value: "yagnik" },
//           ];
//         }
//         return [];
//       },
//     },

//     street: {
//       type: "select",
//       label: "Street",
//       dependsOn: "area",
//       getOptions: async (values) => {
//         if (values.area === "kalavad") {
//           return [
//             { label: "Street 1", value: "s1" },
//             { label: "Street 2", value: "s2" },
//           ];
//         }
//         return [];
//       },
//     },
//   },
// };


export const groupSchema = {
  fields: {


    personalInfo: {
      type: "group",
      label: "Personal Information",
      description: "Enter your basic personal details",
      grid: 3,

      fields: {
        name: {
          type: "text",
          label: "Full Name",
          rules: {
            required: true,
            requiredMessage: "Name is required",
          },
        },

        username: {
          type: "text",
          label: "Username",
          rules: {
            required: true,
            minLength: 3,
          },
        },

        email: {
          type: "email",
          label: "Email",
          rules: {
            required: true,
            email: true,
          },
        },

        phone: {
          type: "text",
          label: "Phone Number",
          rules: {
            required: true,
            pattern: /^[0-9]{10}$/,
            patternMessage: "Phone must be 10 digits",
          },
        },
      },
    },


  },
};

// export const locationSchema = {
//   fields: {
//     // =========================
//     // 🌍 CONTINENT
//     // =========================
//     continent: {
//       type: "select",
//       label: "Continent",
//       options: [
//         { label: "Asia", value: "asia" },
//         { label: "Europe", value: "europe" },
//       ],
//       rules: { required: true },

//       events: [
//         {
//           trigger: "onChange",
//           action: "showField",
//           target: "country",
//         },
//         {
//           trigger: "onChange",
//           action: "resetField",
//           target: ["country", "state", "city"],
//         },
//         {
//           trigger: "onChange",
//           action: "call",
//           handler: "fetchCountries",
//         },
//       ],
//     },

//     // =========================
//     // 🌎 COUNTRY
//     // =========================
//     country: {
//       type: "select",
//       label: "Country",
//       hidden: true,
//       rules: { required: true },

//       events: [
//         {
//           trigger: "onChange",
//           action: "showField",
//           target: "state",
//         },
//         {
//           trigger: "onChange",
//           action: "resetField",
//           target: ["state", "city"],
//         },
//         {
//           trigger: "onChange",
//           action: "call",
//           handler: "fetchStates",
//         },
//       ],
//     },

//     // =========================
//     // 🏙️ STATE
//     // =========================
//     state: {
//       type: "select",
//       label: "State",
//       hidden: true,
//       rules: { required: true },

//       events: [
//         {
//           trigger: "onChange",
//           action: "showField",
//           target: "city",
//         },
//         {
//           trigger: "onChange",
//           action: "resetField",
//           target: ["city"],
//         },
//         {
//           trigger: "onChange",
//           action: "call",
//           handler: "fetchCities",
//         },
//       ],
//     },

//     // =========================
//     // 🏡 CITY
//     // =========================
//     city: {
//       type: "select",
//       label: "City",
//       hidden: true,
//       rules: { required: true },
//     },
//   },
// };



// export const locationSchema = {
//   fields: {
//     continent: {
//       type: "select",
//       label: "Continent",
//       options: [
//         { label: "Asia", value: "asia" },
//         { label: "Europe", value: "europe" },
//       ],
//       rules: { required: true },
//       events: [
//         {
//           type: "change",
//           callBack: ({ setValues, setOptions }) => {
//             // Auto reset dependents when parent changes
//             setValues({ country: "", state: "", city: "" });
//             setOptions("country", []);
//           }
//         }
//       ]
//     },

//     country: {
//       type: "select",
//       label: "Country",
//       searchable: true,

//       // 👇 NEW DYNAMIC EVENT MAPPING
//       events: [
//         {
//           type: "click,keyup,keydown",
//           callBack: async ({ values, setOptions }) => {
//             if (!values.continent) return;
//             try {
//               // Simulated dynamic fetch
//               const map = {
//                 asia: [
//                   { label: "India", value: "india" },
//                   { label: "Japan", value: "japan" }
//                 ],
//                 europe: [
//                   { label: "Germany", value: "germany" },
//                   { label: "France", value: "france" }
//                 ]
//               };
//               setOptions("country", map[values.continent] || []);
//             } catch (error) {
//               console.error(error);
//             }
//           }
//         },
//         {
//           type: "change",
//           callBack: ({ setValues, setOptions }) => {
//             setValues({ state: "", city: "" });
//             setOptions("state", []);
//           }
//         }
//       ],
//       rules: { required: true },
//     },

//     state: {
//       type: "select",
//       label: "State",
//       events: [
//         {
//           type: "click,keyup,keydown",
//           callBack: async ({ values, setOptions }) => {
//             if (!values.country) return;
//             const map = {
//               india: [
//                 { label: "Gujarat", value: "gujarat" },
//                 { label: "Maharashtra", value: "maharashtra" },
//               ],
//               germany: [
//                 { label: "Bavaria", value: "bavaria" },
//                 { label: "Berlin", value: "berlin" },
//               ],
//             };
//             setOptions("state", map[values.country] || []);
//           }
//         },
//         {
//           type: "change",
//           callBack: ({ setValues, setOptions }) => {
//             setValues({ city: "" });
//             setOptions("city", []);
//           }
//         }
//       ],
//     },

//     city: {
//       type: "select",
//       label: "City",
//       events: [
//         {
//           type: "click,keyup,keydown",
//           callBack: async ({ values, setOptions }) => {
//             if (!values.state) return;
//             const map = {
//               gujarat: [
//                 { label: "Ahmedabad", value: "ahmedabad" },
//                 { label: "Rajkot", value: "rajkot" },
//               ],
//               maharashtra: [
//                 { label: "Mumbai", value: "mumbai" },
//                 { label: "Pune", value: "pune" },
//               ],
//             };
//             setOptions("city", map[values.state] || []);
//           }
//         }
//       ],
//       rules: { required: true },
//     },
//   },
// };


// export const locationSchema = {
//   fields: {
//     // ──────────────────────────────────────
//     // CONTINENT — static options, no events needed
//     // When user picks continent, country resets automatically
//     // ──────────────────────────────────────
//     continent: {
//       type: "select",
//       label: "Continent",
//       placeholder: "Select Continent",
//       options: [
//         { label: "Asia", value: "asia" },
//         { label: "Europe", value: "europe" },
//         { label: "Americas", value: "americas" },
//       ],
//       rules: { required: true },
//     },

//     // ──────────────────────────────────────
//     // COUNTRY — depends on continent
//     // events fire when user opens this dropdown (click / keyup / keydown)
//     // ──────────────────────────────────────
//     country: {
//       type: "select",
//       label: "Country",
//       placeholder: "Select Country",
//       dependsOn: "continent", // ← controls visibility + auto-reset

//       events: [
//         {
//           // Fires on click (open dropdown) OR keyup/keydown on the field
//           type: "click,keyup,keydown",
//           callBack: async ({ values, setOptions }) => {
//             if (!values.continent) return;

//             // 🔥 Option A: inline map (fast, no API)
//             const map = {
//               asia: [
//                 { label: "India", value: "india" },
//                 { label: "Japan", value: "japan" },
//                 { label: "UAE", value: "uae" },
//                 { label: "China", value: "china" },
//               ],
//               europe: [
//                 { label: "Germany", value: "germany" },
//                 { label: "France", value: "france" },
//                 { label: "UK", value: "uk" },
//                 { label: "Italy", value: "italy" },
//               ],
//               americas: [
//                 { label: "USA", value: "usa" },
//                 { label: "Canada", value: "canada" },
//                 { label: "Brazil", value: "brazil" },
//               ],
//             };

//             setOptions("country", map[values.continent] || []);

//             // 🔥 Option B: real API (comment in when ready)
//             // try {
//             //   const res = await fetch(`/api/countries?continent=${values.continent}`);
//             //   const data = await res.json();
//             //   setOptions('country', data);
//             // } catch (e) { console.error(e); }
//           },
//         },
//       ],
//       rules: { required: true },
//     },

//     // ──────────────────────────────────────
//     // STATE — depends on country
//     // ──────────────────────────────────────
//     state: {
//       type: "select",
//       label: "State / Province",
//       placeholder: "Select State",
//       dependsOn: "country",

//       events: [
//         {
//           type: "click,keyup,keydown",
//           callBack: async ({ values, setOptions }) => {
//             if (!values.country) return;

//             const map = {
//               india: [
//                 { label: "Gujarat", value: "gujarat" },
//                 { label: "Maharashtra", value: "maharashtra" },
//                 { label: "Rajasthan", value: "rajasthan" },
//                 { label: "Delhi", value: "delhi" },
//               ],
//               uae: [
//                 { label: "Dubai", value: "dubai" },
//                 { label: "Abu Dhabi", value: "abudhabi" },
//                 { label: "Sharjah", value: "sharjah" },
//               ],
//               germany: [
//                 { label: "Bavaria", value: "bavaria" },
//                 { label: "Berlin", value: "berlin" },
//                 { label: "Hamburg", value: "hamburg" },
//               ],
//               usa: [
//                 { label: "California", value: "california" },
//                 { label: "New York", value: "newyork" },
//                 { label: "Texas", value: "texas" },
//               ],
//             };

//             setOptions("state", map[values.country] || []);
//           },
//         },
//       ],
//     },

//     // ──────────────────────────────────────
//     // CITY — depends on state
//     // ──────────────────────────────────────
//     city: {
//       type: "select",
//       label: "City",
//       placeholder: "Select City",
//       dependsOn: "state",

//       events: [
//         {
//           type: "click,keyup,keydown",
//           callBack: async ({ values, setOptions }) => {
//             if (!values.state) return;

//             const map = {
//               gujarat: [
//                 { label: "Ahmedabad", value: "ahmedabad" },
//                 { label: "Rajkot", value: "rajkot" },
//                 { label: "Surat", value: "surat" },
//                 { label: "Vadodara", value: "vadodara" },
//               ],
//               maharashtra: [
//                 { label: "Mumbai", value: "mumbai" },
//                 { label: "Pune", value: "pune" },
//                 { label: "Nagpur", value: "nagpur" },
//               ],
//               delhi: [
//                 { label: "New Delhi", value: "newdelhi" },
//                 { label: "Dwarka", value: "dwarka" },
//                 { label: "Noida", value: "noida" },
//               ],
//               bavaria: [
//                 { label: "Munich", value: "munich" },
//                 { label: "Nuremberg", value: "nuremberg" },
//               ],
//               california: [
//                 { label: "Los Angeles", value: "la" },
//                 { label: "San Francisco", value: "sf" },
//                 { label: "San Diego", value: "sd" },
//               ],
//             };

//             setOptions("city", map[values.state] || []);
//           },
//         },
//       ],
//       rules: { required: true },
//     },
//   },
// };



export const locationSchema = {
  fields: {
    // 🌍 CONTINENT
    continent: {
      type: "select",
      label: "Continent",
      options: [
        { label: "Asia", value: "asia" },
        { label: "Europe", value: "europe" },
      ],
      rules: { required: true },

      events: [
        {
          trigger: "onChange",
          action: "showField",
          target: "country",
        },
        {
          trigger: "onChange",
          action: "call",
          handler: "fetchCountries",
        },
      ],
    },

    // 🌎 COUNTRY
    country: {
      type: "select",
      label: "Country",
      hidden: true, // 👈 start hidden

      events: [
        {
          trigger: "onChange",
          action: "showField",
          target: "state",
        },
        {
          trigger: "onChange",
          action: "call",
          handler: "fetchStates",
        },
      ],
      rules: { required: true },
    },

    // 🏙️ STATE
    state: {
      type: "select",
      label: "State",
      hidden: true,

      events: [
        {
          trigger: "onChange",
          action: "showField",
          target: "city",
        },
        {
          trigger: "onChange",
          action: "call",
          handler: "fetchCities",
        },
      ],
      rules: { required: true },
    },

    // 🏡 CITY
    city: {
      type: "select",
      label: "City",
      hidden: true,
      rules: { required: true },
    },
  },
};