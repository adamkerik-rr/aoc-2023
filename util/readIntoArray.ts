import * as fs from 'fs';

export const readInput = (file: string): string => {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return data;
    } catch (err) {
        console.error(`Error reading file from disk: ${err}`);
    }
    return '';
}

export const readIntoArray = (input: string): string[] => {
    return input.split('\n');
}