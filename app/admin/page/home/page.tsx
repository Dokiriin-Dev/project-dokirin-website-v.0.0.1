"use client";
import DashboardLayout from "@/app/components/adminPanel/adminLayout";
import Section from "@/app/components/layout/Section";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <DashboardLayout>
      <Section className={classNames("text-gray-700 body-font")}>
        <div className="p-10 w-full h-1"></div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="uppercase tracking-loose w-full text-sm text-teal-400">
              Qual è il tuo business?
            </p>
            <h1 className="title-font sm:text-7xl mb-4 my-4 text-5xl font-bold leading-tight">
              Il{" "}
              <span className="boujee-text text-6xl">
                sito web dei tuoi sogni
              </span>
              , su misura per le tue esigenze!
            </h1>
            <p className="mb-8 leading-relaxed md:text-lg text-md">
              Avere un Sito Web è estremamente importante, promuovi la tua
              attività online, mostra il tuo business ai tuoi clienti. Ogni tua
              idea di business può diventare realtà.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-full">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="https://kit.baliniz.com/cryptoxo/wp-content/uploads/sites/9/2021/05/bitcoin-6H5RSB8.png"
            />
          </div>
        </div>
      </Section>
      <Section className="text-gray-700 body-font border-t border-cyan-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-amber-500">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-amber-500 text-lg title-font font-medium">
                    Shooting Stars
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <Link
                    className="mt-3 text-indigo-500 inline-flex items-center"
                    href={""}
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-amber-500 text-lg title-font font-medium">
                    The Catalyzer
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <Link
                    className="mt-3 text-indigo-500 inline-flex items-center"
                    href={""}
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-amber-500 text-lg title-font font-medium">
                    Neptune
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <Link
                    className="mt-3 text-indigo-500 inline-flex items-center"
                    href={""}
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="text-gray-700 body-font border-t border-cyan-400">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/600x600/edf2f7/a5afbd"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-amber-500 text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <Link
                  className="mt-3 text-indigo-500 inline-flex items-center"
                  href={""}
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-amber-500 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <Link
                  className="mt-3 text-indigo-500 inline-flex items-center"
                  href={""}
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-amber-500 text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <Link
                  className="mt-3 text-indigo-500 inline-flex items-center"
                  href={""}
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="text-gray-700 body-font border-t border-cyan-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h2 className="sm:text-6xl text-4xl font-medium title-font mb-2 text-amber-500">
              i nostri servizi
            </h2>
            <p className="lg:w-1/3 w-full leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-cyan-400 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 w-3/4">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl text-amber-500 font-semibold title-font mb-2">
                    Creazoione di siti web
                  </h2>
                </div>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <Link
                  className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
                  href={""}
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-cyan-400 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 w-3/4">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl text-amber-500 font-semibold title-font mb-2">
                    Creazoione di siti web
                  </h2>
                </div>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <Link
                  className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
                  href={""}
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-cyan-400 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 w-3/4">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl text-amber-500 font-semibold title-font mb-2">
                    Creazoione di siti web
                  </h2>
                </div>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <Link
                  className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
                  href={""}
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-cyan-400 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 w-3/4">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl text-amber-500 font-semibold title-font mb-2">
                    Creazoione di siti web
                  </h2>
                </div>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <Link
                  className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
                  href={""}
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-cyan-400 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 w-3/4">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl text-amber-500 font-semibold title-font mb-2">
                    Creazoione di siti web
                  </h2>
                </div>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <Link
                  className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
                  href={""}
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-cyan-400 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 w-3/4">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl text-amber-500 font-semibold title-font mb-2">
                    Creazoione di siti web
                  </h2>
                </div>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <Link
                  className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
                  href={""}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </Section>
      <Section className="text-gray-700 body-font border-t border-cyan-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-amber-500">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Henry Letham
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p className="text-gray-500">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    John Doe
                  </h2>
                  <p className="text-gray-500">DevOps</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Martin Eden
                  </h2>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/100x90/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p className="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/104x94/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Alper Kamu
                  </h2>
                  <p className="text-gray-500">System</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-cyan-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/108x98/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-amber-500 title-font font-medium">
                    Rodrigo Monchi
                  </h2>
                  <p className="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="text-gray-700 body-font overflow-hidden border-t border-cyan-400">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/4 mt-48 hidden lg:block">
            <div className="mt-px border-t border-cyan-400 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p className="bg-gray-100 text-amber-500 h-12 text-center px-4 flex items-center justify-start -mt-px">
                Fingerstache disrupt
              </p>
              <p className="text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Franzen hashtag
              </p>
              <p className="bg-gray-100 text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Tilde art party
              </p>
              <p className="text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Banh mi cornhole
              </p>
              <p className="bg-gray-100 text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Waistcoat squid hexagon
              </p>
              <p className="text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Pinterest occupy authentic
              </p>
              <p className="bg-gray-100 text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Brooklyn helvetica
              </p>
              <p className="text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Long Feature Two
              </p>
              <p className="bg-gray-100 text-amber-500 h-12 text-center px-4 flex items-center justify-start">
                Feature One
              </p>
            </div>
          </div>
          <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-cyan-400 rounded-lg">
            <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-cyan-400 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">START</h3>
                <h2 className="text-5xl text-amber-500 font-medium leading-none mb-4 mt-2">
                  Free
                </h2>
                <span className="text-sm text-gray-600">Next 3 months</span>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-cyan-400">
                Schlitz single-origin
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="border-t border-cyan-400 p-6 text-center rounded-bl-lg">
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">PRO</h3>
                <h2 className="text-5xl text-amber-500 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                  $38
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600">
                  Charging $456 per year
                </span>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-cyan-400">
                Schlitz single-origin
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="p-6 text-center border-t border-cyan-400">
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-px border-2 border-cyan-400 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">BUSINESS</h3>
                <h2 className="text-5xl text-amber-500 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                  $54
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600">
                  Charging $648 per year
                </span>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-cyan-400">
                Schlitz single-origin
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="p-6 text-center border-t border-cyan-400">
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="text-gray-700 body-font border-t border-cyan-400">
        <div className="container px-5 py-16 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-amber-500 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </Section>
      <Section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
            ></iframe>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-green-400 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </Section>
    </DashboardLayout>
  );
};

export default HomePage;
