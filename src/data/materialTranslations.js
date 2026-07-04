const baseArticleAssets = {
  nuclear: {
    id: 'pobeda-nad-aes-2025',
    slug: 'pobeda-nad-aes-spustya-sorok-let-protestov-i-takoe-vozmozhno1',
    date: '2025-09-15T15:09:00Z',
    image: '/belarus-taiwan-initiative/images/articles/pobeda-nad-aes/main.jpg',
    source: {
      name: 'GreenBelarus.info',
      url: 'https://greenbelarus.info/articles/15-09-2025/pobeda-nad-aes-spustya-sorok-let-protestov-i-takoe-vozmozhno'
    },
    gallery: [
      {
        src: '/belarus-taiwan-initiative/images/articles/pobeda-nad-aes/photo1.png'
      },
      {
        src: '/belarus-taiwan-initiative/images/articles/pobeda-nad-aes/photo2.png'
      }
    ]
  },
  democracy: {
    image: '/belarus-taiwan-initiative/images/article1.jpg'
  },
  relations: {
    image: '/belarus-taiwan-initiative/images/article2.jpg'
  }
};

const publishedArticleIds = new Set(['pobeda-nad-aes-2025']);

const articleTranslations = {
  by: {
    'pobeda-nad-aes-2025': {
      ...baseArticleAssets.nuclear,
      title: 'Перамога над АЭС пасля сарака гадоў пратэстаў. І такое магчыма',
      lead: 'Расказваем, як аварыі на Чарнобыльскай АЭС і «Фукусіме-1» паўплывалі на рашэнне Тайваня адмовіцца ад ядзернай энергетыкі.',
      excerpt: 'Гісторыя таго, як грамадзянскі ціск, Чарнобыль і Фукусіма змянілі энергетычны курс Тайваня.',
      author: 'Андрэй Архіпенка',
      imageCaption: 'Фота: Андрэй Архіпенка / GreenBelarus.info',
      categories: ['гісторыя', 'Тайвань', 'антыядзерны рух'],
      content: [
        { type: 'paragraph', text: '17 мая 2025 года на Тайвані быў спынены апошні рэактар АЭС «Мааньшань». Гэтае рашэнне паставіла кропку ў шматгадовай дыскусіі пра атамную энергетыку на востраве.' },
        { type: 'paragraph', text: '23 жніўня 2025 года прайшоў рэферэндум аб падаўжэнні працы станцыі. Ён не адбыўся праз недастатковую яўку, і курс на закрыццё АЭС застаўся ў сіле.' },
        { type: 'heading', level: 2, text: 'Як Тайвань прыйшоў да гэтага рашэння' },
        { type: 'paragraph', text: 'У 1970-я Гаміньдан зрабіў стаўку на атам, каб зменшыць залежнасць ад нафты пасля сусветнага энергетычнага крызісу. Да сярэдзіны 1980-х значная частка электраэнергіі выпрацоўвалася на трох АЭС.' },
        { type: 'paragraph', text: 'Разам з ростам магутнасцяў узрастала недаверлівасць грамадства: дробныя аварыі, дарагое будаўніцтва і закрытасць дзяржаўнай Taipower узмацнялі трывогу.' },
        { type: 'paragraph', text: 'Пасля выбуху на Чарнобыльскай АЭС у 1986 годзе антыядзерны рух атрымаў новы імпульс. Пытанне бяспекі станцый выйшла за межы экспертных дыскусій і стала палітычным.' },
        { type: 'heading', level: 2, text: 'Роля актывістаў і палітыкаў' },
        { type: 'paragraph', text: 'У 1986 годзе актывісты і апазіцыйныя палітыкі ўключылі патрабаванне адмовіцца ад атама ў праграму Дэмакратычнай прагрэсіўнай партыі.' },
        { type: 'paragraph', text: 'У 1988 годзе была створана асацыяцыя YASA, якая аб’яднала жыхароў, арганізавала мітынгі і стала школай грамадзянскай самаарганізацыі.' },
        { type: 'heading', level: 2, text: 'Новая хваля пратэстаў' },
        { type: 'paragraph', text: 'Аварыя на японскай АЭС «Фукусіма-1» у 2011 годзе зноў зрабіла тэму ядзернай бяспекі цэнтральнай. На вуліцы выйшлі тысячы людзей.' },
        { type: 'paragraph', text: 'У 2013 годзе каля 220 тысяч удзельнікаў па ўсім востраве стварылі чалавечы ланцуг даўжынёй больш за 200 км, патрабуючы закрыцця ўсіх АЭС.' },
        { type: 'heading', level: 2, text: 'Новыя выклікі' },
        { type: 'paragraph', text: 'Шлях Тайваня да адмовы ад атамнай энергетыкі заняў амаль паўстагоддзя. Цяпер галоўнае пытанне іншае: як забяспечыць востраў энергіяй без атама і з большай доляй аднаўляльных крыніц.' }
      ]
    },
    'democracy-in-taiwan2': {
      id: 'democracy-in-taiwan2',
      slug: 'how-taiwan-built-a-democracy',
      title: 'Як Тайвань пабудаваў дэмакратыю',
      date: '2025-01-10',
      categories: ['дэмакратыя', 'гісторыя'],
      excerpt: 'Кароткая гісторыя пераходу Тайваня ад аўтарытарызму да дэмакратычнай сістэмы.',
      image: baseArticleAssets.democracy.image,
      content: [
        { type: 'paragraph', text: 'Шлях Тайваня да дэмакратыі быў доўгім і балючым: ад ваеннага становішча і цэнзуры да свабодных выбараў і моцнай грамадзянскай супольнасці.' },
        { type: 'paragraph', text: 'Скасаванне ваеннага становішча ў 1987 годзе стала пераломам, пасля якога пачаліся партыйная канкурэнцыя, адкрытыя медыя і рэформы інстытутаў.' },
        { type: 'paragraph', text: 'Грамадзянская супольнасць сыграла ключавую ролю: яна патрабавала памяці пра рэпрэсіі, празрыстасці і ўдзелу людзей у палітыцы.' }
      ]
    },
    'democracy-in-taiwan3': {
      id: 'democracy-in-taiwan3',
      slug: 'belarus-taiwan-civic-bridges',
      title: 'Беларусь і Тайвань: грамадзянскія масты',
      date: '2025-01-09',
      categories: ['Беларусь — Тайвань', 'культура'],
      excerpt: 'Як даследаванні, пераклады і культурныя праекты дапамагаюць лепш разумець адно аднаго.',
      image: baseArticleAssets.relations.image,
      content: [
        { type: 'paragraph', text: 'Супраца Беларусі і Тайваня пачынаецца з уважлівага перакладу досведу: гісторыі дэмакратызацыі, памяці, культуры і грамадзянскай самаарганізацыі.' },
        { type: 'paragraph', text: 'Такія сувязі не патрабуюць гучных лозунгаў. Яны будуюцца праз даследаванні, адкрытыя лекцыі, адукацыйныя матэрыялы і партнёрствы паміж людзьмі.' }
      ]
    }
  },
  ru: {
    'pobeda-nad-aes-2025': {
      ...baseArticleAssets.nuclear,
      title: 'Победа над АЭС спустя сорок лет протестов. И такое возможно',
      lead: 'Рассказываем о том, как аварии на Чернобыльской АЭС и «Фукусима-1» сыграли решающую роль в отказе Тайваня от ядерной энергетики.',
      excerpt: 'История о том, как гражданское давление, Чернобыль и Фукусима изменили энергетический курс Тайваня.',
      author: 'Андрей Архипенко',
      imageCaption: 'Фото: Андрей Архипенко / GreenBelarus.info',
      categories: ['история', 'Тайвань', 'антиядерное движение'],
      content: [
        { type: 'paragraph', text: '17 мая 2025 года был остановлен последний реактор АЭС «Мааньшань» на Тайване. Этот шаг подвёл черту под многолетней дискуссией об атомной энергетике на острове.' },
        { type: 'paragraph', text: '23 августа 2025 года прошёл референдум о продлении срока эксплуатации станции. Он был признан несостоявшимся из-за низкой явки, и курс на закрытие АЭС остался в силе.' },
        { type: 'heading', level: 2, text: 'Как Тайвань пришёл к этому решению' },
        { type: 'paragraph', text: 'В 1970-х Гоминьдан сделал ставку на атом, чтобы снизить зависимость от нефти после мирового энергетического кризиса. К середине 1980-х значительная часть электроэнергии вырабатывалась на трёх АЭС.' },
        { type: 'paragraph', text: 'Но вместе с ростом мощностей росло и недоверие общества: мелкие аварии, дорогие стройки и закрытость государственной Taipower усиливали тревогу.' },
        { type: 'paragraph', text: 'После взрыва на Чернобыльской АЭС в 1986 году антиядерное движение получило новый импульс. Вопрос безопасности станций вышел за пределы экспертных дискуссий и стал политическим.' },
        { type: 'heading', level: 2, text: 'Роль активистов и политиков' },
        { type: 'paragraph', text: 'В 1986 году активисты и оппозиционные политики включили требование отказаться от атома в программу Демократической прогрессивной партии.' },
        { type: 'paragraph', text: 'В 1988 году появилась ассоциация YASA, которая объединила жителей, организовала митинги и стала школой гражданской самоорганизации.' },
        { type: 'heading', level: 2, text: 'Новая волна протестов' },
        { type: 'paragraph', text: 'Авария на японской АЭС «Фукусима-1» в 2011 году снова сделала тему ядерной безопасности центральной. На улицы вышли тысячи людей.' },
        { type: 'paragraph', text: 'В 2013 году около 220 тысяч участников по всему острову образовали человеческую цепь длиной более 200 км, требуя закрытия всех АЭС.' },
        { type: 'heading', level: 2, text: 'Новые вызовы' },
        { type: 'paragraph', text: 'Путь Тайваня к отказу от атомной энергетики занял почти полвека. Теперь главный вопрос другой: как обеспечить остров энергией без атома и с большей долей возобновляемых источников.' }
      ]
    },
    'democracy-in-taiwan2': {
      id: 'democracy-in-taiwan2',
      slug: 'how-taiwan-built-a-democracy',
      title: 'Как Тайвань построил демократию',
      date: '2025-01-10',
      categories: ['демократия', 'история'],
      excerpt: 'Краткая история перехода Тайваня от авторитарного режима к демократической системе.',
      image: baseArticleAssets.democracy.image,
      content: [
        { type: 'paragraph', text: 'Путь Тайваня к демократии был долгим и болезненным: от военного положения и цензуры до свободных выборов и сильного гражданского общества.' },
        { type: 'paragraph', text: 'Отмена военного положения в 1987 году стала переломным моментом, после которого начались партийная конкуренция, открытые медиа и институциональные реформы.' },
        { type: 'paragraph', text: 'Гражданское общество сыграло ключевую роль: оно требовало памяти о репрессиях, прозрачности и участия людей в политике.' }
      ]
    },
    'democracy-in-taiwan3': {
      id: 'democracy-in-taiwan3',
      slug: 'belarus-taiwan-civic-bridges',
      title: 'Беларусь и Тайвань: гражданские мосты',
      date: '2025-01-09',
      categories: ['Беларусь — Тайвань', 'культура'],
      excerpt: 'Как исследования, переводы и культурные проекты помогают лучше понимать друг друга.',
      image: baseArticleAssets.relations.image,
      content: [
        { type: 'paragraph', text: 'Сотрудничество Беларуси и Тайваня начинается с внимательного перевода опыта: истории демократизации, памяти, культуры и гражданской самоорганизации.' },
        { type: 'paragraph', text: 'Такие связи строятся через исследования, открытые лекции, образовательные материалы и партнёрства между людьми.' }
      ]
    }
  },
  en: {
    'pobeda-nad-aes-2025': {
      ...baseArticleAssets.nuclear,
      title: 'A Victory over Nuclear Power after Forty Years of Protest',
      lead: 'How Chernobyl and Fukushima helped shape Taiwan’s decision to move away from nuclear energy.',
      excerpt: 'The story of civil pressure, nuclear accidents and Taiwan’s long road away from atomic power.',
      author: 'Andrei Arkhipenka',
      imageCaption: 'Photo: Andrei Arkhipenka / GreenBelarus.info',
      categories: ['history', 'Taiwan', 'anti-nuclear'],
      content: [
        { type: 'paragraph', text: 'On May 17, 2025, Taiwan shut down the last reactor at the Maanshan Nuclear Power Plant. The decision closed a decades-long debate over the island’s nuclear future.' },
        { type: 'paragraph', text: 'On August 23, 2025, a referendum tried to extend the plant’s operation. It failed because turnout was too low, leaving the phase-out policy in place.' },
        { type: 'heading', level: 2, text: 'How Taiwan reached this point' },
        { type: 'paragraph', text: 'In the 1970s, the Kuomintang invested in nuclear energy to reduce oil dependence after the global energy crisis. By the mid-1980s, three nuclear plants produced a major share of Taiwan’s electricity.' },
        { type: 'paragraph', text: 'Public distrust grew alongside capacity: minor accidents, expensive construction and the opacity of the state utility Taipower all deepened concern.' },
        { type: 'paragraph', text: 'The 1986 Chernobyl disaster gave Taiwan’s anti-nuclear movement new force. Safety was no longer only an expert issue; it became a political and civic demand.' },
        { type: 'heading', level: 2, text: 'Activists and politics' },
        { type: 'paragraph', text: 'In 1986, activists and opposition politicians placed opposition to nuclear energy inside the program of the Democratic Progressive Party.' },
        { type: 'paragraph', text: 'In 1988, residents formed YASA, an association that organized rallies, connected communities and became a school of civic self-organization.' },
        { type: 'heading', level: 2, text: 'A new wave of protest' },
        { type: 'paragraph', text: 'The Fukushima disaster in 2011 returned nuclear safety to the center of public debate. Thousands of people went into the streets across Taiwan.' },
        { type: 'paragraph', text: 'In 2013, about 220,000 people formed a human chain more than 200 kilometers long, demanding the closure of all nuclear plants.' },
        { type: 'heading', level: 2, text: 'New challenges' },
        { type: 'paragraph', text: 'Taiwan’s road away from nuclear energy took almost half a century. The question now is how the island can secure enough power without nuclear energy and with a larger share of renewables.' }
      ]
    },
    'democracy-in-taiwan2': {
      id: 'democracy-in-taiwan2',
      slug: 'how-taiwan-built-a-democracy',
      title: 'How Taiwan Built a Democracy',
      date: '2025-01-10',
      categories: ['democracy', 'history'],
      excerpt: 'A short history of Taiwan’s transition from authoritarian rule to democratic politics.',
      image: baseArticleAssets.democracy.image,
      content: [
        { type: 'paragraph', text: 'Taiwan’s road to democracy was long and painful: from martial law and censorship to free elections and a strong civil society.' },
        { type: 'paragraph', text: 'The lifting of martial law in 1987 marked the turning point, opening the way for party competition, independent media and institutional reform.' },
        { type: 'paragraph', text: 'Civil society played a decisive role by demanding historical memory, transparency and public participation in politics.' }
      ]
    },
    'democracy-in-taiwan3': {
      id: 'democracy-in-taiwan3',
      slug: 'belarus-taiwan-civic-bridges',
      title: 'Belarus and Taiwan: Civic Bridges',
      date: '2025-01-09',
      categories: ['Belarus — Taiwan', 'culture'],
      excerpt: 'How research, translation and cultural projects help both societies understand each other better.',
      image: baseArticleAssets.relations.image,
      content: [
        { type: 'paragraph', text: 'Cooperation between Belarus and Taiwan begins with careful translation of experience: democratization, memory work, culture and civic self-organization.' },
        { type: 'paragraph', text: 'These links are built through research, public lectures, educational materials and partnerships between people.' }
      ]
    }
  },
  pl: {
    'pobeda-nad-aes-2025': {
      ...baseArticleAssets.nuclear,
      title: 'Zwycięstwo nad atomem po czterdziestu latach protestów',
      lead: 'Opowiadamy, jak Czarnobyl i Fukushima wpłynęły na decyzję Tajwanu o odejściu od energetyki jądrowej.',
      excerpt: 'Historia presji społecznej, katastrof jądrowych i długiej drogi Tajwanu od atomu.',
      author: 'Andrei Arkhipenka',
      imageCaption: 'Fot. Andrei Arkhipenka / GreenBelarus.info',
      categories: ['historia', 'Tajwan', 'ruch antyatomowy'],
      content: [
        { type: 'paragraph', text: '17 maja 2025 roku Tajwan zatrzymał ostatni reaktor elektrowni Maanshan. Ta decyzja zamknęła wieloletnią debatę o przyszłości energetyki jądrowej na wyspie.' },
        { type: 'paragraph', text: '23 sierpnia 2025 roku odbyło się referendum w sprawie przedłużenia pracy elektrowni. Z powodu niskiej frekwencji nie było wiążące, a kurs na zamknięcie atomu pozostał aktualny.' },
        { type: 'heading', level: 2, text: 'Jak Tajwan doszedł do tej decyzji' },
        { type: 'paragraph', text: 'W latach 70. Kuomintang postawił na atom, aby zmniejszyć zależność od ropy po światowym kryzysie energetycznym. W połowie lat 80. trzy elektrownie jądrowe produkowały znaczącą część energii.' },
        { type: 'paragraph', text: 'Wraz ze wzrostem mocy rosła nieufność społeczna: drobne awarie, kosztowne budowy i nieprzejrzystość państwowej firmy Taipower budziły coraz większy niepokój.' },
        { type: 'paragraph', text: 'Katastrofa w Czarnobylu w 1986 roku dała ruchowi antyatomowemu nową siłę. Bezpieczeństwo elektrowni stało się tematem politycznym i obywatelskim.' },
        { type: 'heading', level: 2, text: 'Aktywiści i polityka' },
        { type: 'paragraph', text: 'W 1986 roku aktywiści i politycy opozycji wpisali sprzeciw wobec atomu do programu Demokratycznej Partii Postępowej.' },
        { type: 'paragraph', text: 'W 1988 roku powstało stowarzyszenie YASA, które organizowało protesty, łączyło społeczności i stało się szkołą samoorganizacji obywatelskiej.' },
        { type: 'heading', level: 2, text: 'Nowa fala protestów' },
        { type: 'paragraph', text: 'Awaria w japońskiej Fukushimie w 2011 roku ponownie postawiła bezpieczeństwo jądrowe w centrum debaty. Na ulice Tajwanu wyszły tysiące osób.' },
        { type: 'paragraph', text: 'W 2013 roku około 220 tysięcy uczestników utworzyło ludzki łańcuch o długości ponad 200 km, domagając się zamknięcia wszystkich elektrowni jądrowych.' },
        { type: 'heading', level: 2, text: 'Nowe wyzwania' },
        { type: 'paragraph', text: 'Droga Tajwanu od energetyki jądrowej trwała prawie pół wieku. Teraz najważniejsze pytanie brzmi: jak zapewnić wyspie energię bez atomu i z większym udziałem źródeł odnawialnych.' }
      ]
    },
    'democracy-in-taiwan2': {
      id: 'democracy-in-taiwan2',
      slug: 'how-taiwan-built-a-democracy',
      title: 'Jak Tajwan zbudował demokrację',
      date: '2025-01-10',
      categories: ['demokracja', 'historia'],
      excerpt: 'Krótka historia przejścia Tajwanu od autorytaryzmu do demokratycznej polityki.',
      image: baseArticleAssets.democracy.image,
      content: [
        { type: 'paragraph', text: 'Droga Tajwanu do demokracji była długa i bolesna: od stanu wojennego i cenzury do wolnych wyborów oraz silnego społeczeństwa obywatelskiego.' },
        { type: 'paragraph', text: 'Zniesienie stanu wojennego w 1987 roku stało się punktem zwrotnym, który otworzył drogę do konkurencji partyjnej, wolnych mediów i reform instytucji.' },
        { type: 'paragraph', text: 'Społeczeństwo obywatelskie odegrało kluczową rolę, domagając się pamięci o represjach, przejrzystości i udziału ludzi w polityce.' }
      ]
    },
    'democracy-in-taiwan3': {
      id: 'democracy-in-taiwan3',
      slug: 'belarus-taiwan-civic-bridges',
      title: 'Białoruś i Tajwan: mosty obywatelskie',
      date: '2025-01-09',
      categories: ['Białoruś — Tajwan', 'kultura'],
      excerpt: 'Jak badania, tłumaczenia i projekty kulturalne pomagają lepiej się rozumieć.',
      image: baseArticleAssets.relations.image,
      content: [
        { type: 'paragraph', text: 'Współpraca Białorusi i Tajwanu zaczyna się od uważnego przekładu doświadczeń: demokratyzacji, pracy z pamięcią, kultury i samoorganizacji obywatelskiej.' },
        { type: 'paragraph', text: 'Takie relacje powstają dzięki badaniom, otwartym wykładom, materiałom edukacyjnym i partnerstwom między ludźmi.' }
      ]
    }
  },
  zh: {
    'pobeda-nad-aes-2025': {
      ...baseArticleAssets.nuclear,
      title: '四十年抗爭後的非核勝利',
      lead: '切爾諾貝利與福島如何影響台灣走向非核能源政策。',
      excerpt: '公民壓力、核災記憶與台灣漫長非核道路的故事。',
      author: 'Andrei Arkhipenka',
      imageCaption: '照片：Andrei Arkhipenka / GreenBelarus.info',
      categories: ['歷史', '台灣', '反核運動'],
      content: [
        { type: 'paragraph', text: '2025年5月17日，台灣最後一座運轉中的核反應爐在馬鞍山核電廠停機。這一步為島內長達數十年的核能爭論畫下重要句點。' },
        { type: 'paragraph', text: '2025年8月23日，台灣舉行延役公投，但因投票率不足而未能通過，非核政策因此延續。' },
        { type: 'heading', level: 2, text: '台灣如何走到這一步' },
        { type: 'paragraph', text: '1970年代，國民黨政府為降低石油依賴而推動核能。到1980年代中期，三座核電廠已供應台灣相當比例的電力。' },
        { type: 'paragraph', text: '但容量增加的同時，社會疑慮也加深：小型事故、昂貴工程與台電資訊不透明，都讓民眾更加不安。' },
        { type: 'paragraph', text: '1986年的切爾諾貝利事故給台灣反核運動新的力量。核電安全不再只是專家議題，而成為政治與公民社會的要求。' },
        { type: 'heading', level: 2, text: '行動者與政治' },
        { type: 'paragraph', text: '1986年，行動者與反對派政治人物把反核主張納入民主進步黨的政治綱領。' },
        { type: 'paragraph', text: '1988年，鹽寮反核自救會成立，組織抗議、連結社群，也成為公民自我組織的重要經驗。' },
        { type: 'heading', level: 2, text: '新的抗爭浪潮' },
        { type: 'paragraph', text: '2011年日本福島核災後，核安再次成為台灣公共討論的核心，數千人走上街頭。' },
        { type: 'paragraph', text: '2013年，約22萬人在全台形成超過200公里的人鏈，要求關閉所有核電廠。' },
        { type: 'heading', level: 2, text: '新的挑戰' },
        { type: 'paragraph', text: '台灣走向非核花了近半個世紀。接下來的問題是：在沒有核能、並提高再生能源比例的情況下，台灣如何確保能源供應。' }
      ]
    },
    'democracy-in-taiwan2': {
      id: 'democracy-in-taiwan2',
      slug: 'how-taiwan-built-a-democracy',
      title: '台灣如何建立民主',
      date: '2025-01-10',
      categories: ['民主', '歷史'],
      excerpt: '台灣從威權統治走向民主政治的簡史。',
      image: baseArticleAssets.democracy.image,
      content: [
        { type: 'paragraph', text: '台灣走向民主的道路漫長而艱難：從戒嚴與審查，到自由選舉與強大的公民社會。' },
        { type: 'paragraph', text: '1987年解除戒嚴是關鍵轉折，之後政黨競爭、媒體開放與制度改革逐步展開。' },
        { type: 'paragraph', text: '公民社會要求記住壓迫歷史、提升透明度，並讓人民真正參與政治。' }
      ]
    },
    'democracy-in-taiwan3': {
      id: 'democracy-in-taiwan3',
      slug: 'belarus-taiwan-civic-bridges',
      title: '白俄羅斯與台灣：公民橋樑',
      date: '2025-01-09',
      categories: ['白俄羅斯—台灣', '文化'],
      excerpt: '研究、翻譯與文化計畫如何幫助兩個社會更理解彼此。',
      image: baseArticleAssets.relations.image,
      content: [
        { type: 'paragraph', text: '白俄羅斯與台灣的合作，始於對彼此經驗的細緻翻譯：民主化、歷史記憶、文化與公民自我組織。' },
        { type: 'paragraph', text: '這些連結透過研究、公開講座、教育材料與人與人之間的合作逐步建立。' }
      ]
    }
  }
};

