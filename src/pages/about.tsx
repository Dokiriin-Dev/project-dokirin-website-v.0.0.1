import { RichText } from "@/components/RichText";
import Section from "@/components/layout/Section";
import classNames from "classnames";
import { useRef, useState } from "react";
import { Descendant } from "slate";
import Image from "next/image";
import Container from "@/components/layout/Container";
interface AboutPageProps {
  titleHeader: Descendant[];
  titleCustomer: Descendant[];
  titleAbout: Descendant[];
  titleMission: Descendant[];
  descriptionHeader: Descendant[];
  descriptionCustomer: Descendant[];
  descriptionAbout: Descendant[];
  descriptionMission: Descendant[];
  heroImageSrc: string;
  secondImageSrc: string;
}

export default function AboutPage(...props: any[]): JSX.Element {
  const getDefaultProps = () => ({
    titleHeader: [{ children: [{ text: "Su di Noi" }] }],
    titleCustomer: [
      { children: [{ text: "Perché dovreste scegliere noi come partner?" }] },
    ],
    titleAbout: [{ children: [{ text: "Chi Siamo" }] }],
    titleMission: [{ children: [{ text: "Missione aziendale" }] }],

    // Descriptions
    descriptionHeader: [
      {
        children: [
          {
            text: "Siamo un'azienda di sviluppo web ad alta tecnologia che si impegna a fornire prodotti eccellenti in tempo.",
          },
        ],
      },
    ],
    descriptionCustomer: [
      {
        children: [
          {
            text: `I clienti dovrebbero scegliere la nostra azienda di sviluppo siti web perché offriamo un design accattivante e personalizzato`,
          },
        ],
      },
    ],
    descriptionAbout: [
      {
        children: [
          {
            text: "Siamo fornitori di piattaforme omnichannel di servizi digitali, come siti web, e-commerce, SEO, gestione dei social media.",
          },
        ],
      },
    ],

    descriptionMission: [
      {
        children: [
          {
            text: "Sappiamo bene quanto sia importante avere una propria identita digitale e vogliamo far si che tutti ne abbiano una.",
          },
        ],
      },
    ],
  });

  const defaultRichText: AboutPageProps = {
    titleHeader: getDefaultProps().titleHeader,
    titleCustomer: getDefaultProps().titleCustomer,
    titleAbout: getDefaultProps().titleAbout,
    titleMission: getDefaultProps().titleMission,
    descriptionHeader: getDefaultProps().descriptionHeader,
    descriptionCustomer: getDefaultProps().descriptionCustomer,
    descriptionAbout: getDefaultProps().descriptionAbout,
    descriptionMission: getDefaultProps().descriptionMission,
    heroImageSrc: "",
    secondImageSrc: "",
  };

  const [richText, setRichText] = useState<AboutPageProps>({
    ...defaultRichText,
    ...props,
  });

  const handleRichTextChange = (
    value: Descendant[],
    field:
      | "titleHeader"
      | "titleCustomer"
      | "titleMission"
      | "titleAbout"
      | "descriptionCustomer"
      | "descriptionHeader"
      | "descriptionAbout"
      | "descriptionMission"
  ) => {
    setRichText((prevRichText) => ({ ...prevRichText, [field]: value }));
  };

  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/admin"); // sostituire '/admin' con il percorso corretto

  const defaultImageSrc = "https://dummyimage.com/720x600";

  const fileInputRef = useRef<HTMLInputElement>(null);

  const secondFileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (isAdminRoute && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const SecondImageClick = () => {
    if (isAdminRoute && secondFileInputRef.current) {
      secondFileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setRichText((prevRichText) => ({
        ...prevRichText,
        heroImageSrc: dataUrl,
      }));
    };
  };

  const onSecondImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setRichText((prevRichText) => ({
        ...prevRichText,
        secondImageSrc: dataUrl,
      }));
    };
  };

  return (
    <Section className="pt-24">
      <Container size="full">
        <section className="text-gray-400 body-font bg-cyan-400/50">
          <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col ">
            <div className="text-center w-full">
              <RichText
                defaultValue={richText.titleHeader}
                onChange={(value) => handleRichTextChange(value, "titleHeader")}
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
                defaultValue={richText.descriptionHeader}
                onChange={(value) =>
                  handleRichTextChange(value, "descriptionHeader")
                }
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
                defaultValue={richText.titleCustomer}
                onChange={(value) =>
                  handleRichTextChange(value, "titleCustomer")
                }
                renderBlock={(props) => (
                  <h2 className="text-4xl sm:text-5xl font-bold p-2 pb-10">
                    {props.children}
                  </h2>
                )}
              />
              <RichText
                defaultValue={richText.descriptionCustomer}
                onChange={(value) =>
                  handleRichTextChange(value, "descriptionCustomer")
                }
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
                <Image
                  className="object-cover object-center rounded cursor-pointer"
                  alt="hero"
                  width={500}
                  height={300}
                  src={richText.heroImageSrc || defaultImageSrc}
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <RichText
                defaultValue={richText.titleAbout}
                onChange={(value) => handleRichTextChange(value, "titleAbout")}
                renderBlock={(props) => (
                  <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    {props.children}
                  </h3>
                )}
              />
              <RichText
                defaultValue={richText.descriptionAbout}
                onChange={(value) =>
                  handleRichTextChange(value, "descriptionAbout")
                }
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
                defaultValue={richText.titleMission}
                onChange={(value) =>
                  handleRichTextChange(value, "titleMission")
                }
                renderBlock={(props) => (
                  <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    {props.children}
                  </h3>
                )}
              />
              <RichText
                defaultValue={richText.descriptionMission}
                onChange={(value) =>
                  handleRichTextChange(value, "descriptionMission")
                }
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
                <Image
                  className="object-cover object-center rounded cursor-pointer"
                  alt="second image"
                  width={500}
                  height={300}
                  src={richText.secondImageSrc || defaultImageSrc}
                  onClick={SecondImageClick}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={secondFileInputRef}
                  className="hidden"
                  onChange={onSecondImageChange}
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Section>
  );
}
