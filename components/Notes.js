"use client";

import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, text: "첫 번째 메모" },
    { id: 2, text: "Next.js 연습하기" },
  ]);
  const [text, setText] = useState("");
  const [nextId, setNextId] = useState(3);
  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);

  function startEdit(note) {
    setEditingId(note.id);
    setText(note.text);
    setError("");
  }

  function resetForm() {
    setEditingId(null);
    setText("");
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const value = text.trim();
    if (value === "") {
      setError("메모를 입력해 주세요.");
      return;
    }
    if (editingId === null) {
      setNotes([...notes, { id: nextId, text: value }]);
      setNextId(nextId + 1);
    } else {
      setNotes(notes.map((note) => {
        if (note.id === editingId) {
          return { ...note, text: value };
        }
        return note;
      }));
    }
    resetForm();
  }

  function handleDelete(note) {
    if (!window.confirm('"' + note.text + '" 메모를 삭제할까요?')) {
      return;
    }
    setNotes(notes.filter((item) => item.id !== note.id));
    if (editingId === note.id) {
      resetForm();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="note-text">{editingId === null ? "새 메모" : "메모 수정"}</label>
        <input id="note-text" value={text} onChange={(event) => setText(event.target.value)} />
        <div className="actions">
          <button type="submit">{editingId === null ? "등록" : "수정 저장"}</button>
          {editingId !== null && <button type="button" onClick={resetForm}>수정 취소</button>}
        </div>
        {error && <p className="error" role="alert">{error}</p>}
      </form>
      <p>메모 {notes.length}개</p>
      {notes.length === 0 && <p className="empty-notice">📝 등록된 메모가 없습니다. 위의 입력창에서 첫 번째 메모를 등록해 보세요!</p>}
      {notes.map((note) => (
        <article key={note.id}>
          <p>{note.text}</p>
          <div className="actions">
            <button onClick={() => startEdit(note)}>수정</button>
            <button onClick={() => handleDelete(note)}>삭제</button>
          </div>
        </article>
      ))}
    </div>
  );
}