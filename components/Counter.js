"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>누른 횟수: {count}</p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => setCount(count + 1)}>한 번 누르기</button>
        <button onClick={() => setCount(0)}>초기화</button>
      </div>
    </div>
  );
}