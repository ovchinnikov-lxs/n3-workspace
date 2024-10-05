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
                        text: 'Я Senior Frontend Developer с опытом проектирования и внедрения архитектур веб-приложений. Увлекаюсь поиском эффективных решений и повышением производительности. Мой путь включает значительный вклад в улучшение кода, рефакторинг и успешное наставничество в командах WinTech и Idaproject. Всегда нацелен на высокое качество кода, наращивание технического потенциала команды и внедрение лучших практик разработки.',
                    },
                    skills: {
                        title: 'Навыки',
                        description: 'Навыки и инструменты которые я использую в повседневной работе',
                    },
                    employment: {
                        title: 'Опыт работы',
                        amount: 'Общий стаж больше {amount} лет',
                        list: [
                            {
                                title: 'Vue Frontend Developer',
                                company: 'Idaproject',
                                type: 'Гибрид',
                                startDate: 'Сентябрь 2020',
                                endDate: 'Сентябрь 2023',
                                description:
                                    '<ul>\n<li>Работа в небольшой команде: 3 фронтенд-разработчика, 2 бэкенд-разработчика, ведущий и проектный менеджер.</li>\n<li>Использование Vue 2, Nuxt.js, JavaScript, TypeScript для создания многофункциональной системы для разработчиков.</li>\n<li>Обеспечение чистоты и читаемости кода путем внедрения и поддержания стандартов с использованием ESLint и Stylelint.</li>\n<li>Разработка визуального выбора объектов на изображениях проекта с использованием SVG и Canvas.</li>\n<li>Создание шахматной доски комнат с функционалом выбора объектов, связанных с другими разделами системы.</li>\n<li>Участие в создании более 600 уникальных блоков для конструктора сайтов, внедрение редактирования контента с помощью динамических форм.</li>\n<li>Поддержка и разработка внутренних библиотек, участие в их релизах.</li>\n<li>Обеспечение стабильности и качества релизов в продакшене, иногда выполняя роль тимлида.</li>\n</ul>',
                            },
                            {
                                title: 'Vue Frontend Developer',
                                company: 'WinTech',
                                type: 'Удаленно',
                                startDate: 'Октябрь 2023',
                                endDate: 'По настоящее время',
                                description:
                                    '<ul>\n<li>Основные задачи: \n<ul>\n<li>Проектирование и реализация новых интерфейсов и функционала.</li>\n<li>Оптимизация и поддержка существующего кода, исправление ошибок.</li>\n<li>Участие в разработке архитектуры веб-приложений.</li>\n<li>Оценка и декомпозиция проектных задач.</li>\n<li>Кроссбраузерная верстка.</li>\n</ul></li>\n<li>Досрочно завершил испытательный срок проанализировав текущие проекты и предложив рекомендации по улучшению качества кода и процессов.</li>\n<li>Был наставником нового сотрудника, что привело к успешному введению нового члена команды.</li>\n<li>Организовал онбординг и предоставлял поддержку при чтении кода.</li>\n<li>Был опыт заместителя руководителя отдела разработки в команде из 8 фронтенд-разработчиков.</li>\n<li>Провел полный рефакторинг основного проекта компании:<ul>\n<li>Уменьшил размер бандла приложения с 1500 МБ до 500 КБ.</li>\n<li>Внедрил правильный рабочий процесс команды и журнал изменений для отслеживания крупных и мелких обновлений.</li>\n<li>Увеличил производительность сайта в 5 раз.</li>\n</ul>\n</li>\n<li>Был назначен лидером стратегического проекта, что подтвердило высокую оценку моей работы и показало стремление к развитию в компании.</li>\n</ul>',
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
                        'Explore the portfolio of Alexander Ovchinnikov, Senior Frontend Developer specializing in Vue.js, Nuxt.js, and TypeScript. Discover his projects, skills, and career history.',
                    keywords: 'Alexander Ovchinnikov, Frontend Developer, Vue.js Developer, Nuxt.js Expert, TypeScript, Web Development, Portfolio, Senior Developer',
                    author: 'Alexander Ovchinnikov',
                    publisher: 'Alexander Ovchinnikov',
                    og: {
                        title: 'Alexander Ovchinnikov - Senior Frontend Developer',
                        description: 'Discover the professional portfolio of Alexander Ovchinnikov, showcasing his expertise and projects in Vue.js, Nuxt.js, and TypeScript.',
                        script: {
                            name: 'Alexander Ovchinnikov',
                            jobTitle: 'Senior Frontend Developer',
                            alumniOf: 'Network',
                            knowsAbout: 'Frontend Development, Vue.js, Nuxt.js, TypeScript',
                        },
                    },
                    twitter: {
                        title: 'Alexander Ovchinnikov - Senior Frontend Developer',
                        description: 'Explore the portfolio and projects of Alexander Ovchinnikov, an expert in Vue.js, Nuxt.js, and TypeScript.',
                    },
                },
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
                        text: 'I am a Senior Frontend Developer with extensive experience in designing and implementing web application architectures. I am passionate about finding efficient solutions and enhancing performance. My journey includes significant contributions in code improvement, refactoring, and successful mentorship at WinTech and Idaproject. I am always focused on delivering high-quality code, enhancing the technical capabilities of the team, and implementing best development practices.',
                    },
                    skills: {
                        title: 'Skills',
                        description: 'Skills and tools that I use in my daily work.',
                    },
                    employment: {
                        title: 'Work Experience',
                        amount: 'Total experience is more than {amount} years',
                        list: [
                            {
                                title: 'Vue Frontend Developer',
                                company: 'Idaproject',
                                type: 'Hybrid',
                                startDate: 'September 2020',
                                endDate: 'September 2023',
                                description:
                                    '<ul>\n<li>Worked in a small team: 3 frontend developers, 2 backend developers, a lead, and a project manager.</li>\n<li>Used Vue 2, Nuxt.js, JavaScript, and TypeScript to create a multifunctional system for developers.</li>\n<li>Ensured code quality and readability by implementing and maintaining standards using ESLint and Stylelint.</li>\n<li>Developed a visual selection of project objects using SVG and Canvas.</li>\n<li>Created a chessboard-like layout for selecting objects connected to other sections of the system.</li>\n<li>Contributed to the creation of over 600 unique blocks for the website builder, enabling content editing through dynamic forms.</li>\n<li>Supported and developed internal libraries, participating in their releases.</li>\n<li>Ensured stability and quality of production releases, sometimes taking on the role of a team lead.</li>\n</ul>',
                            },
                            {
                                title: 'Vue Frontend Developer',
                                company: 'WinTech',
                                type: 'Remote',
                                startDate: 'October 2023',
                                endDate: 'Present',
                                description:
                                    "<ul>\n<li>Main tasks: \n<ul>\n<li>Design and implement new interfaces and functionality.</li>\n<li>Optimize and maintain existing code, fix bugs.</li>\n<li>Participate in web application architecture development.</li>\n<li>Estimate and decompose project tasks.</li>\n<li>Cross-browser layout implementation.</li>\n</ul></li>\n<li>Completed the probation period early by analyzing current projects and providing recommendations for code and process quality improvement.</li>\n<li>Mentored a new employee, successfully integrating them into the team.</li>\n<li>Organized onboarding and provided support in code review.</li>\n<li>Acted as deputy head of the development department in a team of 8 frontend developers.</li>\n<li>Conducted a full refactoring of the company's main project:<ul>\n<li>Reduced the application bundle size from 1500 MB to 500 KB.</li>\n<li>Introduced a proper team workflow and a changelog for tracking major and minor updates.</li>\n<li>Increased website performance by 5 times.</li>\n</ul>\n</li>\n<li>Appointed as the leader of a strategic project, confirming high appreciation of my work and demonstrating a desire for growth within the company.</li>\n</ul>",
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
                        description: 'Projects that I have created or maintained.',
                        'n3-workspace': {
                            description: 'A monorepository for all my projects based on Nuxt. This site is also built on it.',
                        },
                        'n3-workspace/converter': {
                            description:
                                '<p>This is a single-page application (SPA) for currency conversion, implemented using the Nuxt 3 framework as part of a test task. The application includes two pages:</p>' +
                                '<ol>\n' +
                                "<li><strong>Homepage</strong>: Displays currency rates relative to the site's main currency.</li>\n" +
                                '<li><strong>Conversion</strong>: A form for converting currencies with the option to select a currency and automatic value recalculation.</li>\n' +
                                '</ol>' +
                                "More details can be found in the application's README.",
                        },
                        'n3-workspace/shopping-list': {
                            description: 'A shopping list application for creating and sharing with Supabase database integration.',
                        },
                        'n3-workspace/dev-kit-layer': {
                            description: 'Nuxt 3 layer with a set of utilities, components, and modules for quick project start.',
                        },
                        'task-trackers': {
                            description: 'Monorepository with task trackers on various frameworks for learning and testing capabilities.',
                        },
                        'groom-crm': {
                            description: 'A simple CRM for managing and keeping track of clients in grooming salons.',
                        },
                        portfolio_gallery: {
                            description: 'Examples of my work showcasing the design and functionality of my projects.',
                        },
                        'web-layout-practice': {
                            description: 'Practical examples of various layout methods and approaches to enhance knowledge and skills.',
                        },
                        'nuxt3-template': {
                            description: 'Nuxt 3 project template with ready-to-use settings for quick development start.',
                        },
                        'todo-back': {
                            description: "Backend for the 'To-Do List' project implemented in Nest.js.",
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