const nuclearArticleContent = {
  by: [
    { type: 'paragraph', text: '17 мая 2025 года на Тайвані спынілі апошні рэактар АЭС «Мааньшань». Гэта стала фінальнай кропкай у дыскусіі, якая цягнулася дзесяцігоддзямі і шмат разоў расколвала грамадства.' },
    { type: 'paragraph', text: 'У жніўні 2025 года прыхільнікі атамнай энергетыкі паспрабавалі вярнуць тэму праз рэферэндум аб падаўжэнні працы станцыі. Пытанне было прывязана да дадатковай праверкі бяспекі, але праз нізкую яўку рэферэндум не атрымаў юрыдычнай сілы.' },
    { type: 'paragraph', text: 'Сэнс пытання зводзіўся да таго, ці павінна АЭС «Мааньшань» працягнуць працу, калі адказны орган не знойдзе пагроз бяспецы. Патрэбнага парога ўдзелу не было, таму прыхільнікі станцыі не змаглі дамагчыся перазапуску.' },
    { type: 'heading', level: 2, text: 'Як Тайвань прыйшоў да адмовы ад атама' },
    { type: 'paragraph', text: 'У 1970-я гады Гаміньдан разглядаў атамную энергетыку як шлях да большай энергетычнай незалежнасці пасля нафтавага крызісу. Да сярэдзіны 1980-х тры АЭС ужо давалі значную частку электрычнасці на востраве.' },
    { type: 'paragraph', text: 'Асноўнымі станцыямі былі Цзіньшань, Куошэн і Мааньшань — іх часта называлі АЭС № 1, № 2 і № 3. Менавіта яны зрабілі атам важнай часткай энергетычнага балансу Тайваня.' },
    { type: 'paragraph', text: 'Але рост атамнай інфраструктуры суправаджаўся недаверам. Жыхары бачылі дробныя аварыі, дарагое будаўніцтва, закрытасць Taipower і ўсё часцей пыталіся, хто будзе несці адказнасць у выпадку катастрофы.' },
    { type: 'paragraph', text: 'У 1985 годзе 55 дэпутатаў Гаміньдана і шэсць апазіцыйных парламентарыяў патрабавалі прыпыніць праект чацвёртай АЭС. Выканаўчы Юань падтрымаў замарозку, і гэта стала першай сур’ёзнай перамогай антыядзернага руху.' },
    { type: 'heading', level: 2, text: 'Чарнобыль як паваротны момант' },
    { type: 'paragraph', text: 'Аварыя на Чарнобыльскай АЭС у 1986 годзе змяніла маштаб дыскусіі. Тэма бяспекі станцый выйшла за межы экспертных колаў і атрымала падтрымку палітыкаў, мясцовых супольнасцяў і грамадзянскіх ініцыятыў.' },
    { type: 'heading', level: 2, text: 'Актывісты, YASA і палітычны ціск' },
    { type: 'paragraph', text: 'У 1986 годзе антыядзерная пазіцыя была ўключаная ў праграму Дэмакратычнай прагрэсіўнай партыі. Праз два гады ў Гунляо з’явілася Yanliao Anti-Nuclear Self-Help Association — YASA, якая зрабіла пратэсты больш арганізаванымі.' },
    { type: 'paragraph', text: 'YASA аб’яднала жыхароў, праводзіла мітынгі, працавала з журналістамі і наладжвала кантакты з апазіцыйнымі палітыкамі. Для многіх супольнасцяў гэта стала школай грамадзянскай самаарганізацыі.' },
    { type: 'paragraph', text: 'У руху была і сімвалічная, амаль духоўная частка: жыхары звярталіся да багіні Мацзу па знак. Прадказанне, што чацвёртая АЭС будзе пабудаваная, але не запрацуе, пазней успрымалася як маральнае пацвярджэнне іх супраціву.' },
    { type: 'heading', level: 2, text: 'Фукусіма і новая хваля вулічных акцый' },
    { type: 'paragraph', text: 'Да пачатку 2000-х рух аслабеў, але аварыя на «Фукусіме-1» у 2011 годзе вярнула ядзерную бяспеку ў цэнтр грамадскай увагі. Тайвань зноў загаварыў пра сейсмічныя рызыкі, цунамі і старэнне станцый.' },
    { type: 'paragraph', text: 'Праз некалькі тыдняў пасля Фукусімы тысячы людзей выйшлі на вуліцы. Акцыя «430 подсолнухаў» выкарыстоўвала жоўты колер, сланечнікі і папяровыя ветракі як сімвалы жыцця без ядзернай пагрозы і будучай зялёнай энергетыкі.' },
    { type: 'paragraph', text: 'Паводле тайваньскай прэсы, у Тайбэі каля 5000 чалавек выйшлі з жоўтымі плакатамі і сланечнікамі, патрабуючы спыніць будаўніцтва чацвёртай АЭС у Гунляо.' },
    { type: 'paragraph', text: 'Тэма маршу заклікала ўсміхацца сонцу і асцерагацца ядзерных катастроф. Папяровыя ветракі ў руках удзельнікаў паказвалі, што пратэст быў не толькі супраць атама, але і за іншую энергетычную будучыню.' },
    { type: 'paragraph', text: 'У 2013 годзе каля 220 тысяч чалавек стварылі на востраве чалавечы ланцуг даўжынёй больш за 200 км. У 2014 годзе былы лідар DPP Лінь І-сю абвясціў галадоўку з патрабаваннем спыніць праект FNNP.' },
    { type: 'heading', level: 2, text: 'Палітычнае рашэнне і новыя выклікі' },
    { type: 'paragraph', text: 'У 2015 годзе Цай Інвэнь паабяцала поўную адмову ад атамнай энергетыкі да 2025 года. Пасля перамогі DPP у 2016 годзе гэта было замацавана ў рэформах энергетычнага заканадаўства.' },
    { type: 'paragraph', text: 'Нягледзячы на рэферэндум 2018 года, урад не стаў падаўжаць ліцэнзіі і перазапускаць рэактары. Закрыццё апошняга рэактара ў 2025 годзе зрабіла адмову ад атама фактам.' },
    { type: 'paragraph', text: 'Цяпер перад Тайванем стаіць іншая задача: як забяспечыць развіццё эканомікі і прамысловасці без атамнай энергетыкі, робячы стаўку на аднаўляльныя крыніцы і новую энергетычную інфраструктуру.' }
  ],
  ru: [
    { type: 'paragraph', text: '17 мая 2025 года был остановлен последний реактор АЭС «Мааньшань» на Тайване. Этот шаг подвёл черту под многолетней дискуссией об атомной энергетике на острове и стал итогом череды протестов и референдумов, которые раскололи общество, но в итоге закрепили курс на отказ от атома.' },
    { type: 'paragraph', text: '23 августа 2025 года на Тайване был проведён референдум о продлении срока эксплуатации третьей атомной электростанции «Мааньшань». Этот референдум инициировали сторонники атомной энергетики после того, как в мае 2025 года был окончательно закрыт последний действующий энергоблок на Тайване.' },
    { type: 'paragraph', text: 'Вопрос референдума звучал так: «Согласны ли вы с тем, чтобы атомная электростанция „Мааньшань“ продолжила работу, если компетентный орган подтвердит отсутствие опасений по поводу безопасности?»' },
    { type: 'paragraph', text: 'В итоге референдум был признан несостоявшимся, поскольку в нём не принял участие минимальный порог избирателей. Из-за низкой явки сторонники АЭС не смогли добиться необходимой поддержки, и АЭС «Мааньшань» была окончательно остановлена.' },
    { type: 'heading', level: 2, text: 'Как Тайвань пришёл к отказу от атома' },
    { type: 'paragraph', text: 'В 1970-х Гоминьдан (Китайская национальная партия) сделал ставку на атом, стремясь снизить зависимость от нефти после мирового энергетического кризиса. К середине 1980-х более половины электроэнергии Тайваня вырабатывали три атомные электростанции: АЭС Цзиньшань (Jinshan Nuclear Power Plant, также известная как АЭС № 1), АЭС Куошен (Kuosheng Nuclear Power Plant, также известная как АЭС № 2) и АЭС Мааньшань (Maanshan Nuclear Power Plant, также известная как АЭС № 3).' },
    { type: 'paragraph', text: 'Но вместе с ростом мощностей росло и недоверие населения острова к атомной энергетике. Серия мелких аварий, удвоенный бюджет строительства третьей АЭС и закрытость госкомпании Taipower усиливали тревогу.' },
    { type: 'paragraph', text: 'В 1985 году 55 депутатов Гоминьдана и шесть оппозиционных парламентариев потребовали приостановить проект строительства на острове четвёртой АЭС (FNNP). Исполнительный Юань (высший орган исполнительной власти Тайваня) поддержал их, и проект был заморожен. Для антиядерного движения острова это стало первой серьёзной победой.' },
    { type: 'paragraph', text: 'Однако настоящим поворотным моментом в отношении жителей Тайваня к атомной энергетике стала авария на Чернобыльской АЭС.' },
    { type: 'paragraph', text: 'Взрыв на четвёртом энергоблоке Чернобыльской АЭС 26 апреля 1986 года стал новым толчком для зарождающегося антиядерного движения Тайваня. К этому моменту общественные дебаты о безопасности атомных станций уже вышли за рамки экспертных кругов и получили поддержку оппозиционных политиков. Но Чернобыльская катастрофа активизировала эти процессы.' },
    { type: 'heading', level: 2, text: 'Активисты, YASA и политическое давление' },
    { type: 'paragraph', text: 'Уже осенью 1986 года антиядерные активисты основали Демократическую прогрессивную партию (DPP) и включили пункт о противодействии атомной энергетике в партийный устав.' },
    { type: 'paragraph', text: 'В марте 1988 года на Тайване создали Яньляоскую ассоциацию самопомощи против строительства АЭС (Yanliao Anti-Nuclear Self-Help Association — YASA), которая сыграла ключевую роль в антиядерном движении. Если до этого протесты были разрозненными, а опасения жителей провинции Гунляо звучали лишь на кухнях и в частных беседах, то YASA объединила всех, даже жителей деревень.' },
    { type: 'paragraph', text: 'Ассоциация взяла на себя организацию митингов, встреч с журналистами, а позже наладила связи с оппозиционными политиками. YASA стала первой антиядерной организацией, которая открыто бросила вызов государственной ядерной политике. Её модель самоорганизации позже вдохновила другие общины, выступавшие против инфраструктурных проектов, и стала школой гражданского активизма.' },
    { type: 'paragraph', text: 'Ещё до основания YASA община искала поддержку не только у учёных, но и у богов. У Тянь-фу, служитель храма Жэньхэ, обратился к богине Мацзу за прорицанием. Ответ был загадочным: «Четвёртая атомная электростанция будет построена, но не будет работать».' },
    { type: 'paragraph', text: 'Смысл этого предсказания оставался неясным, но для жителей деревни оно стало знаком свыше. Слова Мацзу воспринимались как моральная санкция на сопротивление и укрепили уверенность, что их борьба имеет не только социальное, но и духовное основание. Четвёртая АЭС была построена, но так и не введена в эксплуатацию, и предсказание исполнилось.' },
    { type: 'heading', level: 2, text: 'Новая волна протестов' },
    { type: 'paragraph', text: 'К началу 2000-х антиядерное движение заметно ослабло. Четвёртая АЭС всё ещё оставалась недостроенной, но активность протестов снижалась. Часть лидеров движения ушла в политику или сосредоточилась на других экологических темах, а общество устало от долгого противостояния.' },
    { type: 'paragraph', text: 'Однако в марте 2011 года произошла авария на японской АЭС «Фукусима-1», и это стало шоком для тайваньцев. Снова заговорили о сейсмических рисках, угрозе цунами и безопасности стареющих станций. Антиядерное движение пережило второе рождение.' },
    { type: 'paragraph', text: 'Уже через несколько недель после Фукусимы на улицы городов Тайваня вышли тысячи людей. Издание The Taipei Times писало, что Тайбэй окрасился в жёлтый: по подсчётам, 5000 человек вышли на улицы с подсолнухами и жёлтыми плакатами, требуя остановить строительство четвёртой АЭС в Гунляо.' },
    { type: 'paragraph', text: 'Акция под названием «430 подсолнухов» собрала сторонников зелёной энергетики со всего острова. Тема марша — «Улыбнитесь солнцу, берегитесь ядерных катастроф» — звучала как предупреждение.' },
    { type: 'paragraph', text: 'В руках у некоторых участников были бумажные ветряки, символ будущей зелёной энергетики, и настоящие подсолнухи как знак надежды на жизнь без атомных угроз.' },
    { type: 'paragraph', text: 'В 2013 году около 220 тысяч участников по всему острову образовали «человеческую цепь» протяжённостью более 200 км, требуя закрытия всех АЭС. А весной 2014 года бывший лидер DPP Линь И-сю объявил голодовку, требуя полной остановки проекта FNNP.' },
    { type: 'paragraph', text: 'В январе 2015 года лидер DPP Цай Инвэнь объявила: её партия намерена полностью отказаться от ядерной энергетики к 2025 году. Обещание стало частью её президентской кампании.' },
    { type: 'paragraph', text: 'После победы DPP на выборах 2016 года новое правительство приступило к выполнению обещаний: была принята поправка к Закону об электроэнергетике, которая закрепила постепенный отказ от атомной энергии.' },
    { type: 'paragraph', text: 'Формально этот пункт отменили на референдуме в 2018 году, когда большинство проголосовавших высказались за сохранение АЭС, однако министр экономики Шэнь Чжун-цин заявил, что продлений лицензий или перезапуска реакторов не будет.' },
    { type: 'heading', level: 2, text: 'Политическое решение и новые вызовы' },
    { type: 'paragraph', text: 'Путь Тайваня к отказу от атомной энергетики занял почти полвека — от первых дискуссий времён военного положения до массовых уличных протестов и политических баталий.' },
    { type: 'paragraph', text: 'Закрытие последнего реактора в мае 2025 года и провалившийся августовский референдум, кажется, стали гвоздём в крышку гроба ядерной энергетики на острове.' },
    { type: 'paragraph', text: 'Теперь Тайвань стоит перед новым вызовом: как остров может обеспечить себя энергией без атома? Поиск возобновляемых источников энергии необходим для обеспечения развития экономики и промышленности.' }
  ],
  en: [
    { type: 'paragraph', text: 'On May 17, 2025, Taiwan shut down the last reactor at the Maanshan Nuclear Power Plant. It closed a debate that had lasted for decades and repeatedly divided society.' },
    { type: 'paragraph', text: 'In August 2025, supporters of nuclear energy tried to reopen the issue through a referendum on extending the plant’s operation. The proposal depended on another safety review, but low turnout kept it from becoming binding.' },
    { type: 'paragraph', text: 'The question asked whether Maanshan should be allowed to operate if the competent authority found no safety concerns. The turnout threshold was not met, so supporters could not secure a restart.' },
    { type: 'heading', level: 2, text: 'How Taiwan moved away from nuclear power' },
    { type: 'paragraph', text: 'In the 1970s, the Kuomintang treated nuclear energy as a path to lower oil dependence after the global energy crisis. By the mid-1980s, three nuclear plants supplied a substantial share of the island’s electricity.' },
    { type: 'paragraph', text: 'Those plants were Jinshan, Kuosheng and Maanshan, also known as Nuclear Power Plants No. 1, No. 2 and No. 3. Together, they made nuclear energy a visible part of Taiwan’s power mix.' },
    { type: 'paragraph', text: 'Public mistrust grew alongside the infrastructure. Minor accidents, expensive construction, and the opacity of Taipower pushed residents to ask who would be responsible if a disaster happened.' },
    { type: 'paragraph', text: 'In 1985, 55 Kuomintang legislators and six opposition parliamentarians demanded a pause on the fourth nuclear plant project. The Executive Yuan supported the freeze, giving Taiwan’s anti-nuclear movement its first major victory.' },
    { type: 'heading', level: 2, text: 'Chernobyl as a turning point' },
    { type: 'paragraph', text: 'The 1986 Chernobyl disaster changed the scale of the debate. Nuclear safety moved beyond expert circles and became a matter of political pressure and civic mobilization.' },
    { type: 'heading', level: 2, text: 'Activists, YASA and political pressure' },
    { type: 'paragraph', text: 'In 1986, opposition to nuclear energy entered the program of the Democratic Progressive Party. Two years later, residents in Gongliao created the Yanliao Anti-Nuclear Self-Help Association, known as YASA.' },
    { type: 'paragraph', text: 'YASA brought residents together, organized rallies, worked with journalists, and built ties with opposition politicians. For many communities, it became a practical school of civic self-organization.' },
    { type: 'paragraph', text: 'The movement also carried a symbolic dimension. Residents sought a sign from the goddess Mazu, and the prediction that the fourth plant would be built but never operate later became part of the movement’s moral language.' },
    { type: 'heading', level: 2, text: 'Fukushima and a new wave of protest' },
    { type: 'paragraph', text: 'By the early 2000s, the movement had weakened, but the Fukushima disaster in 2011 returned nuclear safety to the center of public attention. Seismic risks, tsunamis, and aging reactors again became urgent concerns.' },
    { type: 'paragraph', text: 'Within weeks, thousands of people took to the streets. The “430 sunflowers” action used yellow, sunflowers, and paper pinwheels as symbols of life without nuclear danger and a greener energy future.' },
    { type: 'paragraph', text: 'Taiwanese media reported that about 5,000 people marched in Taipei with yellow posters and sunflowers, demanding that construction of the fourth nuclear plant in Gongliao stop.' },
    { type: 'paragraph', text: 'The march’s message connected the image of the sun with a warning about nuclear disasters. Paper pinwheels showed that the protest was also an argument for a different energy model.' },
    { type: 'paragraph', text: 'In 2013, roughly 220,000 people formed a human chain more than 200 kilometers long. In 2014, former DPP leader Lin Yi-hsiung went on hunger strike to demand the end of the FNNP project.' },
    { type: 'heading', level: 2, text: 'A political decision and new challenges' },
    { type: 'paragraph', text: 'In 2015, Tsai Ing-wen promised a full nuclear phase-out by 2025. After the DPP won power in 2016, the pledge was written into energy policy.' },
    { type: 'paragraph', text: 'Even after the 2018 referendum, the government did not extend licenses or restart reactors. The 2025 shutdown of the last reactor made the phase-out a reality.' },
    { type: 'paragraph', text: 'Taiwan now faces a different question: how to power its economy and industry without nuclear plants, while expanding renewables and building a new energy infrastructure.' }
  ],
  pl: [
    { type: 'paragraph', text: '17 maja 2025 roku Tajwan wyłączył ostatni reaktor elektrowni Maanshan. Zakończyło to debatę, która trwała dekadami i wielokrotnie dzieliła społeczeństwo.' },
    { type: 'paragraph', text: 'W sierpniu 2025 roku zwolennicy atomu próbowali wrócić do sprawy poprzez referendum o przedłużeniu pracy elektrowni. Propozycja zależała od kolejnej oceny bezpieczeństwa, ale niska frekwencja sprawiła, że wynik nie był wiążący.' },
    { type: 'paragraph', text: 'Pytanie dotyczyło tego, czy Maanshan powinien działać dalej, jeśli właściwy organ nie stwierdzi zagrożeń dla bezpieczeństwa. Wymaganego progu udziału nie osiągnięto, więc zwolennicy elektrowni nie uzyskali podstaw do jej ponownego uruchomienia.' },
    { type: 'heading', level: 2, text: 'Jak Tajwan odchodził od atomu' },
    { type: 'paragraph', text: 'W latach 70. Kuomintang widział w energii jądrowej sposób na ograniczenie zależności od ropy po światowym kryzysie energetycznym. W połowie lat 80. trzy elektrownie dostarczały znaczną część prądu na wyspie.' },
    { type: 'paragraph', text: 'Były to elektrownie Jinshan, Kuosheng i Maanshan, znane także jako elektrownie jądrowe nr 1, nr 2 i nr 3. To one uczyniły atom ważną częścią tajwańskiego miksu energetycznego.' },
    { type: 'paragraph', text: 'Wraz z rozwojem infrastruktury rosła jednak nieufność. Drobne awarie, wysokie koszty budowy i nieprzejrzystość Taipower wzmacniały pytanie o odpowiedzialność w razie katastrofy.' },
    { type: 'paragraph', text: 'W 1985 roku 55 parlamentarzystów Kuomintangu i sześciu posłów opozycji zażądało zatrzymania projektu czwartej elektrowni. Executive Yuan poparł zamrożenie, co stało się pierwszym dużym sukcesem ruchu antyatomowego.' },
    { type: 'heading', level: 2, text: 'Czarnobyl jako punkt zwrotny' },
    { type: 'paragraph', text: 'Katastrofa w Czarnobylu w 1986 roku zmieniła skalę sporu. Bezpieczeństwo elektrowni wyszło poza grono ekspertów i stało się tematem politycznego oraz obywatelskiego nacisku.' },
    { type: 'heading', level: 2, text: 'Aktywiści, YASA i presja polityczna' },
    { type: 'paragraph', text: 'W 1986 roku sprzeciw wobec atomu trafił do programu Demokratycznej Partii Postępowej. Dwa lata później mieszkańcy Gongliao stworzyli Yanliao Anti-Nuclear Self-Help Association, czyli YASA.' },
    { type: 'paragraph', text: 'YASA łączyła mieszkańców, organizowała protesty, pracowała z mediami i budowała relacje z politykami opozycji. Dla wielu społeczności była praktyczną szkołą samoorganizacji.' },
    { type: 'paragraph', text: 'Ruch miał też wymiar symboliczny. Mieszkańcy szukali znaku u bogini Mazu, a przepowiednia, że czwarta elektrownia powstanie, lecz nie będzie działać, stała się częścią moralnego języka protestu.' },
    { type: 'heading', level: 2, text: 'Fukushima i nowa fala ulicy' },
    { type: 'paragraph', text: 'Na początku lat 2000. ruch osłabł, ale katastrofa w Fukushimie w 2011 roku ponownie postawiła bezpieczeństwo jądrowe w centrum debaty. Wróciły obawy przed trzęsieniami ziemi, tsunami i starzeniem się reaktorów.' },
    { type: 'paragraph', text: 'Już po kilku tygodniach tysiące osób wyszły na ulice. Akcja „430 słoneczników” używała żółtego koloru, słoneczników i papierowych wiatraczków jako symboli życia bez zagrożenia jądrowego i zielonej energii.' },
    { type: 'paragraph', text: 'Tajwańskie media pisały, że w samym Tajpej około 5000 osób maszerowało z żółtymi plakatami i słonecznikami, domagając się zatrzymania budowy czwartej elektrowni w Gongliao.' },
    { type: 'paragraph', text: 'Hasło marszu łączyło obraz słońca z ostrzeżeniem przed katastrofami jądrowymi. Papierowe wiatraczki pokazywały, że protest był również postulatem innego modelu energetycznego.' },
    { type: 'paragraph', text: 'W 2013 roku około 220 tysięcy ludzi utworzyło łańcuch dłuższy niż 200 km. W 2014 roku były lider DPP Lin Yi-hsiung rozpoczął głodówkę, domagając się końca projektu FNNP.' },
    { type: 'heading', level: 2, text: 'Decyzja polityczna i nowe wyzwania' },
    { type: 'paragraph', text: 'W 2015 roku Tsai Ing-wen obiecała pełne odejście od atomu do 2025 roku. Po zwycięstwie DPP w 2016 roku kierunek ten wpisano w politykę energetyczną.' },
    { type: 'paragraph', text: 'Nawet po referendum z 2018 roku rząd nie przedłużył licencji ani nie uruchomił reaktorów ponownie. Zamknięcie ostatniego reaktora w 2025 roku uczyniło odejście od atomu faktem.' },
    { type: 'paragraph', text: 'Tajwan stoi teraz przed innym pytaniem: jak zasilić gospodarkę i przemysł bez elektrowni jądrowych, rozwijając odnawialne źródła energii i nową infrastrukturę.' }
  ],
  zh: [
    { type: 'paragraph', text: '2025年5月17日，台灣關閉馬鞍山核電廠最後一座反應爐。這為一場持續數十年、反覆撕裂社會的核能爭論畫下句點。' },
    { type: 'paragraph', text: '2025年8月，核能支持者試圖以延役公投重新打開議題。提案以額外安全審查為前提，但投票率不足，使結果無法產生約束力。' },
    { type: 'paragraph', text: '公投問題的核心是：若主管機關確認沒有安全疑慮，馬鞍山核電廠是否應繼續運轉。由於未達投票門檻，支持者無法推動重啟。' },
    { type: 'heading', level: 2, text: '台灣如何走向非核' },
    { type: 'paragraph', text: '1970年代，國民黨政府把核能視為降低石油依賴的工具。到1980年代中期，三座核電廠已供應台灣相當比例的電力。' },
    { type: 'paragraph', text: '這三座電廠分別是金山、國聖與馬鞍山，也常被稱為核一、核二與核三。它們讓核能成為台灣能源結構中顯眼的一部分。' },
    { type: 'paragraph', text: '但基礎設施擴張的同時，不信任也在增加。小型事故、昂貴工程與台電資訊不透明，都讓民眾追問：若災難發生，誰來負責？' },
    { type: 'paragraph', text: '1985年，55名國民黨立委與6名反對派議員要求暫停第四核電廠計畫。行政院支持凍結工程，這成為台灣反核運動的重要早期勝利。' },
    { type: 'heading', level: 2, text: '切爾諾貝利作為轉折點' },
    { type: 'paragraph', text: '1986年的切爾諾貝利災難改變了辯論的尺度。核電安全不再只是專家圈內的問題，而成為政治壓力與公民動員的核心。' },
    { type: 'heading', level: 2, text: '行動者、YASA與政治壓力' },
    { type: 'paragraph', text: '1986年，反核立場進入民主進步黨的政治綱領。兩年後，貢寮居民成立鹽寮反核自救會 YASA，使抗爭更有組織。' },
    { type: 'paragraph', text: 'YASA串連居民、組織集會、與媒體合作，並建立與反對派政治人物的關係。對許多地方社群而言，這是一所公民自我組織的實踐學校。' },
    { type: 'paragraph', text: '運動也有象徵層面。居民向媽祖尋求神示，而「第四核電廠會建成，但不會運轉」的預言，後來成為抗爭道德語言的一部分。' },
    { type: 'heading', level: 2, text: '福島與新的街頭浪潮' },
    { type: 'paragraph', text: '2000年代初期，反核運動一度轉弱，但2011年福島核災讓核安重新回到公共討論中心。地震、海嘯與老舊反應爐的風險再次被看見。' },
    { type: 'paragraph', text: '幾週之內，數千人走上街頭。「430向日葵」行動以黃色、向日葵與紙風車象徵沒有核災威脅的生活，以及更綠色的能源未來。' },
    { type: 'paragraph', text: '台灣媒體報導，僅在台北就約有5000人帶著黃色標語與向日葵上街，要求停止貢寮第四核電廠的建設。' },
    { type: 'paragraph', text: '遊行主題把太陽意象與核災警告連在一起。參與者手中的紙風車也說明，這場抗爭同時是在主張另一種能源模式。' },
    { type: 'paragraph', text: '2013年，約22萬人在全台形成超過200公里的人鏈。2014年，前民進黨主席林義雄以絕食要求終止第四核電廠計畫。' },
    { type: 'heading', level: 2, text: '政治決定與新的挑戰' },
    { type: 'paragraph', text: '2015年，蔡英文承諾在2025年前完成非核。民進黨2016年執政後，這一路線被寫入能源政策。' },
    { type: 'paragraph', text: '即使2018年公投後，政府也沒有延長執照或重啟反應爐。2025年最後一座反應爐停機，使非核成為現實。' },
    { type: 'paragraph', text: '台灣現在面對另一個問題：如何在沒有核電廠的情況下支撐經濟與產業，同時擴大再生能源並建立新的能源基礎設施。' }
  ]
};

