// File: netlify/functions/explain.js
exports.handler = async function (event) {
    // Get the prompt sent from your frontend
    const { prompt } = JSON.parse(event.body);

    // Access the secret API key from the environment variables
    const apiKey = process.env.GEMINI_API_KEY;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return { statusCode: response.status, body: response.statusText };
      }

      const result = await response.json();

      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      return { statusCode: 500, body: error.toString() };
    }
  };