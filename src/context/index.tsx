export const company_Options = [
  {
    id: "1",
    title: "Dokirin",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Completed projects",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Years of experience",
    value: "3+",
  },
  {
    id: "stats-3",
    title: "Team members",
    value: "5+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Privacy Policy",
        link: "privacy-policy/",
      },
      {
        name: "Terms & Conditions",
        link: "terms-conditions/",
      },
    ],
  },
  {
    title: "Development Services",
    links: [
      {
        name: "Web Site",
        link: "#web-site/",
      },
      {
        name: "eCommerce",
        link: "e-commerce-application/",
      },
    ],
  },
  {
    title: "Management Services",
    links: [
      {
        name: "Search Engine Optimization (SEO)",
        link: "search-engine-optimization/",
      },
      {
        name: "Social Media Management",
        link: "social-media-management/",
      },
    ],
  },
];

export const policyText = [
  {
    language: "Italiano",
    textIT: [
      {
        id: "ita",
        text: "Questo sito utilizza servizi che utilizzano i cookie per offrire una migliore esperienza e analizzare il traffico. Puoi saperne di più sui servizi che utilizziamo presso il nostro",
      },
    ],
  },
  {
    language: "English",
    textEN: [
      {
        id: "eng",
        text: "This site uses services that use cookies to deliver better experience and analyze traffic. You can learn more about the services we use at our",
      },
    ],
  },
];

// Header Links

export const footersLinks = [
  {
    language: "Italiano",
    linksIT: [
      {
        title: "Politiche di utilizzo",
        links: [
          {
            name: "Politica sulla riservatezza",
            link: "privacy-policy/",
          },
          {
            name: "Termini & Condizioni",
            link: "terms-conditions/",
          },
        ],
      },
      {
        title: "Servizi di sviluppo",
        links: [
          {
            name: "Sito web",
            link: "/website-development",
          },
          {
            name: "eCommerce",
            link: "/ecommerce-development",
          },
        ],
      },
      {
        title: "Servizi di gestione",
        links: [
          {
            name: "Ottimizzazione del motore di ricerca (SEO)",
            link: "/home#seo",
          },
          {
            name: "Gestione dei social media",
            link: "/home#social-media-management",
          },
        ],
      },
    ],
  },
  {
    language: "English",
    linksEN: [
      {
        title: "Usage Policies",
        links: [
          {
            name: "Privacy Policy",
            link: "privacy-policy/",
          },
          {
            name: "Terms & Conditions",
            link: "terms-conditions/",
          },
        ],
      },
      {
        title: "Development Services",
        links: [
          {
            name: "Web Site",
            link: "/home#web-site",
          },
          {
            name: "eCommerce",
            link: "/home#e-commerce",
          },
        ],
      },
      {
        title: "Management Services",
        links: [
          {
            name: "Search Engine Optimization (SEO)",
            link: "/home#seo",
          },
          {
            name: "Social Media Management",
            link: "/home#social-media-management",
          },
        ],
      },
    ],
  },
];

export const headerLinks = [
  {
    language: "Italiano",
    linksIT: [
      {
        name: "Home",
        link: "/home",
        status: "",
      },
      {
        name: "Contatti",
        link: "/contact-us",
        status: "",
      },
      {
        name: "Chi siamo",
        link: "/about-us",
        status: "",
      },
      {
        name: "Servizi",
        link: "/home#services",
        status: "Nuovo",
      },
    ],
  },
  {
    language: "English",
    linksEN: [
      {
        name: "Home",
        link: "/home",
        status: "",
      },
      {
        name: "Contact Us",
        link: "/en/contact-us",
        status: "",
      },
      {
        name: "About Us",
        link: "/en/about-us",
        status: "",
      },
      {
        name: "Services",
        link: "/en/home#services",
        status: "New",
      },
    ],
  },
];

export const getDefaultProps = () => ({
  titleHeader: [{ children: [{ text: "Su di Noi" }] }],
  titleCustomer: [{ children: [{ text: "Perché dovreste scegliere noi come partner?" }] }],
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


export const renderBlock = (props: any) => {
  return <div {...props.attributes}>{props.children}</div>;
};

export const renderHighlight = (props: any) => {
  return <span {...props.attributes}>{props.children}</span>;
};

export const renderElement = (props: any) => {
  if (props.element.type === "heading") {
    return <h2 {...props.attributes}>{props.children}</h2>;
  }
  return <p {...props.attributes}>{props.children}</p>;
};