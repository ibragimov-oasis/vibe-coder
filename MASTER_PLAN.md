теперь выполни все что сказано в master_plan.md. 
Знаешь, что ты сделал? Ты зашел во все файлы. Все, что было название Cloud Scale или вроде того, собрал все в один файл. Агенты, например, Mega Agent создал файл и туда ввел внутри текст из всех других файлов и все в формате MD. Вообще не так сделал. Разве мы так планировали комбинировать? Конечно же, нет. Там есть Python скрипты, там у нас есть MD файлы и другие виды файлов. Также у нас агенты есть во всех разных ролях. Ты сейчас в один файл поместил, не знаю даже там сколько тысяч скилов или агентов. И любой, кто зайдет в MD файл читать или даже тот же искусственный интеллект, он потеряется там полностью. Нужно было тебе пройтись по такому пути, найти, увидеть файл, узнать, чего он касается. То есть, например, будь то Cloud агенты, да, например, агенты пусть будут. Посмотреть, зайти на это агенты. Ты видишь, внутри файла есть несколько подфайлов, и у каждого своя роль. Там написано агент SEO, агент тестер, агент дебаггер, агент backend и разные виды агентов. Что ты делаешь в этом случае? Ты берешь, все грузишь в этот мегафайл, который ты создал, мегафайл, туда его ставишь и пишешь Cloud Mega что-то там вроде. Потом ты заходишь в другой репозиторий, смотришь, есть ли такой же файл в другом репозитории агенты. Ты там берешь, переносишь все в этот мегафайл отдельными файлами, так как там в репозитории есть, так же, как и в самом репозитории. Точно в том же формате файла. Потом ты читаешь все файлы, которые-- потом ты смотришь третий репозиторий, четвертый и из всех собираешь в одном месте файл делаешь из подфайлов. Например, агенты, там разные роли агенты. Если это агенты разделены по ролям, ты разделяешь их по ролям. Если по интерфейсу, например, кто-то в Antigravity, кто-то Cloud делает, кто-то там курсор или что-то там, ты создаешь еще подпапки. Курсор, Cloud или что там еще. Потом каждое на свое место перемещаешь. Потом что ты делаешь? Ты заходишь в каждый из файлов, что ты создал, например, роли, смотришь на дублирующиеся роли по названию файла и внутри файла несколько слов даже хватит, чтобы узнать, какая там роль. Если роли одинаковые, например, из нескольких репозиториев ты достал тестировщик, тестировщик, тестировщик, тестировщик. Тогда ты сливаешь, берешь и делаешь из них один общий файл. Сливаешь обе информации в одну, в один файл, мегафайл. Пусть пока что будет так, чисто на логику. Потом мы с тобой-- и так делаешь со всеми файлами, и так делаешь со всеми файлами, будь то скиллы, будь то хук или что там. Папки, подпапки под места в одном месте. Просто сортируй данные очень круто. И лучше всего не перемешать файлы из оригинала, а копировать, потому что оригинал нам всегда нужен для того, чтобы еще раз обратиться в оригинал и посмотреть, что там было изначально. Сделаешь все это, это будет пусть этап один. Мы сгруппируем, отформатируем все. Все роли в одном месте, все скиллы в одном месте, но не в одном файле. Не забывай подпапки. Заходишь в оригинальный репозиторий, что там, смотришь путь, что да как, понимаешь, ты вникаешь в суть, что хотела эта репозитория, читаешь. Ты обязательно перед началом каждой работы читай readme файл в репозитории, а там вся информация и любой readme файл, который ты находишь в данном репозитории. Readme файлы читать обязательно, так как в них вся информация. Поэтому я даже не удалял их. Ты заходишь, копируешь, создаешь роли, хуки и так далее. Потом ты берешь их вместе комбинируешь одинаковые только. Например, ты не должен, как сейчас сделал, тестировщика комбинировать с маркетологом, например, или дебаггером. Создаешь тестировщика общего со всех репозиториев, одного мегатестировщика, одного мегадебаггера, одного мегаSEO или маркетолога любого, роли или что там. И инструкции также, хуки также одного мега делаешь.Потом это только step один пусть будет. Все на логике. Step два, что мы с тобой делаем? Так мы пройдемся внутри каждой этой папки, созданной тобой. То, что ты создал, мегатестировщик и так далее, уже файл соединил их. То, что ты соединил из readme файлов, прочитав, мы убираем то, что повторяется. Мы делаем из них один мегатекст потом, потому что ты изначально берешь, просто комбинируешь их тупо. То есть текст одного в текст другого вливает, но потом мы будем их совмещать, комбинировать, то есть брать то, что, например, в одном есть. Например, в одном написано: ты senior маркетолог, в другом написано: ты гений-маркетолог. Мы возьмем и совместим: ты гений senior маркетолог и так далее. Но у каждого свой, как ты помнишь, у каждого интерфейса, например, у курсора свой, у кода свой, у антигайда свой, у каждого может быть свой. Я не говорю, что там есть свой, но ты прочитай readme файлы и внутри файла и посмотри, какие на самом деле одинаковые, какие нет. После того, как мы это все совместим, мы перейдем к этапу три, шагу три. Шаг три — это будет создать, посмотреть уже оставшиеся файлы, которые остались в репозитории, что за файлы остались и какие они. Придумать их применение и внедрить их куда да как или совместить их. Мы сделаем так со всеми репозиториями, оставшимися файлами, прочитаем readme, что это за файлы были и за что отвечали, и куда их теперь совать. Потом мы переходим к следующему этапу. Следующий этап пусть у нас будет проверка. Мы проведем аудит, мы зайдем в каждый репозиторий, каждую папку, подпапку, проверим роли, что там за файлы были, и проверяем исход текст данного, есть он или нет. Данная роль есть или нет? Данный текст есть или нет? Для этого, чтобы каждый раз не путаться, нам нужно создать один файл типа индекса, что ли, всех проделанных работ, всех найденных работ. Откуда мы нашли, точный путь указать, что за файл и куда мы его переместили, точный путь и что мы с ним сделали, точно так же написать. Индексация лучше всего, чтобы перепроверить тоже было легко. Потом следующим пунктом мы займемся тем, что возьмем и свяжем все так, чтобы работало идеально. Например, ты попросил Copilot что-то сделать, чтобы он знал, что он Copilot, что он знает, какой он Copilot, например, Cloud использует или ChatGPT. Зашел в свою подпапку, свои роли нашел, свои инструкции, свои хуки и так далее. Взял, зарегистрировал и использовал. Потом у нас есть, например, легкий браузер, чтобы он использовал для проверки. У нас есть Shanon, который, например, проводит атаки по сайту после проверки. Если кто-то захочет, например, проверить, там Copilot в конце скажет, что хотите, мы можем устроить тест-проверку через Shanon. Если Copilot так предложит или он сразу может совершить сам. Нет, давай мы потом сделаем так, чтобы он автоматически совершил данную атаку. Shanon, как мы знаем, он совершает атаку на веб-сайт, находит все уязвимости, все в одном месте записывает и говорит пользователю. Потом один из агентов, оркестр или что-то там, он получает данные ошибки и дальше просит дебаггера или кто там еще у нас по роли или по скиллам исправить все данные. Исправляет, дальше еще раз Shanon проверяет. Если уязвимости нет, мы даем ответ пользователю. Полная оркестрация. И при этом у нас же есть memory, то есть память, и дальше он сохранит это. Короче, мы в конце сделаем супергигантский, крутой, и если которого попросят: ты дизайнер суперкрутой, сделай мне дизайн сайта по-другому, он знает, что он должен зайти в папку. Если его делать через Cloud Max, например, Cloud Max, он зайдет в свою папку, посмотрит на роли, найдет дизайнера, использует роль дизайнера, посмотрит скиллы, посмотрит плагины свои, хук свой посмотрит. Потом у нас есть UI дизайн на сайте, три репозитория с крутыми дизайнами. Дальше система автоматически перенаправит Cloud Max в эти дизайны. Cloud Max найдет в этих дизайнах то, что ему нужно по своей роли, посмотрит на роль, на сайт и все такое. Сделает крутой дизайн, потом проверит еще раз через Shanon и даст, короче говоря, человеку. Он проверит, сделает же обычные скриншоты, сделает скриншоты и сделает скриншоты и проверку через сайт, который браузер, который мы тоже в репозитории скачали, который супербыстрый. Он не жрет API, он не требует много времени, очень быстрый для проверки, крутой, говорят, браузер один. Я его тоже скачал. Он через этот браузер быстро все проверит и даст пользователю. Короче, сделаем в конце вот такую гениальную вайбкодер систему. Эта вайбкодер система у нас будет совмещать все, все прям. У нас даже там будут готовые промты. Если вайбкодер видит, что промт плохой, он заходит, находит нужный промт и применяет к себе. Или вайбкодер, он же агент, он будет давать оркестрации. У нас же есть такая, например, Ruflo, DeeR. Мы, во-первых, эти оркестрации совместим, если что, DR, RuFlow или что там есть, все совместим. Потом эти оркестрации, например, что у нас есть, сами возьмут промт и дадут другим ИИ-агентам, которые подагенты, они создают же, готовый, красивый, четкий промт дают. Дальше эти агенты зайдут по своим папкам, своим ролям, своим хукам и так далее. Так, до конца, короче говоря. 
ULTRACAR — Правильный План Комбинирования
Проблема предыдущего подхода
Всё было свалено в гигантские монолитные .md файлы (145MB, 63MB и т.д.) — бесполезно и для человека, и для ИИ. Файлы разных форматов (Python, JS, YAML) были засунуты в markdown. Никакой структуры по ролям, интерфейсам, категориям.

Новый подход — 5 этапов
ЭТАП 1: Умная Группировка + Организация
Принцип: Читаем README каждого репо → понимаем суть → копируем файлы в правильную структуру COMBINED/ с подпапками по категориям, ролям и интерфейсам. Сохраняем оригинальный формат файлов.

Структура COMBINED/:

