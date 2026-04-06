# React Advanced Rich Text Editor Demo

A comprehensive demonstration project for [@webbycrown/react-advanced-richtext-editor](https://www.npmjs.com/package/@webbycrown/react-advanced-richtext-editor) built with Next.js.

## Features Demonstrated

This demo showcases multiple use cases and features of the rich text editor:

1. **Basic Editor with State Management** - Track content changes, save, load, and clear functionality
2. **Pre-filled Content Editor** - Editor with initial HTML content
3. **HTML Output Preview** - View both rendered and raw HTML output
4. **Compact Editor** - Smaller editor instance for inline editing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

The package is already installed. If you need to reinstall:

```bash
npm install @webbycrown/react-advanced-richtext-editor
```

### Running the Demo

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the demo.

## Usage Examples

### Basic Usage

```jsx
import Editor from "@webbycrown/react-advanced-richtext-editor";
import "@webbycrown/react-advanced-richtext-editor/dist/styles.css";

function MyComponent() {
  const [content, setContent] = useState("");

  return (
    <Editor
      value={content}
      onChange={setContent}
      height={400}
      placeholder="Start typing..."
    />
  );
}
```

### Key Props

- `value` - The HTML content of the editor (controlled component)
- `onChange` - Callback function that receives the HTML content when it changes
- `height` - Height of the editor in pixels
- `placeholder` - Placeholder text shown when editor is empty

## Project Structure

```
src/
  app/
    layout.js      # Root layout with metadata
    page.js        # Main demo page with multiple examples
    globals.css    # Global styles
```

## Features

- ✅ Rich text formatting (bold, italic, underline)
- ✅ Headings and text alignment
- ✅ Lists (ordered and unordered)
- ✅ Links and images
- ✅ Customizable height
- ✅ Placeholder support
- ✅ Controlled component support
- ✅ Dark mode compatible

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
