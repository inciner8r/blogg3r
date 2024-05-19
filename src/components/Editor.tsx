import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import "../styles/editor.css";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import { Color } from "@tiptap/extension-color";

interface EditorProps {
  content: string;
  onContentChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ content, onContentChange }) => {
  const [contentPreview, setcontentPreview] = useState("");
  const handleChange = (newCnt: any) => {
    onContentChange(newCnt);
  };

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({
        HTMLAttributes: {
          ListItem,
        },
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
      setcontentPreview(editor.getHTML());
      console.log(contentPreview);
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[300px] border border-gray-300 p-2 rounded bg-white text-black"
      />
      {/* <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Live Preview</h2>
        <div
          className="border p-4"
          dangerouslySetInnerHTML={{ __html: contentPreview }}
        />
      </div> */}
    </div>
  );
};

export default Editor;