COMBINED/
├── agents/
│   ├── by-role/
│   │   ├── debugger/          ← все агенты-дебаггеры из всех репо
│   │   ├── tester/            ← все агенты-тестеры
│   │   ├── planner/           ← все планировщики
│   │   ├── seo/               ← все SEO агенты
│   │   ├── designer/          ← все дизайнеры
│   │   ├── researcher/        ← все исследователи
│   │   ├── reviewer/          ← все ревьюеры кода
│   │   ├── executor/          ← все исполнители
│   │   ├── security/          ← все security агенты (Shannon и т.д.)
│   │   └── [другие роли]/
│   ├── by-interface/
│   │   ├── claude/            ← агенты для Claude Code
│   │   ├── cursor/            ← агенты для Cursor
│   │   ├── copilot/           ← агенты для Copilot
│   │   ├── antigravity/       ← агенты для Antigravity
│   │   └── universal/         ← агенты без привязки к интерфейсу
│   └── orchestrators/         ← оркестраторы (ruflo, GSD, deer-flow)
│
├── skills/
│   ├── development/           ← навыки разработки (TDD, debugging, etc.)
│   ├── design/                ← навыки дизайна
│   ├── seo/                   ← SEO навыки
│   ├── security/              ← security навыки
│   ├── data-analysis/         ← анализ данных
│   ├── research/              ← исследование
│   ├── devops/                ← CI/CD, деплой
│   ├── memory/                ← навыки работы с памятью
│   ├── writing/               ← написание документации
│   └── [другие категории]/
│
├── hooks/
│   ├── pre-commit/
│   ├── post-commit/
│   ├── pre-tool-use/
│   ├── post-tool-use/
│   ├── notification/
│   └── [другие типы]/
│
├── commands/
│   ├── debug/
│   ├── review/
│   ├── plan/
│   ├── test/
│   └── [другие команды]/
│
├── prompts/
│   ├── system-prompts/
│   │   ├── claude/
│   │   ├── cursor/
│   │   ├── copilot/
│   │   ├── chatgpt/
│   │   ├── devin/
│   │   ├── windsurf/
│   │   ├── lovable/
│   │   ├── replit/
│   │   └── [другие инструменты]/
│   ├── templates/             ← шаблоны промтов
│   └── leaked/                ← утёкшие промты
│
├── memory/
│   ├── claude-mem/            ← система claude-mem (оригинальные файлы)
│   ├── supermemory/           ← система supermemory (оригинальные файлы)
│   └── configs/               ← конфиги памяти
│
├── ui-design/
│   ├── rules/                 ← правила UI (161 rules из ui-ux-pro-max)
│   ├── styles/                ← стили (67 styles)
│   ├── components/
│   │   ├── buttons/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── inputs/
│   │   └── [другие компоненты]/
│   └── cursor-rules/          ← все .cursorrules файлы
│
├── mcp-servers/
│   ├── nano-banana/           ← Gemini image MCP
│   ├── openviking/            ← ByteDance context DB
│   ├── gitnexus/              ← codebase knowledge graph
│   └── configs/               ← plugin.json, marketplace.json
│
├── orchestration/
│   ├── ruflo/                 ← конфиги ruflo
│   ├── get-shit-done/         ← конфиги GSD
│   ├── deer-flow/             ← конфиги deer-flow
│   ├── oh-my-claudecode/      ← конфиги OMC
│   └── workflows/             ← CI/CD workflows
│
├── security/
│   ├── shannon/               ← Shannon pentester
│   ├── reports/               ← образцы отчётов
│   └── scanning/              ← сканирование уязвимостей
│
└── INDEX.md                   ← полный индекс: откуда → куда → что сделали
IMPORTANT

Каждый файл копируется В СВОЁМ ОРИГИНАЛЬНОМ ФОРМАТЕ. Python остаётся .py, YAML остаётся .yaml, JSON остаётся .json. Никаких "всё в один .md".

Порядок работы на Этапе 1:

Читаем README.md каждого из 31 репо
Сканируем структуру каждого репо
Определяем тип каждого файла (агент, скилл, хук, команда, промт, конфиг)
Копируем в соответствующую подпапку COMBINED/
Одинаковые роли из разных репо → в одну папку роли
Ведём INDEX.md с полной записью каждого действия
ЭТАП 2: Умное Слияние Дубликатов
После группировки — проходим по каждой папке ролей:

Находим файлы одной и той же роли из разных репо (например, 4 "тестера")
Читаем каждый, понимаем уникальность
Создаём ОДИН мега-файл роли, объединяя уникальное из каждого
Убираем повторы, сохраняем лучшее
"Senior маркетолог" + "Гений маркетолог" → "Гений senior маркетолог"
Если есть интерфейс-специфичные версии — сохраняем отдельно
ЭТАП 3: Обработка Оставшихся Файлов
Проходим по каждому репо снова
Смотрим, что НЕ было скопировано
Читаем README, понимаем назначение
Определяем куда поместить или как интегрировать
ЭТАП 4: Аудит + Индексация
Создаём полный INDEX.md с колонками:
Исходный путь файла
Тип файла (агент/скилл/хук/и т.д.)
Куда скопировано
Что сделали (скопировано/объединено/пропущено)
Статус (✅ обработано / ❌ пропущено)
Проходим по каждому репо, каждой папке — проверяем, что ничего не потеряно
ЭТАП 5: Оркестрация — Связь Всего Вместе
Настраиваем маршруты: Claude Code → свои папки, своя роль, свои скиллы
Cursor → свои папки, своя роль
Подключаем Shannon для автоматической проверки security
Подключаем browser для проверки UI
Подключаем memory для сохранения контекста
Полный pipeline: запрос → роль → скиллы → выполнение → проверка → отчёт
С чего начинаем
Начинаем с Этапа 1 — группировка агентов. Первым делом:

Читаем README каждого репо с агентами
Находим все файлы агентов во всех 31 репо
Определяем роль каждого агента
Копируем в COMBINED/agents/by-role/[роль]/
Ведём INDEX.md
WARNING

Старые MEGA_*.md файлы (которые я неправильно создал) — оставляем пока как есть, не удаляем. Работаем с новой правильной структурой COMBINED/.

Open Questions
Старые MEGA файлы удалить или оставить пока?
Начинаем с агентов или со скиллов первыми?
По _combined/ папке (которая уже есть с прошлых сессий) — её контент тоже интегрировать в новую структуру?
Open Questions

Старые MEGA файлы удалить или оставить пока?
Начинаем с агентов или со скиллов первы...
1. оставляем.  2.по порядку по репозиториям а не по папкам просто зайдем в один репо и все файлы скопируем создаваю поэтапно нужные файлы. а потом в другой репо заходим и также его перекопируем там где надо и создаем папки которых нет. 3. нет.

═══════════════════════════════════════════════════════════
MISSION BRIEFING FOR AI AGENT
═══════════════════════════════════════════════════════════

READ THIS FIRST — UNDERSTAND THE MISSION COMPLETELY.

You are working inside: https://github.com/ibragimov-oasis/vibe-coder

Imagine 31 car companies: Ferrari, Lamborghini, Rolls-Royce,
Tesla, Toyota, BMW, Mercedes, Ford, Nissan GT-R, Mini, and 27 more.

Each car is great in its own way:
- Ferrari: speed, racing engine, aggressive design
- Rolls-Royce: luxury, premium materials, silence
- Tesla: electric, smart software, autopilot
- Toyota: unbreakable reliability, family utility
- Lamborghini: raw power, extreme aerodynamics
- Mini: compact, efficient, nimble
- BMW: driving precision, sport engineering

Now imagine all 31 companies sat down together and said:
"We are building ONE car. The ULTRACAR.
We share everything — every patent, every technology,
every bolt, every screw, every material.
We take it ALL and combine it into one superhuman machine."

They created departments:
- Engine Dept: all 31 engine technologies merged into one
- Design Dept: all 31 design languages combined
- Wheels Dept: every wheel technology unified
- Interior Dept: Rolls-Royce leather + Tesla screen + BMW ergonomics
- Safety Dept: every safety system from every brand
- Software Dept: Tesla autopilot + BMW driving assist + everything else

They do NOT pick just the "best" engine.
They take ALL engines, study ALL technologies,
merge what overlaps, ADD what is unique from each.
Every bolt matters. Every innovation is kept.
The result: a car with 31 companies' worth of engineering inside.

THIS IS YOUR MISSION FOR THIS REPOSITORY.

The 31 repositories = the 31 car companies.
Each repo has unique "technologies" — skills, agents, prompts,
commands, hooks, memory systems, UI rules, orchestration logic.

You will be the merger department.
You will take EVERYTHING from ALL 31 repos
and combine them into COMBINED/ mega-files.
The result = the ULTRACAR of AI coding toolkits.

═══════════════════════════════════════════════════════════
CRITICAL RULES — READ BEFORE TOUCHING ANYTHING
═══════════════════════════════════════════════════════════

✅ ALL 31 repos are ALREADY DOWNLOADED inside this repository
✅ Your ONLY job: READ existing files → COMBINE into mega-files
✅ Take 100% of EVERY file — not highlights, not summaries — ALL
✅ Never skip a file because it seems duplicate — include it anyway
✅ Never summarize — if a skill is 800 lines, all 800 lines go in
✅ Keep ALL original files exactly as they are
✅ Only CREATE new files inside the COMBINED/ folder
✅ Label every section with its exact source path
✅ Count every skill/agent/prompt as you go
✅ If in doubt — INCLUDE IT. More is always better.

❌ Do NOT download or clone anything
❌ Do NOT delete any existing files
❌ Do NOT summarize or shorten content
❌ Do NOT write "[content from X]" — paste the ACTUAL content
❌ Do NOT skip files because they look similar to others
❌ Do NOT filter — if it exists, it goes in
❌ Do NOT create placeholder text

═══════════════════════════════════════════════════════════
STEP 0 — SCAN THE ENTIRE REPO FIRST
═══════════════════════════════════════════════════════════

Before creating any file, recursively scan EVERY folder.
Understand what exists. Then begin combining.

Complete map of what is already downloaded:

AGENTS DEPARTMENT (Agents/ folder):
├── Agents/background-agents/
│   ├── VISIBLE_claude/skills/onboarding/
│   ├── VISIBLE_git/
│   ├── VISIBLE_github/workflows/
│   ├── VISIBLE_husky/
│   ├── VISIBLE_openinspect/
│   ├── docs/, packages/, scripts/, terraform/
│   ├── CLAUDE.md   ← CRITICAL
│   ├── AGENTS.md   ← CRITICAL
│   └── VISIBLE_gitignore, VISIBLE_prettierignore, etc.
│
├── Agents/hermes-agent/
│   ├── _github/ (workflows, issue templates, PR templates)
│   ├── _plans/
│   ├── acp_adapter/, acp_registry/
│   ├── agent/          ← CORE AGENT LOGIC
│   ├── cron/
│   ├── datagen-config-examples/
│   ├── docker/
│   ├── docs/
│   ├── environments/
│   ├── gateway/
│   ├── hermes_cli/
│   ├── honcho_integration/
│   ├── landingpage/
│   ├── nix/
│   └── optional-skills/  ← SKILLS
│
└── Agents/shannon/
    ├── .claude/commands/
    │   ├── debug.md    ← COMMAND
    │   ├── pr.md       ← COMMAND
    │   └── review.md   ← COMMAND
    ├── _github/ISSUE_TEMPLATE/
    ├── apps/, assets/, repos/, workspaces/
    ├── sample-reports/
    └── CLAUDE.md   ← CRITICAL

ORCHESTRATION DEPARTMENT (Orchestration/ folder):
├── Orchestration/superpowers/       ← 129k stars — THE ENGINE
│   ├── skills/       ← HUNDREDS OF SKILLS — READ ALL
│   ├── agents/       ← AGENT DEFINITIONS — READ ALL
│   ├── commands/     ← SLASH COMMANDS — READ ALL
│   ├── hooks/        ← HOOKS — READ ALL
│   ├── .claude-plugin/ (plugin.json, marketplace.json)
│   ├── .cursor-plugin/
│   ├── .codex/
│   ├── .opencode/
│   ├── scripts/
│   └── AGENTS.md, CHANGELOG.md
│
├── Orchestration/get-shit-done/     ← 46k stars — META-PROMPTING
│   ├── agents/       ← 17+ AGENT FILES — READ ALL
│   │   ├── gsd-advisor-researcher.md
│   │   ├── gsd-assumptions-analyzer.md
│   │   ├── gsd-codebase-mapper.md
│   │   ├── gsd-debugger.md
│   │   ├── gsd-executor.md
│   │   ├── gsd-integration-checker.md
│   │   ├── gsd-nyquist-auditor.md
│   │   ├── gsd-phase-researcher.md
│   │   ├── gsd-plan-checker.md
│   │   ├── gsd-planner.md
│   │   ├── gsd-project-researcher.md
│   │   ├── gsd-research-synthesizer.md
│   │   ├── gsd-roadmapper.md
│   │   ├── gsd-ui-auditor.md
│   │   ├── gsd-ui-checker.md
│   │   ├── gsd-ui-researcher.md
│   │   └── gsd-user-profiler.md
│   ├── hooks/        ← ALL HOOK FILES
│   ├── commands/gsd/ ← ALL COMMAND FILES
│   └── get-shit-done/ ← ALL WORKFLOW FILES
│
├── Orchestration/ruflo/             ← 29k stars — ORCHESTRATION
│   ├── .claude/  (or _claude/ or VISIBLE_claude/)
│   ├── .agents/  ← config.toml, skills/
│   ├── .claude-plugin/ ← plugin.json, marketplace.json, hooks/, docs/
│   ├── .githooks/ (or _githooks/ or VISIBLE_githooks/)
│   ├── agents/   ← ALL AGENT FILES
│   ├── plugin/   ← ALL PLUGIN FILES
│   ├── ruflo/    ← CORE RUFLO FILES
│   ├── v2/, v3/  ← VERSION FILES
│   └── AGENTS.md, CHANGELOG.md
│
├── Orchestration/deer-flow/         ← 55k stars — BYTEDANCE
│   └── skills/public/
│       ├── bootstrap/
│       ├── chart-visualization/
│       ├── claude-to-deerflow/
│       ├── consulting-analysis/
│       ├── data-analysis/
│       ├── deep-research/
│       ├── find-skills/
│       ├── frontend-design/
│       ├── github-deep-research/
│       ├── image-generation/
│       ├── podcast-generation/
│       ├── ppt-generation/
│       ├── skill-creator/
│       ├── surprise-me/
│       └── vercel-deploy-claimable/
│
├── Orchestration/oh-my-claudecode/  ← ALL FILES
├── Orchestration/1code/             ← ALL FILES
└── Orchestration/vibe-kanban/       ← ALL FILES

