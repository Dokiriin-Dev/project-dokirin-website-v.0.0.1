"use client";

import { PageData } from "@/components/adminPanel/adminLayout";
import AdminModal from "@/components/adminPanel/adminModal";
import Container from "@/components/layout/Container";
import ImageUploader from "@/components/layout/ImageUploader";
import RichText from "@/components/layout/RichText";
import Section from "@/components/layout/Section";
import {
  getDatabaseData,
  setDatabaseData,
  useIsEditable,
} from "@/firebase/firebase.config";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Descendant, Element, Text } from "slate";

const PAGE_NAME = "pages/index";

const defaultData: PageData = {
  titleFirst: [{ children: [{ text: "Default Title" }] }],
  descFirst: [{ children: [{ text: "Default Description" }] }],
  titleSecond: [{ children: [{ text: "Default Title" }] }],
  titleThird: [{ children: [{ text: "Default Title" }] }],
  titleForth: [{ children: [{ text: "Default Title" }] }],
  titleFirstCard: [{ children: [{ text: "Default Description" }] }],
  descFirstCard: [{ children: [{ text: "Default Description" }] }],
  titleSecondCard: [{ children: [{ text: "Default Description" }] }],
  descSecondCard: [{ children: [{ text: "Default Description" }] }],
  titleThirdCard: [{ children: [{ text: "Default Description" }] }],
  descThirdCard: [{ children: [{ text: "Default Description" }] }],
  titleFourthCard: [{ children: [{ text: "Default Description" }] }],
  descFourthCard: [{ children: [{ text: "Default Description" }] }],
  titleFifthCard: [{ children: [{ text: "Default Description" }] }],
  descFifthCard: [{ children: [{ text: "Default Description" }] }],
  titleSixthCard: [{ children: [{ text: "Default Description" }] }],
  descSixthCard: [{ children: [{ text: "Default Description" }] }],
  titleSeventhCard: [{ children: [{ text: "Default Description" }] }],
  descSeventhCard: [{ children: [{ text: "Default Description" }] }],
  titleEighthCard: [{ children: [{ text: "Default Description" }] }],
  descEighthCard: [{ children: [{ text: "Default Description" }] }],
  titleFirstServices: [{ children: [{ text: "Default Description" }] }],
  descFirstServices: [{ children: [{ text: "Default Description" }] }],
  titleFirstCardServices: [{ children: [{ text: "Default Description" }] }],
  descFirstCardServices: [{ children: [{ text: "Default Description" }] }],
  titleSecondCardServices: [{ children: [{ text: "Default Description" }] }],
  descSecondCardServices: [{ children: [{ text: "Default Description" }] }],
  titleThirdCardServices: [{ children: [{ text: "Default Description" }] }],
  descThirdCardServices: [{ children: [{ text: "Default Description" }] }],
  titleFourthCardServices: [{ children: [{ text: "Default Description" }] }],
  descFourthCardServices: [{ children: [{ text: "Default Description" }] }],
  titleFifthCardServices: [{ children: [{ text: "Default Description" }] }],
  descFifthCardServices: [{ children: [{ text: "Default Description" }] }],
  titleSixthCardServices: [{ children: [{ text: "Default Description" }] }],
  descSixthCardServices: [{ children: [{ text: "Default Description" }] }],
  descTestimonial: [{ children: [{ text: "Default Description" }] }],
  nameTestimonial: [{ children: [{ text: "Default Description" }] }],
  descProfessionTestimonial: [{ children: [{ text: "Default Description" }] }],
};

