import ImageUploader from "@/components/ImageUploader";
import RichText from "@/components/RichText";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { getDatabaseData, setDatabaseData } from "@/firebase/firebase.config";
import classNames from "classnames";
import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Descendant, Element, Text } from "slate";

const PAGE_NAME = "pages/about";

interface PageData {
  titleHeading: Descendant[];
  descriptionHeading: Descendant[];
  titleCustomer: Descendant[];
  descriptionCustomer: Descendant[];
  titleAbout: Descendant[];
  descriptionAbout: Descendant[];
  titleMission: Descendant[];
  descriptionMission: Descendant[];
  heroImageSrc: Descendant[];
  secondImageSrc: Descendant[];
}

const defaultData: PageData = {
  titleHeading: [{ children: [{ text: "Default Title" }] }],
  descriptionHeading: [{ children: [{ text: "Default Description" }] }],
  titleCustomer: [{ children: [{ text: "Default Title" }] }],
  descriptionCustomer: [{ children: [{ text: "Default Title" }] }],
  titleAbout: [{ children: [{ text: "Default Title" }] }],
  descriptionAbout: [{ children: [{ text: "Default Title" }] }],
  titleMission: [{ children: [{ text: "Default Title" }] }],
  descriptionMission: [{ children: [{ text: "Default Title" }] }],
  heroImageSrc: [{ children: [{ text: "Default Title" }] }],
  secondImageSrc: [{ children: [{ text: "Default Title" }] }],
};

