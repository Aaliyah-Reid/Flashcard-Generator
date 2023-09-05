import React from "react";

function CardNav() {
  return (
    <header class="fcpage-header">
      <div class="nav-bar">
        <h1>Aaliyah's FlashCards</h1>
        <h2 class="nav-headings">Your Sets</h2>

        <h3 class="subjects">Biology</h3>
        <div class="sub-topics">
          <ul>
            <li>Heart</li>
            <li>Brain</li>
            <li>Lungs</li>
          </ul>
        </div>

        <h3 class="subjects">Computing</h3>

        <div class="sub-topics">
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default CardNav;
