import React from "react";

export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen !bg-cover !bg-center !font-iranSans"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold ">اصغر فود</h1>
            <p className="mb-5">به رستوران اصفرفود خوش آمدید</p>
          </div>
        </div>
      </div>
    </>
  );
}
