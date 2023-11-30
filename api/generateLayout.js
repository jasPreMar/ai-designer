const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { prompt } = req.body;
    const systemPrompt = `Create an HTML layout based on this prompt: ${prompt}`;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: systemPrompt,
                max_tokens: 150
            })
        });

        const { choices } = await response.json();
        const generatedHtml = choices[0].text.trim();

        res.status(200).json({ generatedHtml });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error generating layout' });
    }
};
