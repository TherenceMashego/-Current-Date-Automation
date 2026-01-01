// update-date.js
const fs = require('fs');
const path = require('path');

// Get current date in various formats
const now = new Date();

// Format: "Thursday, January 1, 2026"
const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Check if it's New Year's Day
const isNewYearsDay = now.getMonth() === 0 && now.getDate() === 1;
const newYearMessage = isNewYearsDay 
    ? `<div class="new-year">🎉 Happy New Year ${now.getFullYear()}! 🎉</div>`
    : '';

// Format timestamp: "January 1, 2026, 10:46 PM UTC"
const timestamp = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
});

// Read the HTML template
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Today's Date</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .date-container {
            text-align: center;
            padding: 3rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .date {
            font-size: 3rem;
            font-weight: bold;
            margin: 0;
        }
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.8;
            margin-top: 1rem;
        }
        .timestamp {
            font-size: 0.9rem;
            opacity: 0.6;
            margin-top: 2rem;
        }
        .new-year {
            color: #ffd700;
            font-size: 1.5rem;
            margin-top: 1rem;
            animation: glow 2s infinite alternate;
        }
        @keyframes glow {
            from { text-shadow: 0 0 10px #fff, 0 0 20px #ffd700; }
            to { text-shadow: 0 0 20px #fff, 0 0 30px #ffd700; }
        }
    </style>
</head>
<body>
    <div class="date-container">
        <h1 class="date">${formattedDate}</h1>
        ${newYearMessage}
        <p class="subtitle">This date updates automatically every day at midnight UTC</p>
        <p class="timestamp">Last updated: ${timestamp}</p>
    </div>
</body>
</html>`;

// Write the updated HTML to index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlTemplate);

console.log('✅ Date updated successfully!');
console.log(`📅 New date: ${formattedDate}`);
console.log(`🎉 Special day: ${isNewYearsDay ? 'New Year\'s Day!' : 'Normal day'}`);
console.log(`⏰ Last updated: ${timestamp}`);
console.log(`📁 File saved: ${path.join(__dirname, 'index.html')}`);