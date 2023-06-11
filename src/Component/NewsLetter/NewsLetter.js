import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const NewsLetter = () => {
  return (
    <div className="ml-12 mt-12">
      <h1 className="text-5xl font-bold">
        Get Smarter about your <br /> career
      </h1>
      <p className="text-lg mt-4">
        Get the <span className="font-bold">5-minute newsletter</span> keeping
        about smart career
      </p>

      <div className="mt-5">
        <form
          action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber"
          method="post" id="revue-form" name="revue-form" target="_blank">
          <div className="card md:w-1/2 bg-base-100 shadow-xl">
            <div className="card-body flex flex-row justify-between">
              <AiOutlineMail className="mt-3 w-6 h-6" />
              <input
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
                className="w-[100%] focus:outline-none"
              />
              <button className="btn  bg-[#DC3545] text-white">Join Free</button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-12 mb-12">   
        <p className="font-semibold">We're committed to your privacy. DashCareer uses the information you provide to contact you about our <br />relevant content and services. You may unsubscribe from these communications at any time. <br /> For more information, check out our Privacy Policy.</p>
      </div>
    </div>
  );
};

export default NewsLetter;
