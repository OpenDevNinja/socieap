// Données complètes pour le site SoCiEAP

export const companyInfo = {
  name: "SoCiEAP",
  fullName: "COOPÉRATIVE AGRO-PASTORALE DURABLE",
  slogan: "Cultivons ensemble un avenir durable",
  email: "contact@socieap.com",
  phone: "+229 97 00 00 00",
  address: "Cotonou, Littoral, Bénin",
  socialMedia: {
    facebook: "https://facebook.com/socieap",
    linkedin: "https://linkedin.com/company/socieap",
    twitter: "https://twitter.com/socieap",
    instagram: "https://instagram.com/socieap",
  },
};

export const heroData = {
  title: "Cultivons l'Avenir Ensemble",
  subtitle: "Agriculture durable et élevage responsable pour un Bénin prospère",
  description:
    "SoCiEAP, votre partenaire pour une agriculture moderne, productive et respectueuse de l'environnement",
  cta: "Découvrir nos produits",
  stats: [
    { value: "500+", label: "Agriculteurs partenaires" },
    { value: "50+", label: "Produits disponibles" },
    { value: "10", label: "Années d'expérience" },
    { value: "100%", label: "Agriculture durable" },
  ],
};

export const aboutData = {
  mission: {
    title: "Notre Mission",
    content:
      "Promouvoir une agriculture productive et respectueuse de l'environnement, en favorisant l'échange de connaissances, d'expériences et de ressources entre nos membres. Nous visons à améliorer les conditions de vie des agriculteurs et des éleveurs, tout en préservant les ressources naturelles pour les générations futures.",
  },
  vision: {
    title: "Notre Vision",
    content:
      "Nous sommes convaincus que l'accès à des aliments sains et de qualité est un droit fondamental. Nous nous efforçons de contribuer à l'amélioration de la santé publique en produisant et en promouvant des aliments nutritifs et sans danger.",
  },
  history: {
    title: "Notre Histoire",
    content:
      "SoCiEAP est née d'une passion profonde pour la terre et l'agriculture. Notre histoire est ancrée dans une tradition familiale d'agriculteurs, où la passion pour le monde rural et les joies de cultiver la terre ont été transmises de génération en génération. Inspiré par son héritage, notre fondateur a créé une coopérative qui valorise l'agriculture durable et responsable.",
  },
  values: [
    {
      title: "Durabilité",
      description: "Engagement pour une agriculture durable et responsable",
      icon: "🌱",
    },
    {
      title: "Solidarité",
      description:
        "Force de la coopération et de la solidarité entre nos membres",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description:
        "Recherche constante de solutions pour améliorer nos pratiques",
      icon: "💡",
    },
    {
      title: "Respect de l'Environnement",
      description:
        "Préservation des ressources naturelles et protection de l'environnement",
      icon: "🌍",
    },
    {
      title: "Santé et Bien-être",
      description:
        "Promotion d'aliments sains et de qualité pour la santé publique",
      icon: "❤️",
    },
  ],
};

export const productsData = {
  categories: [
    {
      id: 1,
      name: "Produits Agricoles",
      icon: "🌾",
      products: [
        {
          name: "Céréales",
          items: ["Maïs", "Riz", "Sorgho", "Mil"],
          image:
            "https://images.unsplash.com/photo-1574323347407-e8ffd68466fb?w=800",
          description: "Céréales de qualité supérieure cultivées localement",
        },
        {
          name: "Tubercules",
          items: ["Manioc", "Igname", "Patate douce", "Taro"],
          image:
            "https://images.unsplash.com/photo-1635774855536-9728f2610245?w=800",
          description: "Tubercules frais directement de nos champs",
        },
        {
          name: "Produits Maraîchers",
          items: ["Tomates", "Piments", "Épinards", "Vernonia", "Gombo"],
          image:
            "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800",
          description: "Légumes frais et biologiques",
        },
        {
          name: "Fruits",
          items: ["Mangues", "Ananas", "Oranges", "Citrons", "Papayes"],
          image:
            "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800",
          description: "Fruits tropicaux savoureux et juteux",
        },
      ],
    },
    {
      id: 2,
      name: "Produits d'Élevage",
      icon: "🐄",
      products: [
        {
          name: "Viande",
          items: ["Bovine", "Ovine", "Porcine", "Volaille"],
          image:
            "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800",
          description: "Viandes de qualité issues de notre élevage responsable",
        },
        {
          name: "Produits Laitiers",
          items: ["Lait frais", "Fromage", "Yaourt", "Beurre"],
          image:
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800",
          description: "Produits laitiers frais et naturels",
        },
        {
          name: "Œufs et Miel",
          items: ["Œufs de poule", "Œufs de caille", "Miel naturel"],
          image:
            "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800",
          description: "Produits naturels de haute qualité",
        },
      ],
    },
    {
      id: 3,
      name: "Produits Transformés",
      icon: "🏭",
      products: [
        {
          name: "Conserves",
          items: ["Conserves de légumes", "Conserves de fruits", "Sauces"],
          image:
            "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=800",
          description: "Conserves artisanales sans additifs",
        },
        {
          name: "Jus et Boissons",
          items: ["Jus de fruits", "Jus de légumes", "Sirops"],
          image:
            "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
          description: "Jus naturels pressés à froid",
        },
        {
          name: "Farines",
          items: ["Farine de maïs", "Farine de manioc", "Farine d'igname"],
          image:
            "https://images.unsplash.com/photo-1574323347407-e8ffd68466fb?w=800",
          description: "Farines locales de qualité supérieure",
        },
        {
          name: "Huiles Végétales",
          items: ["Huile de palme", "Huile d'arachide", "Huile de coco"],
          image:
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
          description: "Huiles pures et naturelles",
        },
      ],
    },
  ],
};

