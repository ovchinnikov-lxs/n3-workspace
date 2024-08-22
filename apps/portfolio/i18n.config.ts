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
                },
                fullName: 'Александр Овчинников',
            },
            pages: {
                index: {
                    profile: {
                        title: 'О себе',
                        text: 'Я энергичный и целеустремленный профессионал, всегда стремящийся к совершенству в своей работе. В WinTech и Idaproject я улучшил качество кода, увеличил производительность проектов и вдохновил команды на внедрение современных практик разработки. У меня есть навыки рефакторинга, наставничества и управления, что позволяет мне повышать уровень всей команды и добиваться высоких результатов. Моя мотивация — это постоянное развитие и улучшение, как личное, так и команды.',
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
                                    '<ul>\n<li>Основные задачи: \n<ul>\n<li>Проектирование и реализация новых интерфейсов и функционала.</li>\n<li>Оптимизация и поддержка существующего кода, исправление ошибок.</li>\n<li>Участие в разработке архитектуры веб-приложений.</li>\n<li>Оценка и декомпозиция проектных задач.</li>\n<li>Кроссбраузерная верстка.</li>\n</ul></li>\n<li>Завершил испытательный срок за 2 месяца, проанализировав текущие проекты и предложив рекомендации по улучшению качества кода и процессов.</li>\n<li>В течение 3 месяцев был наставником нового сотрудника, что привело к бонусу в размере 30% от зарплаты за успешное введение нового члена команды.</li>\n<li>Организовал онбординг и предоставлял поддержку при чтении кода.</li>\n<li>Через 6 месяцев стал заместителем руководителя отдела разработки в команде из 8 фронтенд-разработчиков.</li>\n<li>Провел полный рефакторинг основного проекта компании:<ul>\n<li>Уменьшил размер бандла приложения с 1500 МБ до 500 КБ.</li>\n<li>Внедрил правильный рабочий процесс команды и журнал изменений для отслеживания крупных и мелких обновлений.</li>\n<li>Увеличил производительность сайта в 5 раз.</li>\n</ul>\n</li>\n<li>На 8-м месяце работы был назначен лидером стратегического проекта, что подтвердило высокую оценку моей работы и показало стремление к развитию в компании.</li>\n</ul>',
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
                        },
                        links: {
                            homepage: 'Смотреть',
                            design: 'Макет',
                        },
                        description: 'Проекты, которые я создал или поддерживаю.',
                        'n3-workspace': {
                            description: 'Моно-репозиторий для всех моих проектов и утилит на Nuxt, этот сайт реализован здесь',
                        },
                        'n3-workspace/shopping-list': {
                            description: 'Список покупок для создания и совместного использования',
                        },
                        'n3-workspace/dev-kit-layer': {
                            description: 'Слой Nuxt 3 с компонентами без стилей и полезными модулями, плагинами и т.д. для меня',
                        },
                        'task-trackers': {
                            description: 'Моно-репозиторий с трекерами задач на всех фреймворках, которые я знаю или хочу изучить',
                        },
                        'groom-crm': {
                            description: 'Простая CRM для салонов груминга',
                        },
                        portfolio_gallery: {
                            description: 'Пример моей работы',
                        },
                        'web-layout-practice': {
                            description: 'Добавляю различные практики верстки, чтобы расширить свои горизонты',
                        },
                        'nuxt3-template': {
                            description: 'Шаблон репозитория с настройкой Nuxt 3',
                        },
                        'todo-back': {
                            description: "Бэкенд для pet-проекта 'Список дел'",
                        },
                        'todo-front': {
                            description: "Фронтенд для pet-проекта 'Список дел'",
                        },
                    },
                },
            },
        },
        en: {
            app: {
                seo: {
                    title: 'Aleksandr Ovchinnikov - Senior Frontend Developer | Vue.js, Nuxt.js, TypeScript Expert',
                    description:
                        'Explore the portfolio of Aleksandr Ovchinnikov, a Senior Frontend Developer specializing in Vue.js, Nuxt.js, and TypeScript. Discover projects, skills, and employment history.',
                    keywords: 'Aleksandr Ovchinnikov, Frontend Developer, Vue.js Developer, Nuxt.js Expert, TypeScript, Web Development, Portfolio, Senior Developer',
                    og: {
                        title: 'Aleksandr Ovchinnikov - Senior Frontend Developer',
                        description: 'Discover the professional portfolio of Aleksandr Ovchinnikov, featuring projects and expertise in Vue.js, Nuxt.js, and TypeScript.',
                        script: {
                            name: 'Aleksandr Ovchinnikov',
                            jobTitle: 'Senior Frontend Developer',
                            alumniOf: 'Network',
                            knowsAbout: 'Frontend Development, Vue.js, Nuxt.js, TypeScript',
                        },
                    },
                    twitter: {
                        title: 'Aleksandr Ovchinnikov - Senior Frontend Developer',
                        description: 'Explore the portfolio and projects of Aleksandr Ovchinnikov, an expert in Vue.js, Nuxt.js, and TypeScript.',
                    },
                },
            },

            header: {
                info: {
                    title: 'Senior Frontend Developer',
                },
                image: {
                    alt: 'Portfolio image',
                },
                fullName: 'Aleksandr Ovchinnikov',
            },

            pages: {
                index: {
                    profile: {
                        title: 'Profile',
                        text: 'I am an energetic and purposeful professional, always striving for excellence in my work. At WinTech and Idaproject, I improved code quality, increased project productivity, and inspired teams to implement modern development practices. I have refactoring, mentoring and management skills, which allows me to raise the level of the entire team and achieve high results. My motivation is constant development and improvement, both personal and team.',
                    },
                    skills: {
                        title: 'Skills',
                        description: 'The skills and tools that I use in my daily work',
                    },
                    employment: {
                        title: 'Employment history',
                        amount: 'The total experience more than {amount} years',
                        list: [
                            {
                                title: 'Vue Frontend Developer',
                                company: 'Idaproject',
                                type: 'Hybrid',
                                startDate: 'September 2020',
                                endDate: 'September 2023',
                                description:
                                    '<ul>\n' +
                                    '  <li>Worked in a small team: 3 front-end developers, 2 backend developers, a lead and a project manager.</li>\n' +
                                    '  <li>Used Vue 2, Nuxt.js, JavaScript, TypeScript to create a multifunctional system for developers.</li>\n' +
                                    '  <li>Ensured the purity and readability of the code by implementing and maintaining standards using ESLint and Stylelint.</li>\n' +
                                    '  <li>Developed visual selection of objects in project images using SVG and Canvas.</li>\n' +
                                    '  <li>Created a checkerboard of rooms with the functionality of selecting objects related to other sections of the system.</li>\n' +
                                    '  <li>Participated in the creation of more than 600 unique blocks for the website builder, implemented content editing with dynamic forms.</li>\n' +
                                    '  <li>Supported and developed internal libraries, participated in their releases.</li>\n' +
                                    '  <li>Ensured the stability and quality of releases in production, sometimes acting as a team leader.</li>\n' +
                                    '</ul>',
                            },
                            {
                                title: 'Vue Frontend Developer',
                                company: 'WinTech',
                                type: 'Remote',
                                startDate: 'October 2023',
                                endDate: 'Present',
                                description:
                                    '<ul>\n' +
                                    '  <li>Main tasks:' +
                                    '  <ul>\n' +
                                    '     <li>Design and implementation of new interfaces and functionality.</li>\n' +
                                    '     <li>Optimization and support of existing code, bug fixes.</li>\n' +
                                    '     <li>Participation in the development of the architecture of web applications.</li>\n' +
                                    '     <li>Assessment and decomposition of project tasks.</li>\n' +
                                    '     <li>Performing cross-browser layout.</li>\n' +
                                    '   </ul>\n' +
                                    '  </li>\n' +
                                    '  <li>Completed the trial period in 2 months by analyzing current projects and providing recommendations for improving the quality of code and processes.</li>\n' +
                                    '  <li>For 3 months, he was a mentor to a new employee, which led to a bonus of 30% of the salary for the successful introduction of a new team member.</li>\n' +
                                    '  <li>Organized onboarding and provided support when reading the code.</li>\n' +
                                    '  <li>6 months later, he became deputy head of the development department in a team of 8 front-end developers.</li>\n' +
                                    "  <li>Completed a complete refactoring of the company's lead project:" +
                                    '  <ul>\n' +
                                    '    <li>Reduced the size of the application bundle from 1500 MB to 500 KB.</li>\n' +
                                    '    <li>Implemented a correct team workflow and change log to track major and minor updates.</li>\n' +
                                    '    <li>Increased the performance of the site by 5 times.</li>\n' +
                                    '  </ul>\n' +
                                    '</li>\n' +
                                    '  <li>In the 8th month of work, I was appointed to a strategic project as a leader of the direction, which confirmed the high appreciation of my work and showed the desire for development in the company.</li>\n' +
                                    '</ul>',
                            },
                        ],
                    },
                    projects: {
                        title: 'Projects',
                        tags: {
                            'in-working': 'In Progress',
                            complete: 'Completed',
                            'need-to-actualize': 'Needs Update',
                            old: 'Old',
                            frontend: 'Frontend',
                            backend: 'Backend',
                            'desktop-only': 'Desktop Only',
                        },
                        links: {
                            homepage: 'View',
                            design: 'Design',
                        },
                        description: 'Projects that I created or maintaining.',
                        'n3-workspace': {
                            description: 'A mono-repository for all my projects and utilities on Nuxt, this site implemented here',
                        },
                        'n3-workspace/shopping-list': {
                            description: 'Shopping list for create and share',
                        },
                        'n3-workspace/dev-kit-layer': {
                            description: 'Nuxt 3 layer with styleless components and usefull modules, plugins etc for me',
                        },
                        'task-trackers': {
                            description: 'Mono repo with task trackers on all the frameworks that I know or want to know',
                        },
                        'groom-crm': {
                            description: "it's a simple crm for grooming salons",
                        },
                        portfolio_gallery: {
                            description: 'Example of my work',
                        },
                        'web-layout-practice': {
                            description: 'I add various layout practices to broaden my horizons',
                        },
                        'nuxt3-template': {
                            description: 'Repository template with nuxt 3 setup',
                        },
                        'todo-back': {
                            description: 'Backend part for pet todo',
                        },
                        'todo-front': {
                            description: 'Frontend part for pet todo',
                        },
                    },
                },
            },
        },
    },
}));
