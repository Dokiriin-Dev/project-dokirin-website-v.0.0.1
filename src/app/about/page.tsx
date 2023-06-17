"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Descendant, Element, Text } from "slate";

import ImageUploader from "@/components/layout/ImageUploader";
import RichText from "@/components/layout/RichText";
import Container from "@/components/layout/Container";
import Loading from "@/components/layout/Loading";
import Section from "@/components/layout/Section";
import {
  getDatabaseData,
  useIsEditable,
  setDatabaseData,
} from "@/firebase/firebase.config";
import classNames from "classnames";
import AdminModal from "@/components/adminPanel/adminModal";
import { PageData } from "@/components/adminPanel/adminLayout";

const PAGE_NAME = "pages/about";

const defaultData: PageData = {
  titleHeading: [{ children: [{ text: "Default Title" }] }],
  descriptionHeading: [{ children: [{ text: "Default Description" }] }],
  titleCustomer: [{ children: [{ text: "Default Title" }] }],
  descriptionCustomer: [{ children: [{ text: "Default Description" }] }],
  titleAbout: [{ children: [{ text: "Default Title" }] }],
  descriptionAbout: [{ children: [{ text: "Default Description" }] }],
  titleMission: [{ children: [{ text: "Default Title" }] }],
  descriptionMission: [{ children: [{ text: "Default Description" }] }],
};

export default function AboutPage(): JSX.Element {
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
            "titleHeading",
            "descriptionHeading",
            "titleCustomer",
            "descriptionCustomer",
            "titleAbout",
            "descriptionAbout",
            "titleMission",
            "descriptionMission",
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
    first: React.RefObject<HTMLInputElement>;
    second: React.RefObject<HTMLInputElement>;
  } = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
  };

  return (
    <>
      {dataText ? (
        <Section className="pt-10 md:pt-20">
          {isEditable && (
            <Toaster position="top-center" containerClassName="text-sm" />
          )}
          <Container size="full">
            <section className="text-gray-400 body-font bg-cyan-400/50 px-5 md:py-8 py-1 pt-5">
              <div className="container mx-auto flex items-center justify-center flex-col">
                <div className="text-center w-full">
                  <RichText
                    value={data.titleHeading}
                    onChange={(value) =>
                      handleDataChange("titleHeading", value)
                    }
                    placeholder="Inserisci il testo dell'intestazione..."
                    renderBlock={(props) => (
                      <h1
                        className={classNames(
                          "text-5xl sm:text-6xl font-bold p-2 tracking-tight text-center mb-4 bg-clip-text bg-gradient-to-r border-b dark:border-emerald-300 border-emerald-500 pr-10 pl-10 drop-shadow-xl shadow-gray-400"
                        )}
                        style={{ lineHeight: 1.125 }}
                        {...props.attributes}
                      >
                        {props.children}
                      </h1>
                    )}
                    renderHighlight={(props) => (
                      <span {...props.attributes}>{props.children}</span>
                    )}
                  />
                  <RichText
                    value={data.descriptionHeading}
                    onChange={(value) =>
                      handleDataChange("descriptionHeading", value)
                    }
                    placeholder="Inserisci il testo..."
                    renderBlock={(props) => (
                      <p className="leading-relaxed mb-8 text-lg md:text-xl">
                        {props.children}
                      </p>
                    )}
                    renderHighlight={(props) => (
                      <span {...props.attributes}>{props.children}</span>
                    )}
                  />
                </div>
              </div>
            </section>
            <section className="text-gray-400 body-font py-16 md:p-28">
              <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                <div className="text-center w-full">
                  <RichText
                    value={data.titleCustomer}
                    onChange={(value) =>
                      handleDataChange("titleCustomer", value)
                    }
                    placeholder="Inserisci il testo..."
                    renderBlock={(props) => (
                      <h2 className="text-4xl sm:text-5xl font-bold p-2 pb-10">
                        {props.children}
                      </h2>
                    )}
                  />
                  <RichText
                    value={data.descriptionCustomer}
                    onChange={(value) =>
                      handleDataChange("descriptionCustomer", value)
                    }
                    placeholder="Inserisci il testo..."
                    renderBlock={(props) => (
                      <p className="leading-relaxed text-lg md:text-xl">
                        {props.children}
                      </p>
                    )}
                  />
                </div>
              </div>
            </section>
            <section className="text-gray-400 body-font py-16 md:py-16">
              <div className="container mx-auto flex flex-col items-center px-5 md:flex-row">
                <div className="lg:max-w-lg lg:w-full md:w-1/3 w-full md:mt-0 md:mb-0 self-center">
                  <div className="mt-4">
                    <ImageUploader
                      inputRef={fileInputRefs.first}
                      imageKey={"first"}
                      alt={"first"}
                    />
                  </div>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mt-8 md:mt-0">
                  <RichText
                    value={data.titleAbout}
                    onChange={(value) => handleDataChange("titleAbout", value)}
                    placeholder="Inserisci il testo..."
                    renderBlock={(props) => (
                      <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        {props.children}
                      </h3>
                    )}
                  />
                  <RichText
                    value={data.descriptionAbout}
                    onChange={(value) =>
                      handleDataChange("descriptionAbout", value)
                    }
                    placeholder="Inserisci il testo..."
                    renderBlock={(props) => (
                      <p className="leading-relaxed text-lg md:text-xl">
                        {props.children}
                      </p>
                    )}
                  />
                </div>
              </div>
            </section>
            <section className="text-gray-400 body-font py-16 md:py-16">
              <div className="container mx-auto flex flex-col items-center px-5 md:flex-row-reverse">
                <div className="lg:max-w-lg lg:w-full md:w-1/3 w-full md:mt-0 md:mb-0 self-center">
                  <div className="mt-4">
                    <ImageUploader
                      inputRef={fileInputRefs.second}
                      imageKey={"second"}
                      alt={"second"}
                    />
                  </div>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mt-8 md:mt-0">
                  <RichText
                    value={data.titleMission}
                    onChange={(value) =>
                      handleDataChange("titleMission", value)
                    }
                    placeholder="Inserisci il testo..."
                    renderBlock={(props) => (
                      <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        {props.children}
                      </h3>
                    )}
                  />
                  <RichText
                    value={data.descriptionMission}
                    onChange={(value) =>
                      handleDataChange("descriptionMission", value)
                    }
                    placeholder="Inserisci il testo..."
                    renderBlock={(props) => (
                      <p className="leading-relaxed text-lg md:text-xl">
                        {props.children}
                      </p>
                    )}
                    renderHighlight={(props) => (
                      <span {...props.attributes}>{props.children}</span>
                    )}
                  />
                </div>
              </div>
            </section>
          </Container>
        </Section>
      ) : (
        <Loading />
      )}
      {isDataModified && (
        <AdminModal onSave={() => handleDataSave(data)} isSaving={isSaving} />
      )}
    </>
  );
}
