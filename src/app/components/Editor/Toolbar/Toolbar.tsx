import { Editor } from "@tiptap/react";
import ToolbarItem from "./Item";

export default function Toolbar({ editor }: { editor: Editor }) {
  if (!editor) throw new Error("what");

  return (
    <>
      <ToolbarItem
        text={"bold"}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <ToolbarItem
        text={"italic"}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <ToolbarItem
        text={"strike"}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <ToolbarItem
        text={"code"}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        isActive={editor.isActive("code")}
        onClick={() => editor.chain().focus().toggleCode().run()}
      />
      <ToolbarItem
        text={"clear marks"}
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      />
      <ToolbarItem
        text={"clear nodes"}
        onClick={() => editor.chain().focus().clearNodes().run()}
      />
      <ToolbarItem
        text={"paragraph"}
        isActive={editor.isActive("paragraph")}
        onClick={() => editor.chain().focus().setParagraph().run()}
      />
      <ToolbarItem
        text={"h1"}
        isActive={editor.isActive("heading", { level: 1 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      />
      <ToolbarItem
        text={"h2"}
        isActive={editor.isActive("heading", { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      />
      <ToolbarItem
        text={"h3"}
        isActive={editor.isActive("heading", { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      />
      <ToolbarItem
        text={"h4"}
        isActive={editor.isActive("heading", { level: 4 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      />
      <ToolbarItem
        text={"h5"}
        isActive={editor.isActive("heading", { level: 5 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      />
      <ToolbarItem
        text={"h6"}
        isActive={editor.isActive("heading", { level: 6 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      />
      <ToolbarItem
        text={"bullet list"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      />
      <ToolbarItem
        text={"ordered list"}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      />
      <ToolbarItem
        text={"code block"}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
      />
      <ToolbarItem
        text={"quote"}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
      />
      <ToolbarItem
        text={"horizontal rule"}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      />
      <ToolbarItem
        text={"hard break"}
        onClick={() => editor.chain().focus().setHardBreak().run()}
      />
      <ToolbarItem
        text={"undo"}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      />
      <ToolbarItem
        text={"redo"}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      />
    </>
  );
}
