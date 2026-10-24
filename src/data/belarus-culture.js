const copy = {
  "by": [
    "Беларусь праз дэталі",
    "Беларусь — праз дэталі.",
    "Краявіды, словы і месцы штодзённага жыцця. Праз невялікія дэталі знаёмімся з краінай і людзьмі.",
    [
      "Лес і вада",
      "Слова і арнамент",
      "Двор і вуліца"
    ],
    [
      "Сцежкі сярод дрэў, азёрныя берагі і рэкі Палесся. Краявіды, якія фарміруюць адчуванне месца і застаюцца ў памяці.",
      "Беларуская мова ў размовах і кнігах, рытм тканых узораў, літаратура і сучаснае мастацтва. Культура жыве ў словах, рэчах і творчасці людзей.",
      "Дворы, невялікія кавярні, знаёмыя маршруты і выпадковыя сустрэчы. Горад раскрываецца праз штодзённыя звычкі і сувязі паміж людзьмі."
    ]
  ],
  "ru": [
    "Беларусь через детали",
    "Беларусь — через детали.",
    "Пейзажи, слова и места повседневной жизни. Через небольшие детали знакомимся со страной и людьми.",
    [
      "Лес и вода",
      "Слово и орнамент",
      "Двор и улица"
    ],
    [
      "Тропинки среди деревьев, озёрные берега и реки Полесья. Пейзажи, которые формируют ощущение места и остаются в памяти.",
      "Белорусский язык в разговорах и книгах, ритм тканых узоров, литература и современное искусство. Культура живёт в словах, вещах и творчестве людей.",
      "Дворы, небольшие кафе, знакомые маршруты и случайные встречи. Город раскрывается через повседневные привычки и связи между людьми."
    ]
  ],
  "en": [
    "Belarus through details",
    "Belarus — through the details.",
    "Landscapes, words and everyday places. Small details offer a way to discover the country and its people.",
    [
      "Forest and water",
      "Words and patterns",
      "Courtyard and street"
    ],
    [
      "Woodland paths, lake shores and the rivers of Polesia. Landscapes that shape a sense of place and stay in memory.",
      "Belarusian in conversation and books, the rhythm of woven patterns, literature and contemporary art. Culture lives in words, objects and people’s creativity.",
      "Courtyards, small cafés, familiar routes and chance encounters. A city reveals itself through everyday habits and connections between people."
    ]
  ],
  "pl": [
    "Białoruś poprzez detale",
    "Białoruś — poprzez detale.",
    "Krajobrazy, słowa i miejsca codzienności. Drobne szczegóły pozwalają poznać kraj i jego mieszkańców.",
    [
      "Las i woda",
      "Słowo i ornament",
      "Podwórko i ulica"
    ],
    [
      "Leśne ścieżki, brzegi jezior i rzeki Polesia. Krajobrazy, które budują poczucie miejsca i pozostają w pamięci.",
      "Białoruski w rozmowach i książkach, rytm tkanych wzorów, literatura i sztuka współczesna. Kultura żyje w słowach, przedmiotach i ludzkiej twórczości.",
      "Podwórka, małe kawiarnie, znajome trasy i przypadkowe spotkania. Miasto odsłania się poprzez codzienne zwyczaje i więzi między ludźmi."
    ]
  ],
  "zh": [
    "從細節認識白羅斯",
    "從細節，認識白羅斯。",
    "風景、話語與日常場所。透過微小的細節，認識這片土地與生活在其中的人們。",
    [
      "森林與水",
      "文字與紋樣",
      "庭院與街道"
    ],
    [
      "林間小徑、湖岸與波列西亞的河流。這些風景形塑地方感，也留在人們的記憶中。",
      "交談與書本中的白羅斯語、織紋的節奏、文學與當代藝術。文化存在於話語、物件與人們的創作之中。",
      "庭院、小咖啡館、熟悉的路線與偶然的相遇。日常習慣與人際連結，讓城市逐漸展現它的樣貌。"
    ]
  ]
};
export const getBelarusCulture = lang => copy[lang] || copy.en;
