import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-blue-200 dark:border-blue-800 bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black shadow-sm">
      {/* Main Footer Content */}
      <div className="w-full bg-white dark:bg-black border-b border-blue-200 dark:border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <Link href="/" className="flex items-center space-x-2">
                  <img src="/assets/logo.png" alt="Logo" className="w-30 h-20 object-contain" />
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                A powerful and production-ready package builder designed for React and Next.js, featuring dynamic forms, step-based workflows, custom fields, validation, and flexible layouts.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.npmjs.com/package/@webbycrown/react-formix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
                  aria-label="NPM Package"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-10.38V5.322zm7.261 4.441h3.456v9.816h-3.456zm-7.27 0h3.456v9.816H5.121z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/webbycrown/react-formix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-xs">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block  duration-200">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block  duration-200">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/configuration" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block  duration-200">
                    Configuration
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block  duration-200">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-xs">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.npmjs.com/package/@webbycrown/react-formix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block  duration-200"
                  >
                    NPM Package
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/webbycrown/react-formix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block  duration-200"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://webbycrown.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block  duration-200"
                  >
                    WebbyCrown
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-xs">
                Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Need help? Check out our comprehensive documentation or reach out to our support team.
              </p>
              <a
                href="https://www.npmjs.com/package/@webbycrown/react-formix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View Documentation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="w-full bg-blue-50 dark:bg-black border-t border-blue-200 dark:border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <a
                  href="https://www.npmjs.com/package/@webbycrown/react-formix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  @webbycrown/formix
                </a>
              </p>
              <span className="hidden md:inline text-blue-300 dark:text-blue-700">|</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Made with <i className="fas fa-heart text-blue-600 dark:text-blue-400"></i> by{" "}
                <a
                  href="https://webbycrown.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  WebbyCrown
                </a>
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