Object.assign(nuclearArticleContent, {
  by: [
    { type: 'paragraph', text: '17 мая 2025 года на Тайвані быў спынены апошні рэактар АЭС «Мааньшань». Гэты крок падвёў рысу пад шматгадовай дыскусіяй пра атамную энергетыку на востраве і стаў вынікам шэрагу пратэстаў і рэферэндумаў, якія расколвалі грамадства, але ўрэшце замацавалі курс на адмову ад атама.' },
    { type: 'paragraph', text: '23 жніўня 2025 года на Тайвані прайшоў рэферэндум аб падаўжэнні тэрміну эксплуатацыі трэцяй атамнай электрастанцыі «Мааньшань». Яго ініцыявалі прыхільнікі атамнай энергетыкі пасля таго, як у маі 2025 года быў канчаткова закрыты апошні дзейны энергоблок на Тайвані.' },
    { type: 'paragraph', text: 'Пытанне рэферэндуму гучала так: «Ці згодныя вы з тым, каб атамная электрастанцыя „Мааньшань“ працягнула працу, калі кампетэнтны орган пацвердзіць адсутнасць занепакоенасці адносна бяспекі?»' },
    { type: 'paragraph', text: 'У выніку рэферэндум быў прызнаны несапраўдным, бо ў ім не ўзяла ўдзел мінімальная колькасць выбарцаў. З-за нізкай яўкі прыхільнікі АЭС не змаглі атрымаць неабходную падтрымку, і АЭС «Мааньшань» была канчаткова спыненая.' },
    { type: 'heading', level: 2, text: 'Як Тайвань прыйшоў да гэтага рашэння' },
    { type: 'paragraph', text: 'У 1970-х Гаміньдан (Кітайская нацыянальная партыя) зрабіў стаўку на атам, імкнучыся зменшыць залежнасць ад нафты пасля сусветнага энергетычнага крызісу. Да сярэдзіны 1980-х больш за палову электраэнергіі Тайваня выпрацоўвалі тры атамныя электрастанцыі: АЭС Цзіньшань (Jinshan Nuclear Power Plant, таксама вядомая як АЭС № 1), АЭС Куошэн (Kuosheng Nuclear Power Plant, таксама вядомая як АЭС № 2) і АЭС Мааньшань (Maanshan Nuclear Power Plant, таксама вядомая як АЭС № 3).' },
    { type: 'paragraph', text: 'Але разам з ростам магутнасцяў узрастала і недаверлівасць насельніцтва вострава да атамнай энергетыкі. Серыя дробных аварый, падвоены бюджэт будаўніцтва трэцяй АЭС і закрытасць дзяржаўнай кампаніі Taipower узмацнялі трывогу.' },
    { type: 'paragraph', text: 'У 1985 годзе 55 дэпутатаў Гаміньдана і шэсць апазіцыйных парламентарыяў запатрабавалі прыпыніць праект будаўніцтва на востраве чацвёртай АЭС (FNNP). Выканаўчы Юань (вышэйшы орган выканаўчай улады Тайваня) падтрымаў іх, і праект быў замарожаны. Для антыядзернага руху вострава гэта стала першай сур’ёзнай перамогай.' },
    { type: 'paragraph', text: 'Аднак сапраўдным паваротным момантам у стаўленні жыхароў Тайваня да атамнай энергетыкі стала аварыя на Чарнобыльскай АЭС.' },
    { type: 'paragraph', text: 'Выбух на чацвёртым энергоблоку Чарнобыльскай АЭС 26 красавіка 1986 года стаў новым штуршком для антыядзернага руху Тайваня, які толькі нараджаўся. Да гэтага моманту грамадскія дэбаты пра бяспеку атамных станцый ужо выйшлі за межы экспертных колаў і атрымалі падтрымку апазіцыйных палітыкаў. Але чарнобыльская катастрофа актывізавала гэтыя працэсы.' },
    { type: 'heading', level: 2, text: 'Роля актывістаў і палітыкаў' },
    { type: 'paragraph', text: 'Ужо восенню 1986 года антыядзерныя актывісты заснавалі Дэмакратычную прагрэсіўную партыю (DPP) і ўключылі пункт пра супрацьдзеянне атамнай энергетыцы ў партыйны статут.' },
    { type: 'paragraph', text: 'У сакавіку 1988 года на Тайвані стварылі Яньляоскую асацыяцыю самадапамогі супраць будаўніцтва АЭС (Yanliao Anti-Nuclear Self-Help Association — YASA), якая адыграла ключавую ролю ў антыядзерным руху. Калі да гэтага пратэсты былі разрозненымі, а страхі жыхароў правінцыі Гунляо гучалі толькі на кухнях і ў прыватных размовах, то YASA аб’яднала ўсіх, нават жыхароў вёсак.' },
    { type: 'paragraph', text: 'Асацыяцыя ўзяла на сябе арганізацыю мітынгаў, сустрэч з журналістамі, а пазней наладзіла сувязі з апазіцыйнымі палітыкамі. YASA стала першай антыядзернай арганізацыяй, якая адкрыта кінула выклік дзяржаўнай ядзернай палітыцы. Яе мадэль самаарганізацыі пазней натхніла іншыя супольнасці, што выступалі супраць інфраструктурных праектаў, і стала школай грамадзянскага актывізму.' },
    { type: 'paragraph', text: 'Яшчэ да заснавання YASA супольнасць шукала падтрымку не толькі ў навукоўцаў, але і ў багоў. У Цянь-фу, служыцель храма Жэньхэ, звярнуўся да багіні Мацзу па прадказанне. Адказ быў загадкавы: «Чацвёртая атамная электрастанцыя будзе пабудаваная, але не будзе працаваць».' },
    { type: 'paragraph', text: 'Сэнс гэтага прадказання заставаўся незразумелым, але для жыхароў вёскі яно стала знакам звыш. Словы Мацзу ўспрымаліся як маральная санкцыя на супраціў і ўмацавалі ўпэўненасць, што іх барацьба мае не толькі сацыяльную, але і духоўную аснову. Чацвёртая АЭС была пабудаваная, але так і не была ўведзеная ў эксплуатацыю, і прадказанне спраўдзілася.' },
    { type: 'heading', level: 2, text: 'Новая хваля пратэстаў' },
    { type: 'paragraph', text: 'Да пачатку 2000-х антыядзерны рух прыкметна аслабеў. Чацвёртая АЭС усё яшчэ заставалася недабудаванай, але актыўнасць пратэстаў зніжалася. Частка лідараў руху пайшла ў палітыку або засяродзілася на іншых экалагічных тэмах, а грамадства стамілася ад доўгага супрацьстаяння.' },
    { type: 'paragraph', text: 'Аднак у сакавіку 2011 года адбылася аварыя на японскай АЭС «Фукусіма-1», і гэта стала шокам для тайваньцаў. Зноў загаварылі пра сейсмічныя рызыкі, пагрозу цунамі і бяспеку старых станцый. Антыядзерны рух перажыў другое нараджэнне.' },
    { type: 'paragraph', text: 'Ужо праз некалькі тыдняў пасля Фукусімы на вуліцы гарадоў Тайваня выйшлі тысячы людзей. Выданне The Taipei Times пісала, што Тайбэй афарбаваўся ў жоўты: паводле падлікаў, 5000 чалавек выйшлі на вуліцы з сланечнікамі і жоўтымі плакатамі, патрабуючы спыніць будаўніцтва чацвёртай АЭС у Гунляо.' },
    { type: 'paragraph', text: 'Акцыя пад назвай «430 сланечнікаў» сабрала прыхільнікаў зялёнай энергетыкі з усяго вострава. Тэма маршу — «Усміхніцеся сонцу, асцерагайцеся ядзерных катастроф» — гучала як папярэджанне.' },
    { type: 'paragraph', text: 'У руках у некаторых удзельнікаў былі папяровыя ветракі, сімвал будучай зялёнай энергетыкі, і сапраўдныя сланечнікі як знак надзеі на жыццё без атамных пагроз.' },
    { type: 'paragraph', text: 'У 2013 годзе каля 220 тысяч удзельнікаў па ўсім востраве ўтварылі «чалавечы ланцуг» працягласцю больш за 200 км, патрабуючы закрыцця ўсіх АЭС. А вясной 2014 года былы лідар DPP Лінь І-сю абвясціў галадоўку, патрабуючы поўнага спынення праекта FNNP.' },
    { type: 'paragraph', text: 'У студзені 2015 года лідар DPP Цай Інвэнь абвясціла: яе партыя мае намер цалкам адмовіцца ад ядзернай энергетыкі да 2025 года. Абяцанне стала часткай яе прэзідэнцкай кампаніі.' },
    { type: 'paragraph', text: 'Пасля перамогі DPP на выбарах 2016 года новы ўрад пачаў выконваць абяцанні: была прынята папраўка да Закона аб электраэнергетыцы, якая замацавала паступовую адмову ад атамнай энергіі.' },
    { type: 'paragraph', text: 'Фармальна гэты пункт адмянілі на рэферэндуме ў 2018 годзе, калі большасць тых, хто прагаласаваў, выказалася за захаванне АЭС, аднак міністр эканомікі Шэнь Чжун-цін заявіў, што падаўжэння ліцэнзій або перазапуску рэактараў не будзе.' },
    { type: 'heading', level: 2, text: 'Новыя выклікі' },
    { type: 'paragraph', text: 'Шлях Тайваня да адмовы ад атамнай энергетыкі заняў амаль паўстагоддзя — ад першых дыскусій часоў ваеннага становішча да масавых вулічных пратэстаў і палітычных баталій.' },
    { type: 'paragraph', text: 'Закрыццё апошняга рэактара ў маі 2025 года і правалены жнівеньскі рэферэндум, здаецца, сталі цвіком у вечка труны ядзернай энергетыкі на востраве.' },
    { type: 'paragraph', text: 'Цяпер Тайвань стаіць перад новым выклікам: як востраў можа забяспечыць сябе энергіяй без атама? Пошук аднаўляльных крыніц энергіі неабходны для забеспячэння развіцця эканомікі і прамысловасці.' }
  ],
  en: [
    { type: 'paragraph', text: 'On May 17, 2025, the last reactor at Taiwan’s Maanshan Nuclear Power Plant was shut down. This step drew a line under a years-long debate over nuclear energy on the island and became the result of a chain of protests and referendums that divided society but ultimately fixed the course toward abandoning nuclear power.' },
    { type: 'paragraph', text: 'On August 23, 2025, Taiwan held a referendum on extending the operating life of the third nuclear power plant, Maanshan. The referendum was initiated by supporters of nuclear energy after the last operating power unit in Taiwan was finally closed in May 2025.' },
    { type: 'paragraph', text: 'The referendum question asked whether voters agreed that the Maanshan Nuclear Power Plant should continue operating if the competent authority confirmed that there were no safety concerns.' },
    { type: 'paragraph', text: 'In the end, the referendum was declared invalid because the minimum voter turnout threshold was not reached. Because of low turnout, supporters of the plant could not secure the necessary backing, and Maanshan was finally shut down.' },
    { type: 'heading', level: 2, text: 'How Taiwan reached this decision' },
    { type: 'paragraph', text: 'In the 1970s, the Kuomintang, or Chinese Nationalist Party, placed its bet on nuclear energy, seeking to reduce dependence on oil after the global energy crisis. By the mid-1980s, more than half of Taiwan’s electricity was generated by three nuclear power plants: Jinshan Nuclear Power Plant, also known as Nuclear Power Plant No. 1; Kuosheng Nuclear Power Plant, also known as No. 2; and Maanshan Nuclear Power Plant, also known as No. 3.' },
    { type: 'paragraph', text: 'But as capacity grew, public distrust of nuclear energy also increased. A series of minor accidents, the doubled construction budget for the third nuclear plant, and the opacity of the state-owned Taipower company deepened concern.' },
    { type: 'paragraph', text: 'In 1985, 55 Kuomintang legislators and six opposition parliamentarians demanded that the fourth nuclear power plant project on the island, FNNP, be suspended. The Executive Yuan, Taiwan’s highest executive body, supported them, and the project was frozen. For the island’s anti-nuclear movement, this became the first serious victory.' },
    { type: 'paragraph', text: 'However, the real turning point in how Taiwan’s residents viewed nuclear energy was the accident at the Chernobyl Nuclear Power Plant.' },
    { type: 'paragraph', text: 'The explosion at the fourth unit of the Chernobyl Nuclear Power Plant on April 26, 1986, gave a new push to Taiwan’s emerging anti-nuclear movement. By then, public debates about the safety of nuclear plants had already moved beyond expert circles and gained support from opposition politicians. But the Chernobyl disaster accelerated these processes.' },
    { type: 'heading', level: 2, text: 'The role of activists and politicians' },
    { type: 'paragraph', text: 'Already in the autumn of 1986, anti-nuclear activists founded the Democratic Progressive Party, DPP, and included opposition to nuclear energy in the party charter.' },
    { type: 'paragraph', text: 'In March 1988, the Yanliao Anti-Nuclear Self-Help Association, YASA, was created in Taiwan and played a key role in the anti-nuclear movement. Before that, protests had been scattered, and the fears of Gongliao residents were voiced mostly in kitchens and private conversations. YASA brought everyone together, including village residents.' },
    { type: 'paragraph', text: 'The association took on the organization of rallies and meetings with journalists, and later built links with opposition politicians. YASA became the first anti-nuclear organization to openly challenge state nuclear policy. Its model of self-organization later inspired other communities opposing infrastructure projects and became a school of civic activism.' },
    { type: 'paragraph', text: 'Even before YASA was founded, the community sought support not only from scientists but also from the gods. Wu Tian-fu, a caretaker of Renhe Temple, turned to the goddess Mazu for divination. The answer was mysterious: “The fourth nuclear power plant will be built, but it will not operate.”' },
    { type: 'paragraph', text: 'The meaning of this prophecy remained unclear, but for the villagers it became a sign from above. Mazu’s words were seen as moral sanction for resistance and strengthened the belief that their struggle had not only a social but also a spiritual foundation. The fourth nuclear power plant was built, but it never entered operation, and the prophecy came true.' },
    { type: 'heading', level: 2, text: 'A new wave of protests' },
    { type: 'paragraph', text: 'By the early 2000s, the anti-nuclear movement had noticeably weakened. The fourth nuclear power plant was still unfinished, but protest activity was declining. Some movement leaders had entered politics or focused on other environmental issues, while society had grown tired of the long confrontation.' },
    { type: 'paragraph', text: 'However, in March 2011, the accident at Japan’s Fukushima Daiichi Nuclear Power Plant shocked Taiwanese society. Seismic risks, the threat of tsunamis, and the safety of aging plants were discussed again. The anti-nuclear movement experienced a second birth.' },
    { type: 'paragraph', text: 'Within weeks after Fukushima, thousands of people took to the streets of Taiwanese cities. The Taipei Times wrote that Taipei had turned yellow: according to estimates, 5,000 people went into the streets with sunflowers and yellow posters, demanding that construction of the fourth nuclear power plant in Gongliao be stopped.' },
    { type: 'paragraph', text: 'The action called “430 Sunflowers” brought together supporters of green energy from across the island. The theme of the march, “Smile at the sun, beware of nuclear disasters,” sounded like a warning.' },
    { type: 'paragraph', text: 'Some participants held paper pinwheels, a symbol of future green energy, and real sunflowers as a sign of hope for life without nuclear threats.' },
    { type: 'paragraph', text: 'In 2013, about 220,000 participants across the island formed a human chain more than 200 kilometers long, demanding the closure of all nuclear power plants. In the spring of 2014, former DPP leader Lin Yi-hsiung began a hunger strike demanding a complete halt to the FNNP project.' },
    { type: 'paragraph', text: 'In January 2015, DPP leader Tsai Ing-wen announced that her party intended to fully abandon nuclear energy by 2025. The promise became part of her presidential campaign.' },
    { type: 'paragraph', text: 'After the DPP won the 2016 elections, the new government began implementing its promises: an amendment to the Electricity Act was adopted, establishing the gradual phase-out of nuclear energy.' },
    { type: 'paragraph', text: 'Formally, this provision was repealed in a 2018 referendum, when a majority of voters supported preserving nuclear power plants. However, Economy Minister Shen Jong-chin stated that there would be no license extensions or reactor restarts.' },
    { type: 'heading', level: 2, text: 'New challenges' },
    { type: 'paragraph', text: 'Taiwan’s path toward abandoning nuclear energy took almost half a century, from the first discussions during the martial-law era to mass street protests and political battles.' },
    { type: 'paragraph', text: 'The shutdown of the last reactor in May 2025 and the failed August referendum seem to have become the nail in the coffin of nuclear energy on the island.' },
    { type: 'paragraph', text: 'Now Taiwan faces a new challenge: how can the island provide itself with energy without nuclear power? The search for renewable energy sources is necessary to support the development of the economy and industry.' }
  ],
  pl: [
    { type: 'paragraph', text: '17 maja 2025 roku zatrzymano ostatni reaktor elektrowni jądrowej Maanshan na Tajwanie. Ten krok zamknął wieloletnią dyskusję o energetyce jądrowej na wyspie i stał się rezultatem serii protestów oraz referendów, które dzieliły społeczeństwo, ale ostatecznie utrwaliły kurs odejścia od atomu.' },
    { type: 'paragraph', text: '23 sierpnia 2025 roku na Tajwanie odbyło się referendum w sprawie przedłużenia okresu eksploatacji trzeciej elektrowni jądrowej Maanshan. Zainicjowali je zwolennicy energetyki jądrowej po tym, jak w maju 2025 roku ostatecznie zamknięto ostatni działający blok energetyczny na Tajwanie.' },
    { type: 'paragraph', text: 'Pytanie referendalne brzmiało, czy wyborcy zgadzają się, aby elektrownia jądrowa Maanshan kontynuowała pracę, jeśli właściwy organ potwierdzi brak obaw dotyczących bezpieczeństwa.' },
    { type: 'paragraph', text: 'Ostatecznie referendum uznano za nieważne, ponieważ nie wzięła w nim udziału minimalna wymagana liczba wyborców. Z powodu niskiej frekwencji zwolennicy elektrowni nie zdobyli potrzebnego poparcia, a Maanshan została ostatecznie zatrzymana.' },
    { type: 'heading', level: 2, text: 'Jak Tajwan doszedł do tej decyzji' },
    { type: 'paragraph', text: 'W latach 70. Kuomintang, czyli Chińska Partia Narodowa, postawił na atom, dążąc do zmniejszenia zależności od ropy po światowym kryzysie energetycznym. W połowie lat 80. ponad połowę energii elektrycznej Tajwanu wytwarzały trzy elektrownie jądrowe: Jinshan, znana też jako elektrownia nr 1; Kuosheng, znana jako nr 2; oraz Maanshan, znana jako nr 3.' },
    { type: 'paragraph', text: 'Jednak wraz ze wzrostem mocy rosła nieufność mieszkańców wyspy wobec energetyki jądrowej. Seria drobnych awarii, podwojony budżet budowy trzeciej elektrowni oraz nieprzejrzystość państwowej firmy Taipower wzmacniały niepokój.' },
    { type: 'paragraph', text: 'W 1985 roku 55 deputowanych Kuomintangu i sześciu parlamentarzystów opozycji zażądało wstrzymania projektu budowy czwartej elektrowni jądrowej na wyspie, FNNP. Executive Yuan, najwyższy organ władzy wykonawczej Tajwanu, poparł ich, a projekt został zamrożony. Dla ruchu antyatomowego była to pierwsza poważna wygrana.' },
    { type: 'paragraph', text: 'Prawdziwym punktem zwrotnym w stosunku mieszkańców Tajwanu do energetyki jądrowej stała się jednak katastrofa w elektrowni jądrowej w Czarnobylu.' },
    { type: 'paragraph', text: 'Wybuch czwartego bloku elektrowni w Czarnobylu 26 kwietnia 1986 roku dał nowy impuls rodzącemu się tajwańskiemu ruchowi antyatomowemu. Do tego czasu debaty publiczne o bezpieczeństwie elektrowni wyszły już poza kręgi ekspertów i zyskały poparcie polityków opozycji. Katastrofa czarnobylska przyspieszyła jednak te procesy.' },
    { type: 'heading', level: 2, text: 'Rola aktywistów i polityków' },
    { type: 'paragraph', text: 'Już jesienią 1986 roku aktywiści antyatomowi założyli Demokratyczną Partię Postępową, DPP, i wpisali sprzeciw wobec energetyki jądrowej do statutu partii.' },
    { type: 'paragraph', text: 'W marcu 1988 roku na Tajwanie utworzono Yanliao Anti-Nuclear Self-Help Association, YASA, która odegrała kluczową rolę w ruchu antyatomowym. Jeśli wcześniej protesty były rozproszone, a obawy mieszkańców Gongliao pojawiały się głównie w kuchniach i prywatnych rozmowach, YASA zjednoczyła wszystkich, nawet mieszkańców wsi.' },
    { type: 'paragraph', text: 'Stowarzyszenie wzięło na siebie organizację wieców i spotkań z dziennikarzami, a później nawiązało kontakty z politykami opozycji. YASA stała się pierwszą organizacją antyatomową, która otwarcie rzuciła wyzwanie państwowej polityce jądrowej. Jej model samoorganizacji zainspirował później inne społeczności sprzeciwiające się projektom infrastrukturalnym i stał się szkołą aktywizmu obywatelskiego.' },
    { type: 'paragraph', text: 'Jeszcze przed powstaniem YASA społeczność szukała wsparcia nie tylko u naukowców, lecz także u bogów. Wu Tian-fu, opiekun świątyni Renhe, zwrócił się do bogini Mazu o wróżbę. Odpowiedź była zagadkowa: „Czwarta elektrownia jądrowa zostanie zbudowana, ale nie będzie działać”.' },
    { type: 'paragraph', text: 'Sens tej przepowiedni pozostawał niejasny, ale dla mieszkańców wioski stała się ona znakiem z góry. Słowa Mazu postrzegano jako moralną sankcję dla oporu i wzmocnienie przekonania, że ich walka ma nie tylko społeczne, ale także duchowe podstawy. Czwarta elektrownia została zbudowana, lecz nigdy nie została uruchomiona, a przepowiednia się spełniła.' },
    { type: 'heading', level: 2, text: 'Nowa fala protestów' },
    { type: 'paragraph', text: 'Na początku lat 2000. ruch antyatomowy wyraźnie osłabł. Czwarta elektrownia wciąż pozostawała niedokończona, ale aktywność protestów malała. Część liderów ruchu weszła do polityki lub skupiła się na innych tematach ekologicznych, a społeczeństwo zmęczyło się długim konfliktem.' },
    { type: 'paragraph', text: 'W marcu 2011 roku doszło jednak do awarii w japońskiej elektrowni Fukushima Daiichi, co było szokiem dla Tajwańczyków. Ponownie zaczęto mówić o ryzyku sejsmicznym, zagrożeniu tsunami i bezpieczeństwie starzejących się elektrowni. Ruch antyatomowy przeżył drugie narodziny.' },
    { type: 'paragraph', text: 'Już kilka tygodni po Fukushimie na ulice tajwańskich miast wyszły tysiące ludzi. The Taipei Times pisał, że Tajpej zabarwiło się na żółto: według szacunków 5000 osób wyszło na ulice ze słonecznikami i żółtymi plakatami, domagając się zatrzymania budowy czwartej elektrowni jądrowej w Gongliao.' },
    { type: 'paragraph', text: 'Akcja pod nazwą „430 słoneczników” zgromadziła zwolenników zielonej energii z całej wyspy. Temat marszu — „Uśmiechnijcie się do słońca, strzeżcie się katastrof jądrowych” — brzmiał jak ostrzeżenie.' },
    { type: 'paragraph', text: 'Niektórzy uczestnicy trzymali papierowe wiatraczki, symbol przyszłej zielonej energii, oraz prawdziwe słoneczniki jako znak nadziei na życie bez zagrożeń atomowych.' },
    { type: 'paragraph', text: 'W 2013 roku około 220 tysięcy uczestników na całej wyspie utworzyło ludzki łańcuch o długości ponad 200 km, domagając się zamknięcia wszystkich elektrowni jądrowych. Wiosną 2014 roku były lider DPP Lin Yi-hsiung rozpoczął głodówkę, żądając całkowitego zatrzymania projektu FNNP.' },
    { type: 'paragraph', text: 'W styczniu 2015 roku liderka DPP Tsai Ing-wen ogłosiła, że jej partia zamierza całkowicie zrezygnować z energii jądrowej do 2025 roku. Obietnica stała się częścią jej kampanii prezydenckiej.' },
    { type: 'paragraph', text: 'Po zwycięstwie DPP w wyborach w 2016 roku nowy rząd rozpoczął realizację obietnic: przyjęto poprawkę do ustawy o energii elektrycznej, która utrwaliła stopniowe odchodzenie od energii jądrowej.' },
    { type: 'paragraph', text: 'Formalnie ten zapis został uchylony w referendum w 2018 roku, kiedy większość głosujących opowiedziała się za zachowaniem elektrowni jądrowych, jednak minister gospodarki Shen Jong-chin oświadczył, że nie będzie przedłużania licencji ani ponownego uruchamiania reaktorów.' },
    { type: 'heading', level: 2, text: 'Nowe wyzwania' },
    { type: 'paragraph', text: 'Droga Tajwanu do odejścia od energetyki jądrowej zajęła prawie pół wieku — od pierwszych dyskusji czasów stanu wojennego po masowe protesty uliczne i polityczne batalie.' },
    { type: 'paragraph', text: 'Zamknięcie ostatniego reaktora w maju 2025 roku i nieudane sierpniowe referendum wydają się gwoździem do trumny energetyki jądrowej na wyspie.' },
    { type: 'paragraph', text: 'Teraz Tajwan stoi przed nowym wyzwaniem: jak wyspa może zapewnić sobie energię bez atomu? Poszukiwanie odnawialnych źródeł energii jest konieczne dla rozwoju gospodarki i przemysłu.' }
  ],
  zh: [
    { type: 'paragraph', text: '2025年5月17日，台灣馬鞍山核電廠最後一座反應爐停機。這一步為島上長年關於核能的討論畫下句點，也是一連串抗議與公投的結果。這些事件曾撕裂社會，但最終鞏固了台灣走向非核的方向。' },
    { type: 'paragraph', text: '2025年8月23日，台灣舉行了關於延長第三核能發電廠馬鞍山運轉期限的公投。這場公投由核能支持者發起，背景是2025年5月台灣最後一座仍在運轉的機組已正式關閉。' },
    { type: 'paragraph', text: '公投問題的核心是：如果主管機關確認沒有安全疑慮，選民是否同意馬鞍山核電廠繼續運轉。' },
    { type: 'paragraph', text: '最終，公投因未達最低投票門檻而被認定不成立。由於投票率過低，核電支持者未能取得必要支持，馬鞍山核電廠也因此正式停機。' },
    { type: 'heading', level: 2, text: '台灣如何走到這個決定' },
    { type: 'paragraph', text: '1970年代，國民黨把核能視為降低石油依賴的手段，特別是在全球能源危機之後。到1980年代中期，台灣超過一半的電力由三座核電廠生產：金山核能發電廠，也就是核一；國聖核能發電廠，也就是核二；以及馬鞍山核能發電廠，也就是核三。' },
    { type: 'paragraph', text: '但隨著發電容量增加，島內民眾對核能的不信任也同步升高。一連串小型事故、第三核電廠建設預算翻倍，以及國營台電公司的資訊不透明，都加深了社會焦慮。' },
    { type: 'paragraph', text: '1985年，55名國民黨立委與6名反對派國會議員要求暫停島上第四核電廠 FNNP 的建設計畫。行政院，也就是台灣最高行政機關，支持了他們，計畫因此凍結。對台灣反核運動而言，這是第一次重要勝利。' },
    { type: 'paragraph', text: '然而，真正改變台灣居民對核能態度的轉折點，是切爾諾貝利核電廠事故。' },
    { type: 'paragraph', text: '1986年4月26日，切爾諾貝利核電廠四號機組爆炸，為剛萌芽的台灣反核運動帶來新的推力。當時，關於核電安全的公共討論已經走出專家圈，並獲得反對派政治人物支持。但切爾諾貝利災難使這些進程進一步加速。' },
    { type: 'heading', level: 2, text: '行動者與政治人物的角色' },
    { type: 'paragraph', text: '早在1986年秋天，反核行動者成立民主進步黨 DPP，並將反對核能寫入黨章。' },
    { type: 'paragraph', text: '1988年3月，台灣成立了鹽寮反核自救會 Yanliao Anti-Nuclear Self-Help Association，簡稱 YASA。它在反核運動中發揮了關鍵作用。此前抗議較為分散，貢寮居民的擔憂多半只出現在廚房與私人談話中；YASA 則把所有人，包括村莊居民，都組織起來。' },
    { type: 'paragraph', text: '這個協會承擔起組織集會、與記者會面的工作，後來也與反對派政治人物建立聯繫。YASA 成為第一個公開挑戰國家核能政策的反核組織。它的自我組織模式後來啟發了其他反對基礎設施工程的社群，並成為公民行動的學校。' },
    { type: 'paragraph', text: '在 YASA 成立之前，當地社群尋求支持的對象不只有科學家，也包括神明。仁和宮的廟方人士吳天福曾向媽祖求問。得到的回答很神祕：「第四核電廠會建成，但不會運轉。」' },
    { type: 'paragraph', text: '這個預言的意思一開始並不明確，但對村民來說，它成了來自上方的徵兆。媽祖的話被理解為對抵抗的道德授權，也強化了他們的信念：這場鬥爭不只有社會基礎，也有精神基礎。第四核電廠後來確實建成，卻從未投入運轉，預言也因此成真。' },
    { type: 'heading', level: 2, text: '新的抗議浪潮' },
    { type: 'paragraph', text: '到2000年代初，反核運動明顯減弱。第四核電廠仍未完工，但抗議活動逐漸減少。部分運動領袖進入政治，或把注意力轉向其他環境議題，社會也對長期對抗感到疲憊。' },
    { type: 'paragraph', text: '然而，2011年3月日本福島第一核電廠事故發生，震撼了台灣社會。人們再次談論地震風險、海嘯威脅，以及老舊核電廠的安全。反核運動迎來第二次重生。' },
    { type: 'paragraph', text: '福島事故後幾週內，台灣各城市就有數千人走上街頭。《台北時報》寫道，台北變成了黃色：據估計，5000人帶著向日葵和黃色標語上街，要求停止貢寮第四核電廠的建設。' },
    { type: 'paragraph', text: '名為「430向日葵」的行動聚集了來自全島的綠色能源支持者。遊行主題「向太陽微笑，警惕核災」聽起來像是一句警告。' },
    { type: 'paragraph', text: '一些參與者手中拿著紙風車，象徵未來的綠色能源；也有人拿著真正的向日葵，作為沒有核威脅生活的希望象徵。' },
    { type: 'paragraph', text: '2013年，全島約22萬名參與者形成一條超過200公里的「人鏈」，要求關閉所有核電廠。2014年春天，前民進黨主席林義雄宣布絕食，要求全面停止 FNNP 計畫。' },
    { type: 'paragraph', text: '2015年1月，民進黨主席蔡英文宣布：她的政黨打算在2025年前完全放棄核能。這項承諾成為她總統競選的一部分。' },
    { type: 'paragraph', text: '2016年民進黨贏得選舉後，新政府開始履行承諾：通過《電業法》修正案，確立逐步廢除核能的方向。' },
    { type: 'paragraph', text: '形式上，這一條款在2018年公投中被取消，當時多數投票者支持保留核電廠；然而經濟部長沈榮津表示，不會延長執照，也不會重啟反應爐。' },
    { type: 'heading', level: 2, text: '新的挑戰' },
    { type: 'paragraph', text: '台灣走向非核的道路花了近半個世紀，從戒嚴時期的早期討論，到大規模街頭抗議和政治鬥爭。' },
    { type: 'paragraph', text: '2025年5月最後一座反應爐停機，以及8月公投失敗，似乎成為島上核能的最後一擊。' },
    { type: 'paragraph', text: '現在，台灣面臨新的挑戰：沒有核能，這座島如何確保自身能源供應？尋找再生能源對經濟和產業發展而言已是必要條件。' }
  ]
});