SKILLS DEPARTMENT (Skills/ folder):
├── Skills/antigravity/     ← 1340+ SKILLS — EVERY SINGLE ONE
├── Skills/claude-skills/   ← 205 skills + 16 agents + 268 scripts
├── Skills/everything-claude-code/   ← Hackathon winner
├── Skills/awesome-copilot/
├── Skills/awesome-claude-code/
├── Skills/claude-seo/
└── Skills/obsidian-skills/

PROMPTS DEPARTMENT (Prompts/ folder):
├── Prompts/awesome-chatgpt-prompts/ ← 143k stars — prompts.csv + ALL
├── Prompts/system-prompts-by-tool/  ← EVERY subfolder:
│   ├── Anthropic/, Amp/, Augment Code/, Cluely/
│   ├── CodeBuddy Prompts/, Comet Assistant/, Cursor Prompts/
│   ├── Devin AI/, Emergent/, Google/, Junie/, Kiro/
│   ├── Leap.new/, Lovable/, Manus/, NotionAI/, Orchids.app/
│   ├── Perplexity/, Poke/, Qoder/, Replit/, Same.dev/
│   ├── Trae/, Traycer AI/, VSCode Agent/, Warp.dev/
│   ├── Windsurf/, Xcode/, Z.ai Code/, Dia/, v0/
│   └── [every other folder that exists]
├── Prompts/system-prompts-leaks/    ← ALL files
└── Prompts/vibe-coding-template/    ← ALL files

TOOLS DEPARTMENT (Tools/ folder):
├── Tools/claude-mem/       ← persistent memory — ALL files
├── Tools/supermemory/      ← #1 memory benchmark — ALL files
├── Tools/gitnexus/         ← codebase knowledge graph
├── Tools/lightpanda/       ← AI browser
├── Tools/openviking/       ← ByteDance context DB
├── Tools/nano-banana-mcp/  ← Gemini image MCP
└── Tools/pretext/          ← text layout library

REFERENCE (Reference/ folder):
└── Reference/awesome-selfhosted/   ← README.md is the mega list

UI/UX DEPARTMENT (UI-UX/ folder):
├── UI-UX/galaxy/           ← 3000+ UI elements — ALL
├── UI-UX/shadcn/           ← component library — ALL
└── UI-UX/ui-ux-pro-max/    ← 161 rules + 67 styles — ALL

ROOT CONFIG FILES:
├── .claude/                ← check for commands/skills
├── .cursor/rules/          ← cursor rules — ALL
├── .antigravity/           ← antigravity configs — ALL
└── .cursorrules            ← root cursorrules

═══════════════════════════════════════════════════════════
STEP 1 — CREATE: COMBINED/MEGA_CLAUDE.md
         THE ENGINE — most important file
═══════════════════════════════════════════════════════════

Find EVERY file that gives an AI agent instructions:
- Agents/background-agents/CLAUDE.md
- Agents/background-agents/AGENTS.md
- Agents/shannon/CLAUDE.md
- Orchestration/superpowers/AGENTS.md
- Orchestration/get-shit-done/ → any instruction .md files
- Orchestration/ruflo/AGENTS.md
- Orchestration/deer-flow/ → any instruction files
- Root ORCHESTRATION.md
- Root MEMORY_SETUP.md
- Any other CLAUDE.md or AGENTS.md anywhere in the repo

CREATE: COMBINED/MEGA_CLAUDE.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA CLAUDE.md — The Ultra Engine
# Assembled from ALL 31 repositories
# Usage: Drop into your project root as CLAUDE.md
# This gives your AI agent the combined intelligence of 31 elite repos
# Total sources: [count every source found]
#
# TABLE OF CONTENTS:
# [auto-generate list of all sources with line numbers]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ═══ SOURCE 1: Agents/background-agents/CLAUDE.md ═══
[100% full content — not one word removed]

## ═══ SOURCE 2: Agents/background-agents/AGENTS.md ═══
[100% full content]

## ═══ SOURCE 3: Agents/shannon/CLAUDE.md ═══
[100% full content]

[continue for EVERY source found — zero exceptions]

═══════════════════════════════════════════════════════════
STEP 2 — CREATE: COMBINED/MEGA_SKILLS.md
         THE TRANSMISSION — power delivery system
═══════════════════════════════════════════════════════════

Find EVERY skill file across ALL locations:
- Skills/antigravity/              → ALL 1340+ files
- Skills/claude-skills/            → ALL 205 skill files
- Skills/everything-claude-code/   → ALL files
- Skills/awesome-copilot/          → ALL files
- Skills/awesome-claude-code/      → ALL files
- Skills/claude-seo/               → ALL files
- Skills/obsidian-skills/          → ALL files
- Orchestration/superpowers/skills/ → ALL folders, ALL files
- Orchestration/deer-flow/skills/public/ → ALL 15 subfolders
- Agents/hermes-agent/optional-skills/ → ALL files
- UI-UX/ui-ux-pro-max/             → ALL skill files
- Root .antigravity/               → ALL files
- Any file named SKILL.md anywhere in the repo

CREATE: COMBINED/MEGA_SKILLS.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA SKILLS — Complete Arsenal
# 1500+ skills from 31 repositories — 100% combined
# Usage: Copy relevant sections into .claude/skills/ in your project
# Every skill is complete — nothing cut, nothing summarized
# Total skills: [count as you go]
#
# TABLE OF CONTENTS (grouped by category):
# 🔧 Development & Coding      — [N] skills
# 🎨 UI/UX & Design            — [N] skills
# 🔍 SEO & Marketing           — [N] skills
# 🔒 Security & Testing        — [N] skills
# 📊 Data & Research           — [N] skills
# 🧠 Memory & Context          — [N] skills
# 📝 Writing & Documentation   — [N] skills
# 🚀 Deployment & DevOps       — [N] skills
# 🤖 Agent Orchestration       — [N] skills
# 📱 Platform-Specific         — [N] skills
# 🌐 Browser & Tools           — [N] skills
# [add any other categories found]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔧 SOURCE: Orchestration/superpowers/skills/[skill-name]/SKILL.md
[100% full content of every file in every skills subfolder]

### 🔧 SOURCE: Skills/antigravity/[skill-name]
[100% full content — repeat for ALL 1340+ skill files]

### 🔧 SOURCE: Skills/claude-skills/[skill-name]
[100% full content — all 205]

### 🎨 SOURCE: UI-UX/ui-ux-pro-max/[file]
[100% full content]

### 📊 SOURCE: Orchestration/deer-flow/skills/public/data-analysis/
[100% full content]

[continue for EVERY skill from EVERY source — zero exceptions]

═══════════════════════════════════════════════════════════
STEP 3 — CREATE: COMBINED/MEGA_AGENTS.md
         THE AI CREW — drivers and specialists
═══════════════════════════════════════════════════════════

Find EVERY agent definition file:
- Orchestration/get-shit-done/agents/ → ALL 17+ .md files
  (gsd-advisor-researcher, gsd-assumptions-analyzer,
   gsd-codebase-mapper, gsd-debugger, gsd-executor,
   gsd-integration-checker, gsd-nyquist-auditor,
   gsd-phase-researcher, gsd-plan-checker, gsd-planner,
   gsd-project-researcher, gsd-research-synthesizer,
   gsd-roadmapper, gsd-ui-auditor, gsd-ui-checker,
   gsd-ui-researcher, gsd-user-profiler — ALL)
- Orchestration/superpowers/agents/ → ALL files
- Orchestration/ruflo/agents/       → ALL files
- Orchestration/ruflo/.agents/skills/ → ALL files
- Agents/hermes-agent/agent/        → ALL files
- Skills/claude-skills/             → 16 agent files
- Any file with "agent" in its name anywhere in the repo

CREATE: COMBINED/MEGA_AGENTS.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA AGENTS — Complete Agent Army
# Every agent from every repo, fully merged
# Usage: Use as sub-agent definitions in Claude Code / Copilot / Cursor
# Total agents: [count as you go]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ═══ AGENT: gsd-planner | SOURCE: get-shit-done/agents/ ═══
[100% full content — all instructions, all rules, nothing cut]

## ═══ AGENT: gsd-debugger | SOURCE: get-shit-done/agents/ ═══
[100% full content]

[REPEAT for every agent found — zero exceptions]

═══════════════════════════════════════════════════════════
STEP 4 — CREATE: COMBINED/MEGA_PROMPTS.md
         THE FUEL — what powers the AI
═══════════════════════════════════════════════════════════

Find EVERY prompt and system prompt:
- Prompts/system-prompts-by-tool/ → EVERY subfolder, EVERY file
- Prompts/system-prompts-leaks/   → ALL files
- Prompts/awesome-chatgpt-prompts/ → prompts.csv + ALL .md files
- Prompts/vibe-coding-template/   → ALL files

CREATE: COMBINED/MEGA_PROMPTS.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA PROMPTS — Complete Prompt Bible
# Every prompt, every leaked system prompt, every template
# From 31 repositories — nothing omitted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PART 1: Leaked System Prompts from AI Tools
### 🔑 TOOL: Anthropic / Claude
[100% full content of every file in Anthropic/ folder]
### 🔑 TOOL: Cursor
[100% full content]
### 🔑 TOOL: Devin AI
[100% full content]
### 🔑 TOOL: Windsurf
[100% full content]
### 🔑 TOOL: Lovable
[100% full content]
### 🔑 TOOL: Replit
[100% full content]
### 🔑 TOOL: v0
[100% full content]
### 🔑 TOOL: Manus
[100% full content]
### 🔑 TOOL: Kiro
[100% full content]
### 🔑 TOOL: Amp
[100% full content]
### 🔑 TOOL: Augment Code
[100% full content]
### 🔑 TOOL: Warp
[100% full content]
### 🔑 TOOL: Perplexity
[100% full content]
[... every single tool folder — ALL 30+]

## PART 2: Additional Leaked Prompts
[100% full content from system-prompts-leaks/ — every file]

## PART 3: Vibe-Coding Workflow Prompts
[100% full content from vibe-coding-template/ — every file]

## PART 4: Master Prompt Library (143k stars)
[100% full content from awesome-chatgpt-prompts/ — every file + prompts.csv]

═══════════════════════════════════════════════════════════
STEP 5 — CREATE: COMBINED/MEGA_COMMANDS.md
         THE CONTROLS — steering wheel and pedals
═══════════════════════════════════════════════════════════

