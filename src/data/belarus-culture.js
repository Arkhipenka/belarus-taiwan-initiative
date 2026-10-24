const copy = {
  "by": [
    "Адчуваць месца",
    "Беларусь — у людзях і краявідах.",
    "Прырода і горад. Спадчына і сучаснасць. Мова і штодзённыя звычкі.",
    [
      "Азёры і лясы",
      "Мова і культура",
      "Жыццё ў гарадах"
    ],
    [
      "Азёрныя краявіды, лясы і рэкі Палесся — прастора, праз якую можна пазнаёміцца з Беларуссю.",
      "Беларуская мова, ткацтва, літаратура і сучаснае мастацтва. Спадчына працягваецца ў тым, як людзі жывуць і ствараюць сёння.",
      "Дворы, невялікія кавярні, гарадскія маршруты і сустрэчы. Штодзённае жыццё складаецца з людзей і іх сувязяў."
    ]
  ],
  "ru": [
    "Чувствовать место",
    "Беларусь — в людях и пейзажах.",
    "Природа и город. Наследие и современность. Язык и повседневные привычки.",
    [
      "Озёра и леса",
      "Язык и культура",
      "Жизнь в городах"
    ],
    [
      "Озёрные пейзажи, леса и реки Полесья — пространство, через которое можно познакомиться с Беларусью.",
      "Белорусский язык, ткачество, литература и современное искусство. Наследие продолжается в том, как люди живут и создают сегодня.",
      "Дворы, небольшие кафе, городские маршруты и встречи. Повседневная жизнь складывается из людей и их связей."
    ]
  ],
  "en": [
    "A sense of place",
    "Belarus — through people and landscapes.",
    "Nature and city. Heritage and the present. Language and everyday habits.",
    [
      "Lakes and forests",
      "Language and culture",
      "Life in the cities"
    ],
    [
      "Lake landscapes, forests and the rivers of Polesia offer a way to discover Belarus through its natural surroundings.",
      "The Belarusian language, weaving, literature and contemporary art. Heritage continues through how people live and create today.",
      "Courtyards, small cafés, city routes and encounters. Everyday life takes shape through people and their connections."
    ]
  ],
  "pl": [
    "Poczucie miejsca",
    "Białoruś — poprzez ludzi i krajobrazy.",
    "Przyroda i miasto. Dziedzictwo i współczesność. Język i codzienne zwyczaje.",
    [
      "Jeziora i lasy",
      "Język i kultura",
      "Życie w miastach"
    ],
    [
      "Jeziora, lasy i rzeki Polesia pozwalają poznawać Białoruś poprzez jej przyrodę.",
      "Język białoruski, tkactwo, literatura i sztuka współczesna. Dziedzictwo trwa w tym, jak ludzie żyją i tworzą dzisiaj.",
      "Podwórka, małe kawiarnie, miejskie trasy i spotkania. Codzienność tworzą ludzie i ich więzi."
    ]
  ],
  "zh": [
    "感受地方",
    "透過人與風景，認識白羅斯。",
    "自然與城市、傳承與當代、語言與日常習慣。",
    [
      "湖泊與森林",
      "語言與文化",
      "城市日常"
    ],
    [
      "湖泊、森林與波列西亞的河流，讓我們透過自然環境認識白羅斯。",
      "白羅斯語、編織、文學與當代藝術。文化傳承延續於人們今日的生活與創作之中。",
      "庭院、小咖啡館、城市路線與相遇。日常生活由人與人之間的連結構成。"
    ]
  ]
};
export const getBelarusCulture = lang => copy[lang] || copy.en;