const eventTranslations = {
  by: {
    'event-001': {
      title: 'Лекцыя пра культуру Тайваня',
      description: 'Запрашаем на лекцыю пра культуру, кухню, гісторыю і грамадства Тайваня.',
      location: { city: 'Гданьск', country: 'Польшча' },
      categories: ['культура', 'гісторыя', '28 лютага'],
      tags: ['Тайвань', 'гісторыя', 'культура'],
      speakers: [{ name: 'Андрэй Архіпенка', role: 'Даследчык і актывіст' }]
    },
    'event-002': {
      title: 'Лекцыя пра беларускую культуру',
      description: 'Размова пра беларускую гісторыю, мову і сучасную культуру для тайваньскай аўдыторыі.',
      location: { city: 'Тайчжун', country: 'Тайвань' },
      categories: ['культура', 'Беларусь', 'гісторыя'],
      tags: ['Беларусь', 'культура', 'лекцыя'],
      speakers: [{ name: 'Андрэй Архіпенка', role: 'Даследчык і актывіст' }]
    },
    'event-003': {
      title: 'Беларуска-тайваньская культурная сустрэча',
      description: 'Вечар беларускіх і тайваньскіх гісторый, музыкі, ежы і грамадзянскіх размоў.',
      location: { city: 'Варшава', country: 'Польшча' },
      categories: ['культура', 'Беларусь — Тайвань'],
      tags: ['Тайвань', 'Беларусь', 'культура'],
      speakers: [{ name: 'Андрэй Архіпенка', role: 'Мадэратар' }]
    }
  },
  ru: {
    'event-001': {
      title: 'Лекция о культуре Тайваня',
      description: 'Приглашаем на лекцию о культуре, кухне, истории и обществе Тайваня.',
      location: { city: 'Гданьск', country: 'Польша' },
      categories: ['культура', 'история', '28 февраля'],
      tags: ['Тайвань', 'история', 'культура'],
      speakers: [{ name: 'Андрей Архипенко', role: 'Исследователь и активист' }]
    },
    'event-002': {
      title: 'Лекция о белорусской культуре',
      description: 'Разговор о белорусской истории, языке и современной культуре для тайваньской аудитории.',
      location: { city: 'Тайчжун', country: 'Тайвань' },
      categories: ['культура', 'Беларусь', 'история'],
      tags: ['Беларусь', 'культура', 'лекция'],
      speakers: [{ name: 'Андрей Архипенко', role: 'Исследователь и активист' }]
    },
    'event-003': {
      title: 'Белорусско-тайваньская культурная встреча',
      description: 'Вечер белорусских и тайваньских историй, музыки, еды и гражданских разговоров.',
      location: { city: 'Варшава', country: 'Польша' },
      categories: ['культура', 'Беларусь — Тайвань'],
      tags: ['Тайвань', 'Беларусь', 'культура'],
      speakers: [{ name: 'Андрей Архипенко', role: 'Модератор' }]
    }
  },
  en: {
    'event-001': {
      title: 'Taiwan Culture Lecture',
      description: 'A lecture on Taiwan’s culture, food, history and society.',
      location: { city: 'Gdansk', country: 'Poland' },
      categories: ['culture', 'history', 'February 28'],
      tags: ['Taiwan', 'history', 'culture'],
      speakers: [{ name: 'Andrei Arkhipenka', role: 'Researcher and activist' }]
    },
    'event-002': {
      title: 'Belarusian Culture Lecture',
      description: 'A conversation about Belarusian history, language and contemporary culture for a Taiwanese audience.',
      location: { city: 'Taichung', country: 'Taiwan' },
      categories: ['culture', 'Belarus', 'history'],
      tags: ['Belarus', 'culture', 'lecture'],
      speakers: [{ name: 'Andrei Arkhipenka', role: 'Researcher and activist' }]
    },
    'event-003': {
      title: 'Belarus-Taiwan Cultural Meetup',
      description: 'An evening of Belarusian and Taiwanese stories, music, food and civic conversation.',
      location: { city: 'Warsaw', country: 'Poland' },
      categories: ['culture', 'Belarus — Taiwan'],
      tags: ['Taiwan', 'Belarus', 'culture'],
      speakers: [{ name: 'Andrei Arkhipenka', role: 'Moderator' }]
    }
  },
  pl: {
    'event-001': {
      title: 'Wykład o kulturze Tajwanu',
      description: 'Wykład o kulturze, kuchni, historii i społeczeństwie Tajwanu.',
      location: { city: 'Gdańsk', country: 'Polska' },
      categories: ['kultura', 'historia', '28 lutego'],
      tags: ['Tajwan', 'historia', 'kultura'],
      speakers: [{ name: 'Andrei Arkhipenka', role: 'Badacz i aktywista' }]
    },
    'event-002': {
      title: 'Wykład o kulturze białoruskiej',
      description: 'Rozmowa o białoruskiej historii, języku i współczesnej kulturze dla tajwańskiej publiczności.',
      location: { city: 'Taichung', country: 'Tajwan' },
      categories: ['kultura', 'Białoruś', 'historia'],
      tags: ['Białoruś', 'kultura', 'wykład'],
      speakers: [{ name: 'Andrei Arkhipenka', role: 'Badacz i aktywista' }]
    },
    'event-003': {
      title: 'Białorusko-tajwańskie spotkanie kulturalne',
      description: 'Wieczór białoruskich i tajwańskich historii, muzyki, jedzenia i rozmów obywatelskich.',
      location: { city: 'Warszawa', country: 'Polska' },
      categories: ['kultura', 'Białoruś — Tajwan'],
      tags: ['Tajwan', 'Białoruś', 'kultura'],
      speakers: [{ name: 'Andrei Arkhipenka', role: 'Moderator' }]
    }
  },
  zh: {
    'event-001': {
      title: '台灣文化講座',
      description: '一場介紹台灣文化、飲食、歷史與社會的講座。',
      location: { city: '格但斯克', country: '波蘭' },
      categories: ['文化', '歷史', '二二八'],
      tags: ['台灣', '歷史', '文化'],
      speakers: [{ name: 'Andrei Arkhipenka', role: '研究者與行動者' }]
    },
    'event-002': {
      title: '白俄羅斯文化講座',
      description: '面向台灣聽眾的白俄羅斯歷史、語言與當代文化介紹。',
      location: { city: '台中', country: '台灣' },
      categories: ['文化', '白俄羅斯', '歷史'],
      tags: ['白俄羅斯', '文化', '講座'],
      speakers: [{ name: 'Andrei Arkhipenka', role: '研究者與行動者' }]
    },
    'event-003': {
      title: '白俄羅斯—台灣文化交流會',
      description: '一個分享白俄羅斯與台灣故事、音樂、食物與公民對話的夜晚。',
      location: { city: '華沙', country: '波蘭' },
      categories: ['文化', '白俄羅斯—台灣'],
      tags: ['台灣', '白俄羅斯', '文化'],
      speakers: [{ name: 'Andrei Arkhipenka', role: '主持人' }]
    }
  }
};