Find EVERY command definition file:
- Agents/shannon/.claude/commands/debug.md
- Agents/shannon/.claude/commands/pr.md
- Agents/shannon/.claude/commands/review.md
- Orchestration/superpowers/commands/ → ALL files
- Orchestration/get-shit-done/commands/gsd/ → ALL files
- Orchestration/ruflo/.claude/ or _claude/ → ALL command files
- Root .claude/ folder → any command files
- Any .md file inside any folder named "commands" anywhere

CREATE: COMBINED/MEGA_COMMANDS.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA COMMANDS — Every Slash Command Combined
# Usage: Copy into .claude/commands/ in your project
# Then use /[command-name] in Claude Code
# Total commands: [count as you go]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ═══ /debug | SOURCE: Agents/shannon/.claude/commands/debug.md ═══
[100% full content]

## ═══ /pr | SOURCE: Agents/shannon/.claude/commands/pr.md ═══
[100% full content]

## ═══ /review | SOURCE: Agents/shannon/.claude/commands/review.md ═══
[100% full content]

[REPEAT for every command found]

═══════════════════════════════════════════════════════════
STEP 6 — CREATE: COMBINED/MEGA_HOOKS.md
         THE SUSPENSION — connects everything automatically
═══════════════════════════════════════════════════════════

Find EVERY hook file:
- Orchestration/superpowers/hooks/          → ALL files
- Orchestration/get-shit-done/hooks/        → ALL files
- Orchestration/ruflo/.claude-plugin/hooks/ → ALL files
- Orchestration/ruflo/ _githooks/ or VISIBLE_githooks/ → ALL files
- Any file with "hook" in its name anywhere in the repo

CREATE: COMBINED/MEGA_HOOKS.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA HOOKS — Every Hook Combined
# Hooks run automatically during your AI coding session
# Total hooks: [count as you go]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ═══ HOOK: [name] | SOURCE: [exact path] ═══
[100% full content]

[REPEAT for every hook found]

═══════════════════════════════════════════════════════════
STEP 7 — CREATE: COMBINED/MEGA_MEMORY.md
         THE GPS — remembers everything across sessions
═══════════════════════════════════════════════════════════

Find EVERY memory and context system file:
- Tools/claude-mem/    → ALL files
- Tools/supermemory/   → ALL files
- Root MEMORY_SETUP.md (already exists in root)
- Memory configs in Orchestration/ruflo/
- Memory configs in Orchestration/get-shit-done/
- Memory-related files in Agents/hermes-agent/

CREATE: COMBINED/MEGA_MEMORY.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA MEMORY — Complete Memory Architecture
# Your AI will remember across all sessions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## SYSTEM 1: claude-mem (compressed persistent memory)
### SOURCE: Tools/claude-mem/[every file]
[100% full content of every file]

## SYSTEM 2: Supermemory (#1 benchmark — LongMemEval, LoCoMo, ConvoMem)
### SOURCE: Tools/supermemory/[every file]
[100% full content of every file]

## SYSTEM 3: Orchestration Memory Configs
### SOURCE: Root/MEMORY_SETUP.md
[100% full content]

### SOURCE: Orchestration/ruflo/ memory files
[100% full content]

### SOURCE: Orchestration/get-shit-done/ memory files
[100% full content]

═══════════════════════════════════════════════════════════
STEP 8 — CREATE: COMBINED/MEGA_UI.md
         THE INTERIOR + EXTERIOR — design and experience
═══════════════════════════════════════════════════════════

Find EVERY UI and design file:
- UI-UX/ui-ux-pro-max/ → ALL files (161 rules + 67 styles)
- UI-UX/galaxy/        → ALL 3000+ element files
- UI-UX/shadcn/        → ALL component definition files
- Orchestration/deer-flow/skills/public/frontend-design/ → ALL files
- Root .cursorrules file
- Root .cursor/rules/ → ALL files
- Any cursorrules files anywhere (VISIBLE_cursorrules, _cursorrules)

CREATE: COMBINED/MEGA_UI.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA UI — Complete Design Arsenal
# 161 reasoning rules + 67 styles + 3000+ components
# From 31 repositories — nothing omitted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PART 1: 161 UI Reasoning Rules
### SOURCE: UI-UX/ui-ux-pro-max/
[100% full content of every file]

## PART 2: 67 UI Style Definitions
### SOURCE: UI-UX/ui-ux-pro-max/
[100% full content]

## PART 3: Frontend Design Skills (ByteDance deer-flow)
### SOURCE: Orchestration/deer-flow/skills/public/frontend-design/
[100% full content]

## PART 4: Cursor Rules (all sources merged)
### SOURCE: Root/.cursorrules
[100% full content]
### SOURCE: Root/.cursor/rules/
[100% full content of every file]
### SOURCE: any VISIBLE_cursorrules found
[100% full content]

## PART 5: Component Library Reference
### SOURCE: UI-UX/galaxy/ (3000+ elements)
[100% full content]
### SOURCE: UI-UX/shadcn/
[100% full content]

═══════════════════════════════════════════════════════════
STEP 9 — CREATE: COMBINED/MEGA_SECURITY.md
         THE ARMOR — full protection system
═══════════════════════════════════════════════════════════

Find EVERY security and testing file:
- Agents/shannon/ → ALL files (AI pentester)
- Agents/shannon/sample-reports/ → ALL sample reports
- Security skills in Skills/antigravity/
- Security skills in Skills/claude-skills/
- Security configs in Orchestration/get-shit-done/
- Security-related files in Orchestration/deer-flow/skills/public/

CREATE: COMBINED/MEGA_SECURITY.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA SECURITY — Complete Security Arsenal
# AI-powered pentesting + vulnerability scanning + security skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## SOURCE: Agents/shannon/ (35k stars — AI Pentester)
[100% full content of every file]

## SOURCE: Agents/shannon/sample-reports/
[100% full content]

## SOURCE: Security skills from Skills/antigravity/
[100% full content of every security-related skill]

## SOURCE: Security skills from Skills/claude-skills/
[100% full content]

═══════════════════════════════════════════════════════════
STEP 10 — CREATE: COMBINED/MEGA_MCP.md
          THE CONNECTIVITY — how it talks to everything
═══════════════════════════════════════════════════════════

Find EVERY MCP (Model Context Protocol) config:
- Tools/nano-banana-mcp/ → ALL files
- Orchestration/superpowers/.claude-plugin/marketplace.json
- Orchestration/superpowers/.claude-plugin/plugin.json
- Orchestration/ruflo/.claude-plugin/marketplace.json
- Orchestration/ruflo/.claude-plugin/plugin.json
- Any file named marketplace.json anywhere
- Any file named plugin.json anywhere
- MCP-related configs in Tools/openviking/
- MCP references in Skills/awesome-claude-code/

CREATE: COMBINED/MEGA_MCP.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA MCP — Complete MCP Server Arsenal
# Model Context Protocol configs from all repos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## SOURCE: Tools/nano-banana-mcp/ (Gemini Image MCP)
[100% full content of every file]

## SOURCE: Orchestration/superpowers/.claude-plugin/
[100% full content of plugin.json and marketplace.json]

## SOURCE: Orchestration/ruflo/.claude-plugin/
[100% full content of plugin.json and marketplace.json]

## SOURCE: Tools/openviking/ (ByteDance context DB)
[100% full content]

[REPEAT for every MCP file found]

═══════════════════════════════════════════════════════════
STEP 11 — CREATE: COMBINED/MEGA_ORCHESTRATION.md
          THE AUTOPILOT — multi-agent coordination
═══════════════════════════════════════════════════════════

Find EVERY orchestration and workflow config:
- Orchestration/ruflo/.claude-plugin/ (plugin.json, marketplace.json, docs/)
- Orchestration/ruflo/plugin/
- Orchestration/ruflo/ruflo/
- Orchestration/ruflo/v2/, v3/
- Orchestration/superpowers/.claude-plugin/
- Orchestration/superpowers/.cursor-plugin/
- Orchestration/superpowers/.codex/
- Orchestration/superpowers/.opencode/
- Orchestration/get-shit-done/get-shit-done/ → ALL workflow files
- Orchestration/deer-flow/ workflow configs
- Orchestration/oh-my-claudecode/ → ALL files
- Orchestration/1code/ → ALL files
- Orchestration/vibe-kanban/ → ALL files
- Agents/hermes-agent/_plans/ → ALL plan files
- Any .yml or .yaml workflow files anywhere

CREATE: COMBINED/MEGA_ORCHESTRATION.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA ORCHESTRATION — Complete Multi-Agent System
# Every workflow, every pipeline, every coordination config
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## SOURCE: Orchestration/ruflo/ (29k stars)
[100% full content of every orchestration file]

## SOURCE: Orchestration/superpowers/ plugin configs
[100% full content]

## SOURCE: Orchestration/get-shit-done/ workflows
[100% full content]

## SOURCE: Orchestration/oh-my-claudecode/
[100% full content]

## SOURCE: Orchestration/1code/
[100% full content]

## SOURCE: Orchestration/vibe-kanban/
[100% full content]

## SOURCE: Agents/hermes-agent/_plans/
[100% full content]

═══════════════════════════════════════════════════════════
STEP 12 — CREATE: COMBINED/ULTRACAR_QUICKSTART.md
          THE OWNER'S MANUAL
═══════════════════════════════════════════════════════════

CREATE: COMBINED/ULTRACAR_QUICKSTART.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ THE ULTRACAR — Owner's Manual
#
# You just downloaded the most powerful vibe-coding toolkit ever built.
# 31 elite repositories. Every skill. Every agent. Every tool. Combined.
# Ferrari + Lamborghini + Rolls-Royce + Tesla + Toyota × 27 more = ULTRACAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎯 3 Minutes Setup — Claude Code
1. Copy COMBINED/MEGA_CLAUDE.md → your project root → rename to CLAUDE.md
2. Run: mkdir .claude/skills && mkdir .claude/commands
3. Copy skill sections from MEGA_SKILLS.md → .claude/skills/
4. Copy command sections from MEGA_COMMANDS.md → .claude/commands/
5. Type: claude "build [your idea]"
Your Claude Code now has the intelligence of 31 elite repos.

## 🎯 3 Minutes Setup — GitHub Copilot
1. Copy COMBINED/MEGA_SKILLS.md relevant sections into your project
2. Enable Copilot instructions in VS Code settings
3. Reference skills from Skills/awesome-copilot/ folder
4. Start building with natural language

## 🎯 3 Minutes Setup — Cursor
1. Copy the Cursor Rules section from MEGA_UI.md → .cursorrules in your project
2. Reference agent definitions from MEGA_AGENTS.md
3. Use prompts from MEGA_PROMPTS.md as context
4. Start building

## 🎯 3 Minutes Setup — Any AI Agent
1. Drop MEGA_CLAUDE.md as your system prompt
2. Use MEGA_SKILLS.md as your skill library
3. Use MEGA_AGENTS.md to spawn sub-agents
4. Use MEGA_PROMPTS.md for proven prompt templates

## 📦 What's In Your ULTRACAR
COMBINED/MEGA_CLAUDE.md       — The Engine       (main AI instructions)
COMBINED/MEGA_SKILLS.md       — The Transmission (1500+ skills)
COMBINED/MEGA_AGENTS.md       — The Crew         (50+ specialized agents)
COMBINED/MEGA_PROMPTS.md      — The Fuel         (every prompt ever made)
COMBINED/MEGA_COMMANDS.md     — The Controls     (slash commands)
COMBINED/MEGA_HOOKS.md        — The Suspension   (automation hooks)
COMBINED/MEGA_MEMORY.md       — The GPS          (persistent memory)
COMBINED/MEGA_UI.md           — The Body         (design system)
COMBINED/MEGA_SECURITY.md     — The Armor        (security scanning)
COMBINED/MEGA_MCP.md          — The Connectivity (MCP servers)
COMBINED/MEGA_ORCHESTRATION.md — The Autopilot   (multi-agent systems)

