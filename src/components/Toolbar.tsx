// components/Toolbar.tsx
import React from "react";
import { Editor } from "@tiptap/react";
import { Mark, Node } from "@tiptap/core";

interface ToolbarProps {
  editor: Editor | null;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap bg-gray-200 p-2 mb-2">
      {/* Text styles */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("bold") ? "bg-gray-400" : ""
        }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("italic") ? "bg-gray-400" : ""
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("strike") ? "bg-gray-400" : ""
        }`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("highlight") ? "bg-gray-400" : ""
        }`}
      >
        Highlight
      </button>

      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("heading", { level: 1 }) ? "bg-gray-400" : ""
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("heading", { level: 2 }) ? "bg-gray-400" : ""
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("heading", { level: 3 }) ? "bg-gray-400" : ""
        }`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("paragraph") ? "bg-gray-400" : ""
        }`}
      >
        Paragraph
      </button>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("bulletList") ? "bg-gray-400" : ""
        }`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("orderedList") ? "bg-gray-400" : ""
        }`}
      >
        Ordered List
      </button>

      {/* Code Block */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("codeBlock") ? "bg-gray-400" : ""
        }`}
      >
        Code Block
      </button>

      {/* Blockquote */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive("blockquote") ? "bg-gray-400" : ""
        }`}
      >
        Blockquote
      </button>

      {/* Text alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "left" }) ? "bg-gray-400" : ""
        }`}
      >
        Left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "center" }) ? "bg-gray-400" : ""
        }`}
      >
        Center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "right" }) ? "bg-gray-400" : ""
        }`}
      >
        Right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`mr-2 p-1 border rounded ${
          editor.isActive({ textAlign: "justify" }) ? "bg-gray-400" : ""
        }`}
      >
        Justify
      </button>
    </div>
  );
};

export default Toolbar;
