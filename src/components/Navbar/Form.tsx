import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { postsCreate } from "../../store/slices/posts.js";
import { PostType } from "../../api/api.js";

interface FormProps {
  onFormSuccess: () => void;
}

export default function Form({ onFormSuccess }: FormProps) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [markdown, setMarkdown] = useState<string>("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleMarkdownChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileText = event.target?.result as string;
        setMarkdown(fileText);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const post: PostType = { title, markdown };
    dispatch(postsCreate(post) as any);
    onFormSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto p-4 space-y-4"
    >
      <h1 className="text-center">Upload A Post!</h1>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="markdown"
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Write your markdown here..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
      />
      <span className="text-sm text-gray-500 flex justify-center w-full">
        OR
      </span>
      <div className="flex items-center space-x-2">
        <label className="flex-grow">
          <span className="sr-only">Choose file</span>
          <input
            type="file"
            accept=".md"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
        </label>
      </div>
      <input
        type="submit"
        value="Submit"
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all cursor-pointer"
      />
    </form>
  );
}
