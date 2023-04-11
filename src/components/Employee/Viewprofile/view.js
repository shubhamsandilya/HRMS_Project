import React from "react";

export default function view() {
  return (
    <div className="container">
      <div id="content" className="content p-0">
        <div className="profile-header">
          <div className="profile-header-cover"></div>

          <div className="profile-header-content">
            <div className="profile-header-img">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />
            </div>

            <div className="profile-header-info">
              <h4 className="m-t-sm">Abhishek Shekhar</h4>
              <p className="m-b-sm">UXUI + Frontend Developer</p>
              <a href="#" className="btn btn-xs btn-primary mb-3">
                Edit Profile
              </a>
            </div>
          </div>
        </div>

        <table className="table table-profile">
          <thead>
            <tr>
              <th colspan="2">CONTACT INFORMATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="field">Mobile Phones</td>
              <td className="value">
                +91 6239583703
                <a href="#" className="m-l-10">
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td className="field">Email</td>
              <td className="value">
                Abhsihek@infinite.com
                <a href="#" className="m-l-10">
                  Edit
                </a>
              </td>
            </tr>

            <tr>
              <td className="field">Address</td>
              <td className="value">
                Near Tekari, Gaya
                <br />
                Bihar,824207
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-profile">
          <thead>
            <tr>
              <th colspan="2">BASIC INFORMATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="field">Birth of Date</td>
              <td className="value">
                November 4, 1989
                <a href="#" className="m-l-10">
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td className="field">Gender</td>
              <td className="value">
                Male
                <a href="#" className="m-l-10">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
