/**
 * Title: AOC Day 1 had a terribly ambiguous description
 * 
 * AOC Day 1 Part 2 stated:
 *  Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
 *
 *  Equipped with this new information, you now need to find the real first and last digit on each line. For example:
 *
 *  two1nine
 *   eightwothree
 *   abcone2threexyz
 *   xtwone3four
 *   4nineeightseven2
 *   zoneight234
 *   7pqrstsixteen
 *
 *   In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.
 * 
 * It stated nothing about precedence of the digits, so you would think that a string such as `23eighthree`, would become `238hree`, as the t in `three` is consumed by converting it to an 8. However, its the OTHER way around where `23eighthree` becomes `23eigh3`
 * 
 * The instructions were horrendous and just confusing once some of the "hidden" rules were revealed. I am not spending any more time on this terrible problem.
 */

// import { readInput, readIntoArray } from "../util/readIntoArray";
// import * as fs from 'fs';

// const fileInput = readIntoArray(readInput('./input.txt'));

// const sumCalibrationValues = (input: string[]): number => {
//     const numbers = input.map(extractNumbers);
//     const twoDigitNumbers = numbers.map((line) => parseInt(line[0].toString() + line[line.length - 1].toString()));
//     return twoDigitNumbers.reduce((a, b) => a + b);
// }

// const extractNumbers = (input: string): number[] => {
//     const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     const numberMap = new Map(numberWords.map((word, i) => [word, i]));

//     let result: number[] = [];
//     let currentWord = '';
//     for (let char of input) {
//         if (char.match(/[a-z]/i)) {
//             currentWord += char;
//             if (numberMap.has(currentWord)) {
//                 result.push(numberMap.get(currentWord) || 0);
//                 currentWord = '';
//             }
//         } else if (char.match(/\d/)) {
//             result.push(parseInt(char));
//             if (currentWord.length > 0) {
//                 currentWord = '';
//             }
//         }
//     }

//     if (numberMap.has(currentWord)) {
//         result.push(numberMap.get(currentWord) || 0);
//     }

//     return result;
// }

// console.log(sumCalibrationValues(fileInput));
