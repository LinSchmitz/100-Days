import React from 'react';

export default function App() {
  return (
    <div className="container">
      <p>Based on Leetcode challenges</p>
      <p>Contents</p>

      <p>
        <a href="https://github.com/LinSchmitz/100-Days/tree/main/Day%201">
          Day 1 - [2619. Array Prototype Last]
        </a>
      </p>
      <p>Please ⭐ this repository if you loved it !</p>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <a href="https://x.com/LinSchmtz">X</a> |
      <a href="https://github.com/LinSchmitz">Github</a>
    </footer>
  );
}
