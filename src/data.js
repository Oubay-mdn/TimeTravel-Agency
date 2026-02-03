export const destinations = [
  {
    id: 'paris',
    title: "Paris Belle Époque",
    date: "1889",
    location: "Paris, France",
    image: "/paris-1889.png",
    description: "Plongez dans l'effervescence de l'Exposition Universelle. Flânez sous la tour Eiffel flambant neuve et découvrez le Paris des artistes et des inventeurs.",
    longDescription: [
      "Vivez l'apogée de la Belle Époque lors de l'Exposition Universelle de 1889. Paris brille de mille feux, célébrant le progrès technique et artistique. Promenez-vous sur le Champ de Mars et soyez parmi les premiers à monter au sommet de la Tour Eiffel, merveille d'ingénierie fraîchement inaugurée.",
      "Le soir venu, les boulevards s'animent. Dînez au Maxim's, assistez à une représentation à l'Opéra Garnier ou découvrez les cabarets de Montmartre. Une immersion totale dans une ère d'optimisme et d'élégance à la française."
    ],
    highlights: [
      "Accès VIP prioritaire au sommet de la Tour Eiffel",
      "Dîner gastronomique au pavillon Ledoyen",
      "Rencontre privée avec Gustave Eiffel ou Sarah Bernhardt",
      "Promenade en calèche sur les Champs-Élysées"
    ],
    duration: "2 Jours",
    price: "12 500 €",
    type: 'elegance' // Used for quiz matching (C)
  },
  {
    id: 'florence',
    title: "Florence Renaissance",
    date: "1504",
    location: "Florence, Italie",
    image: "/florence-1504.png",
    description: "Côtoyez les génies de la Renaissance. Assistez à la création du David de Michel-Ange et arpentez les rues d'une Florence à son apogée culturelle.",
    longDescription: [
      "Florence, 1504. La cité toscane est le cœur battant de la Renaissance. Sous le mécénat des Médicis, les arts et les sciences fleurissent comme jamais auparavant. Vous assisterez au dévoilement du David de Michel-Ange devant le Palazzo Vecchio, un moment d'histoire pure.",
      "Flânez dans les ateliers de Verrocchio où Léonard de Vinci a fait ses armes. Profitez d'un banquet privé dans une villa toscane surplombant l'Arno, accompagné de musiciens d'époque et de discussions philosophiques passionnantes."
    ],
    highlights: [
      "Dévoilement du David de Michel-Ange",
      "Visite privée de l'atelier d'un maître florentin",
      "Dégustation de vins toscans dans un palais Médicis",
      "Conversation avec Nicolas Machiavel"
    ],
    duration: "3 Jours",
    price: "15 000 €",
    type: 'culture' // Used for quiz matching (A)
  },
  {
    id: 'cretace',
    title: "Ère des Titans",
    date: "-65M Années",
    location: "Pangée",
    image: "/dino.png",
    description: "Une aventure primitive sécurisée. Observez le T-Rex régner sur son territoire depuis nos dômes d'observation invisibles. L'expérience sauvage ultime.",
    longDescription: [
      "Bienvenue au Crétacé supérieur, l'âge d'or des dinosaures. Depuis la sécurité absolue de notre station temporelle 'Chronos-1' et de nos véhicules tout-terrain à camouflage optique, observez la nature dans sa forme la plus majestueuse et brutale.",
      "Le point d'orgue de votre voyage sera l'observation d'un Tyrannosaurus Rex en chasse au crépuscule, suivie d'une nuit sous un dôme de verre renforcé, bercé par les sons d'un monde vierge de toute présence humaine."
    ],
    highlights: [
      "Safari guidé en véhicule furtif à travers la jungle",
      "Observation rapprochée d'un T-Rex",
      "Vol panoramique en module silencieux au-dessus des troupeaux",
      "Nuit de luxe en bivouac sécurisé"
    ],
    duration: "1 Jour",
    price: "25 000 €",
    type: 'adventure' // Used for quiz matching (B)
  },
];