export const servicesData = [
  {
    id: 1,
    title: "Conseil et Accompagnement",
    description:
      "Expertise professionnelle en agriculture, élevage et transformation",
    icon: "👨‍🌾",
    features: [
      "Diagnostic d'exploitation",
      "Plans de développement",
      "Suivi personnalisé",
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
  },
  {
    id: 2,
    title: "Formation et Capacitation",
    description: "Programmes de formation adaptés aux besoins des agriculteurs",
    icon: "📚",
    features: [
      "Techniques modernes",
      "Gestion d'exploitation",
      "Certification",
    ],
    image: "https://images.unsplash.com/photo-1509506489701-dfe23b067808?w=800",
  },
  {
    id: 3,
    title: "Location de Matériel Agricole",
    description: "Équipements modernes disponibles à la location",
    icon: "🚜",
    features: ["Tracteurs", "Moissonneuses", "Équipements d'irrigation"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
  },
  {
    id: 4,
    title: "Vente de Semences et Intrants",
    description: "Semences certifiées et intrants de qualité",
    icon: "🌰",
    features: [
      "Semences améliorées",
      "Engrais biologiques",
      "Produits phytosanitaires",
    ],
    image: "https://images.unsplash.com/photo-1535048637252-3a8c40fa2172?w=800",
  },
  {
    id: 5,
    title: "Transport et Stockage",
    description: "Solutions logistiques pour vos produits agricoles",
    icon: "🚚",
    features: [
      "Transport réfrigéré",
      "Entrepôts sécurisés",
      "Gestion des stocks",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
  },
  {
    id: 6,
    title: "Innovation et Développement",
    description: "Recherche et développement de solutions agricoles innovantes",
    icon: "🔬",
    features: [
      "Nouvelles technologies",
      "Agriculture de précision",
      "Solutions durables",
    ],
    image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800",
  },
];

export const galleryData = {
  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      title: "Nos champs de maïs",
      category: "agriculture",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800",
      title: "Récolte de tomates biologiques",
      category: "agriculture",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1595754066700-22d62a6508bb?w=800",
      title: "Élevage bovin responsable",
      category: "elevage",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800",
      title: "Poulets fermiers",
      category: "elevage",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1601001435957-74f0958a93c8?w=800",
      title: "Transformation des produits",
      category: "transformation",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1592921870583-aeafbd0a0f64?w=800",
      title: "Formation des agriculteurs",
      category: "formation",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1574323347407-e8ffd68466fb?w=800",
      title: "Céréales de qualité",
      category: "agriculture",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=800",
      title: "Élevage de porcs",
      category: "elevage",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
      title: "Légumes frais du jour",
      category: "agriculture",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
      title: "Irrigation moderne",
      category: "equipement",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800",
      title: "Équipe sur le terrain",
      category: "equipe",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1554402100-8d1d9f3dff80?w=800",
      title: "Marché local",
      category: "marche",
    },
  ],
  videos: [
    {
      id: 1,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Présentation de SoCiEAP",
      thumbnail:
        "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Nos méthodes agricoles durables",
      thumbnail:
        "https://images.unsplash.com/photo-1592982537447-6f2a6a640292?w=800",
    },
  ],
};

export const partnersData = [
  {
    id: 1,
    name: "Ministère de l'Agriculture",
    logo: "https://via.placeholder.com/200x100/1B5E3F/FFFFFF?text=MAEP",
    type: "Institutionnel",
  },
  {
    id: 2,
    name: "FUPRO Bénin",
    logo: "https://via.placeholder.com/200x100/7CB342/FFFFFF?text=FUPRO",
    type: "Organisation",
  },
  {
    id: 3,
    name: "Banque Agricole",
    logo: "https://via.placeholder.com/200x100/E6C847/333333?text=BA",
    type: "Financier",
  },
  {
    id: 4,
    name: "FAO Bénin",
    logo: "https://via.placeholder.com/200x100/1B5E3F/FFFFFF?text=FAO",
    type: "International",
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Jean-Baptiste HOUNKPE",
    role: "Agriculteur partenaire",
    content:
      "Grâce à SoCiEAP, j'ai pu moderniser mon exploitation et augmenter ma production de 40%. Leur accompagnement est exceptionnel.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    id: 2,
    name: "Marie AGOSSOU",
    role: "Éleveuse de volaille",
    content:
      "Les formations et le suivi de SoCiEAP m'ont permis de professionnaliser mon élevage. Je recommande vivement leurs services.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
  {
    id: 3,
    name: "Paul MENSAH",
    role: "Producteur de fruits",
    content:
      "La coopérative nous offre un débouché stable pour nos produits. C'est un vrai partenaire de développement.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
];

export const blogData = [
  {
    id: 1,
    title: "Les avantages de l'agriculture biologique au Bénin",
    excerpt:
      "Découvrez pourquoi de plus en plus d'agriculteurs béninois adoptent des pratiques biologiques.",
    date: "15 Mars 2024",
    author: "Équipe SoCiEAP",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800",
    category: "Agriculture",
  },
  {
    id: 2,
    title: "Guide complet de l'élevage de poulets locaux",
    excerpt:
      "Tout ce que vous devez savoir pour réussir votre élevage de poulets locaux.",
    date: "10 Mars 2024",
    author: "Dr. AHOTON",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800",
    category: "Élevage",
  },
  {
    id: 3,
    title: "Innovation : La transformation locale des produits agricoles",
    excerpt:
      "Comment créer de la valeur ajoutée en transformant vos produits agricoles.",
    date: "5 Mars 2024",
    author: "Équipe Innovation",
    image: "https://images.unsplash.com/photo-1606924735276-fbb5b325e933?w=800",
    category: "Transformation",
  },
];

export const navigationLinks = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Produits", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Galerie", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];
