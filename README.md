# Optimlaize

Zu67 created this repository on 2024-06-11. Isha Zhang (redacted@example.com) authored the React app commits on 2024-06-13 ("initialized react & node structure"), 2024-06-14 ("finished homepage, footer, navigation"), and 2024-06-25 ("Updated skeleton"). The page copy below is from those files in `optimlaize/src`.

Navigation (`optimlaize/src/components/Navigation.jsx`) links Features to `/`, Demo to `/demo`, Case Studies to `/case-study`, and About Us to `/about-us`. The brand is Optimlaize. The footer says "Copyright Optimlaize © 2024".

## Home

The hero title is Optimlaize and the hero text is "Empowering your Investments".

Portfolio Visualizer — "Revolutionize the quantitative experience by leveraging modern technology". The section lists:

- Investment Tracking — "Track performance beyond return percentage"
- Net Worth — "Understand exactly what’s in your portfolio"
- Reports — "Get your personal reports ready"

A block asks "Not sure about your risk level?" and links "Take a simple quiz now" to `#`.

Consulting Service — the card text is "A world of thought-provoking articles", "Case studies that celebrate architecture", and "Exclusive access to design insights". Beside a slideshow of the case-study titles and introductions, the page says "Contact us for a Quote" and "Have us build your algorithmic trading ideas, trading systems, or software."

The contact block says "Interested about our products?", "Contact Us", and lists alpha@optimlaize.com.

## Demo

`/demo` renders the heading "Demo Page".

## Case Studies

The list page hero title is "Case Studies" and the description is "Empowering your Investments". Cards link to `/case-study/:id` and show the title and introduction stored in `optimlaize/src/constants/CaseStudyConstants.js`:

1. Enhancing Data Integrity for Financial Reporting at FinDataCorp
2. Enhancing Predictive Market Analytics with AI-Based Tonal Analysis
3. Transforming Data Processing for Fintech Financial Reporting
4. Streamlining Entry Execution for a High Net Worth Day Trader
5. Automating Options Trading and Reporting for a Hedge Fund
6. Optimizing Backtesting Efficiency for AI-Driven Options Trading Strategy

A missing id shows "Case study not found". A detail page renders that entry's client, introduction, project description, technologies, team, challenges, solutions, results, lessons, conclusion, and appendices.

## About Us

The hero title is "Welcome to Optimlaize". The hero description is: "Where we revolutionize the quantitative experience by harnessing the power of modern technology. Founded with a vision to transform the landscape of data analysis and optimization, we are committed to delivering innovative solutions that drive efficiency, accuracy, and actionable insights."

Three paragraphs follow: a team in data science, data engineering, and quantitative analysis; a client-centric approach using advanced algorithms, machine learning, and software; and "Let Optimlaize be your trusted partner in navigating the complexities of modern data technology and unlocking the full potential of your data." The same contact block is under those paragraphs.
