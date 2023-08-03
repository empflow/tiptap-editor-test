"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar/Toolbar";

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  if (!editor) return null;

  return (
    <div className="m-auto flex min-h-[100dvh] flex-col lg:flex-row">
      <aside className="sticky top-0 z-10 flex flex-col gap-3 border-b border-light-2xl-gray bg-white p-3 lg:w-96 lg:border-r lg:px-5">
        <h2 className="text-xl font-medium">Toolbar</h2>
        <div className="flex flex-wrap gap-2 lg:grid lg:grid-cols-2">
          <Toolbar editor={editor} />
        </div>
      </aside>

      <div className="flex flex-grow px-3 pt-6 lg:px-5">
        <EditorContent className="flex flex-grow flex-col" editor={editor} />
      </div>
    </div>
  );
}

export default Editor;
