import React from "react";

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  // const getBorderColor = (priority) => {
  //   switch (priority) {
  //     case "High":
  //       return "border-red-500";
  //     case "Medium":
  //       return "border-yellow-500";
  //     case "Low":
  //       return "border-green-500";
  //     default:
  //       return "border-gray-300"; // fallback
  //   }
  // };
  const getBorderColor = (priority) => {
    const colors = {
      High: "border-red-500",
      Medium: "border-yellow-500",
      Low: "border-green-500",
    };
    return colors[priority] || "border-gray-300";
  };
  return (
    <div className="space-y-4">
      {notes.map((note) => {
        const borderColor = getBorderColor(note.priority);
        return (
          <div
            key={note.id}
            className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${borderColor}`}
          >
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> {note.category}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Description:</strong> {note.description}
            </p>
            <button
              onClick={() => deleteNote(note.id)}
              className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
            >
              🗑️Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
