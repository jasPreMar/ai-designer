document.getElementById('generateButton').addEventListener('click', generateLayout);

async function generateLayout() {
    const prompt = document.getElementById('promptInput').value;
    
    try {
        const response = await fetch('/api/generateLayout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('layoutArea').innerHTML = data.generatedHtml;
    } catch (error) {
        console.error('Error fetching layout:', error);
    }
}