## 🧠 Power User Tips
- MEGA_CLAUDE.md is the single most powerful file. Start here.
- Skills work best when placed in .claude/skills/ as individual files
- Commands activate with /command-name in Claude Code
- Hooks run automatically — no configuration needed after setup
- Memory systems persist across sessions — set up once, works forever

═══════════════════════════════════════════════════════════
FINAL ABSOLUTE RULES — APPLY TO EVERY FILE YOU CREATE
═══════════════════════════════════════════════════════════

Rule 1 — READ FIRST
Before creating any COMBINED/ file, read ALL source files
it will contain. Never write content you haven't read.

Rule 2 — FULL CONTENT ONLY
If a file has 1000 lines, all 1000 lines go in.
No "see original file". No "[content truncated]".
No summaries. No paraphrasing. No omissions.

Rule 3 — LABEL EVERYTHING
Every section must start with:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ═══ SOURCE: [exact/path/to/file.md] ═══
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rule 4 — NEVER DELETE
Original files stay exactly as they are. Forever.

Rule 5 — EVERY BOLT COUNTS
Even if two skill files look identical — include both.
Even if a file seems minor — include it.
In the ULTRACAR, every bolt, every screw matters.

Rule 6 — COUNT AS YOU GO
Track: skills included, agents included, prompts included.
Put the running total in each file's header.

Rule 7 — WHEN IN DOUBT, INCLUDE IT
Unsure if a file belongs? Include it.
Wrong to include something? No. Wrong to miss something? YES.

You are working inside: https://github.com/ibragimov-oasis/vibe-coder

ALL repos are already downloaded. DO NOT clone anything. 
DO NOT delete anything. DO NOT summarize anything.
DO NOT filter or pick "the best" — take EVERYTHING from EVERY file.

Your mission: FULL MERGE. Every skill, every agent, every prompt, 
every command, every hook, every rule, every config — ALL of it 
goes into combined mega-files. Like merging Tesla + Toyota + Ferrari 
+ Rolls-Royce + Lamborghini into one ultra-machine.

═══════════════════════════════════════════════════
STEP 0 — MAP THE ENTIRE REPO
═══════════════════════════════════════════════════

First, recursively list EVERY file in the repo.
Store this list mentally. You will process each one.

Key folders to fully scan:
Agents/background-agents/     (all VISIBLE_* and regular files)
Agents/hermes-agent/          (agent/, gateway/, cron/, environments/, 
                               acp_adapter/, acp_registry/, docs/, 
                               datagen-config-examples/, honcho_integration/,
                               hermes_cli/, optional-skills/, .plans/)
Agents/shannon/               (.claude/commands/, sample-reports/, repos/)
Orchestration/superpowers/    (skills/, agents/, commands/, hooks/, 
                               .claude-plugin/, .cursor-plugin/, .codex/, 
                               .opencode/, scripts/)
Orchestration/get-shit-done/  (agents/, hooks/, commands/gsd/, get-shit-done/,
                               .github/)
Orchestration/ruflo/          (.claude/, .agents/, .claude-plugin/, 
                               .githooks/, agents/, plugin/, v2/, v3/, ruflo/)
Orchestration/deer-flow/      (skills/public/ — ALL 15 skill subfolders)
Orchestration/oh-my-claudecode/  (all files)
Orchestration/1code/             (all files)
Orchestration/vibe-kanban/       (all files)
Skills/antigravity/              (ALL 1340+ skill files — every single one)
Skills/claude-skills/            (ALL 205 skills + 16 agents + 268 scripts)
Skills/everything-claude-code/   (all files)
Skills/awesome-copilot/          (all files)
Skills/awesome-claude-code/      (all files)
Skills/claude-seo/               (all files)
Skills/obsidian-skills/          (all files)
Prompts/awesome-chatgpt-prompts/ (all files including prompts.csv)
Prompts/system-prompts-by-tool/  (ALL subfolders — Anthropic, Cursor, 
                                  Devin, Windsurf, Lovable, Manus, Replit,
                                  VSCode, Augment, ChatGPT, Kiro, Amp,
                                  CodeBuddy, Comet, Cluely, Emergent,
                                  Google, Junie, Leap, NotionAI, Orchids,
                                  Perplexity, Poke, Qoder, Same.dev,
                                  Trae, Traycer, Warp, Xcode, Z.ai, 
                                  Dia, v0 — literally every folder)
Prompts/system-prompts-leaks/    (all files)
Prompts/vibe-coding-template/    (all files)
Tools/claude-mem/                (all files)
Tools/supermemory/               (all files)
Tools/gitnexus/                  (all files)
Tools/lightpanda/                (all files)
Tools/openviking/                (all files)
Tools/nano-banana-mcp/           (all files)
Tools/pretext/                   (all files)
Reference/awesome-selfhosted/    (all files)
UI-UX/galaxy/                    (ALL 3000+ UI elements)
UI-UX/shadcn/                    (all component files)
UI-UX/ui-ux-pro-max/             (all files — 161 rules + 67 styles)
Root files: .claude/, .cursor/rules/, .antigravity/, .cursorrules

═══════════════════════════════════════════════════
STEP 1 — CREATE COMBINED/MEGA_CLAUDE.md
═══════════════════════════════════════════════════

Find every CLAUDE.md file across the entire repo.
Also find: AGENTS.md, COVERAGE.md, any file that gives 
Claude instructions about how to behave.

Merge ALL of them — full content, nothing cut.

File: COMBINED/MEGA_CLAUDE.md
Header:
# ⚡ MEGA CLAUDE.md
# Combined from ALL sources in vibe-coder arsenal
# Drop this into your project root as CLAUDE.md
# Total sources: [count every source]

---

## ═══ SOURCE: [folder/filename] ═══
[100% full content, not one word removed]

## ═══ SOURCE: [next file] ═══
[100% full content]

[repeat for every CLAUDE.md found]

═══════════════════════════════════════════════════
STEP 2 — CREATE COMBINED/MEGA_SKILLS.md
═══════════════════════════════════════════════════

Find EVERY skill file across the entire repo.
Skills are in: Skills/, Orchestration/superpowers/skills/,
Orchestration/deer-flow/skills/public/, Agents/hermes-agent/optional-skills/,
.antigravity/, Skills/obsidian-skills/, Skills/claude-seo/,
Skills/everything-claude-code/, Skills/antigravity/ (ALL 1340),
Skills/claude-skills/ (ALL 205), Skills/awesome-copilot/,
UI-UX/ui-ux-pro-max/ (UI skills), any SKILL.md anywhere.

Merge EVERY SINGLE skill file — full content.

File: COMBINED/MEGA_SKILLS.md
Header:
# ⚡ MEGA SKILLS — Complete Arsenal
# 1500+ skills from 31 repositories combined
# Drop relevant sections into .claude/skills/ in your project

Table of contents at top grouped by category:
- 🔧 Development & Coding
- 🎨 UI/UX & Design  
- 🔍 SEO & Marketing
- 🔒 Security & Testing
- 📊 Data & Research
- 🧠 Memory & Context
- 📝 Writing & Documentation
- 🚀 Deployment & DevOps
- 🤖 Agent Orchestration
- 📱 Platform-Specific (Obsidian, etc.)
- 🌐 Browser & Tools
- [any other categories found]

Then dump every skill under its category:

---
### 🔧 SOURCE: superpowers/skills/[name]
[full content of every file in that skills folder]

### 🔧 SOURCE: antigravity/[skill name]
[full content — do this for all 1340+ skills]

### 🔧 SOURCE: claude-skills/[skill name]
[full content — all 205]

[continue until every skill from every source is included]

═══════════════════════════════════════════════════
STEP 3 — CREATE COMBINED/MEGA_AGENTS.md
═══════════════════════════════════════════════════

Find EVERY agent definition file:
- Orchestration/get-shit-done/agents/ (ALL agent .md files)
- Orchestration/superpowers/agents/
- Orchestration/ruflo/agents/ and .agents/skills/
- Agents/hermes-agent/agent/ (full agent definition)
- Skills/claude-skills/ (16 agent files)
- Any file with "agent" in name

File: COMBINED/MEGA_AGENTS.md
Header:
# ⚡ MEGA AGENTS — Complete Agent Army
# Every agent from every repo, fully merged
# Use as sub-agents in Claude Code / Copilot / Cursor

---
## AGENT: [name] | SOURCE: [repo/path]
[full content — all instructions, all rules, nothing cut]

═══════════════════════════════════════════════════
STEP 4 — CREATE COMBINED/MEGA_PROMPTS.md
═══════════════════════════════════════════════════

Find EVERY prompt, system prompt, leaked prompt:
- Prompts/system-prompts-by-tool/ (EVERY tool folder, EVERY file)
- Prompts/system-prompts-leaks/ (EVERY file)
- Prompts/awesome-chatgpt-prompts/ (prompts.csv + ALL .md files)
- Prompts/vibe-coding-template/ (EVERY file)

File: COMBINED/MEGA_PROMPTS.md
Structure:

# ⚡ MEGA PROMPTS — Complete Prompt Bible
# Every prompt from every source

## PART 1: Leaked System Prompts from AI Tools
(shows how top AI products are built)

### Tool: Claude / Anthropic
[full content]
### Tool: Cursor
[full content]
### Tool: GitHub Copilot
[full content]
### Tool: Devin AI
[full content]
### Tool: Windsurf
[full content]
### Tool: Lovable
[full content]
### Tool: Replit
[full content]
[... every single tool folder]

## PART 2: Vibe-Coding Workflow Prompts
[full content from vibe-coding-template — every file]

## PART 3: General Prompt Library (143k star collection)
[full content from awesome-chatgpt-prompts — everything]

═══════════════════════════════════════════════════
STEP 5 — CREATE COMBINED/MEGA_COMMANDS.md
═══════════════════════════════════════════════════

Find EVERY command definition:
- Agents/shannon/.claude/commands/ (debug.md, pr.md, review.md)
- Orchestration/superpowers/commands/ (ALL files)
- Orchestration/get-shit-done/commands/gsd/ (ALL files)
- Orchestration/ruflo/.claude/ or _claude/ (ALL command files)
- Root .claude/ folder (if any commands exist)
- Any file ending in .md inside any "commands" folder anywhere

File: COMBINED/MEGA_COMMANDS.md
# ⚡ MEGA COMMANDS — Every Slash Command Combined
# Copy into .claude/commands/ in your project

---
## /[command name] | SOURCE: [repo]
[full command content]

═══════════════════════════════════════════════════
STEP 6 — CREATE COMBINED/MEGA_HOOKS.md
═══════════════════════════════════════════════════

Find EVERY hook file:
- Orchestration/superpowers/hooks/ (ALL files)
- Orchestration/get-shit-done/hooks/ (ALL files)
- Orchestration/ruflo/ githooks (look for _githooks or VISIBLE_githooks)
- Orchestration/ruflo/.claude-plugin/hooks/
- Any file with "hook" in the name anywhere

File: COMBINED/MEGA_HOOKS.md
# ⚡ MEGA HOOKS — Every Claude Hook Combined

---
## HOOK: [name] | SOURCE: [repo]
[full hook content]

═══════════════════════════════════════════════════
STEP 7 — CREATE COMBINED/MEGA_MEMORY.md
═══════════════════════════════════════════════════

Find EVERY memory/context system file:
- Tools/claude-mem/ (ALL files)
- Tools/supermemory/ (ALL files)
- Root MEMORY_SETUP.md
- Any memory configs in Orchestration/ruflo/
- Any memory configs in Orchestration/get-shit-done/
- Agents/hermes-agent/ memory-related files

