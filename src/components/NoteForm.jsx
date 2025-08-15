import React, { useState } from "react";
import SelectInput from "./inputs/SelectInput";
import TextInput from "./inputs/TextInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });
  const [isFormVisible, setIsFormVisible] = useState("false");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newNote = {
      id: Date.now(),
      ...formData,
    };

    setNotes([newNote, ...notes]);
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <React.Fragment>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form X" : "Add New Note +"}
      </button>
      {isFormVisible && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            options={[
              { value: "High", label: "High" },
              {
                value: "Medium",
                label: "Medium",
              },
              { value: "Low", label: "Low" },
            ]}
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            options={[
              { value: "Work", label: "Work" },
              { value: "Personal", label: "Personal" },
              { value: "Ideas", label: "Ideas" },
            ]}
          />

          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              name="description"
              type="text"
              className="w-full border rounded-lg"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button>Add Note</button>
        </form>
      )}
    </React.Fragment>
  );
};

export default NoteForm;
