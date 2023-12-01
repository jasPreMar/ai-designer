const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
    const { prompt } = req.body;
    const systemPrompt = `Create an HTML layout based on this prompt: ${prompt}`;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: systemPrompt,
            max_tokens: 150,
        });

        const generatedHtml = response.data.choices[0].text.trim();
        res.status(200).json({ generatedHtml });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error generating layout' });
    }
};