File: COMBINED/MEGA_MEMORY.md
# ⚡ MEGA MEMORY — Complete Memory Architecture

[full content of every memory system, merged]

═══════════════════════════════════════════════════
STEP 8 — CREATE COMBINED/MEGA_UI.md
═══════════════════════════════════════════════════

Find EVERY UI/design file:
- UI-UX/ui-ux-pro-max/ (ALL files — 161 rules, 67 styles)
- UI-UX/galaxy/ (ALL 3000+ elements)
- UI-UX/shadcn/ (ALL component definitions)
- Orchestration/deer-flow/skills/public/frontend-design/ (ALL files)
- Any cursorrules files anywhere (VISIBLE_cursorrules, _cursorrules, .cursorrules)
- Root .cursor/rules/ folder (ALL files)

File: COMBINED/MEGA_UI.md
# ⚡ MEGA UI — Complete Design Arsenal

## 161 Reasoning Rules for Perfect UI
[full content]

## 67 UI Styles
[full content]

## 3000+ UI Elements Reference
[full content from galaxy]

## Frontend Design Skills
[full content]

## Cursor Rules (full set)
[full content]

═══════════════════════════════════════════════════
STEP 9 — CREATE COMBINED/MEGA_SECURITY.md
═══════════════════════════════════════════════════

Find EVERY security/testing file:
- Agents/shannon/ (ALL files — AI pentester)
- Agents/shannon/sample-reports/ (ALL sample reports)
- Any security skills in Skills/antigravity/
- Any security skills in Skills/claude-skills/
- Orchestration/deer-flow/skills/public/ security-related

File: COMBINED/MEGA_SECURITY.md
# ⚡ MEGA SECURITY — Complete Security Arsenal

[full content of every security file]

═══════════════════════════════════════════════════
STEP 10 — CREATE COMBINED/MEGA_MCP.md
═══════════════════════════════════════════════════

Find EVERY MCP (Model Context Protocol) config:
- Tools/nano-banana-mcp/ (ALL files)
- Any marketplace.json files (superpowers, ruflo)
- Any plugin.json files
- MCP-related configs in Tools/openviking/
- MCP references in Skills/awesome-claude-code/

File: COMBINED/MEGA_MCP.md
# ⚡ MEGA MCP — Complete MCP Server Arsenal

[full content of every MCP config and setup file]

═══════════════════════════════════════════════════
STEP 11 — CREATE COMBINED/MEGA_ORCHESTRATION.md
═══════════════════════════════════════════════════

Find EVERY workflow/orchestration config:
- Orchestration/ruflo/.claude-plugin/ (plugin.json, marketplace.json, docs/)
- Orchestration/ruflo/plugin/
- Orchestration/superpowers/.claude-plugin/
- Orchestration/superpowers/.cursor-plugin/
- Orchestration/superpowers/.codex/
- Orchestration/get-shit-done/get-shit-done/ (ALL workflow files)
- Orchestration/deer-flow/ workflow configs
- Agents/hermes-agent/.plans/ (ALL plan files)
- Any workflow .yml or .yaml files

File: COMBINED/MEGA_ORCHESTRATION.md
# ⚡ MEGA ORCHESTRATION — Complete Multi-Agent System

[full content of every orchestration file]

═══════════════════════════════════════════════════
STEP 12 — CREATE COMBINED/ULTIMATE_QUICKSTART.md
═══════════════════════════════════════════════════

File: COMBINED/ULTIMATE_QUICKSTART.md
# ⚡ ULTIMATE QUICK START
# You have the most powerful vibe-coding toolkit ever assembled.
# Here's exactly how to use it.

## 🎯 5 Minutes Setup — Claude Code
1. Copy COMBINED/MEGA_CLAUDE.md → your project root → rename to CLAUDE.md
2. Create folder .claude/skills/ in your project
3. Copy sections from COMBINED/MEGA_SKILLS.md into .claude/skills/
4. Copy COMBINED/MEGA_COMMANDS.md sections → .claude/commands/
5. Type: claude "build [your idea]"

## 🎯 5 Minutes Setup — GitHub Copilot
[instructions]

## 🎯 5 Minutes Setup — Cursor
[instructions using .cursorrules from MEGA_UI.md]

## 🎯 5 Minutes Setup — Any Agent
[universal instructions]

## 🧠 Power User Tips
[tips from across all repos]

═══════════════════════════════════════════════════
ABSOLUTE RULES
═══════════════════════════════════════════════════

✅ Read every single file that exists in the repo
✅ Include 100% of every file's content in the combined files
✅ Never cut, summarize, or shorten anything
✅ Never say "see original file" — copy the full content here
✅ If a skill is 1000 lines — all 1000 lines go in
✅ Label every section: ## SOURCE: [exact folder/filename]
✅ Keep all original files untouched
✅ Create all combined files inside COMBINED/ folder

❌ Never filter — if it exists, it goes in
❌ Never download — files already exist
❌ Never delete originals
❌ Never create placeholder text
❌ Never write "[content from X]" — write the actual content

Давай объясним любому ИИ-агенту на живом примере. Возьмём пример с машинами. У нас 31 репозиториев, каждый по-своему хорош и каждый делает свои функции. Сделаем так: пусть эти 30-- 31 репозитория будут машинами. Представь, что фирма, машины и так далее. Одна Ferrari, другая Lamborghini, другая Toyota, другой Rolls Royce, другой Mercedes, другой BMW, другой Ford, другой Nissan GT-R, даже минивэн и все машины. Представь, что 31 репозитория — 31 машина. И что хорошо в каждой машине по-своему. Смотри, мы смотрим на машину в целом. Что у них есть? У них есть четыре колеса, у них есть корпус, у них есть двигатель. Но каждая машина отличается по-своему. Среди машин нет лучших. Например, Rolls Royce. Чем она хороша от Ferrari? Rolls Royce премиальная, только для богатейших. Там все делается из супердорогих вещей, алькантара и так далее. Что хорошо в Ferrari, так это её дизайн. Она обычно на двоих хватает. Потом она гоночной выглядит. У неё может быть мотор помоще-- помощнее, чем у Rolls Royce. Ну и то, что есть в Ferrari, что нет в других машинах. Также в Lamborghini. Чем она отличается от Ferrari? Почему они всё время соревнуются? У этого другой двигатель, у этого другой двигатель. Обе на скорости, обе по-своему хороши, в дизайне, всё. Есть Toyota, которая у нас семейная, хороша, она неубиваемая машина считается, которая суперпрочная, например, семей-- есть она семейная, например, или есть минивэн маленький, компактный, удобный. Есть Tesla. Мы забыли про Tesla там. Машины, которые мы привели в пример, может быть, больше, например, даже Tesla и так далее. Tesla, она электрическая, например, и обладает умными функциями. Но что будет, если их соединить? В настоящем мире компании, они не дают друг другу вот это сделать. Они не договариваются, они не соединяют, не создают одно мощное, одну мощную машину. Они не дают друг другу патенты, скрывают свои технологии и так далее. Но чем отличается наша репозитория, это 31 суперкачественных машин, и они все публичные при этом. Они публичные. Значит, представь, что все 31 репозиторий — это машина, а эти машины, они договорились построить одну мощную машину. Они будут совмещать свои умения, свои архитектуры, дизайны и всё они совмещают. Представь, что 31 компания собрались, и у каждого свои подразделения. Например, дизайн. У нас есть, будет подразделение дизайна, которое придумает дизайн совмещенной машины. Например, у нас есть Ferrari, который суперкар, у нас есть минивэн, который компактный, у нас есть Toyota, который огромная. Обычно, ну, Toyota Prado или что-то если такое брать, Land Cruiser огромный. Представь, что сидят, подразделение такое появилось, где дизайнеры 31 компании сидят и берут друг у друга лучшее. Не только лучшее, берут всё. Берут всё, ставят на стол, сверху вверх, всё записывается вместе и создаётся один общий дизайн крутой, приходят к выводу. Потом мотор. Есть подразделение мотора. Все сидят, работают там. 31 компания. Этот мотор суперкачественный, у этого супербыстрый, потому что у него какая-то технология использует, например, суперлегкий какой-то металл, но другой использует, например, защиту какую-то. Они друг у друга раскрывают свои технологии. Они сидят. То, что одинаковое, например, один и тот же металл, одну и ту же функцию, ну, так, как должен работать мотор или что-то, они, например, приходят к выводу использовать то, что у них одинаково, пусть будет одинаково. Но также брать дополнительно всё, что осталось у других, у всех 31 компании. Ну и колёса, дисплей, руль, дизайн, свет, всё. Короче, у каждого есть своё подразделение, и каждый сидит и думает. Соединяет, комбинирует, как сделать 31 машину одной сверхмашиной. Так и должно быть в нашем репозитории. У нас 31 публичный репозиторий. Нам не нужно, чтобы один или два, или у каждого брать что-то лучшее. Например, хоть и будем брать что-то лучшее, например, у каждого, у нас всё ещё останется много деталей в машине. Не одна же деталь, она состоит из тысячи, тысячи деталей. Ты можешь забрать двигатель, можешь забрать дизайн, можешь забрать диски, тормоза, но там ещё поручни, там каждая металл, каждый шуруп, который весит что-то. У каждого свой вид. Например, у кого-то гайки, другие шурупы, другие и так далее. Поэтому нужно брать их все. Все документы в одном месте собрать. Всё, что у нас есть, создать супер один гениальный, одну гениальную машину. Сверхкар её назовём. Так и в нашем репозитории должно быть. 


═══════════════════════════════════════════════════════════
MISSION BRIEFING FOR AI AGENT
═══════════════════════════════════════════════════════════

READ THIS FIRST — UNDERSTAND THE MISSION COMPLETELY.

Imagine 31 car companies: Ferrari, Lamborghini, Rolls-Royce, 
Tesla, Toyota, BMW, Mercedes, Ford, Nissan GT-R, Mini, and 27 more.

Each car is great in its own way:
- Ferrari: speed, racing engine, aggressive design
- Rolls-Royce: luxury, premium materials, silence
- Tesla: electric, smart software, autopilot
- Toyota: unbreakable reliability, family utility
- Lamborghini: raw power, extreme aerodynamics
- Mini: compact, efficient, nimble
- BMW: driving precision, sport engineering

Now imagine all 31 companies sat down together and said:
"We are building ONE car. The ULTRACAR. 
We share everything — every patent, every technology, 
every bolt, every screw, every material.
We take it ALL and combine it into one superhuman machine."

They created departments:
- Engine Dept: all 31 engine technologies merged into one
- Design Dept: all 31 design languages combined
- Wheels Dept: every wheel technology unified
- Interior Dept: Rolls-Royce leather + Tesla screen + BMW ergonomics
- Safety Dept: every safety system from every brand
- Software Dept: Tesla autopilot + BMW driving assist + everything else

They do NOT pick just the "best" engine.
They take ALL engines, study ALL technologies,
merge what overlaps, ADD what is unique from each.
Every bolt matters. Every innovation is kept.
The result: a car with 31 companies' worth of engineering inside.

THIS IS YOUR MISSION FOR THIS REPOSITORY.

The 31 repositories = the 31 car companies.
Each repo has unique "technologies" — skills, agents, prompts, 
commands, hooks, memory systems, UI rules, orchestration logic.

You will be the merger department.
You will take EVERYTHING from ALL 31 repos
and combine them into COMBINED/ mega-files.
The result = the ULTRACAR of AI coding toolkits.

═══════════════════════════════════════════════════════════
CRITICAL RULES BEFORE YOU START
═══════════════════════════════════════════════════════════

