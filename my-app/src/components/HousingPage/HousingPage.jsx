import React from "react";
import { Link } from "react-router-dom";

import "./HousingPage.css";

function HousingPage() {
  return (
    <div className="main-container">
      <div className="post-display">
        Hello
      </div>

      <table className="container-of-posts">
        <tr>
          <div className="post-container post-container-1">
          <table>
              <tr>Housing 1</tr>
              <tr><button type="submit">View Post</button></tr>
            </table>
          </div>
        </tr>
        
        <tr>
          <div className="post-container post-container-2">
          <table>
              <tr>Housing 2</tr>
              <tr><button type="submit">View Post</button></tr>
            </table>
          </div>
        </tr>

        <tr>
          <div className="post-container post-container-1">
            <table>
              <tr>Housing 3</tr>
              <tr><button type="submit">View Post</button></tr>
            </table>
          </div>
        </tr>

        <tr>
          <div className="post-container post-container-2">
            <table>
              <tr>Housing 4</tr>
              <tr><button type="submit">View Post</button></tr>
            </table>
          </div>
        </tr>
      </table>
    </div>
  );
}

export default HousingPage;
