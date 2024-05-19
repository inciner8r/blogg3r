// components/Toolbar.tsx
import React from "react";
import { Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHighlighter,
  FaHeading,
  FaListUl,
  FaListOl,
  FaCode,
  FaQuoteRight,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaSun,
  FaMoon,
} from "react-icons/fa";

interface ToolbarProps {
  editor: Editor | null;
  //   isDarkMode: boolean;
  //   toggleDarkMode: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  editor,
  //   isDarkMode,
  //   toggleDarkMode,
}) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap p-2 mb-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      {/* Theme Toggle
      <button onClick={toggleDarkMode} className="mr-2 p-1 border rounded">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button> */}

      {/* Text styles */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("bold") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("italic") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("strike") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("highlight") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaHighlighter />
      </button>

      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("heading", { level: 1 })
            ? "bg-gray-400 dark:bg-gray-600"
            : ""
        }`}
      >
        <FaHeading className="transform scale-150" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("heading", { level: 2 })
            ? "bg-gray-400 dark:bg-gray-600"
            : ""
        }`}
      >
        <FaHeading className="transform scale-125" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("heading", { level: 3 })
            ? "bg-gray-400 dark:bg-gray-600"
            : ""
        }`}
      >
        <FaHeading />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("paragraph") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        P
      </button>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("bulletList") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("orderedList") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaListOl />
      </button>

      {/* Code Block */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("codeBlock") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaCode />
      </button>

      {/* Blockquote */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("blockquote") ? "bg-gray-400 dark:bg-gray-600" : ""
        }`}
      >
        <FaQuoteRight />
      </button>

      {/* Text alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "left" })
            ? "bg-gray-400 dark:bg-gray-600"
            : ""
        }`}
      >
        <FaAlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "center" })
            ? "bg-gray-400 dark:bg-gray-600"
            : ""
        }`}
      >
        <FaAlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "right" })
            ? "bg-gray-400 dark:bg-gray-600"
            : ""
        }`}
      >
        <FaAlignRight />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "justify" })
            ? "bg-gray-400 dark:bg-gray-600"
            : ""
        }`}
      >
        <FaAlignJustify />
      </button>
    </div>
  );
};

export default Toolbar;
