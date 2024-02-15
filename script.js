keymapping_en2th = {
  "1": "ๅ",
  "!": "+",
  "@": "๑",
  "2": "/",
  "3": "-",
  "#": "๒",
  "4": "ภ",
  "$": "๓",
  "5": "ถ",
  "%": "๔",
  "6": "ุ",
  "^": "ู",
  "7": "ึ",
  "&": "฿",
  "8": "ค",
  "*": "๕",
  "9": "ต",
  "(": "๖",
  "0": "จ",
  ")": "๗",
  "-": "ข",
  "_": "๘",
  "=": "ช",
  "+": "๙",
  "q": "ๆ",
  "Q": "๐",
  "w": "ไ",
  "W": "\\",
  "e": "ำ",
  "E": "ฎ",
  "r": "พ",
  "R": "ฑ",
  "t": "ะ",
  "T": "ธ",
  "y": "ั",
  "Y": "ํ",
  "u": "ี",
  "U": "๊",
  "i": "ร",
  "I": "ณ",
  "o": "น",
  "O": "ฯ",
  "p": "ย",
  "P": "ญ",
  "[": "บ",
  "{": "ฐ",
  "]": "ล",
  "}": "|",
  "\\": "ฃ",
  "|": "ฅ",
  "a": "ฟ",
  "A": "ฤ",
  "s": "ห",
  "S": "ฆ",
  "d": "ก",
  "D": "ฏ",
  "f": "ด",
  "F": "โ",
  "g": "เ",
  "G": "ฌ",
  "h": "้",
  "H": "็",
  "j": "่",
  "J": "๋",
  "k": "า",
  "K": "ษ",
  "l": "ส",
  "L": "ศ",
  ";": "ว",
  ":": "ซ",
  "'": "ง",
  "\"": ".",
  "z": "ผ",
  "Z": "(",
  "x": "ป",
  "X": ")",
  "c": "แ",
  "C": "ฉ",
  "v": "อ",
  "V": "ฮ",
  "b": "ิ",
  "B": "ฺ",
  "n": "ท",
  "N": "์",
  "m": "ท",
  "M": "?",
  "<": "ฒ",
  ".": "ใ",
  ">": "ฬ",
  "/": "ฝ",
  "?": "ฦ",
  ",": "ม"
}

keymapping_th2en = {
  "ๅ": "1",
  "+": "!",
  "๑": "@",
  "/": "2",
  "-": "3",
  "๒": "#",
  "ภ": "4",
  "๓": "$",
  "ถ": "5",
  "๔": "%",
  "ุ": "6",
  "ู": "^",
  "ึ": "7",
  "฿": "&",
  "ค": "8",
  "๕": "*",
  "ต": "9",
  "๖": "(",
  "จ": "0",
  "๗": ")",
  "ข": "-",
  "๘": "_",
  "ช": "=",
  "๙": "+",
  "ๆ": "q",
  "๐": "Q",
  "ไ": "w",
  "\\": "W",
  "ำ": "e",
  "ฎ": "E",
  "พ": "r",
  "ฑ": "R",
  "ะ": "t",
  "ธ": "T",
  "ั": "y",
  "ํ": "Y",
  "ี": "u",
  "๊": "U",
  "ร": "i",
  "ณ": "I",
  "น": "o",
  "ฯ": "O",
  "ย": "p",
  "ญ": "P",
  "บ": "[",
  "ฐ": "{",
  "ล": "]",
  "|": "}",
  "ฃ": "\\",
  "ฅ": "|",
  "ฟ": "a",
  "ฤ": "A",
  "ห": "s",
  "ฆ": "S",
  "ก": "d",
  "ฏ": "D",
  "ด": "f",
  "โ": "F",
  "เ": "g",
  "ฌ": "G",
  "้": "h",
  "็": "H",
  "่": "j",
  "๋": "J",
  "า": "k",
  "ษ": "K",
  "ส": "l",
  "ศ": "L",
  "ว": ";",
  "ซ": ":",
  "ง": "'",
  ".": "\"",
  "ผ": "z",
  "(": "Z",
  "ป": "x",
  ")": "X",
  "แ": "c",
  "ฉ": "C",
  "อ": "v",
  "ฮ": "V",
  "ิ": "b",
  "ฺ": "B",
  "ท": "m",
  "์": "N",
  "?": "M",
  "ฒ": "<",
  "ใ": ".",
  "ฬ": ">",
  "ฝ": "/",
  "ฦ": "?",
  "ม": ","
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('input').addEventListener('input', () => {
        let input = document.getElementById('input').value
        let output = ""
        for ( let i = 0; i < input.length; i ++ ) {
            output += keymapping_en2th[input[i]] || input[i]
        }
        document.getElementById('output').value = output
    })
    document.getElementById('output').addEventListener('input', () => {
        let input = document.getElementById('output').value
        let output = ""
        for ( let i = 0; i < input.length; i ++ ) {
            output += keymapping_th2en[input[i]] || input[i]
        }
        document.getElementById('input').value = output
    })
})