✅ ALL 31 repos are ALREADY DOWNLOADED in this repository
✅ Your ONLY job: READ existing files → COMBINE into mega-files
✅ Take 100% of EVERY file — not highlights, not summaries — ALL
✅ Never skip a file because it seems duplicate — include it anyway
✅ Never summarize — if a skill is 800 lines, all 800 lines go in
✅ Keep ALL original files exactly as they are
✅ Only CREATE new files inside the COMBINED/ folder
✅ Label every section with its source

❌ Do NOT download or clone anything
❌ Do NOT delete any existing files
❌ Do NOT summarize or shorten content
❌ Do NOT write "[content from X]" — paste the ACTUAL content
❌ Do NOT skip files because they look similar to others

═══════════════════════════════════════════════════════════
STEP 0 — SCAN THE ENTIRE REPO FIRST
═══════════════════════════════════════════════════════════

Before creating any file, recursively scan every folder.
Understand what exists. Then begin combining.

Here is the complete map of what is already downloaded:

AGENTS DEPARTMENT (Agents/ folder):
├── Agents/background-agents/     ← open-inspect repo
│   ├── VISIBLE_claude/skills/onboarding/
│   ├── VISIBLE_git/
│   ├── VISIBLE_github/workflows/
│   ├── VISIBLE_husky/
│   ├── VISIBLE_openinspect/
│   ├── docs/, packages/, scripts/, terraform/
│   ├── CLAUDE.md  ← IMPORTANT
│   ├── AGENTS.md  ← IMPORTANT
│   └── VISIBLE_gitignore, VISIBLE_prettierignore, etc.
│
├── Agents/hermes-agent/           ← NousResearch (21k stars)
│   ├── _github/ (workflows, issue templates, PR templates)
│   ├── _plans/
│   ├── acp_adapter/, acp_registry/
│   ├── agent/        ← CORE AGENT LOGIC
│   ├── cron/
│   ├── datagen-config-examples/
│   ├── docker/
│   ├── docs/
│   ├── environments/
│   ├── gateway/
│   ├── hermes_cli/
│   ├── honcho_integration/
│   ├── landingpage/
│   ├── nix/
│   └── optional-skills/  ← SKILLS
│
└── Agents/shannon/                ← AI Pentester (35k stars)
    ├── .claude/commands/
    │   ├── debug.md   ← COMMAND
    │   ├── pr.md      ← COMMAND
    │   └── review.md  ← COMMAND
    ├── _github/ISSUE_TEMPLATE/
    ├── apps/, assets/, repos/, workspaces/
    ├── sample-reports/
    └── CLAUDE.md  ← IMPORTANT

ORCHESTRATION DEPARTMENT (Orchestration/ folder):
├── Orchestration/superpowers/     ← 129k stars — THE ENGINE
│   ├── skills/      ← HUNDREDS OF SKILLS — READ ALL
│   ├── agents/      ← AGENT DEFINITIONS — READ ALL
│   ├── commands/    ← SLASH COMMANDS — READ ALL
│   ├── hooks/       ← HOOKS — READ ALL
│   ├── .claude-plugin/ (plugin.json, marketplace.json)
│   ├── .cursor-plugin/
│   ├── .codex/
│   ├── .opencode/
│   ├── scripts/
│   └── AGENTS.md, CHANGELOG.md
│
├── Orchestration/get-shit-done/   ← 46k stars — META-PROMPTING
│   ├── agents/      ← 15+ AGENT FILES — READ ALL
│   │   ├── gsd-advisor-researcher.md
│   │   ├── gsd-assumptions-analyzer.md
│   │   ├── gsd-codebase-mapper.md
│   │   ├── gsd-debugger.md
│   │   ├── gsd-executor.md
│   │   ├── gsd-integration-checker.md
│   │   ├── gsd-nyquist-auditor.md
│   │   ├── gsd-phase-researcher.md
│   │   ├── gsd-plan-checker.md
│   │   ├── gsd-planner.md
│   │   ├── gsd-project-researcher.md
│   │   ├── gsd-research-synthesizer.md
│   │   ├── gsd-roadmapper.md
│   │   ├── gsd-ui-auditor.md
│   │   ├── gsd-ui-checker.md
│   │   ├── gsd-ui-researcher.md
│   │   └── gsd-user-profiler.md
│   ├── hooks/       ← ALL HOOK FILES
│   ├── commands/gsd/ ← ALL COMMAND FILES
│   └── get-shit-done/ ← ALL WORKFLOW FILES
│
├── Orchestration/ruflo/           ← 29k stars — ORCHESTRATION
│   ├── .claude/     (or _claude/ or VISIBLE_claude/)
│   ├── .agents/     ← config.toml, skills/
│   ├── .claude-plugin/ ← plugin.json, marketplace.json, hooks/, docs/
│   ├── .githooks/   (or _githooks/ or VISIBLE_githooks/)
│   ├── agents/      ← ALL AGENT FILES
│   ├── plugin/      ← ALL PLUGIN FILES
│   ├── ruflo/       ← CORE RUFLO FILES
│   ├── v2/, v3/     ← VERSION FILES
│   └── AGENTS.md, CHANGELOG.md
│
├── Orchestration/deer-flow/       ← 55k stars — BYTEDANCE
│   └── skills/public/
│       ├── bootstrap/
│       ├── chart-visualization/
│       ├── claude-to-deerflow/
│       ├── consulting-analysis/
│       ├── data-analysis/
│       ├── deep-research/
│       ├── find-skills/
│       ├── frontend-design/  ← UI SKILLS
│       ├── github-deep-research/
│       ├── image-generation/
│       ├── podcast-generation/
│       ├── ppt-generation/
│       ├── skill-creator/
│       ├── surprise-me/
│       └── vercel-deploy-claimable/
│
├── Orchestration/oh-my-claudecode/ ← ALL FILES
├── Orchestration/1code/            ← ALL FILES
└── Orchestration/vibe-kanban/      ← ALL FILES

SKILLS DEPARTMENT (Skills/ folder):
├── Skills/antigravity/    ← 1340+ SKILLS — COPY EVERY SINGLE ONE
├── Skills/claude-skills/  ← 205 skills + 16 agents + 268 scripts
├── Skills/everything-claude-code/  ← Hackathon winner
├── Skills/awesome-copilot/
├── Skills/awesome-claude-code/
├── Skills/claude-seo/     ← SEO skills
└── Skills/obsidian-skills/

PROMPTS DEPARTMENT (Prompts/ folder):
├── Prompts/awesome-chatgpt-prompts/  ← 143k stars, prompts.csv + all files
├── Prompts/system-prompts-by-tool/   ← EVERY subfolder:
│   ├── Anthropic/    ← Claude system prompts
│   ├── Amp/
│   ├── Augment Code/
│   ├── Cluely/
│   ├── CodeBuddy Prompts/
│   ├── Comet Assistant/
│   ├── Cursor Prompts/
│   ├── Devin AI/
│   ├── Emergent/
│   ├── Google/
│   ├── Junie/
│   ├── Kiro/
│   ├── Leap.new/
│   ├── Lovable/
│   ├── Manus/
│   ├── NotionAI/
│   ├── Orchids.app/
│   ├── Perplexity/
│   ├── Poke/
│   ├── Qoder/
│   ├── Replit/
│   ├── Same.dev/
│   ├── Trae/
│   ├── Traycer AI/
│   ├── VSCode Agent/
│   ├── Warp.dev/
│   ├── Windsurf/
│   ├── Xcode/
│   ├── Z.ai Code/
│   ├── Dia/
│   └── v0/
├── Prompts/system-prompts-leaks/  ← ALL files
└── Prompts/vibe-coding-template/  ← ALL files

TOOLS DEPARTMENT (Tools/ folder):
├── Tools/claude-mem/      ← persistent memory system — ALL files
├── Tools/supermemory/     ← #1 memory benchmark — ALL files
├── Tools/gitnexus/        ← codebase knowledge graph
├── Tools/lightpanda/      ← AI browser
├── Tools/openviking/      ← ByteDance context DB
├── Tools/nano-banana-mcp/ ← Gemini image MCP
└── Tools/pretext/         ← text layout library

REFERENCE (Reference/ folder):
└── Reference/awesome-selfhosted/  ← README.md is the mega list

UI/UX DEPARTMENT (UI-UX/ folder):
├── UI-UX/galaxy/          ← 3000+ UI elements
├── UI-UX/shadcn/          ← component library
└── UI-UX/ui-ux-pro-max/   ← 161 rules + 67 styles

ROOT CONFIG FILES:
├── .claude/               ← check for commands/skills
├── .cursor/rules/         ← cursor rules
├── .antigravity/          ← antigravity configs
└── .cursorrules           ← root cursorrules

═══════════════════════════════════════════════════════════
STEP 1 — CREATE: COMBINED/MEGA_CLAUDE.md
(THE ENGINE — most important file)
═══════════════════════════════════════════════════════════

FIND every file named:
CLAUDE.md, AGENTS.md, COVERAGE.md
in these locations:
- Agents/background-agents/CLAUDE.md
- Agents/background-agents/AGENTS.md
- Agents/shannon/CLAUDE.md
- Orchestration/superpowers/AGENTS.md
- Orchestration/get-shit-done/ (any .md with instructions)
- Orchestration/ruflo/AGENTS.md
- Orchestration/deer-flow/ (any instruction files)
- Root level ORCHESTRATION.md
- Root level MEMORY_SETUP.md
- Any other CLAUDE.md anywhere in the repo

CREATE: COMBINED/MEGA_CLAUDE.md

Content format — DO NOT deviate:

# ⚡ MEGA CLAUDE.md — The Ultra Engine
# Assembled from 31 repositories
# Usage: Copy this file into your project root, rename to CLAUDE.md
# This gives your AI agent the intelligence of 31 elite repos combined
#
# TABLE OF CONTENTS:
# [auto-generate list of all sources]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔩 SOURCE 1: background-agents / CLAUDE.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PASTE 100% of the file content here — zero omissions]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔩 SOURCE 2: shannon / CLAUDE.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PASTE 100% of the file content here]

[continue for EVERY source found]

═══════════════════════════════════════════════════════════
STEP 2 — CREATE: COMBINED/MEGA_SKILLS.md
(THE TRANSMISSION — power delivery)
═══════════════════════════════════════════════════════════

FIND every skill file across ALL of these locations:
- Skills/antigravity/ → ALL 1340+ files
- Skills/claude-skills/ → ALL 205 skill files
- Skills/everything-claude-code/ → ALL files
- Skills/awesome-copilot/ → ALL files
- Skills/awesome-claude-code/ → ALL files
- Skills/claude-seo/ → ALL files
- Skills/obsidian-skills/ → ALL files
- Orchestration/superpowers/skills/ → ALL folders and files
- Orchestration/deer-flow/skills/public/ → ALL 15 folders
- Agents/hermes-agent/optional-skills/ → ALL files
- UI-UX/ui-ux-pro-max/ → ALL skill files
- Root .antigravity/ → ALL files

CREATE: COMBINED/MEGA_SKILLS.md

Content format:

# ⚡ MEGA SKILLS — 1500+ Skills from 31 Repositories
# Usage: Copy relevant sections into .claude/skills/ in your project
# Every skill is complete — nothing cut or summarized
#
# TABLE OF CONTENTS:
# [grouped by category]
# 🔧 Development & Coding — [count] skills
# 🎨 UI/UX & Design — [count] skills
# 🔍 SEO & Marketing — [count] skills
# 🔒 Security & Testing — [count] skills
# 📊 Data & Research — [count] skills
# 🧠 Memory & Context — [count] skills
# 📝 Writing & Docs — [count] skills
# 🚀 Deploy & DevOps — [count] skills
# 🤖 Agent Orchestration — [count] skills
# 📱 Platform-Specific — [count] skills

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### 🔧 SOURCE: superpowers/skills/[skill-name]/SKILL.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PASTE 100% full content]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### 🔧 SOURCE: antigravity/[skill-name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PASTE 100% full content]

