const fs = require('fs');
const { DOMParser } = require('xmldom');
const xpath = require('xpath');
const parseSVG = require('svg-path-parser');

// Function to convert SVG path to an array of polylines
function svgPathToPolylines(pathData) {
    const commands = parseSVG(pathData);
    const polylines = [];
    let currentPolyline = [];
    let currentPoint = [0, 0];

    commands.forEach(command => {
        switch (command.command) {
            case 'moveto':
                if (currentPolyline.length > 0) {
                    polylines.push(currentPolyline);
                    currentPolyline = [];
                }
                currentPoint = [command.x, command.y];
                currentPolyline.push(currentPoint);
                break;
            case 'lineto':
                currentPoint = [command.x, command.y];
                currentPolyline.push(currentPoint);
                break;
            case 'curveto':
                currentPoint = [command.x, command.y];
                currentPolyline.push(currentPoint);
                break;
            case 'closepath':
                if (currentPolyline.length > 0) {
                    polylines.push(currentPolyline);
                    currentPolyline = [];
                }
                break;
            default:
                break;
        }
    });

    if (currentPolyline.length > 0) {
        polylines.push(currentPolyline);
    }

    return polylines;
}

// Function to convert an array of polylines to Blot code
function polylinesToBlotCode(polylines) {
    return `
const polylines = ${JSON.stringify(polylines)};
setDocDimensions(800, 600); // Adjust to your document size
drawLines(polylines);
`;
}

// Main function to convert SVG to Blot code
function svgToBlot(doc) {
    const paths = xpath.select("//*[local-name()='path']", doc);
    console.log('Number of paths:', paths.length);

    const allPolylines = [];

    paths.forEach(path => {
        const pathData = path.getAttribute('d');
        console.log('Path data:', pathData);
        const polylines = svgPathToPolylines(pathData);
        console.log('Polylines:', polylines);
        allPolylines.push(...polylines);
    });

    return polylinesToBlotCode(allPolylines);
}

// Read the SVG file
const svgFile = '/home/blaze/eee.svg'; // Update with the path to your SVG file
const svgContent = fs.readFileSync(svgFile, 'utf8');
console.log('SVG Content:', svgContent);
const doc = new DOMParser().parseFromString(svgContent, 'image/svg+xml');

const blotCode = svgToBlot(doc);
console.log(blotCode);
