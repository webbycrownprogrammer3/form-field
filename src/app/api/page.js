"use client";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-900/20 dark:to-black">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              Complete API Reference
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guide to the editor's API, plugin system, and advanced features. 
            Learn how to extend and customize the editor to fit your specific needs.
          </p>
        </div>

        <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Plugin System
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Extend functionality with custom plugins
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
            The plugin system is the heart of extensibility in this editor. Extend the editor with custom plugins 
            that can wrap text in HTML tags, execute document commands, or perform custom actions. Plugins integrate 
            seamlessly into the toolbar and provide a consistent user experience.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2"><i className="fas fa-lightbulb mr-2"></i> Plugin Types</h4>
            <p className="text-sm text-blue-700 dark:text-blue-200">
              Plugins can be one of four types: <strong>HTML Tag Plugins</strong> (wrap selected text), 
              <strong> Command Plugins</strong> (execute document commands), <strong>Action Plugins</strong> (custom functions), 
              or <strong>Type Plugins</strong> (built-in plugin types).
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">1. HTML Tag Plugin</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Wraps selected text with a custom HTML tag.
              </p>
              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto mb-2">
{`{
  name: "highlight",
  icon: "🖍️",
  title: "Highlight Text",
  tag: "mark"
}`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">2. Command Plugin</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Executes a document command (like formatBlock, bold, etc.).
              </p>
              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto mb-2">
{`{
  name: "heading2",
  icon: "H2",
  title: "Heading 2",
  cmd: "formatBlock",
  arg: "h2"
}`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">3. Action Plugin</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Executes a custom function when clicked.
              </p>
              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto mb-2">
{`{
  name: "timestamp",
  icon: "⏱️",
  title: "Insert Timestamp",
  action: (editor) => {
    const now = new Date();
    document.execCommand(
      "insertText", 
      false, 
      now.toLocaleString()
    );
  }
}`}
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">4. Type Plugin</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Uses built-in plugin types (like "timestamp").
              </p>
              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto mb-2">
{`{
  name: "timestamp",
  icon: "⏱️",
  title: "Insert Time",
  type: "timestamp"
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Complete Plugin Example */}
        <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Complete Plugin Example
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Real-world implementation with multiple plugin types
              </p>
            </div>
          </div>
          <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`import Editor from '@webbycrown/react-advanced-richtext-editor';
import { FaHighlighter, FaClock } from 'react-icons/fa';

const customPlugins = [
  {
    name: "timestamp",
    icon: <FaClock />,
    title: "Insert Timestamp",
    action: (editor) => {
      const now = new Date();
      const timestamp = now.toLocaleString();
      document.execCommand("insertText", false, timestamp);
    },
  },
  {
    name: "highlight",
    icon: <FaHighlighter />,
    title: "Highlight Text",
    tag: "mark"
  },
  {
    name: "heading2",
    icon: "H2",
    title: "Heading 2",
    cmd: "formatBlock",
    arg: "h2"
  }
];

function MyEditor() {
  const [content, setContent] = useState('');
  
  return (
    <Editor
      value={content}
      onChange={setContent}
      plugins={customPlugins}
      height={400}
    />
  );
}`}
          </pre>
        </div>

        {/* Supported Tags */}
        <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Supported HTML Tags
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Complete list of supported HTML elements
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            The editor supports a comprehensive set of HTML tags. Use the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">allowedTags</code> prop 
            to restrict which tags can be used. All tags are automatically sanitized using DOMPurify for security.
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Text & Structure Tags</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
              {["p", "h1", "h2", "h3", "h4", "h5", "h6", "div", "span", "br", "hr"].map((tag) => (
                <code key={tag} className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm font-mono border border-gray-200 dark:border-gray-600">
                  {`<${tag}>`}
                </code>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Formatting Tags</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
              {["strong", "em", "u", "s", "sup", "sub", "mark", "code", "pre"].map((tag) => (
                <code key={tag} className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm font-mono border border-gray-200 dark:border-gray-600">
                  {`<${tag}>`}
                </code>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">List & Block Tags</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
              {["ul", "ol", "li", "blockquote", "dl", "dt", "dd"].map((tag) => (
                <code key={tag} className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm font-mono border border-gray-200 dark:border-gray-600">
                  {`<${tag}>`}
                </code>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Media & Table Tags</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {["a", "img", "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption"].map((tag) => (
                <code key={tag} className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm font-mono border border-gray-200 dark:border-gray-600">
                  {`<${tag}>`}
                </code>
              ))}
            </div>
          </div>
        </div>

        {/* Plugin Properties */}
        <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Plugin Properties Reference
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Complete API for plugin configuration
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Property</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Type</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Required</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">name</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Yes</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Unique identifier for the plugin</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">icon</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string | ReactNode</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Yes</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Icon displayed in toolbar (emoji, text, or React component)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">title</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Yes</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Tooltip text shown on hover</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">tag</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">No</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">HTML tag to wrap selected text (for tag plugins)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">cmd</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">No</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Document command to execute (for command plugins)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">arg</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">No</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Argument for the command (for command plugins)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">action</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">function</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">No</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Custom function to execute (for action plugins)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-blue-600 dark:text-blue-400">type</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">string</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">No</td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">Built-in plugin type (e.g., "timestamp")</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-xl shadow-2xl p-8 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Security Features
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enterprise-grade security built-in
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Security is a top priority. The editor includes multiple layers of protection to ensure safe content handling 
            and prevent common web vulnerabilities like XSS attacks, malicious scripts, and unsafe HTML injection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-black rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🛡️</div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">DOMPurify Integration</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                All HTML content is automatically sanitized using DOMPurify, a battle-tested XSS sanitizer. 
                This ensures that malicious scripts, event handlers, and dangerous HTML are removed before content 
                is saved or displayed.
              </p>
            </div>
            
            <div className="bg-white dark:bg-black rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl"><i className="fas fa-lock"></i></div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Tag Whitelisting</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Use the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">allowedTags</code> prop 
                to restrict which HTML tags can be used in the editor. This provides fine-grained control over what 
                content users can create, perfect for comment systems and restricted content areas.
              </p>
            </div>
            
            <div className="bg-white dark:bg-black rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl"><i className="fas fa-clipboard-list"></i></div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Safe Paste</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Pasted content from external sources (Microsoft Word, Google Docs, web pages, etc.) is automatically 
                cleaned and sanitized. Malicious scripts, unwanted styles, and unsafe HTML are removed while preserving 
                formatting and structure.
              </p>
            </div>
            
            <div className="bg-white dark:bg-black rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl"><i className="fas fa-link"></i></div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Link Security</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Links automatically include security attributes (<code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs">target="_blank"</code>, 
                <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs">rel="noopener noreferrer"</code>) 
                to prevent security vulnerabilities like tabnabbing and window.opener attacks.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ Security Best Practices</h5>
            <ul className="text-sm text-yellow-700 dark:text-yellow-200 space-y-1 list-disc list-inside">
              <li>Always use the <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">allowedTags</code> prop to restrict HTML tags in user-generated content</li>
              <li>Never disable DOMPurify sanitization in production environments</li>
              <li>Validate and sanitize content on the server-side as well</li>
              <li>Use Content Security Policy (CSP) headers for additional protection</li>
            </ul>
          </div>
        </div>

        {/* Advanced Usage */}
        <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 mt-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Advanced Usage Patterns
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Real-world examples and best practices
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Creating a Custom Plugin with React Icons</h4>
              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`import { FaHighlighter } from 'react-icons/fa';

const highlightPlugin = {
  name: "highlight",
  icon: <FaHighlighter />,
  title: "Highlight Text",
  tag: "mark"
};`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Plugin with Custom Action</h4>
              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`const insertDatePlugin = {
  name: "insertDate",
  icon: "📅",
  title: "Insert Current Date",
  action: () => {
    const date = new Date().toLocaleDateString();
    document.execCommand("insertText", false, date);
  }
};`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Multiple Plugins Array</h4>
              <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`const plugins = [
  { name: "highlight", icon: "🖍️", title: "Highlight", tag: "mark" },
  { name: "timestamp", icon: "⏱️", title: "Insert Time", type: "timestamp" },
  { name: "h2", icon: "H2", title: "Heading 2", cmd: "formatBlock", arg: "h2" }
];

<Editor plugins={plugins} ... />`}
              </pre>
            </div>
          </div>
        </div>

      </div>
        <Footer />
    </div>
  );
}

