import React from "react";
import { ImTwitter, ImFacebook, ImLinkedin2, ImGithub } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

export default function Bottom() {
  return (
    <div className="bottom">
      <button>
        <a href="https://twitter.com/Olarotimi_">
          <ImTwitter />
        </a>
      </button>
      <button>
        <a href="https://instagram.com/Olarotimi_">
          <ImFacebook />
        </a>
      </button>
      <button>
        <a href="https://instagram.com/Olarotimi_">
          <FiInstagram />
        </a>
      </button>
      <button>
        <a href="https://twitter.com/Olarotimi_">
          <ImLinkedin2 />
        </a>
      </button>
      <button>
        <a href="https://github.com/Ola-rotimi">
          <ImGithub />
        </a>
      </button>
    </div>
  );
}
