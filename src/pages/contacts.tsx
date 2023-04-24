import Section from "@/components/layout/Section";
import Link from "next/link";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface ContactFormData {
  floating_first_name: string;
  floating_last_name: string;
  floating_phone: string;
  floating_company?: string;
  floating_email: string;
  floating_message: string;
  floating_checkbox: boolean;
}

export default function ContactPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: "onBlur",
    defaultValues: {
      floating_checkbox: false,
    },
  });

  const reRef = useRef<ReCAPTCHA>() as any;

  const onSubmit: SubmitHandler<ContactFormData> = async (data, param) => {
    param?.target.reset(); // Resetta il form
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast.success("Email sent successfully");
    } catch (error) {
      toast.error("Failed to send email");
    }

    setIsLoading(false);
  };

  return (
    <Section className="pt-24">
      <Toaster position="top-center" />

      <section className="text-gray-400 body-font bg-cyan-400/50">
        <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <div className="text-center w-full">
            <h1 className="text-5xl sm:text-6xl font-bold p-2 pb-10 tracking-tight text-center mb-4 bg-clip-text bg-gradient-to-r border-b dark:border-emerald-300 border-emerald-500 pr-10 pl-10 drop-shadow-xl shadow-gray-400">
              Contatti
            </h1>
            <p className="leading-relaxed mb-8 text-lg md:text-xl">
              Siamo un'azienda di sviluppo web ad alta tecnologia che si impegna
              a fornire prodotti eccellenti in tempo.
              <br />
              Ci piace capire le esigenze dei nostri clienti e superare le
              aspettative.
            </p>
          </div>
        </div>
      </section>

      <form
        className="container px-5 py-20 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 md:w-1/2 w-full">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-300 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                  {...register("floating_first_name", { required: true })}
                />
                {errors.floating_first_name && (
                  <span className="text-red-600 text-sm flex">
                    This field is required
                  </span>
                )}

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
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-300 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                  {...register("floating_last_name", { required: true })}
                />
                {errors.floating_last_name && (
                  <span className="text-red-600 text-sm flex">
                    This field is required
                  </span>
                )}

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
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-300 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                  {...register("floating_email", { required: true })}
                />
                {errors.floating_email && (
                  <span className="text-red-600 text-sm flex">
                    This field is required and must be a valid email
                  </span>
                )}
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
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-300 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                  {...register("floating_phone", { required: true })}
                />
                {errors.floating_phone && (
                  <span className="text-red-600 text-sm flex">
                    This field is required
                  </span>
                )}

                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <span>Recapito telefonico</span>
                  <span className="text-red-600 pl-1">*</span>
                </label>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="tel"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-300 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                  {...register("floating_company", { required: true })}
                />
                {errors.floating_company && (
                  <span className="text-red-600 text-sm flex">
                    This field is required
                  </span>
                )}

                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <span>Azienda (Ex. Google)</span>
                  <span className="text-red-600 pl-1">*</span>
                </label>
              </div>
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
                  rows={6}
                  {...register("floating_message", { required: true })}
                  placeholder=" "
                  required
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                {errors.floating_message && (
                  <span className="text-red-600 text-sm flex">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-start mb-6 p-2">
              <div className="flex items-center h-5">
                <input
                  id="floating_checkbox"
                  type="checkbox"
                  {...register("floating_checkbox", { required: true })}
                />
                {errors.floating_checkbox && (
                  <span className="text-red-600 text-sm flex">
                    This field is required
                  </span>
                )}
              </div>
              <label htmlFor="terms" className="ml-2 text-sm font-medium">
                <span>Sono d&apos;accordo con i </span>
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
                disabled={isLoading}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-lg w-full sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isLoading ? "Sending email..." : "Send email"}
              </button>
              {isLoading && (
                <>
                  <div className="relative flex justify-center items-center">
                    <div
                      id="menu"
                      className="w-full h-screen from-zinc-200 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30 bg-opacity-90 top-0 fixed left-0 ease-in duration-500 dark:bg-gray-900 sticky-0 z-50"
                    >
                      <div className="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
                        <div className="rounded-lg w-96 md:w-auto dark:bg-gray-700 bg-white relative flex flex-col justify-center items-center py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                          <div role="banner"></div>

                          <div className="mt">
                            <span className="sm:w-80 text-2xl dark:text-slate-300 leading-7 text-center text-gray-800">
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
  );
}
