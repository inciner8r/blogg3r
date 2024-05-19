import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface EditorProps {
  content: string;
  onContentChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ content, onContentChange }) => {
  const handleChange = (newCnt: any) => {
    onContentChange(newCnt);
  };
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <EditorContent
      editor={editor}
      className="min-h-[300px] border border-gray-300 p-2 rounded"
    />
  );
};

export default Editor;