export default function HomePage() {
  const [data, setData] = useState<PageData>(defaultData);
  const [dataText, setDataText] = useState<string>("");
  const isEditable = useIsEditable(); // Ottieni il valore di isEditable
  const [isSaving, setIsSaving] = useState(false);
  const [isDataModified, setIsDataModified] = useState(false); // Stato per indicare se i dati sono stati modificati

  const getTextFromDescendants = useCallback(
    (descendants: Descendant[]): string => {
      const firstChild = descendants[0];
      if (Text.isText(firstChild)) {
        return firstChild.text;
      } else if (Element.isElement(firstChild)) {
        return getTextFromDescendants(firstChild.children);
      }
      return "";
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getDatabaseData<PageData>(PAGE_NAME);
        if (fetchedData) {
          setData(fetchedData);
          const fieldNames: (keyof PageData)[] = [
            "titleFirst",
            "descFirst",
            "titleSecond",
            "titleThird",
            "titleForth",
            "titleFirstCard",
            "descFirstCard",
            "titleSecondCard",
            "descSecondCard",
            "titleThirdCard",
            "descThirdCard",
            "titleFourthCard",
            "descFourthCard",
            "titleFifthCard",
            "descFifthCard",
            "titleSixthCard",
            "descSixthCard",
            "titleSeventhCard",
            "descSeventhCard",
            "titleEighthCard",
            "descEighthCard",
            "titleFirstServices",
            "descFirstServices",
            "titleFirstCardServices",
            "descFirstCardServices",
            "titleSecondCardServices",
            "descSecondCardServices",
            "titleThirdCardServices",
            "descThirdCardServices",
            "titleFourthCardServices",
            "descFourthCardServices",
            "titleFifthCardServices",
            "descFifthCardServices",
            "titleSixthCardServices",
            "descSixthCardServices",
            "descTestimonial",
            "nameTestimonial",
            "descProfessionTestimonial",
          ];
          const newTextValues = fieldNames.map((fieldName) => {
            const value = fetchedData[fieldName];
            return getTextFromDescendants(value);
          });

          setDataText(newTextValues.join(""));
        } else {
          setData(defaultData);
        }
      } catch (error) {
        console.error("Error retrieving data from the database:", error);
      }
    };

    fetchData();
  }, [getTextFromDescendants]);

  const handleDataChange = (field: keyof PageData, value: Descendant[]) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
    const text = getTextFromDescendants(value);
    setDataText(text);
    setIsDataModified(true); // Imposta lo stato di modifica dei dati a true quando i dati vengono modificati
  };

  // Funzione per il salvataggio dei dati nel database
  const handleDataSave = (data: PageData) => {
    setIsSaving(true);
    try {
      setDatabaseData(PAGE_NAME, data);
      toast.success(`Dati salvati nel database`);
      setIsDataModified(false); // Imposta lo stato di modifica dei dati a false dopo il salvataggio
    } catch (error) {
      toast.error(`Errore durante il salvataggio dei dati nel database`);
    } finally {
      setIsSaving(false);
    }
  };

  const fileInputRefs: {
    indexFirst: React.RefObject<HTMLInputElement>;
    indexSecond: React.RefObject<HTMLInputElement>;
  } = {
    indexFirst: useRef<HTMLInputElement>(null),
    indexSecond: useRef<HTMLInputElement>(null),
  };

  /**
   * Frame
   */

  const location = "Rimini, Italy";
  const officeAddress = "Antonio Rosmini Serbati, 58";
  const width = "100%";
  const height = "100%";
  const mapUrl = `https://maps.google.com/maps?width=${encodeURIComponent(
    width
  )}&height=${encodeURIComponent(height)}&hl=en&q=${encodeURIComponent(
    location + " " + officeAddress
  )}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

  return (
    <>
      {dataText ? (
        <>
          <Section className="text-base">
            {isEditable && (
              <Toaster position="top-center" containerClassName="text-sm" />
            )}
            {/* <div className="p-1 w-full h-1"></div> */}
            <div className="elementor-background-header h-screen w-screen z-0 absolute"></div>
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center h-screen place-content-center">
              <div className="lg:flex-grow lg:w-full md:w-1/2 w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-40">
                <p className="uppercase tracking-loose w-full text-sm text-teal-400">
                  Qual è il tuo business?
                </p>
                <h1 className="boujee-text title-font sm:text-8xl mb-4 my-4 text-5xl font-bold leading-tight">
                  Il sito web dei tuoi sogni
                </h1>
                <RichText
                  value={data.descFirst}
                  onChange={(value) => handleDataChange("descFirst", value)}
                  placeholder="Inserisci il testo..."
                  renderBlock={(props) => (
                    <p className="leading-relaxed mb-8 md:text-lg text-md">
                      {props.children}
                    </p>
                  )}
                  renderHighlight={(props) => (
                    <span {...props.attributes}>{props.children}</span>
                  )}
                />

                <div className="flex w-full md:justify-start justify-center">
                  <button className="inline-flex text-slate-300 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-4/12 justify-center">
                    Button
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg w-3/12 justify-center">
                    Button
                  </button>
                </div>
              </div>
              <div className="lg:w-full md:w-1/2 w-full">
                <div className="relative z-40 flex place-items-center place-content-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                  <ImageUploader
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    inputRef={fileInputRefs.indexFirst}
                    imageKey={"indexFirst"}
                    alt={"indexFirst"}
                    width={280}
                    height={37}
                  />
                </div>
              </div>
            </div>
          </Section>
          <Section className="text-gray-700 body-font border-t border-cyan-400 relative text-base">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <RichText
                  value={data.titleSecond}
                  onChange={(value) => handleDataChange("titleSecond", value)}
                  placeholder="Inserisci il testo..."
                  renderBlock={(props) => (
                    <h3 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                      {props.children}
                    </h3>
                  )}
                />

                <RichText
                  value={data.titleThird}
                  onChange={(value) => handleDataChange("titleThird", value)}
                  placeholder="Inserisci il testo..."
                  renderBlock={(props) => (
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-amber-500">
                      {props.children}
                    </h2>
                  )}
                />
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-slate-300 flex-shrink-0">
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

                      <RichText
                        value={data.titleFirstCard}
                        onChange={(value) =>
                          handleDataChange("titleFirstCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-amber-500 text-lg title-font font-medium">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <div className="flex-grow">
                      <RichText
                        value={data.descFirstCard}
                        onChange={(value) =>
                          handleDataChange("descFirstCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />
                      <Link
                        className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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
                  <div className="flex rounded-lg h-full bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-slate-300 flex-shrink-0">
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

                      <RichText
                        value={data.titleSecondCard}
                        onChange={(value) =>
                          handleDataChange("titleSecondCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-amber-500 text-lg title-font font-medium">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <div className="flex-grow">
                      <RichText
                        value={data.descSecondCard}
                        onChange={(value) =>
                          handleDataChange("descSecondCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />
                      <Link
                        className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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
                  <div className="flex rounded-lg h-full bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-slate-300 flex-shrink-0">
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
                      <RichText
                        value={data.titleThirdCard}
                        onChange={(value) =>
                          handleDataChange("titleThirdCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-amber-500 text-lg title-font font-medium">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <div className="flex-grow">
                      <RichText
                        value={data.descThirdCard}
                        onChange={(value) =>
                          handleDataChange("descThirdCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />

                      <Link
                        className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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
          <Section className="text-gray-400 body-font text-base border-t border-cyan-400">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap w-full">
                <div className="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6 text-base">
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-cyan-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <RichText
                        value={data.titleFourthCard}
                        onChange={(value) =>
                          handleDataChange("titleFourthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="font-medium title-font text-sm text-cyan-500 mb-1 tracking-wider">
                            {props.children}
                          </h2>
                        )}
                      />
                      <RichText
                        value={data.descFourthCard}
                        onChange={(value) =>
                          handleDataChange("descFourthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-cyan-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
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
                    <div className="flex-grow pl-4">
                      <RichText
                        value={data.titleFifthCard}
                        onChange={(value) =>
                          handleDataChange("titleFifthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="font-medium title-font text-sm text-cyan-500 mb-1 tracking-wider">
                            {props.children}
                          </h2>
                        )}
                      />
                      <RichText
                        value={data.descFifthCard}
                        onChange={(value) =>
                          handleDataChange("descFifthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-cyan-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <RichText
                        value={data.titleSixthCard}
                        onChange={(value) =>
                          handleDataChange("titleSixthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="font-medium title-font text-sm text-cyan-500 mb-1 tracking-wider">
                            {props.children}
                          </h2>
                        )}
                      />
                      <RichText
                        value={data.descSixthCard}
                        onChange={(value) =>
                          handleDataChange("descSixthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-cyan-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
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
                    <div className="flex-grow pl-4">
                      <RichText
                        value={data.titleSeventhCard}
                        onChange={(value) =>
                          handleDataChange("titleSeventhCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="font-medium title-font text-sm text-cyan-500 mb-1 tracking-wider">
                            {props.children}
                          </h2>
                        )}
                      />
                      <RichText
                        value={data.descSeventhCard}
                        onChange={(value) =>
                          handleDataChange("descSeventhCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <RichText
                        value={data.titleEighthCard}
                        onChange={(value) =>
                          handleDataChange("titleEighthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="font-medium title-font text-sm text-cyan-500 mb-1 tracking-wider">
                            {props.children}
                          </h2>
                        )}
                      />
                      <RichText
                        value={data.descEighthCard}
                        onChange={(value) =>
                          handleDataChange("descEighthCard", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <p className="leading-relaxed text-base">
                            {props.children}
                          </p>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/6 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
                  <ImageUploader
                    className="w-full"
                    inputRef={fileInputRefs.indexSecond}
                    imageKey={"indexSecond"}
                    alt={"indexSecond"}
                    width={280}
                    height={37}
                  />
                </div>
              </div>
            </div>
          </Section>
          <Section className="text-gray-700 body-font border-t border-cyan-400 text-base">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <RichText
                  value={data.titleFirstServices}
                  onChange={(value) =>
                    handleDataChange("titleFirstServices", value)
                  }
                  placeholder="Inserisci il testo..."
                  renderBlock={(props) => (
                    <h2 className="sm:text-6xl text-4xl font-medium title-font mb-2 text-amber-500">
                      {props.children}
                    </h2>
                  )}
                />
                <RichText
                  value={data.descFirstServices}
                  onChange={(value) =>
                    handleDataChange("descFirstServices", value)
                  }
                  placeholder="Inserisci il testo..."
                  renderBlock={(props) => (
                    <p className="w-full leading-relaxed text-base">
                      {props.children}
                    </p>
                  )}
                />
              </div>

              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className=" bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-6 rounded-lg">
                    <div className="flex items-center mb-4 w-full">
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

                      <RichText
                        value={data.titleFirstCardServices}
                        onChange={(value) =>
                          handleDataChange("titleFirstCardServices", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-xl text-amber-500 font-semibold title-font mb-2 pl-4">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <RichText
                      value={data.descFirstCardServices}
                      onChange={(value) =>
                        handleDataChange("descFirstCardServices", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed text-base line-clamp-3">
                          {props.children}
                        </p>
                      )}
                    />

                    <Link
                      className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-6 rounded-lg">
                    <div className="flex items-center mb-4 w-full">
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
                      <RichText
                        value={data.titleSecondCardServices}
                        onChange={(value) =>
                          handleDataChange("titleSecondCardServices", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-xl text-amber-500 font-semibold title-font mb-2 pl-4">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <RichText
                      value={data.descSecondCardServices}
                      onChange={(value) =>
                        handleDataChange("descSecondCardServices", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed text-base line-clamp-3">
                          {props.children}
                        </p>
                      )}
                    />
                    <Link
                      className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className=" bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-6 rounded-lg">
                    <div className="flex items-center mb-4 w-full">
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
                      <RichText
                        value={data.titleThirdCardServices}
                        onChange={(value) =>
                          handleDataChange("titleThirdCardServices", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-xl text-amber-500 font-semibold title-font mb-2 pl-4">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <RichText
                      value={data.descThirdCardServices}
                      onChange={(value) =>
                        handleDataChange("descThirdCardServices", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed text-base line-clamp-3">
                          {props.children}
                        </p>
                      )}
                    />
                    <Link
                      className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className=" bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-6 rounded-lg">
                    <div className="flex items-center mb-4 w-full">
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
                      <RichText
                        value={data.titleFourthCardServices}
                        onChange={(value) =>
                          handleDataChange("titleFourthCardServices", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-xl text-amber-500 font-semibold title-font mb-2 pl-4">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <RichText
                      value={data.descFourthCardServices}
                      onChange={(value) =>
                        handleDataChange("descFourthCardServices", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed text-base line-clamp-3">
                          {props.children}
                        </p>
                      )}
                    />
                    <Link
                      className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className=" bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-6 rounded-lg">
                    <div className="flex items-center mb-4 w-full">
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
                      <RichText
                        value={data.titleFifthCardServices}
                        onChange={(value) =>
                          handleDataChange("titleFifthCardServices", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-xl text-amber-500 font-semibold title-font mb-2 pl-4">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <RichText
                      value={data.descFifthCardServices}
                      onChange={(value) =>
                        handleDataChange("descFifthCardServices", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed text-base line-clamp-3">
                          {props.children}
                        </p>
                      )}
                    />
                    <Link
                      className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 p-6 rounded-lg">
                    <div className="flex items-center mb-4 w-full">
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
                      <RichText
                        value={data.titleSixthCardServices}
                        onChange={(value) =>
                          handleDataChange("titleSixthCardServices", value)
                        }
                        placeholder="Inserisci il testo..."
                        renderBlock={(props) => (
                          <h2 className="text-xl text-amber-500 font-semibold title-font mb-2 pl-4">
                            {props.children}
                          </h2>
                        )}
                      />
                    </div>
                    <RichText
                      value={data.descSixthCardServices}
                      onChange={(value) =>
                        handleDataChange("descSixthCardServices", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed text-base line-clamp-3">
                          {props.children}
                        </p>
                      )}
                    />
                    <Link
                      className="text-indigo-600 hover:text-indigo-400 mt-3 text-base flex justify-end items-center w-full"
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

          <Section className="text-gray-400 body-font border-t border-cyan-400">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                    Pitchfork Kickstarter Taxidermy
                  </h1>
                  <div className="h-1 w-40 bg-cyan-400 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven&#39;t heard of them man bun deep jianbing
                  selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 bg-opacity-40 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/720x400"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Chichen Itza
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 bg-opacity-40 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/721x401"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Colosseum Roma
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 bg-opacity-40 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/722x402"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Great Pyramid of Giza
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 bg-opacity-40 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/723x403"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      San Francisco
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section className="text-gray-700 body-font overflow-hidden border-t border-cyan-400 text-base">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="lg:w-1/4 mt-48 hidden lg:block">
                <div className="mt-px border-t  bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
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
              <div className="flex lg:w-3/4 w-full flex-wrap lg: bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300 rounded-lg">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <button className="flex items-center mt-auto text-slate-300 bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
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
                      Literally you probably haven&#39;t heard of them jean
                      shorts.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-amber-500 relative">
                  <span className="bg-indigo-500 text-slate-300 px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <button className="flex items-center mt-auto text-slate-300 bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
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
                      Literally you probably haven&#39;t heard of them jean
                      shorts.
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-slate-300 rounded-full flex-shrink-0">
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
                    <button className="flex items-center mt-auto text-slate-300 bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
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
                      Literally you probably haven&#39;t heard of them jean
                      shorts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section className="text-gray-400 body-font border-t border-cyan-400">
            <div className="container px-5 py-24 mx-auto">
              <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
                Testimonials
              </h1>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-cyan-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <RichText
                      value={data.descTestimonial}
                      onChange={(value) =>
                        handleDataChange("descTestimonial", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed mb-6">{props.children}</p>
                      )}
                    />

                    <div className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/107x107"
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <div className="flex-grow flex flex-col pl-4">
                        <RichText
                          value={data.nameTestimonial}
                          onChange={(value) =>
                            handleDataChange("nameTestimonial", value)
                          }
                          placeholder="Inserisci il testo..."
                          renderBlock={(props) => (
                            <span className="title-font font-medium text-white">
                              {props.children}
                            </span>
                          )}
                        />
                        <RichText
                          value={data.descProfessionTestimonial}
                          onChange={(value) =>
                            handleDataChange("descProfessionTestimonial", value)
                          }
                          placeholder="Inserisci il testo..."
                          renderBlock={(props) => (
                            <p className="text-gray-500 text-sm">
                              {props.children}
                            </p>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-cyan-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>

                    <RichText
                      value={data.descTestimonial}
                      onChange={(value) =>
                        handleDataChange("descTestimonial", value)
                      }
                      placeholder="Inserisci il testo..."
                      renderBlock={(props) => (
                        <p className="leading-relaxed mb-6">{props.children}</p>
                      )}
                    />

                    <div className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/107x107"
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <div className="flex-grow flex flex-col pl-4">
                        <RichText
                          value={data.nameTestimonial}
                          onChange={(value) =>
                            handleDataChange("nameTestimonial", value)
                          }
                          placeholder="Inserisci il testo..."
                          renderBlock={(props) => (
                            <span className="title-font font-medium text-white">
                              {props.children}
                            </span>
                          )}
                        />
                        <RichText
                          value={data.descProfessionTestimonial}
                          onChange={(value) =>
                            handleDataChange("descProfessionTestimonial", value)
                          }
                          placeholder="Inserisci il testo..."
                          renderBlock={(props) => (
                            <p className="text-gray-500 text-sm">
                              {props.children}
                            </p>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section className="text-gray-400 body-font relative border-t border-b border-cyan-400 ">
            <div className="absolute inset-0 bg-gray-900">
              <iframe
                width={width}
                height={height}
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src={mapUrl}
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
              ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <h2 className="text-white text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5">
                  Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
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
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                  Button
                </button>
                <p className="text-xs text-gray-400 text-opacity-90 mt-3">
                  Chicharrones blog helvetica normcore iceland tousled brook
                  viral artisan.
                </p>
              </div>
            </div>
          </Section>
        </>
      ) : (
        <div className="h-screen"></div>
      )}
      {isDataModified && (
        <AdminModal onSave={() => handleDataSave(data)} isSaving={isSaving} />
      )}
    </>
  );
}
