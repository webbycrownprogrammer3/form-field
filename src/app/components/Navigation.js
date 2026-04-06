"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Overview" },
    { href: "/features", label: "Features" },
    { href: "/configuration", label: "Configuration" },
    { href: "/examples", label: "Examples" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-blue-200 dark:border-blue-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/assets/logo.svg" alt="Logo" className="w-20 h-20 object-contain" />
          
           
          </Link>
          <div className="flex items-center gap-4">
            {/* Main Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                        ? "bg-blue-600 text-white"
                        : "text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
