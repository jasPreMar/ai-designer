# Layout Generator App

## Overview
The Layout Generator App is a creative tool designed to break the monotony of current internet designs by generating unique and functional web layouts based on user-provided prompts. Utilizing the power of generative AI, this app aims to inspire product designers with new layout ideas and explore the potential of AI in web design.

## Features
- **Prompt-Based Layout Generation**: Users can enter prompts to generate web layouts.
- **Integration with OpenAI API**: Leverages OpenAI's advanced AI models for generating HTML layouts.
- **Responsive Design**: Generated layouts are fully responsive, considering padding, margin, and max/min widths.
- **Colorful Visualization**: Each `div` in the layout is randomly colored for easy visualization.
- **Simple UI**: A minimalistic interface with a text box for prompts and a generate button.

## Tech Stack
- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **API**: OpenAI API for generating layouts
- **Deployment**: Vercel for hosting the application
- **Version Control**: GitHub for source code management
- **Serverless Functions**: Vercel Serverless Functions for secure API calls

## Setup and Deployment
### Prerequisites
- GitHub Account
- Vercel Account
- OpenAI API Key

### Local Setup
1. Clone the repository from GitHub.
2. Navigate to the project directory and open the files in your preferred code editor.
3. Modify the code as per your requirements.

### Environment Variables
Set the following environment variables in your Vercel project:
- `OPENAI_API_KEY`: Your OpenAI API key for authenticating API requests.

### Deploying with Vercel
1. Connect your GitHub repository to your Vercel account.
2. Set up a new project in Vercel, using the connected repository.
3. Configure build settings and environment variables in Vercel.
4. Vercel will automatically deploy your application upon push to the repository.

## Usage
- Open the app deployed on Vercel.
- Enter a prompt describing the desired layout in the text box.
- Click on "Generate" to view the AI-generated layout.
- Use the "↻" button to regenerate layouts with the same or modified prompts.

## Contributions
Contributions, ideas, and feedback are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