function mergeArrayByIndex(source = [], translation = []) {
  return source.map((item, index) => ({
    ...item,
    ...(translation[index] || {})
  }));
}

function getArticleTranslationKey(article) {
  if (article.id === 'pobeda-nad-aes-2025' || article.id?.startsWith('pobeda-nad-aes')) {
    return 'pobeda-nad-aes-2025';
  }

  if (['democracy-in-taiwan2', 'democracy2', 'in-taiwan2'].includes(article.id)) {
    return 'democracy-in-taiwan2';
  }

  if (
    ['democracy-in-taiwan3', 'taiwan3', 'taiwan4'].includes(article.id) ||
    article.id?.startsWith('democracy-in-taiwan')
  ) {
    return 'democracy-in-taiwan3';
  }

  return article.id;
}

export function translateArticle(article, lang) {
  const translationKey = getArticleTranslationKey(article);
  const translated = articleTranslations[lang]?.[translationKey];
  const content = translationKey === 'pobeda-nad-aes-2025'
    ? nuclearArticleContent[lang]
    : translated?.content;

  return translated ? { ...article, ...translated, content } : article;
}

export function isPublishedArticle(article) {
  return publishedArticleIds.has(getArticleTranslationKey(article));
}

export function translateEvent(event, lang) {
  const translated = eventTranslations[lang]?.[event.id];
  if (!translated) return event;

  return {
    ...event,
    ...translated,
    location: {
      ...event.location,
      ...translated.location
    },
    speakers: mergeArrayByIndex(event.speakers, translated.speakers),
    partners: event.partners
  };
}

export function uniqueMaterials(items) {
  const seen = new Set();

  return items.filter((item) => {
    const key = item.id || item.slug || item.title;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
