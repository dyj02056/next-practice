"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>누른 횟수: {count}</p>
      <button onClick={() => setCount(count + 1)}>한 번 누르기</button>
    </div>
  );
}