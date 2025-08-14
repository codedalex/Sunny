"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AuthLayout: () => AuthLayout,
  SignInForm: () => SignInForm,
  SignUpForm: () => SignUpForm,
  SocialAuthButtons: () => SocialAuthButtons
});
module.exports = __toCommonJS(index_exports);

// src/auth/AuthLayout.tsx
var import_framer_motion = require("framer-motion");
var import_outline = require("@heroicons/react/24/outline");
var import_link = __toESM(require("next/link"));
var import_jsx_runtime = require("react/jsx-runtime");
function AuthLayout({
  children,
  title,
  subtitle,
  showBackButton = true,
  backButtonText = "Back to Home",
  backButtonHref = "/",
  backgroundVariant = "gradient",
  className = ""
}) {
  const backgroundClasses = {
    gradient: "bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-green-900/20",
    pattern: "bg-white dark:bg-gray-900",
    simple: "bg-gray-50 dark:bg-gray-900"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `min-h-screen flex flex-col ${backgroundClasses[backgroundVariant]} ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_link.default, { href: "/", className: "flex items-center space-x-3 group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-10 h-10 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_framer_motion.motion.div,
              {
                className: "absolute inset-0 rounded-xl",
                initial: { opacity: 0 },
                whileHover: {
                  opacity: 1,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)"
                },
                transition: { duration: 0.3 }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-white font-bold text-lg relative z-10 font-mono", children: "S" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_framer_motion.motion.div,
            {
              className: "absolute inset-0 rounded-xl bg-green-400",
              initial: { scale: 1, opacity: 0 },
              animate: { scale: [1, 1.2, 1], opacity: [0, 0.3, 0] },
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xl font-bold text-gray-900 dark:text-white tracking-tight", children: "Sunny" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-gray-500 dark:text-gray-400 font-medium -mt-1", children: "Payments" })
        ] })
      ] }),
      showBackButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_link.default,
        {
          href: backButtonHref,
          className: "flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_outline.ArrowLeftIcon, { className: "h-4 w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:inline", children: backButtonText })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_framer_motion.motion.h1,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "text-3xl font-bold text-gray-900 dark:text-white mb-2",
            children: title
          }
        ),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_framer_motion.motion.p,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 },
            className: "text-gray-600 dark:text-gray-400 text-base",
            children: subtitle
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8",
          children
        }
      ),
      backgroundVariant === "pattern" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 -z-10 opacity-5 dark:opacity-10", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "svg",
        {
          className: "absolute inset-0 h-full w-full",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "pattern",
              {
                id: "grid-pattern",
                width: "32",
                height: "32",
                patternUnits: "userSpaceOnUse",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "path",
                  {
                    d: "M0 32V.5h32",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "100%", height: "100%", fill: "url(#grid-pattern)" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-sm text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center space-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
          "\xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Sunny Payments"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: "/privacy", className: "hover:text-gray-900 dark:hover:text-white transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: "/terms", className: "hover:text-gray-900 dark:hover:text-white transition-colors", children: "Terms of Service" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: "/support", className: "hover:text-gray-900 dark:hover:text-white transition-colors", children: "Support" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: "/status", className: "hover:text-gray-900 dark:hover:text-white transition-colors", children: "System Status" })
      ] })
    ] }) }) })
  ] });
}

// src/auth/SignInForm.tsx
var import_react = require("react");
var import_framer_motion2 = require("framer-motion");
var import_react_hook_form = require("react-hook-form");
var import_zod = require("@hookform/resolvers/zod");
var import_outline2 = require("@heroicons/react/24/outline");
var import_solid = require("@heroicons/react/24/solid");
var import_link2 = __toESM(require("next/link"));
var import_shared_types = require("@sunny/shared-types");
var import_jsx_runtime2 = require("react/jsx-runtime");
function SignInForm({
  onSubmit,
  defaultAccountType,
  redirectUrl,
  className = ""
}) {
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const [authError, setAuthError] = (0, import_react.useState)(null);
  const [requiresMFA, setRequiresMFA] = (0, import_react.useState)(false);
  const [availableMFAMethods, setAvailableMFAMethods] = (0, import_react.useState)([]);
  const [selectedMFAMethod, setSelectedMFAMethod] = (0, import_react.useState)(null);
  const [mfaCode, setMfaCode] = (0, import_react.useState)("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError
  } = (0, import_react_hook_form.useForm)({
    resolver: (0, import_zod.zodResolver)(import_shared_types.SignInSchema),
    defaultValues: {
      email: "",
      password: "",
      accountType: defaultAccountType,
      rememberMe: false
    }
  });
  const accountType = watch("accountType");
  const accountTypeOptions = [
    {
      value: import_shared_types.UserAccountType.INDIVIDUAL,
      label: "Individual",
      description: "Personal payment account",
      icon: import_solid.UserCircleIcon,
      destination: "app.sunnypayments.com"
    },
    {
      value: import_shared_types.UserAccountType.BUSINESS,
      label: "Business",
      description: "Merchant account for businesses",
      icon: import_solid.BuildingOfficeIcon,
      destination: "business.sunnypayments.com"
    },
    {
      value: import_shared_types.UserAccountType.INSTITUTION,
      label: "Institution",
      description: "Banks, SACCOs, and financial institutions",
      icon: import_solid.BanknotesIcon,
      destination: "institutions.sunnypayments.com"
    },
    {
      value: import_shared_types.UserAccountType.DEVELOPER,
      label: "Developer",
      description: "API access and integration tools",
      icon: import_solid.CodeBracketIcon,
      destination: "developers.sunnypayments.com"
    },
    {
      value: import_shared_types.UserAccountType.ADMIN,
      label: "Admin",
      description: "Platform administration",
      icon: import_solid.CogIcon,
      destination: "admin.sunnypayments.com"
    }
  ];
  const mfaMethodOptions = [
    {
      value: import_shared_types.MFAType.SMS,
      label: "SMS Code",
      description: "Code sent to your phone",
      icon: import_outline2.DevicePhoneMobileIcon
    },
    {
      value: import_shared_types.MFAType.EMAIL,
      label: "Email Code",
      description: "Code sent to your email",
      icon: import_outline2.EnvelopeIcon
    },
    {
      value: import_shared_types.MFAType.TOTP,
      label: "Authenticator App",
      description: "Code from authenticator app",
      icon: import_outline2.ShieldCheckIcon
    }
  ];
  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      if (requiresMFA && selectedMFAMethod && mfaCode) {
        data.mfaCode = mfaCode;
      }
      const response = await onSubmit(data);
      if (response.success) {
        if (response.redirectUrl) {
          window.location.href = response.redirectUrl;
        }
      } else if (response.requiresMFA) {
        setRequiresMFA(true);
        setAvailableMFAMethods(response.mfaMethods || []);
        setSelectedMFAMethod(response.mfaMethods?.[0] || null);
      } else if (response.error) {
        setAuthError(response.error.message);
        if (response.error.field) {
          setError(response.error.field, {
            type: "manual",
            message: response.error.message
          });
        }
      }
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const handleMFASubmit = async () => {
    if (!mfaCode || !selectedMFAMethod) return;
    const currentFormData = watch();
    await handleFormSubmit({
      ...currentFormData,
      mfaCode
    });
  };
  const resetMFA = () => {
    setRequiresMFA(false);
    setAvailableMFAMethods([]);
    setSelectedMFAMethod(null);
    setMfaCode("");
    setAuthError(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `w-full ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_framer_motion2.AnimatePresence, { mode: "wait", children: !requiresMFA ? (
    // Main Sign In Form
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_framer_motion2.motion.form,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.3 },
        onSubmit: handleSubmit((data) => handleFormSubmit(data)),
        className: "space-y-6",
        children: [
          !defaultAccountType && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Account Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "grid grid-cols-1 gap-3", children: accountTypeOptions.map((option) => {
              const Icon = option.icon;
              return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                import_framer_motion2.motion.label,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: `relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${accountType === option.value ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "input",
                      {
                        type: "radio",
                        value: option.value,
                        ...register("accountType"),
                        className: "sr-only"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { className: `h-6 w-6 mr-3 ${accountType === option.value ? "text-green-600" : "text-gray-400"}` }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: `font-medium ${accountType === option.value ? "text-green-900 dark:text-green-100" : "text-gray-900 dark:text-white"}`, children: option.label }),
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: option.destination })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: `text-sm ${accountType === option.value ? "text-green-700 dark:text-green-300" : "text-gray-500 dark:text-gray-400"}`, children: option.description })
                    ] }),
                    accountType === option.value && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.CheckCircleIcon, { className: "h-5 w-5 text-green-600 ml-2" })
                  ]
                },
                option.value
              );
            }) }),
            errors.accountType && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.accountType.message })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email Address" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                id: "email",
                type: "email",
                autoComplete: "email",
                ...register("email"),
                className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.email ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "Enter your email address"
              }
            ),
            errors.email && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "text-sm text-red-600 dark:text-red-400 flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.ExclamationTriangleIcon, { className: "h-4 w-4 mr-1" }),
              errors.email.message
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                {
                  id: "password",
                  type: showPassword ? "text" : "password",
                  autoComplete: "current-password",
                  ...register("password"),
                  className: `w-full px-4 py-3 pr-12 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.password ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                  placeholder: "Enter your password"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPassword(!showPassword),
                  className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                  children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.EyeSlashIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.EyeIcon, { className: "h-5 w-5" })
                }
              )
            ] }),
            errors.password && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "text-sm text-red-600 dark:text-red-400 flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.ExclamationTriangleIcon, { className: "h-4 w-4 mr-1" }),
              errors.password.message
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                {
                  type: "checkbox",
                  ...register("rememberMe"),
                  className: "h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-2 text-sm text-gray-600 dark:text-gray-400", children: "Remember me" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_link2.default,
              {
                href: "/forgot-password",
                className: "text-sm font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors",
                children: "Forgot password?"
              }
            )
          ] }),
          authError && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_framer_motion2.motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              className: "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.ExclamationTriangleIcon, { className: "h-5 w-5 text-red-500 mr-2" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-sm text-red-700 dark:text-red-300", children: authError })
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_framer_motion2.motion.button,
            {
              type: "submit",
              disabled: isLoading,
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center",
              children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" }),
                "Signing in..."
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center", children: [
                "Sign In",
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.ArrowRightIcon, { className: "ml-2 h-5 w-5" })
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "text-center text-sm text-gray-600 dark:text-gray-400", children: [
            "Don't have an account?",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_link2.default,
              {
                href: `/sign-up${accountType ? `?type=${accountType}` : ""}${redirectUrl ? `&redirect=${encodeURIComponent(redirectUrl)}` : ""}`,
                className: "font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors",
                children: "Sign up here"
              }
            )
          ] })
        ]
      },
      "signin-form"
    )
  ) : (
    // MFA Form
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_framer_motion2.motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
        transition: { duration: 0.3 },
        className: "space-y-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.ShieldCheckIcon, { className: "h-12 w-12 text-green-600 mx-auto mb-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Two-Factor Authentication" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-gray-600 dark:text-gray-400", children: "Please verify your identity to continue" })
          ] }),
          availableMFAMethods.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Verification Method" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "space-y-2", children: mfaMethodOptions.filter((option) => availableMFAMethods.includes(option.value)).map((option) => {
              const Icon = option.icon;
              return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "label",
                {
                  className: `flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${selectedMFAMethod === option.value ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-gray-200 dark:border-gray-600 hover:border-green-300"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "input",
                      {
                        type: "radio",
                        name: "mfaMethod",
                        value: option.value,
                        checked: selectedMFAMethod === option.value,
                        onChange: (e) => setSelectedMFAMethod(e.target.value),
                        className: "sr-only"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { className: `h-5 w-5 mr-3 ${selectedMFAMethod === option.value ? "text-green-600" : "text-gray-400"}` }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: `font-medium ${selectedMFAMethod === option.value ? "text-green-900 dark:text-green-100" : "text-gray-900 dark:text-white"}`, children: option.label }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: `text-sm ${selectedMFAMethod === option.value ? "text-green-700 dark:text-green-300" : "text-gray-500 dark:text-gray-400"}`, children: option.description })
                    ] })
                  ]
                },
                option.value
              );
            }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "mfaCode", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Verification Code" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                id: "mfaCode",
                type: "text",
                value: mfaCode,
                onChange: (e) => setMfaCode(e.target.value.replace(/\D/g, "").slice(0, 6)),
                className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
                placeholder: "000000",
                maxLength: 6,
                autoComplete: "one-time-code"
              }
            )
          ] }),
          authError && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_framer_motion2.motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              className: "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline2.ExclamationTriangleIcon, { className: "h-5 w-5 text-red-500 mr-2" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-sm text-red-700 dark:text-red-300", children: authError })
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_framer_motion2.motion.button,
              {
                onClick: handleMFASubmit,
                disabled: isLoading || mfaCode.length !== 6,
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center",
                children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" }),
                  "Verifying..."
                ] }) : "Verify Code"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                onClick: resetMFA,
                className: "w-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                children: "Back to sign in"
              }
            )
          ] })
        ]
      },
      "mfa-form"
    )
  ) }) });
}

// src/auth/SignUpForm.tsx
var import_react2 = require("react");
var import_framer_motion3 = require("framer-motion");
var import_react_hook_form2 = require("react-hook-form");
var import_zod2 = require("@hookform/resolvers/zod");
var import_outline3 = require("@heroicons/react/24/outline");
var import_solid2 = require("@heroicons/react/24/solid");
var import_link3 = __toESM(require("next/link"));
var import_shared_types2 = require("@sunny/shared-types");
var import_jsx_runtime3 = require("react/jsx-runtime");
function SignUpForm({
  onSubmit,
  defaultAccountType,
  redirectUrl,
  className = ""
}) {
  const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
  const [showConfirmPassword, setShowConfirmPassword] = (0, import_react2.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [authError, setAuthError] = (0, import_react2.useState)(null);
  const [passwordStrength, setPasswordStrength] = (0, import_react2.useState)(0);
  const [currentStep, setCurrentStep] = (0, import_react2.useState)(1);
  const totalSteps = 3;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    trigger
  } = (0, import_react_hook_form2.useForm)({
    resolver: (0, import_zod2.zodResolver)(import_shared_types2.SignUpSchema),
    defaultValues: {
      accountType: defaultAccountType || import_shared_types2.UserAccountType.INDIVIDUAL,
      agreeToTerms: false,
      agreeToPrivacy: false,
      marketingConsent: false
    }
  });
  const accountType = watch("accountType");
  const password = watch("password");
  const email = watch("email");
  const accountTypeOptions = [
    {
      value: import_shared_types2.UserAccountType.INDIVIDUAL,
      label: "Individual",
      description: "Personal payment account for individual users",
      icon: import_solid2.UserCircleIcon,
      destination: "app.sunnypayments.com"
    },
    {
      value: import_shared_types2.UserAccountType.BUSINESS,
      label: "Business",
      description: "Merchant account for businesses and organizations",
      icon: import_solid2.BuildingOfficeIcon,
      destination: "business.sunnypayments.com"
    },
    {
      value: import_shared_types2.UserAccountType.INSTITUTION,
      label: "Institution",
      description: "For banks, SACCOs, and financial institutions",
      icon: import_solid2.BanknotesIcon,
      destination: "institutions.sunnypayments.com"
    },
    {
      value: import_shared_types2.UserAccountType.DEVELOPER,
      label: "Developer",
      description: "API access and integration tools for developers",
      icon: import_solid2.CodeBracketIcon,
      destination: "developers.sunnypayments.com"
    }
  ];
  const businessTypeOptions = [
    { value: import_shared_types2.BusinessType.SOLE_PROPRIETORSHIP, label: "Sole Proprietorship" },
    { value: import_shared_types2.BusinessType.PARTNERSHIP, label: "Partnership" },
    { value: import_shared_types2.BusinessType.CORPORATION, label: "Corporation" },
    { value: import_shared_types2.BusinessType.LLC, label: "Limited Liability Company (LLC)" },
    { value: import_shared_types2.BusinessType.NON_PROFIT, label: "Non-Profit Organization" },
    { value: import_shared_types2.BusinessType.STARTUP, label: "Startup" },
    { value: import_shared_types2.BusinessType.ENTERPRISE, label: "Enterprise" }
  ];
  const institutionTypeOptions = [
    { value: import_shared_types2.InstitutionType.BANK, label: "Commercial Bank" },
    { value: import_shared_types2.InstitutionType.CREDIT_UNION, label: "Credit Union" },
    { value: import_shared_types2.InstitutionType.FINTECH, label: "Fintech Company" },
    { value: import_shared_types2.InstitutionType.PAYMENT_PROCESSOR, label: "Payment Processor" },
    { value: import_shared_types2.InstitutionType.REMITTANCE_SERVICE, label: "Remittance Service" },
    { value: import_shared_types2.InstitutionType.SACCO, label: "SACCO (Kenya)" },
    { value: import_shared_types2.InstitutionType.MICROFINANCE, label: "Microfinance Institution" }
  ];
  (0, import_react2.useEffect)(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 25;
    if (/[a-z]/.test(password)) strength += 10;
    if (/[A-Z]/.test(password)) strength += 10;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(password)) strength += 15;
    setPasswordStrength(Math.min(strength, 100));
  }, [password]);
  const getPasswordStrengthColor = (strength) => {
    if (strength < 30) return "bg-red-500";
    if (strength < 60) return "bg-yellow-500";
    if (strength < 80) return "bg-blue-500";
    return "bg-green-500";
  };
  const getPasswordStrengthText = (strength) => {
    if (strength < 30) return "Weak";
    if (strength < 60) return "Fair";
    if (strength < 80) return "Good";
    return "Strong";
  };
  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      const response = await onSubmit(data);
      if (response.success) {
        if (response.redirectUrl) {
          window.location.href = response.redirectUrl;
        }
      } else if (response.error) {
        setAuthError(response.error.message);
        if (response.error.field) {
          setError(response.error.field, {
            type: "manual",
            message: response.error.message
          });
        }
      }
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const handleNextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };
  const getFieldsForStep = (step) => {
    switch (step) {
      case 1:
        return ["accountType"];
      case 2:
        return ["firstName", "lastName", "email", "phone", "businessName", "businessType", "institutionName", "institutionType", "company"];
      case 3:
        return ["password", "confirmPassword", "agreeToTerms", "agreeToPrivacy"];
      default:
        return [];
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderAccountTypeStep();
      case 2:
        return renderPersonalInfoStep();
      case 3:
        return renderPasswordStep();
      default:
        return null;
    }
  };
  const renderAccountTypeStep = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_framer_motion3.motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Choose Your Account Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-gray-600 dark:text-gray-400", children: "Select the type of account that best describes your needs" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "space-y-3", children: accountTypeOptions.map((option) => {
          const Icon = option.icon;
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            import_framer_motion3.motion.label,
            {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              className: `relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${accountType === option.value ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "input",
                  {
                    type: "radio",
                    value: option.value,
                    ...register("accountType"),
                    className: "sr-only"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { className: `h-8 w-8 mr-4 ${accountType === option.value ? "text-green-600" : "text-gray-400"}` }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: `font-medium ${accountType === option.value ? "text-green-900 dark:text-green-100" : "text-gray-900 dark:text-white"}`, children: option.label }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: option.destination })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: `text-sm mt-1 ${accountType === option.value ? "text-green-700 dark:text-green-300" : "text-gray-500 dark:text-gray-400"}`, children: option.description })
                ] }),
                accountType === option.value && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.CheckCircleIcon, { className: "h-6 w-6 text-green-600 ml-2" })
              ]
            },
            option.value
          );
        }) }),
        errors.accountType && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "text-sm text-red-600 dark:text-red-400 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.ExclamationTriangleIcon, { className: "h-4 w-4 mr-1" }),
          errors.accountType.message
        ] })
      ]
    },
    "step-1"
  );
  const renderPersonalInfoStep = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_framer_motion3.motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Personal Information" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-gray-600 dark:text-gray-400", children: "Tell us about yourself to create your account" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "First Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "firstName",
                type: "text",
                autoComplete: "given-name",
                ...register("firstName"),
                className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.firstName ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "John"
              }
            ),
            errors.firstName && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.firstName.message })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Last Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "lastName",
                type: "text",
                autoComplete: "family-name",
                ...register("lastName"),
                className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.lastName ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "Doe"
              }
            ),
            errors.lastName && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.lastName.message })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email Address" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "email",
                type: "email",
                autoComplete: "email",
                ...register("email"),
                className: `w-full px-4 py-3 pl-12 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.email ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "john@example.com"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.EnvelopeIcon, { className: "h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" })
          ] }),
          errors.email && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.email.message })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            "Phone Number ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-gray-400", children: "(Optional)" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "phone",
                type: "tel",
                autoComplete: "tel",
                ...register("phone"),
                className: `w-full px-4 py-3 pl-12 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.phone ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "+1 (555) 123-4567"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.PhoneIcon, { className: "h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" })
          ] }),
          errors.phone && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.phone.message })
        ] }),
        accountType === import_shared_types2.UserAccountType.BUSINESS && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "businessName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Business Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "businessName",
                type: "text",
                ...register("businessName"),
                className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.businessName ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "Acme Corp"
              }
            ),
            errors.businessName && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.businessName.message })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "businessType", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Business Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "select",
              {
                id: "businessType",
                ...register("businessType"),
                className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.businessType ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "", children: "Select business type" }),
                  businessTypeOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: option.value, children: option.label }, option.value))
                ]
              }
            ),
            errors.businessType && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.businessType.message })
          ] })
        ] }),
        accountType === import_shared_types2.UserAccountType.INSTITUTION && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "institutionName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Institution Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "institutionName",
                type: "text",
                ...register("institutionName"),
                className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.institutionName ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "Sunny Bank"
              }
            ),
            errors.institutionName && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.institutionName.message })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "institutionType", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Institution Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "select",
              {
                id: "institutionType",
                ...register("institutionType"),
                className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.institutionType ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "", children: "Select institution type" }),
                  institutionTypeOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: option.value, children: option.label }, option.value))
                ]
              }
            ),
            errors.institutionType && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.institutionType.message })
          ] })
        ] }),
        accountType === import_shared_types2.UserAccountType.DEVELOPER && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            "Company ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-gray-400", children: "(Optional)" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              id: "company",
              type: "text",
              ...register("company"),
              className: `w-full px-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.company ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
              placeholder: "Tech Corp"
            }
          ),
          errors.company && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.company.message })
        ] })
      ]
    },
    "step-2"
  );
  const renderPasswordStep = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_framer_motion3.motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Secure Your Account" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-gray-600 dark:text-gray-400", children: "Create a strong password and agree to our terms" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "password",
                type: showPassword ? "text" : "password",
                autoComplete: "new-password",
                ...register("password"),
                className: `w-full px-4 py-3 pr-12 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.password ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "Create a strong password"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.EyeSlashIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.EyeIcon, { className: "h-5 w-5" })
              }
            )
          ] }),
          password && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-gray-600 dark:text-gray-400", children: "Password strength:" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `font-medium ${passwordStrength < 30 ? "text-red-600" : passwordStrength < 60 ? "text-yellow-600" : passwordStrength < 80 ? "text-blue-600" : "text-green-600"}`, children: getPasswordStrengthText(passwordStrength) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "div",
              {
                className: `h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor(passwordStrength)}`,
                style: { width: `${passwordStrength}%` }
              }
            ) })
          ] }),
          errors.password && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.password.message })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Confirm Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                id: "confirmPassword",
                type: showConfirmPassword ? "text" : "password",
                autoComplete: "new-password",
                ...register("confirmPassword"),
                className: `w-full px-4 py-3 pr-12 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.confirmPassword ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"}`,
                placeholder: "Confirm your password"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                type: "button",
                onClick: () => setShowConfirmPassword(!showConfirmPassword),
                className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                children: showConfirmPassword ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.EyeSlashIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.EyeIcon, { className: "h-5 w-5" })
              }
            )
          ] }),
          errors.confirmPassword && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400", children: errors.confirmPassword.message })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                type: "checkbox",
                ...register("agreeToTerms"),
                className: "h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "ml-3 text-sm text-gray-600 dark:text-gray-400", children: [
              "I agree to the",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link3.default, { href: "/terms", className: "text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 underline", children: "Terms of Service" }),
              " ",
              "and understand that my account will be subject to verification."
            ] })
          ] }),
          errors.agreeToTerms && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400 ml-7", children: errors.agreeToTerms.message }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                type: "checkbox",
                ...register("agreeToPrivacy"),
                className: "h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "ml-3 text-sm text-gray-600 dark:text-gray-400", children: [
              "I agree to the",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link3.default, { href: "/privacy", className: "text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 underline", children: "Privacy Policy" }),
              " ",
              "and consent to the processing of my personal data."
            ] })
          ] }),
          errors.agreeToPrivacy && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-600 dark:text-red-400 ml-7", children: errors.agreeToPrivacy.message }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                type: "checkbox",
                ...register("marketingConsent"),
                className: "h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "ml-3 text-sm text-gray-600 dark:text-gray-400", children: [
              "I would like to receive marketing communications and product updates from Sunny Payments.",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-gray-500", children: "(Optional)" })
            ] })
          ] })
        ] }),
        authError && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_framer_motion3.motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.ExclamationTriangleIcon, { className: "h-5 w-5 text-red-500 mr-2" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-red-700 dark:text-red-300", children: authError })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_framer_motion3.motion.button,
          {
            type: "submit",
            disabled: isLoading,
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center",
            children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" }),
              "Creating Account..."
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center", children: [
              "Create Account",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline3.ArrowRightIcon, { className: "ml-2 h-5 w-5" })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "text-center text-sm text-gray-600 dark:text-gray-400", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_link3.default,
            {
              href: `/sign-in${accountType ? `?type=${accountType}` : ""}${redirectUrl ? `&redirect=${encodeURIComponent(redirectUrl)}` : ""}`,
              className: "font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors",
              children: "Sign in here"
            }
          )
        ] })
      ]
    },
    "step-3"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `w-full ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: [
          "Step ",
          currentStep,
          " of ",
          totalSteps
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "text-sm text-gray-500 dark:text-gray-500", children: [
          Math.round(currentStep / totalSteps * 100),
          "% Complete"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_framer_motion3.motion.div,
        {
          className: "h-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full",
          initial: { width: 0 },
          animate: { width: `${currentStep / totalSteps * 100}%` },
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { onSubmit: handleSubmit(handleFormSubmit), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_framer_motion3.AnimatePresence, { mode: "wait", children: renderStep() }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-800", children: [
        currentStep > 1 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setCurrentStep(currentStep - 1),
            className: "px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200",
            children: "Previous"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {}),
        currentStep < totalSteps ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            onClick: handleNextStep,
            className: "px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200",
            children: "Next"
          }
        ) : null
      ] })
    ] })
  ] });
}

// src/auth/SocialAuthButtons.tsx
var import_react3 = require("react");
var import_framer_motion4 = require("framer-motion");
var import_shared_types3 = require("@sunny/shared-types");
var import_jsx_runtime4 = require("react/jsx-runtime");
function SocialAuthButtons({
  onSocialAuth,
  accountType,
  mode = "signin",
  className = ""
}) {
  const [loadingProvider, setLoadingProvider] = (0, import_react3.useState)(null);
  const handleSocialAuth = async (provider) => {
    try {
      setLoadingProvider(provider);
      const response = await simulateOAuthFlow(provider);
      if (response.accessToken) {
        await onSocialAuth({
          provider,
          providerUserId: response.userId,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          accountType
        });
      }
    } catch (error) {
      console.error(`${provider} authentication failed:`, error);
    } finally {
      setLoadingProvider(null);
    }
  };
  const simulateOAuthFlow = async (provider) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          userId: `${provider}_user_123`,
          accessToken: `${provider}_access_token`,
          refreshToken: `${provider}_refresh_token`
        });
      }, 1500);
    });
  };
  const socialProviders = [
    {
      provider: import_shared_types3.AuthProvider.GOOGLE,
      name: "Google",
      bgColor: "bg-white hover:bg-gray-50",
      textColor: "text-gray-900",
      borderColor: "border-gray-300",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { className: "w-5 h-5 mr-3", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fill: "#4285F4",
            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fill: "#34A853",
            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fill: "#FBBC05",
            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            fill: "#EA4335",
            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          }
        )
      ] }),
      description: accountType === import_shared_types3.UserAccountType.BUSINESS ? "Google Workspace" : "Personal Google account"
    },
    {
      provider: import_shared_types3.AuthProvider.APPLE,
      name: "Apple",
      bgColor: "bg-black hover:bg-gray-900",
      textColor: "text-white",
      borderColor: "border-black",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { className: "w-5 h-5 mr-3", fill: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12.017 11.99c-.016-3.246 2.639-4.805 2.759-4.875-1.503-2.2-3.842-2.5-4.676-2.534-1.99-.207-3.878 1.171-4.888 1.171-1.01 0-2.571-1.142-4.225-1.111-2.173.032-4.173 1.262-5.29 3.207-2.256 3.914-.576 9.708 1.621 12.881 1.074 1.552 2.357 3.296 4.037 3.233 1.614-.063 2.224-1.044 4.177-1.044 1.952 0 2.531 1.044 4.256 1.011 1.756-.032 2.86-1.566 3.934-3.118 1.243-1.793 1.754-3.53 1.785-3.621-.039-.016-3.426-1.313-3.462-5.2z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M15.194 7.036c.883-1.066 1.478-2.548 1.316-4.025-1.272.051-2.813.848-3.726 1.915-.821.952-1.54 2.471-1.347 3.927 1.425.111 2.879-.724 3.757-1.817z" })
      ] }),
      description: "Sign in with Apple ID"
    },
    {
      provider: import_shared_types3.AuthProvider.MICROSOFT,
      name: "Microsoft",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
      borderColor: "border-blue-600",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { className: "w-5 h-5 mr-3", fill: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M11.4 0H0v11.4h11.4V0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M24 0H12.6v11.4H24V0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M11.4 12.6H0V24h11.4V12.6z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M24 12.6H12.6V24H24V12.6z" })
      ] }),
      description: accountType === import_shared_types3.UserAccountType.BUSINESS ? "Microsoft 365" : "Microsoft account"
    }
  ];
  if (accountType === import_shared_types3.UserAccountType.BUSINESS) {
    socialProviders.push({
      provider: import_shared_types3.AuthProvider.LINKEDIN,
      name: "LinkedIn",
      bgColor: "bg-blue-700 hover:bg-blue-800",
      textColor: "text-white",
      borderColor: "border-blue-700",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { className: "w-5 h-5 mr-3", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }),
      description: "Professional LinkedIn account"
    });
  }
  if (accountType === import_shared_types3.UserAccountType.DEVELOPER) {
    socialProviders.push({
      provider: import_shared_types3.AuthProvider.GITHUB,
      name: "GitHub",
      bgColor: "bg-gray-900 hover:bg-black",
      textColor: "text-white",
      borderColor: "border-gray-900",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { className: "w-5 h-5 mr-3", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }),
      description: "Developer GitHub account"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `space-y-3 ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-full border-t border-gray-300 dark:border-gray-600" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400", children: [
        "Or ",
        mode === "signin" ? "sign in" : "sign up",
        " with"
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-3", children: socialProviders.map((social) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_framer_motion4.motion.button,
      {
        type: "button",
        onClick: () => handleSocialAuth(social.provider),
        disabled: loadingProvider !== null,
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        className: `w-full flex items-center justify-center px-4 py-3 border rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${social.bgColor} ${social.textColor} ${social.borderColor} focus:ring-green-500`,
        children: loadingProvider === social.provider ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3" }),
          "Connecting..."
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-center w-full", children: [
          social.icon,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-1 text-left", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "font-medium", children: [
              "Continue with ",
              social.name
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-xs opacity-75", children: social.description })
          ] })
        ] })
      },
      social.provider
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { className: "h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-blue-700 dark:text-blue-300 font-medium", children: "Secure Social Authentication" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-blue-600 dark:text-blue-400 mt-1", children: "We use industry-standard OAuth 2.0 protocols to securely authenticate with third-party providers. Your credentials are never stored on our servers." })
      ] })
    ] }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthLayout,
  SignInForm,
  SignUpForm,
  SocialAuthButtons
});