export default function AboutPage(): JSX.Element {
  const [data, setData] = useState<PageData>(defaultData);
  const [dataText, setDataText] = useState<string>("");
  const isAuthenticated = true; // Inserire codice per verificare l'autenticazione
  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/admin"); // Sostituire '/admin' con il percorso corretto
  const isEditable = isAuthenticated && isAdminRoute;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getDatabaseData<PageData>(PAGE_NAME);
        if (fetchedData) {
          setData(fetchedData);
          const title = getTextFromDescendants(fetchedData.titleHeading);
          const description = getTextFromDescendants(
            fetchedData.descriptionHeading
          );
          const titleCustomer = getTextFromDescendants(
            fetchedData.titleHeading
          );
          const descriptionCustomer = getTextFromDescendants(
            fetchedData.descriptionHeading
          );
          const titleAbout = getTextFromDescendants(fetchedData.titleHeading);
          const descriptionAbout = getTextFromDescendants(
            fetchedData.descriptionHeading
          );
          const titleMission = getTextFromDescendants(fetchedData.titleHeading);
          const descriptionMission = getTextFromDescendants(
            fetchedData.descriptionHeading
          );
          const heroImageSrc = getTextFromDescendants(
            fetchedData.descriptionHeading
          );
          const secondImageSrc = getTextFromDescendants(
            fetchedData.descriptionHeading
          );
          setDataText(title);
          setDataText(description);
          setDataText(titleCustomer);
          setDataText(descriptionCustomer);
          setDataText(titleAbout);
          setDataText(descriptionAbout);
          setDataText(titleMission);
          setDataText(descriptionMission);
          setDataText(heroImageSrc);
          setDataText(secondImageSrc);
        } else {
          // Se non ci sono dati nel database, utilizza i dati di default
          setData(defaultData);
        }
      } catch (error) {
        console.error(
          "Errore durante il recupero dei dati dal database:",
          error
        );
      }
    };

    fetchData();
  }, []);

  const getTextFromDescendants = (descendants: Descendant[]): string => {
    const firstChild = descendants[0]; // Accesso al primo elemento dell'array
    if (Text.isText(firstChild)) {
      return firstChild.text;
    } else if (Element.isElement(firstChild)) {
      return getTextFromDescendants(firstChild.children);
    }
    return "";
  };

  const handleDataChange = (field: keyof PageData, value: Descendant[]) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
    const titleHeading = getTextFromDescendants(data.titleHeading);
    const descriptionHeading = getTextFromDescendants(data.descriptionHeading);
    const titleCustomer = getTextFromDescendants(data.titleCustomer);
    const descriptionCustomer = getTextFromDescendants(
      data.descriptionCustomer
    );
    const titleAbout = getTextFromDescendants(data.titleAbout);
    const descriptionAbout = getTextFromDescendants(data.descriptionAbout);
    const titleMission = getTextFromDescendants(data.titleMission);
    const descriptionMission = getTextFromDescendants(data.descriptionMission);
    const heroImageSrc = getTextFromDescendants(data.heroImageSrc);
    const secondImageSrc = getTextFromDescendants(data.secondImageSrc);
    setDataText(titleHeading);
    setDataText(descriptionHeading);
    setDataText(titleCustomer);
    setDataText(descriptionCustomer);
    setDataText(titleAbout);
    setDataText(descriptionAbout);
    setDataText(titleMission);
    setDataText(descriptionMission);
    setDataText(heroImageSrc);
    setDataText(secondImageSrc);

    saveDataToDatabase(PAGE_NAME, data);
  };

  const saveDataToDatabase = async (fieldName: string, value: PageData) => {
    try {
      await setDatabaseData(fieldName, value);
      toast.success(`Dati del campo ${fieldName} salvati nel database`);
    } catch (error) {
      toast.error(
        `Errore durante il salvataggio dei dati del campo ${fieldName} nel database`
      );
    }
  };

  const fileInputRefs: {
    hero: RefObject<HTMLInputElement>;
    second: RefObject<HTMLInputElement>;
  } = {
    hero: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
  };
  const [uploadedImages, setUploadedImages] = useState<{
    [key: string]: string | null;
  }>({
    heroImageSrc: null,
    secondImageSrc: null,
  });

  const handleImageClick = (ref: RefObject<HTMLInputElement>) => {
    if (isAdminRoute && ref.current) {
      ref.current.click();
    }
  };

  const handleImgChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setUploadedImages((prevImages) => ({
        ...prevImages,
        [key]: dataUrl,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {dataText ? (
        <Section className="pt-24">
          <Container size="full">
            <section className="text-gray-400 body-font bg-cyan-400/50">
              <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col ">
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
                          "text-5xl sm:text-6xl font-bold p-2 pb-10 tracking-tight text-center mb-4 bg-clip-text bg-gradient-to-r border-b dark:border-emerald-300 border-emerald-500 pr-10 pl-10 drop-shadow-xl shadow-gray-400"
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
            <section className="text-gray-400 body-font pt-10">
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
            <section className="text-gray-400 body-font pt-10">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full mb-10 md:w-1/3 w-4/5 md:mt-0 md:mb-0 self-center">
                  <div className="mt-4">
                    <ImageUploader
                      // imageUrl={data.heroImageSrc}
                      inputRef={fileInputRefs.hero}
                      onInputChange={(data) =>
                        handleImgChange(data, "heroImageSrc")
                      }
                      onClick={() => handleImageClick(fileInputRefs.hero)}
                      width={500}
                      key={"secondImageSrc"}
                      height={500}
                    />
                  </div>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
            <section className="text-gray-400 body-font pt-10">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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

                <div className="lg:max-w-lg lg:w-full mb-10 md:w-1/3 w-4/5 md:mt-0 md:mb-0 self-center">
                  <div className="mt-4">
                    {/*  */}
                    <ImageUploader
                      inputRef={fileInputRefs.second}
                      onInputChange={(data) =>
                        handleImgChange(data, "secondImageSrc")
                      }
                      width={500}
                      height={500}
                      key={"secondImageSrc"}
                      onClick={() => handleImageClick(fileInputRefs.second)}
                    />
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </Section>
      ) : (
        <p>Caricamento dati in corso...</p>
      )}
    </div>
  );
}
