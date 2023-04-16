"use client";

import DashboardLayout from "@/app/components/adminPanel/adminLayout";
import Section from "@/app/components/layout/Section";
import { bgColors } from "@/app/context/colors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

const Contact = () => {
  const [data, setInputs] = useState({
    floating_first_name: "",
    floating_last_name: "",
    floating_email: "",
    floating_phone: "",
    floating_company: "",
    floating_message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const reRef = useRef<ReCAPTCHA>() as any;

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      data.floating_first_name &&
      data.floating_last_name &&
      data.floating_email &&
      data.floating_phone &&
      data.floating_company &&
      data.floating_message
    ) {
      try {
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        setIsLoading(true);

        const response = await fetch(`/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            floating_first_name: data.floating_first_name,
            floating_last_name: data.floating_last_name,
            floating_email: data.floating_email,
            floating_phone: data.floating_phone,
            floating_company: data.floating_company,
            floating_message: data.floating_message,
            token,
          }),
        });

        console.log(response.body)
        toast.success("Email inviata con successo!");

        setIsLoading(true);

        const { error } = await response.json();

        if (error) {
          return;
        } else {
        }

        setInputs({
          floating_first_name: "",
          floating_last_name: "",
          floating_email: "",
          floating_phone: "",
          floating_company: "",
          floating_message: "",
        });
      } catch (error) {
        toast.error("Errore durante l'invio della mail!");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (typeof document !== "undefined") {
    var menu = document.getElementById("menu");
  }

  function showMenu(flag: any) {
    menu?.classList.toggle("hidden");
  }

  return (
    <DashboardLayout>
      <Section
        bg={bgColors.darkBlue.value}
        className="text-gray-400 bg-gray-900 body-font relative"
      >
        <div className="p-10 w-full h-1"></div>

        <form
          className="container px-5 py-24 mx-auto"
          onSubmit={(data) => onSubmitForm(data)}
        >
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={data.floating_first_name}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <span>Nome</span>
                    <span className="text-red-600 pl-1">*</span>
                  </label>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={data.floating_last_name}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <span>Cognome</span>
                    <span className="text-red-600 pl-1">*</span>
                  </label>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={data.floating_email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <span>Indirizzo Email</span>
                    <span className="text-red-600 pl-1">*</span>
                  </label>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={data.floating_phone}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <span>Recapito telefonico</span>
                    <span className="text-red-600 pl-1">*</span>
                  </label>
                </div>
              </div>
              <div className="relative z-0 p-2 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={data.floating_company}
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <span>Azienda (Ex. Google)</span>
                  <span className="text-red-600 pl-1">*</span>
                </label>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    <span>Message</span>
                    <span className="text-red-600 pl-1">*</span>
                  </label>
                  <textarea
                    id="floating_message"
                    name="floating_message"
                    rows={6}
                    value={data.floating_message}
                    placeholder=" "
                    required
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex items-start mb-6 p-2">
                <div className="flex items-center h-5">
                  <input
                    id="floating_checkbox"
                    name="floating_checkbox"
                    type="checkbox"
                    value={""}
                    required
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium">
                  <span>Sono d'accordo con i </span>
                  <Link
                    href="/terms-conditions"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    <span>Termini & Condizioni</span>
                  </Link>
                  <span className="text-red-600 pl-1">*</span>
                </label>
              </div>
              <ReCAPTCHA
                className="required"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                size="invisible"
                ref={reRef}
              />
              <div className="text-center p-2 w-full">
                <button
                  type="submit"
                  onClick={() => showMenu(true)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-lg w-full sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span>Invia email</span>
                </button>
                {isLoading && (
                  <>
                    <div className="relative flex justify-center items-center">
                      <div
                        id="menu"
                        className="w-full h-screen bg-slate-900 bg-opacity-90 top-0 fixed left-0 ease-in duration-500 dark:bg-gray-900 sticky-0 z-50"
                      >
                        <div className="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
                          <div className="rounded-lg w-96 md:w-auto dark:bg-gray-700 bg-white relative flex flex-col justify-center items-center py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                            <div role="banner"></div>

                            <div className="mt">
                              <span className="sm:w-80 text-2xl dark:text-white leading-7 text-center text-gray-800">
                                Invio email . . .
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a className="text-green-400">info@dokirin.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </form>
      </Section>
    </DashboardLayout>
  );
};

export default Contact;
