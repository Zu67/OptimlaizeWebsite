# Optimlaize

Zu67 created this repository on 2024-06-11. Isha Zhang authored the React app commits on 2024-06-13 ("initialized react & node structure"), 2024-06-14 ("finished homepage, footer, navigation"), and 2024-06-25 ("Updated skeleton"). The page copy below is from those files in `optimlaize/src`.

Navigation (`optimlaize/src/components/Navigation.jsx`) links Features to `/`, Demo to `/demo`, Case Studies to `/case-study`, and About Us to `/about-us`. The Features link always includes the screen-reader text "(current)", including on the other pages. A second Features link to `/service` is commented out, and `optimlaize/src/App.js` has no `/service` route, so that address shows the navigation and the footer with no page. Below the `lg` breakpoint the links are hidden. The hamburger image is shown there and has no click handler. The brand is Optimlaize. The document title is "Optimlaize - Manage your money like it’s yours". The meta tag's name is "Optimalize - Manage your money like it’s yours", with that spelling, and its content is "Revolutionize the quantitative experience by leveraging modern technology". It is not `name="description"`. Bootstrap 5.2.2 is loaded from jsDelivr, and the only webfont link is Open Sans. The Tailwind config adds no fonts, colors, shadows, or breakpoints, so `font-palanquin`, `font-montserrat`, `text-slate-gray`, `bg-grey`, and `hover:shadow-2lg` are not generated. There is no catch-all route, so every unmatched path shows the navigation and the footer with no page. The footer text is "Copyright Optimlaize© 2024", with no space before the copyright mark.

## Home

The hero title is Optimlaize and the hero text is "Empowering your Investments".

Portfolio Visualizer — "Revolutionize the quantitative experience by leveraging modern technology". The section lists:

- 01 — Investment Tracking — "Track performance beyond return percentage"
- 02 — Net Worth — "Understand exactly what’s in your portfolio"
- 03 — Reports — "Get your personal reports ready"

A block asks "Not sure about your risk level?" and links "Take a simple quiz now" to `#`.

Consulting Service — the card is one paragraph: "A world of thought-provoking articles", a newline, "Case studies that celebrate architecture", a newline, and "Exclusive access to design insights". The paragraph does not preserve those newlines, so they collapse to spaces. The image element in `optimlaize/src/cards/ServiceCard.jsx` is commented out. Home passes `imgURl`, while the component parameter is `imgURL`. The classes `flax-wrap`, `itmes-center`, and `space-20` are not Tailwind classes. Beside that card, a slideshow starts on the first case study and shows each study's title and introduction. It moves only when the ❮ or ❯ button is clicked, and it wraps from the last study to the first. The page also says "Contact us for a Quote" and "Have us build your algorithmic trading ideas, trading systems, or software."

The contact block says "Interested about our products?", "Contact Us", and lists alpha@optimlaize.com.

## Demo

`/demo` renders the heading "Demo Page".

## Case Studies

The list page hero title is "Case Studies" and the description is "Empowering your Investments". Cards link to `/case-study/:id` and show the title and introduction stored in `optimlaize/src/constants/CaseStudyConstants.js`:

1. Enhancing Data Integrity for Financial Reporting at FinDataCorp — FinDataCorp, a specialist in third-party financial reports for brokerages
2. Enhancing Predictive Market Analytics with AI-Based Tonal Analysis — TonalTech. Its lesson headings are copied from the first study: "Importance of Data Quality in Financial Reporting", "Automation in Quality Checks", and "Collaboration with Data Providers". The testimonial starts without an opening quotation mark.
3. Transforming Data Processing for Fintech Financial Reporting — FinDataCorp again, this time "a provider of third-party financial reports to brokerages"
4. Streamlining Entry Execution for a High Net Worth Day Trader — John Doe
5. Automating Options Trading and Reporting for a Hedge Fund — the client line says John Smith, an independent options trader
6. Optimizing Backtesting Efficiency for AI-Driven Options Trading Strategy — QuantAI

The ids are 1 through 6. The detail page compares the URL to `id.toString()`, so `/case-study/1` matches and `/case-study/01` does not. A missing id shows "Case study not found". A detail page renders that entry's client, introduction, project description, technologies, team, challenges, solutions, results, lessons, conclusion, and appendices. Every technology item is labeled "Technologies Used:" and every team member is labeled "Team Composition:", so those labels repeat once per item. Those two maps are siblings in one list, and both use the array index as the React key, so the first technology and the first team member both have key 0. Study 4's team includes "Lead Software Developer (myself)", and its project text says entry orders must land within a 2 millisecond window. Study 5's team includes "Software Developer (myself)".

## About Us

The hero title is "Welcome to Optimlaize". The hero description is: "Where we revolutionize the quantitative experience by harnessing the power of modern technology. Founded with a vision to transform the landscape of data analysis and optimization, we are committed to delivering innovative solutions that drive efficiency, accuracy, and actionable insights."

Three paragraphs follow: a team in data science, data engineering, and quantitative analysis; a client-centric approach using advanced algorithms, machine learning, and software; and "Let Optimlaize be your trusted partner in navigating the complexities of modern data technology and unlocking the full potential of your data." The same contact block is under those paragraphs.
