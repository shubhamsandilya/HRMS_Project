import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import card2 from "../../assets/images/instant-settlement-bghover.svg";
import card1 from "../../assets/images/instant-settlement-bg.svg";
// import BackgroundImage from '../../assets/images/gate.jp'
import videoBg from "../../assets/images/cutm.m4v";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="wrapper">
      {/* NAVBAR */}
      <nav className="navbar--">
        <nav className="navbar navbar-expand-lg navbar-success fixed-top mask-custom shadow-0 fixed">
          <div className="container-fluid">
            <Link className="navbar-brand " to="/">
              HRMS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav" id="nav1">
                <Link
                  to="/login"
                  className="nav-link active"
                  aria-current="page"
                >
                  Login
                </Link>
                <Link
                  to="/applicantjobs"
                  className="nav-link active"
                  aria-current="page"
                >
                  Jobs
                </Link>
                <Link
                  to="/dashhome"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </nav>
      {/* MAIN-SECTION */}
      <div className="main">
        <video className="video" src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1 className="landing-heading">Welcome To</h1>
          <p className="Topic">Human Resourse Management System</p>
        </div>
      </div>
      {/* COURSE-SECTION */}
      <div className="w-full grid grid-cols-3 gap-y-10 gap-x-4 relative z-[100] ml-4 mt-6">
        {/* <!--item 1--> */}
        <div className="relative flex items-center z-0 hover:scale-105">
          <h2 className="text-blue-600 font-mullish font-extrabold text-4xl leading-[3.375rem]">
            Courses we
            <span className="text-lightBlue500 text-4xl"></span> <br />
            Provide
          </h2>
        </div>
        {/* <!--card 1--> */}
        <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale(2)">
          <a href="#">
            <img
              className=" absolute object-fit rounded-t-lg bg-cover"
              src={card1}
              height={15}
              style={{ backgroundImage: `url(${isHovered ? card1 : card2})` }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}/>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                M.S. Swaminathan School of Agriculture
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              M.S. Swaminathan School of Agriculture (MSSSOA) is located in
              Gajapati district in South Odisha that is among poorest districts
              of India
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/* <!--card 2--> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                School of Engineering
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Centurion University of Technology and Management, Odisha invites
              application for FULL TIME Ph.D in different disciplines of
              Engineering and Technology, Applied Sciences, Agriculture,
              Management, Humanities and Social Sciences,
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/* <!--card 3--> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                School Of Vocational Education and Training
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Centurion University of Technology and Management is pioneering
              the concept of a School of Vocational Training in India with an
              overall objective of building human resource capability, resulting
              in employability as well as entrepreneurship
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/* <!--card 4--> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                School Of Fisheries
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We empower students, faculty and management to collaborate
              efficiently and use insights effectively, benchmarking quality
              education while creating personalized learning experience Here are
              the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/* <!--card 5--> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                School Of Pharmacy
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              In reverse chronological order.Here are the biggest enterprise
              technology acquisitions of 2023 so far,Here are the biggest
              enterprise technology acquisitions of 2023 so far benchmarking
              quality education while creating personalized learning experience,
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* CONTACT US */}

      {/* <!-- Container for demo purpose --> */}
      <div className=" bg-blue-100 ml-10 mr-10 mt-24 pt-24 my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className=" text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">Contact us</h2>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis.
              </p>
              <p className="text-gray-500 mb-2">HIG-4, Floor 1 and 2, Jaydev Vihar,Opp Pal Heights, Bhubaneswar, Dist: Khurda, Odisha, India.</p>
              <p className="text-gray-500 mb-2">+ 91 863383829</p>
              <p className="text-gray-500 mb-2">Cutm@cutm.ac.in</p>
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <form className="bg-blue-100">
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck87"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="exampleCheck87"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
}
