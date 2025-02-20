export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    availableLocales: ['en', 'ru'],
    warnHtmlInMessage: false,
    warnHtmlMessage: false,
    messages: {
        ru: {
            app: {
                seo: {
                    title: 'Александр Овчинников - Senior Frontend Developer | Эксперт по Vue.js, Nuxt.js, TypeScript',
                    description:
                        'Изучите портфолио Александра Овчинникова, Senior Frontend Developer, специализирующегося на Vue.js, Nuxt.js и TypeScript. Откройте для себя проекты, навыки и историю трудоустройства.',
                    keywords: 'Александр Овчинников, Frontend Developer, Разработчик Vue.js, Эксперт по Nuxt.js, TypeScript, Веб-разработка, Портфолио, Старший разработчик',
                    author: 'Александр Овчинников',
                    publisher: 'Александр Овчинников',
                    og: {
                        title: 'Александр Овчинников - Senior Frontend Developer',
                        description: 'Откройте для себя профессиональное портфолио Александра Овчинникова, включающее проекты и экспертизу в Vue.js, Nuxt.js и TypeScript.',
                        script: {
                            name: 'Александр Овчинников',
                            jobTitle: 'Senior Frontend Developer',
                            alumniOf: 'Network',
                            knowsAbout: 'Frontend разработка, Vue.js, Nuxt.js, TypeScript',
                        },
                    },
                    twitter: {
                        title: 'Александр Овчинников - Senior Frontend Developer',
                        description: 'Изучите портфолио и проекты Александра Овчинникова, эксперта в Vue.js, Nuxt.js и TypeScript.',
                    },
                },
                pdfFileName: 'Портфолио-Александр_Овчинников-Senior_Frontend_Developer.pdf',
            },
            header: {
                info: {
                    title: 'Senior Frontend Developer',
                },
                image: {
                    alt: 'Изображение портфолио',
                    title: 'Аватарка',
                },
                fullName: 'Александр Овчинников',
            },
            pages: {
                index: {
                    profile: {
                        title: 'О себе',
                        text: [
                            'Привет! Я Саша, во фронтенде уже больше 5 лет, могу писать на любом стеке, но люблю Vue-экосистему больше всего (зеленый цвет успокаивает). Имею разнообразный опыт в разработке, что позволяет мне к каждой задаче иметь в голове готовое решение, но люблю сначала проверить актуальные лучшие практики, чтобы сделать максимально эффективный результат. Также есть опыт в курировании проектов, обучении и найме сотрудников, а ещё приходилось руководить отделом фронтенд-разработки.',
                            'Пишу модули, плагины, UI-киты, многостраничные сайты, лендинги, приятные анимации для лучшего UX и многое другое.',
                            'Ищу команду, в которой можно будет расти профессионально и просто приятно находиться в атмосфере позитива и сплочённости.',
                            'Мне нравится сначала подумать, как должен работать код, всё распланировать, а после наслаждаться процессом написания. Умею адаптироваться под требования и условия рынка, люблю стабильность и знаю, когда требуется проявить себя для максимального результата.',
                            '<b>Планы на будущее:</b> изучить побольше методологий, углубиться в веб-рендеринг 2D/3D, прокачать знания в DevOps и прокатиться на спортивном болиде Формулы.',
                        ],
                    },
                    skills: {
                        title: 'Навыки',
                        description: 'Навыки и инструменты которые я использую в повседневной работе',
                    },
                    employment: {
                        title: 'Опыт работы',
                        amount: 'Общий стаж больше {amount} лет',
                        tasksTitle: 'Основные задачи:',
                        achievementsTitle: 'Ключевые достижения:',
                        list: [
                            {
                                title: 'Vue Frontend Developer',
                                company: 'WinTech',
                                type: 'Удаленно',
                                startDate: 'Октябрь 2023',
                                endDate: 'По настоящее время',
                                tasks: [
                                    'Проектирование и реализация новых интерфейсов и функционала.',
                                    'Кроссбраузерная верстка.',
                                    'Оптимизация и поддержка существующего кода, исправление ошибок.',
                                    'Участие в разработке архитектуры веб-приложений.',
                                    'Оценка и декомпозиция проектных задач.',
                                    'Участие в найме и развитии команды: провожу технические собеседования, разрабатываю критерии оценки кандидатов.',
                                ],
                                achievements: [
                                    'Досрочно завершил испытательный срок проанализировав текущие проекты и предложив рекомендации по улучшению качества кода и процессов.',
                                    'Провел полный рефакторинг основного проекта компании.',
                                    'Уменьшил размер основного бандла приложения в три раза.',
                                    'Увеличил производительность сайта в 5 раз.',
                                    'Обеспечение чистоты и читаемости кода путем внедрения и поддержания стандартов с использованием ESLint, Stylelint, Prettier.',
                                    'Был наставником нового сотрудника, что привело к успешному введению нового члена команды.',
                                    'Организовал онбординг и помогал коллегам по задачам.',
                                    'Был опыт заместителя руководителя отдела разработки в команде из 8 фронтенд-разработчиков.',
                                    'Проводил регулярные встречи с коллегами для обсуждения и внедрения новых технологий в наш проект.',
                                    'Ввел документирование проекта и его процессов, от правил приемки, оценки, реализации, ревьюирования задач до стайлгайда проекта.',
                                    'Был назначен лидером стратегического проекта, что подтвердило высокую оценку моей работы и показало стремление к развитию в компании.',
                                ],
                            },
                            {
                                title: 'Vue Frontend Developer',
                                company: 'Idaproject',
                                type: 'Гибрид',
                                startDate: 'Сентябрь 2020',
                                endDate: 'Сентябрь 2023',
                                tasks: [
                                    'Участие в разработке продукта "IdaLite" с нуля до продакшена в небольшой команде.',
                                    'Разработка лендинга для "IdaLite".',
                                    'Участие в создании личного кабинета пользователя и\n' + 'его внутренних приложений с различными интеграциями и работой с Backend API.',
                                    'Разработка архитектуры библиотеки блоков для конструктора сайта и реализация более 600 блоков с множеством функционала.',
                                    'Разработка визуального выбора объектов на изображениях проекта с использованием SVG и Canvas.',
                                    'Разработка SSR-сайта, который генерировал сайты, собранные в конструкторе.',
                                ],
                                achievements: [
                                    'Внес значительный вклад во внутренние репозитории с конфигурациями, UI-библиотеками и инструментами.',
                                    'Активно участвовал в Code review и рефакторинге кода для повышения его читаемости и производительности.',
                                    'Проявил способность разбираться в чужом коде и успешно интегрировался в команду разработчиков, а также помогал новым коллегам.',
                                    'Обеспечение стабильности и качества релизов в продакшене, иногда выполняя роль тимлида.\n',
                                    'Поддержка и разработка внутренних библиотек, участие в их релизах.',
                                    'Применял тестирование с использованием Jest для обеспечения стабильности кодовой базы.',
                                    'Этот опыт обогатил меня глубоким пониманием <b>Vue.js</b> и <b>Nuxt.js</b>, а также улучшил навыки командной работы, разработки и оптимизации.',
                                ],
                            },
                        ],
                    },
                    projects: {
                        title: 'Проекты',
                        tags: {
                            'in-working': 'В работе',
                            complete: 'Завершено',
                            'need-to-actualize': 'Требует актуализации',
                            old: 'Давно не обновлял',
                            frontend: 'Фронтенд',
                            backend: 'Бэкенд',
                            'desktop-only': 'Только для десктопа',
                            test: 'Тестовое задание',
                        },
                        links: {
                            homepage: 'Смотреть',
                            design: 'Макет',
                        },
                        description: 'Проекты, которые я создал или поддерживаю.',
                        'n3-workspace': {
                            description: 'Моно-репозиторий для всех моих проектов на Nuxt. Этот сайт также реализован на его основе.',
                        },
                        'n3-workspace/converter': {
                            description:
                                '<p dir="auto">Это одностраничное приложение (SPA) для конвертации валют, реализованное с использованием фреймворка Nuxt 3 для одного из тестового задания. Приложение включает две страницы:</p>' +
                                '<ol dir="auto">\n' +
                                '<li><strong>Главная</strong>: Отображает курсы валют по отношению к основной валюте сайта.</li>\n' +
                                '<li><strong>Конвертация</strong>: Форма для конвертации валют с возможностью выбора валюты и автоматическим пересчетом значений.</li>\n' +
                                '</ol>' +
                                'С детальной информацией можно ознакомится в README приложения',
                        },
                        'n3-workspace/shopping-list': {
                            description: 'Список покупок для создания и совместного использования с интеграцией Supabase для базы данных.',
                        },
                        'n3-workspace/dev-kit-layer': {
                            description: 'Слой Nuxt 3 с набором утилит, компонентов и модулей для быстрого старта проектов.',
                        },
                        'task-trackers': {
                            description: 'Моно-репозиторий с трекерами задач на различных фреймворках для изучения и тестирования возможностей.',
                        },
                        'groom-crm': {
                            description: 'Простая CRM для управления и учета клиентов в салонах груминга.',
                        },
                        portfolio_gallery: {
                            description: 'Примеры моих работ, отражающие дизайн и функциональные возможности моих проектов.',
                        },
                        'web-layout-practice': {
                            description: 'Практические примеры различных методов и подходов верстки для расширения знаний и навыков.',
                        },
                        'nuxt3-template': {
                            description: 'Шаблон проекта на Nuxt 3 с готовыми настройками для быстрого старта разработки.',
                        },
                        'todo-back': {
                            description: "Бэкенд для проекта 'Список дел', реализованный на Nest.js.",
                        },
                        'todo-front': {
                            description: "Фронтенд для проекта 'Список дел'.",
                        },
                    },
                },
            },
        },
        en: {
            app: {
                seo: {
                    title: 'Alexander Ovchinnikov - Senior Frontend Developer | Vue.js, Nuxt.js, TypeScript Expert',
                    description:
                        'Explore the portfolio of Alexander Ovchinnikov, Senior Frontend Developer specializing in Vue.js, Nuxt.js, and TypeScript. Discover projects, skills, and work history.',
                    keywords: 'Alexander Ovchinnikov, Frontend Developer, Vue.js Developer, Nuxt.js Expert, TypeScript, Web Development, Portfolio, Senior Developer',
                    author: 'Alexander Ovchinnikov',
                    publisher: 'Alexander Ovchinnikov',
                    og: {
                        title: 'Alexander Ovchinnikov - Senior Frontend Developer',
                        description: 'Explore the professional portfolio of Alexander Ovchinnikov, featuring projects and expertise in Vue.js, Nuxt.js, and TypeScript.',
                        script: {
                            name: 'Alexander Ovchinnikov',
                            jobTitle: 'Senior Frontend Developer',
                            alumniOf: 'Network',
                            knowsAbout: 'Frontend Development, Vue.js, Nuxt.js, TypeScript',
                        },
                    },
                    twitter: {
                        title: 'Alexander Ovchinnikov - Senior Frontend Developer',
                        description: 'Explore the portfolio and projects of Alexander Ovchinnikov, expert in Vue.js, Nuxt.js, and TypeScript.',
                    },
                },
                pdfFileName: 'Portfolio-Alexander_Ovchinnikov-Senior_Frontend_Developer.pdf',
            },
            header: {
                info: {
                    title: 'Senior Frontend Developer',
                },
                image: {
                    alt: 'Portfolio Image',
                    title: 'Avatar',
                },
                fullName: 'Alexander Ovchinnikov',
            },
            pages: {
                index: {
                    profile: {
                        title: 'About Me',
                        text: [
                            "Hi! I'm Sasha, and I've been in frontend development for over 5 years. I can work with any stack, but I love the Vue ecosystem the most (green is calming). I have diverse experience in development, which allows me to have ready solutions for every task in mind, but I always check the latest best practices to ensure maximum efficiency. I also have experience in project curation, training, hiring employees, and even managing a frontend development department.",
                            'I build modules, plugins, UI kits, multi-page websites, landing pages, smooth animations for better UX, and much more.',
                            "I'm looking for a team where I can grow professionally and enjoy being in a positive and cohesive atmosphere.",
                            "I like to think first about how the code should work, plan everything out, and then enjoy the process of writing it. I'm able to adapt to market demands, value stability, and know when to step up for the best results.",
                            '<b>Future plans:</b> learn more methodologies, dive deeper into web rendering (2D/3D), improve my DevOps knowledge, and take a ride in a Formula race car.',
                        ],
                    },
                    skills: {
                        title: 'Skills',
                        description: 'Skills and tools that I use in my daily work.',
                    },
                    employment: {
                        title: 'Work Experience',
                        amount: 'Total experience is more than {amount} years',
                        tasksTitle: 'Key Responsibilities:',
                        achievementsTitle: 'Key Achievements:',
                        list: [
                            {
                                title: 'Vue Frontend Developer',
                                company: 'WinTech',
                                type: 'Remote',
                                startDate: 'October 2023',
                                endDate: 'Present',
                                tasks: [
                                    'Design and implement new interfaces and features.',
                                    'Cross-browser layout.',
                                    'Optimization and maintenance of existing code, fixing bugs.',
                                    'Participate in the development of web application architecture.',
                                    'Evaluate and decompose project tasks.',
                                    'Participate in hiring and team development: conducting technical interviews, developing candidate evaluation criteria.',
                                ],
                                achievements: [
                                    'Completed the probation period early by analyzing current projects and suggesting improvements in code quality and processes.',
                                    "Performed a full refactor of the company's main project.",
                                    'Reduced the size of the main application bundle by three times.',
                                    'Increased website performance by 5 times.',
                                    'Ensured code cleanliness and readability by implementing and maintaining standards using ESLint, Stylelint, and Prettier.',
                                    'Mentored a new employee, leading to a successful onboarding process.',
                                    'Organized onboarding and assisted colleagues with tasks.',
                                    'Held the role of acting team leader for a team of 8 frontend developers.',
                                    'Conducted regular meetings with colleagues to discuss and implement new technologies in our project.',
                                    'Introduced project documentation and processes, from acceptance rules to implementation, task reviews, and style guides.',
                                    'Appointed as the leader of a strategic project, which confirmed the high evaluation of my work and demonstrated my development potential in the company.',
                                ],
                            },
                            {
                                title: 'Vue Frontend Developer',
                                company: 'Idaproject',
                                type: 'Hybrid',
                                startDate: 'September 2020',
                                endDate: 'September 2023',
                                tasks: [
                                    "Participated in the development of the product 'IdaLite' from scratch to production in a small team.",
                                    "Developed a landing page for 'IdaLite'.",
                                    'Participated in the creation of a user dashboard and its internal applications with various integrations and Backend API interaction.',
                                    'Developed the architecture of a block library for a website builder and implemented over 600 blocks with various functionalities.',
                                    'Developed a visual object selection tool for project images using SVG and Canvas.',
                                    'Developed an SSR site that generated websites created in the builder.',
                                ],
                                achievements: [
                                    'Made significant contributions to internal repositories with configurations, UI libraries, and tools.',
                                    'Actively participated in code reviews and refactoring to improve code readability and performance.',
                                    "Showed the ability to understand others' code and successfully integrated into the development team, helping new colleagues.",
                                    'Ensured the stability and quality of releases in production, sometimes taking on the role of team lead.',
                                    'Supported and developed internal libraries, participated in their releases.',
                                    'Used Jest testing to ensure the stability of the codebase.',
                                    'This experience enriched my deep understanding of <b>Vue.js</b> and <b>Nuxt.js</b>, and improved my teamwork, development, and optimization skills.',
                                ],
                            },
                        ],
                    },
                    projects: {
                        title: 'Projects',
                        tags: {
                            'in-working': 'In Progress',
                            complete: 'Completed',
                            'need-to-actualize': 'Needs Update',
                            old: 'Outdated',
                            frontend: 'Frontend',
                            backend: 'Backend',
                            'desktop-only': 'Desktop Only',
                            test: 'Test Task',
                        },
                        links: {
                            homepage: 'View',
                            design: 'Design',
                        },
                        description: 'Projects that I have created or maintain.',
                        'n3-workspace': {
                            description: 'Monorepo for all my Nuxt projects. This website is also built on this base.',
                        },
                        'n3-workspace/converter': {
                            description:
                                '<p dir="auto">This is a single-page application (SPA) for currency conversion built using the Nuxt 3 framework for a test task. The app includes two pages:</p><ol dir="auto"><li><strong>Home</strong>: Displays currency rates relative to the main currency of the site.</li><li><strong>Conversion</strong>: A form for currency conversion with the option to select a currency and auto-recalculate values.</li></ol>Full details can be found in the app\'s README.',
                        },
                        'n3-workspace/shopping-list': {
                            description: 'A shopping list for creating and sharing with integration to Supabase for database management.',
                        },
                        'n3-workspace/dev-kit-layer': {
                            description: 'Nuxt 3 layer with utilities, components, and modules for rapid project setup.',
                        },
                        'task-trackers': {
                            description: 'Monorepo with task trackers on various frameworks for learning and testing purposes.',
                        },
                        'groom-crm': {
                            description: 'A simple CRM for managing and tracking clients in grooming salons.',
                        },
                        portfolio_gallery: {
                            description: 'Examples of my work showcasing the design and functionality of my projects.',
                        },
                        'web-layout-practice': {
                            description: 'Practical examples of various layout techniques and approaches to expand knowledge and skills.',
                        },
                        'nuxt3-template': {
                            description: 'Nuxt 3 project template with pre-configured settings for quick development start.',
                        },
                        'todo-back': {
                            description: "Backend for the 'To-Do List' project, implemented on Nest.js.",
                        },
                        'todo-front': {
                            description: "Frontend for the 'To-Do List' project.",
                        },
                    },
                },
            },
        },
    },
}));
