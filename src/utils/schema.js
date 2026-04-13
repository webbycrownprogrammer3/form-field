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

    // username: {
    //   type: "text",
    //   label: "Username",
    //   rules: {
    //     minLength: 3,
    //     requiredMessage: "Name is required",
    //   },
    //   errorIcon: (
    //     <svg viewBox="0 0 24 24">
    //       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
    //     </svg>
    //   ),
    // },

    // bio: {
    //   type: "textarea",
    //   label: "Bio",
    //   rules: {
    //     required: true,
    //     maxLength: 10,
    //     requiredMessage: (
    //       <div style={{ fontSize: "12px", color: "#ef4444" }}>
    //         ❗{" "}
    //         <b>
    //           <span>Bio</span> is required
    //         </b>
    //       </div>
    //     ),
    //   },
    //   errorImage: "images/man.jpg", // ✅ Add image to field
    // },

    // email: {
    //   type: "email",
    //   label: "Email",
    //   rules: {
    //     required: true,
    //     requiredMessage: "Email is required",
    //     validate: (value) => {
    //       if (!value) return true;

    //       // ❌ No @ symbol
    //       if (!value.includes("@")) {
    //         return (
    //           <div style={{ fontSize: "12px", color: "#f59e0b" }}>
    //             Email must contain{" "}
    //             <span style={{ color: "#ef4444", fontWeight: 600 }}>@</span>{" "}
    //             symbol
    //           </div>
    //         );
    //       }

    //       // ❌ Block specific email
    //       if (value === "admin@gmail.com") {
    //         return (
    //           <div style={{ fontSize: "12px", color: "#ef4444" }}>
    //             <span style={{ fontWeight: 600 }}>{value}</span> is not
    //             available and not safe
    //           </div>
    //         );
    //       }

    //       // ❌ Invalid email format
    //       if (!/\S+@\S+\.\S+/.test(value)) {
    //         return (
    //           <div style={{ fontSize: "12px", color: "#f97316" }}>
    //             Please enter a valid email format
    //           </div>
    //         );
    //       }

    //       return true;
    //     },
    //   },
    //   errorIcon: (
    //     <svg viewBox="0 0 24 24">
    //       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
    //     </svg>
    //   ),
    // },

    // phone: {
    //   type: "text",
    //   label: "Phone",
    //   rules: {
    //     required: true,
    //     pattern: /^[0-9]{10}$/,
    //     patternMessage: "Phone must be 10 digits",
    //   },
    //   errorIcon: (
    //     <svg viewBox="0 0 24 24">
    //       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
    //     </svg>
    //   ),
    // },

    // customField: {
    //   type: "text",
    //   label: "Custom Field",
    //   rules: {
    //     required: true,
    //     validate: (value) =>
    //       value !== "admin" || (
    //         <div style={{ color: "red", fontSize: "12px" }}>
    //           <span style={{ color: "orange", fontWeight: "1200" }}>Admin</span>{" "}
    //           is not allowed
    //         </div>
    //       ),
    //   },
    //   errorIcon: (
    //     <svg viewBox="0 0 24 24">
    //       <path d="M12 2L2 22h20L12 2zm0 14h-1v-4h2v4h-1zm0 4h-1v-2h2v2h-1z" />
    //     </svg>
    //   ),
    // },

    // country: {
    //   type: "select",
    //   label: "Country",
    //   multiSelect: true, // ✅ enables multi select
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
    // },


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
          <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
          <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
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
          <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
          <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
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