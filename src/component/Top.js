import React from "react";
import { GrMail } from "react-icons/gr";

export default function Top() {
  return (
    <div className="top">
      <img
        src="https://pbs.twimg.com/profile_images/1549344051048206338/X9PaUsQa_400x400.jpg"
        alt="profile-avatar"
        width="317px"
        height="317px"
      />
      <h1>Olarotimi Adamson</h1>
      <h3>Frontend Developer</h3>

      <button className="mail">
        <GrMail />
        <a href="mailto:olarotimiadamson@yahoo.com">Email</a>
      </button>
    </div>
  );
}
