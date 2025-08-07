## A Pentester's Guide to Linux: An Interactive Summary

### This is a single-page web application that serves as an interactive companion to the book "Linux Basics for Hackers" by OccupyTheWeb. It reframes the book's content within the structure of a professional penetration testing lifecycle, helping you understand not just what the commands are, but when and why you would use them.
- **✨ Features**

    Lifecycle-Based Navigation: Explore Linux tools and concepts as they apply to each stage of a real-world penetration test, from Reconnaissance to Covering Tracks.
    Interactive Content: Click on any stage in the lifecycle to dynamically load relevant tools, commands, and descriptions.

    AI-Powered Explanations: Get on-demand, detailed explanations for any command or concept directly from Google's Gemini API, providing deeper context and learning.

    Detailed Tool Information: Select any tool to view its purpose, common usage examples, and a direct chapter reference to the book for deeper study.

    Toolkit Visualization: An interactive doughnut chart provides a high-level overview of how skills and tools are distributed across the different pentesting phases.

    Fully Responsive: The application is designed to work seamlessly on desktop, tablet, and mobile devices.

**🚀 How to Use**

    Open the index.html file in any modern web browser.

    Select a Stage: The main navigation displays the seven key areas of focus. The application loads with the Foundations stage by default. Click any other stage (e.g., "🔍 Reconnaissance") to switch contexts.

    Explore Tools: The main content area will update to show a description of the selected stage and a grid of relevant tools and concepts.

    View Details: Click on any tool card (e.g., nmap) in the grid. The details pane at the bottom will update to show a description of the tool, its command-line usage, and the corresponding chapter in "Linux Basics for Hackers".

    Get AI Explanations: Inside the details pane for any tool, click the "✨ Explain with AI" button to open a pop-up with a detailed, AI-generated explanation of the tool's purpose, usage, and strategic importance.

**🛠️ Technical Overview**

    -[x] Frontend: The application is built with semantic HTML5.

    -[x] Styling: Tailwind CSS is used for all styling, providing a responsive and modern user interface.

    Interactivity:

        All dynamic content, navigation, and user interactions are handled with vanilla JavaScript.

        AI Integration: Utilizes Google's Gemini API to provide dynamic content generation.

    Data Visualization: The "Pentesting Toolkit Distribution" chart is rendered using Chart.js.

🔐 Setup for AI Features (Hosting on GitHub Pages)

IMPORTANT: To protect your secret API key, you cannot call the Gemini API directly from the frontend JavaScript. You must use a secure backend proxy. This project is set up to use Netlify Functions for this purpose, which has a generous free tier.

To deploy this project yourself:

    Fork this repository and link it to a new site on Netlify.

    Get a Gemini API Key from Google AI Studio.

    Set Environment Variable in Netlify:

        In your Netlify site dashboard, go to Site settings > Build & deploy > Environment.

        Add a new environment variable:

            Key: GEMINI_API_KEY

            Value: Paste your secret Gemini API key here.

Once deployed, Netlify will automatically handle the proxying, and the AI features will work securely and for free within the generous limits of the free tiers.
📚 Content Source

All technical concepts, command explanations, and strategic insights presented in this application are derived from the excellent book Linux Basics for Hackers by OccupyTheWeb, published by No Starch Press. This project is intended as a study aid and a practical guide to accompany the book.
