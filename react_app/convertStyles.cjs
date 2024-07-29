const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'HomePage.jsx');
const outputFilePath = path.join(__dirname, 'src', 'HomePage_converted.jsx');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const updatedData = data.replace(/style="([^"]*)"/g, (match, p1) => {
        const styles = p1.split(';').filter(style => style.trim().length > 0);
        const styleObject = styles.reduce((acc, style) => {
            const [key, value] = style.split(':').map(s => s.trim());
            if (key && value) {
                const camelCaseKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                acc[camelCaseKey] = value;
            }
            return acc;
        }, {});

        // Convert styleObject to desired format
        const styleString = Object.entries(styleObject)
            .map(([key, value]) => `${key}: "${value}"`)
            .join(', ');

        return `style={{ ${styleString} }}`;
    });

    fs.writeFile(outputFilePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`Styles converted and saved to ${outputFilePath}`);
        }
    });
});