[REPEAT for ALL 1500+ skill files — every single one]

═══════════════════════════════════════════════════════════
STEP 3 — CREATE: COMBINED/MEGA_AGENTS.md
(THE AI CREW — the drivers and specialists)
═══════════════════════════════════════════════════════════

FIND every agent definition file:
- Orchestration/get-shit-done/agents/ → ALL 17+ .md files
  (gsd-advisor-researcher, gsd-planner, gsd-executor,
   gsd-debugger, gsd-roadmapper, gsd-ui-auditor,
   gsd-codebase-mapper, gsd-integration-checker,
   gsd-nyquist-auditor, gsd-phase-researcher,
   gsd-plan-checker, gsd-project-researcher,
   gsd-research-synthesizer, gsd-ui-checker,
   gsd-ui-researcher, gsd-user-profiler,
   gsd-assumptions-analyzer — ALL of them)
- Orchestration/superpowers/agents/ → ALL files
- Orchestration/ruflo/agents/ → ALL files
- Agents/hermes-agent/agent/ → ALL files
- Skills/claude-skills/ → 16 agent files
- Any file with "agent" in its name anywhere

CREATE: COMBINED/MEGA_AGENTS.md

# ⚡ MEGA AGENTS — Complete Agent Army
# Every agent from every repo, fully merged
# Usage: Reference these as sub-agent definitions
#        in your Claude Code / Copilot / Cursor workflow

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🤖 AGENT: gsd-planner | SOURCE: get-shit-done
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PASTE 100% full content]

[REPEAT for every agent found]

═══════════════════════════════════════════════════════════
STEP 4 — CREATE: COMBINED/MEGA_PROMPTS.md
(THE FUEL — what powers the AI)
═══════════════════════════════════════════════════════════

FIND every prompt file:
- Prompts/awesome-chatgpt-prompts/ → ALL files + prompts.csv
- Prompts/system-prompts-by-tool/ → EVERY subfolder, EVERY file
- Prompts/system-prompts-leaks/ → ALL files
- Prompts/vibe-coding-template/ → ALL files

CREATE: COMBINED/MEGA_PROMPTS.md

# ⚡ MEGA PROMPTS — Complete Prompt Bible
# Every prompt, every leaked system prompt, every template

## PART 1: Leaked System Prompts from AI Tools
### 🔑 TOOL: Anthropic / Claude
[full content]
### 🔑 TOOL: Cursor
[full content]
### 🔑 TOOL: GitHub Copilot
[full content]
### 🔑 TOOL: Devin AI
[full content]
### 🔑 TOOL: Windsurf
[full content]
### 🔑 TOOL: Lovable
[full content]
### 🔑 TOOL: Replit
[full content]
### 🔑 TOOL: v0
[full content]
[... every single tool — all 30+ folders]

## PART 2: Vibe-Coding Workflow Prompts
[full content of every file in vibe-coding-template/]

## PART 3: Master Prompt Library (143k stars)
[full content from awesome-chatgpt-prompts/]

## PART 4: Additional Leaked Prompts
[full content from system-prompts-leaks/]

═══════════════════════════════════════════════════════════
STEP 5 — CREATE: COMBINED/MEGA_COMMANDS.md
(THE CONTROLS — steering wheel and pedals)
═══════════════════════════════════════════════════════════

FIND every command file:
- Agents/shannon/.claude/commands/debug.md
- Agents/shannon/.claude/commands/pr.md
- Agents/shannon/.claude/commands/review.md
- Orchestration/superpowers/commands/ → ALL files
- Orchestration/get-shit-done/commands/gsd/ → ALL files
- Orchestration/ruflo/ .claude/commands/ (check _claude/ or VISIBLE_claude/)
- Root .claude/ folder → any command files

CREATE: COMBINED/MEGA_COMMANDS.md

# ⚡ MEGA COMMANDS — Every Slash Command Combined
# Usage: Copy into .claude/commands/ in your project
# Then use /[command-name] in Claude Code

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## /debug | SOURCE: shannon
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[full content of debug.md]

[REPEAT for every command]

═══════════════════════════════════════════════════════════
STEP 6 — CREATE: COMBINED/MEGA_HOOKS.md
(THE SUSPENSION — what connects everything)
═══════════════════════════════════════════════════════════

FIND every hook file:
- Orchestration/superpowers/hooks/ → ALL files
- Orchestration/get-shit-done/hooks/ → ALL files
- Orchestration/ruflo/.claude-plugin/hooks/ → ALL files
- Orchestration/ruflo/ (check for _githooks/ or VISIBLE_githooks/)
- Any file with "hook" in name anywhere

CREATE: COMBINED/MEGA_HOOKS.md

# ⚡ MEGA HOOKS — Every Hook Combined
# Hooks run automatically during your coding session

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## HOOK: [name] | SOURCE: [repo]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[full content]

═══════════════════════════════════════════════════════════
STEP 7 — CREATE: COMBINED/MEGA_MEMORY.md
(THE GPS — it remembers everywhere you've been)
═══════════════════════════════════════════════════════════

FIND every memory/context file:
- Tools/claude-mem/ → ALL files
- Tools/supermemory/ → ALL files
- Root MEMORY_SETUP.md (already exists)
- Memory configs in Orchestration/ruflo/
- Memory configs in Orchestration/get-shit-done/

CREATE: COMBINED/MEGA_MEMORY.md

# ⚡ MEGA MEMORY — Complete Memory Architecture
# Your AI will remember across all sessions

## claude-mem System (compressed memory)
[full content of all Tools/claude-mem/ files]

## Supermemory System (#1 benchmark)
[full content of all Tools/supermemory/ files]

## Orchestration Memory Configs
[full content]

═══════════════════════════════════════════════════════════
STEP 8 — CREATE: COMBINED/MEGA_UI.md
(THE INTERIOR + EXTERIOR — design and experience)
═══════════════════════════════════════════════════════════

FIND every UI/design file:
- UI-UX/ui-ux-pro-max/ → ALL files (161 rules + 67 styles)
- UI-UX/galaxy/ → ALL 3000+ element files
- UI-UX/shadcn/ → ALL component files
- Orchestration/deer-flow/skills/public/frontend-design/ → ALL files
- Root .cursorrules file
- Root .cursor/rules/ → ALL files
- Any cursorrules files anywhere (VISIBLE_cursorrules etc.)

CREATE: COMBINED/MEGA_UI.md

# ⚡ MEGA UI — Complete Design Arsenal
# 161 reasoning rules + 67 styles + 3000+ components

## 161 UI Reasoning Rules
[full content from ui-ux-pro-max]

## 67 UI Style Definitions
[full content]

## Frontend Design Skills (ByteDance deer-flow)
[full content]

## Cursor Rules (all sources)
[full content]

## Component Library Reference
[full content from galaxy and shadcn]

═══════════════════════════════════════════════════════════
STEP 9 — CREATE: COMBINED/MEGA_SECURITY.md
(THE ARMOR — protection system)
═══════════════════════════════════════════════════════════

FIND every security file:
- Agents/shannon/ → ALL files including sample-reports/
- Security skills in Skills/antigravity/
- Security skills in Skills/claude-skills/
- Security configs in Orchestration/get-shit-done/

CREATE: COMBINED/MEGA_SECURITY.md

# ⚡ MEGA SECURITY — Complete Security Arsenal
# AI-powered pentesting + security scanning

[full content of every security file]

═══════════════════════════════════════════════════════════
STEP 10 — CREATE: COMBINED/MEGA_MCP.md
(THE CONNECTIVITY — how it talks to everything)
═══════════════════════════════════════════════════════════

FIND every MCP config:
- Tools/nano-banana-mcp/ → ALL files
- Orchestration/superpowers/.claude-plugin/marketplace.json
- Orchestration/superpowers/.claude-plugin/plugin.json
- Orchestration/ruflo/.claude-plugin/marketplace.json
- Orchestration/ruflo/.claude-plugin/plugin.json
- Any file named marketplace.json or plugin.json anywhere
- MCP references in Tools/openviking/

CREATE: COMBINED/MEGA_MCP.md

# ⚡ MEGA MCP — Complete MCP Server Arsenal
# Model Context Protocol configs from all repos

[full content of every MCP file]

═══════════════════════════════════════════════════════════
STEP 11 — CREATE: COMBINED/ULTRACAR_QUICKSTART.md
(THE OWNER'S MANUAL)
═══════════════════════════════════════════════════════════

CREATE: COMBINED/ULTRACAR_QUICKSTART.md

# ⚡ THE ULTRACAR — Owner's Manual
# 
# You just downloaded the most powerful vibe-coding toolkit ever built.
# 31 elite repositories. Every skill. Every agent. Every tool. Combined.
#
# ─────────────────────────────────────
# START IN 3 MINUTES — CLAUDE CODE
# ─────────────────────────────────────
# 1. Copy COMBINED/MEGA_CLAUDE.md → your project as CLAUDE.md
# 2. mkdir .claude/skills && mkdir .claude/commands
# 3. Copy skills from MEGA_SKILLS.md → .claude/skills/
# 4. Copy commands from MEGA_COMMANDS.md → .claude/commands/
# 5. Run: claude "build [your idea]"
# Done. Your Claude Code now has 31 repos of intelligence.
#
# ─────────────────────────────────────
# START IN 3 MINUTES — GITHUB COPILOT
# ─────────────────────────────────────
# [instructions]
#
# ─────────────────────────────────────  
# START IN 3 MINUTES — CURSOR
# ─────────────────────────────────────
# 1. Copy MEGA_UI.md Cursor Rules section → .cursorrules in your project
# [instructions]
#
# ─────────────────────────────────────
# WHAT'S IN YOUR ULTRACAR
# ─────────────────────────────────────
# COMBINED/MEGA_CLAUDE.md    — The Engine (main AI instructions)
# COMBINED/MEGA_SKILLS.md    — The Transmission (1500+ skills)
# COMBINED/MEGA_AGENTS.md    — The Crew (50+ specialized agents)
# COMBINED/MEGA_PROMPTS.md   — The Fuel (every prompt ever)
# COMBINED/MEGA_COMMANDS.md  — The Controls (slash commands)
# COMBINED/MEGA_HOOKS.md     — The Suspension (automation hooks)
# COMBINED/MEGA_MEMORY.md    — The GPS (persistent memory)
# COMBINED/MEGA_UI.md        — The Interior/Exterior (design)
# COMBINED/MEGA_SECURITY.md  — The Armor (security scanning)
# COMBINED/MEGA_MCP.md       — The Connectivity (MCP servers)

═══════════════════════════════════════════════════════════
FINAL ABSOLUTE RULES — READ BEFORE EVERY FILE YOU CREATE
═══════════════════════════════════════════════════════════

Rule 1: READ FIRST. Before creating any COMBINED/ file,
        read ALL source files it will contain.

Rule 2: FULL CONTENT ONLY. If a file has 1000 lines,
        all 1000 lines go into the combined file.
        No "see original", no "[content truncated]",
        no summaries, no paraphrasing.

Rule 3: LABEL EVERYTHING.
        Every section starts with:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        ## SOURCE: [exact/path/to/file]
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rule 4: NEVER DELETE. Original files stay exactly as they are.

Rule 5: EVERY FILE MATTERS. Even if two skill files look similar —
        include both. In the Ultracar, every bolt counts.

Rule 6: COUNT AS YOU GO. Track how many skills/agents/prompts
        you've included. Put the total in the file header.

Rule 7: IF IN DOUBT — INCLUDE IT.
        When unsure if a file belongs — include it.
        More is always better than less.
