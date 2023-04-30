const keys = [
    { value: "`", code: "Backquote", keyCode: 192, type: "character"},
    { value: "1", code: "Digit1", keyCode: 49, type: "character"},
    { value: "2", code: "Digit2", keyCode: 50, type: "character"},
    { value: "3", code: "Digit3", keyCode: 51, type: "character"},
    { value: "4", code: "Digit4", keyCode: 52, type: "character"},
    { value: "5", code: "Digit5", keyCode: 53, type: "character"},
    { value: "6", code: "Digit6", keyCode: 54, type: "character"},
    { value: "7", code: "Digit7", keyCode: 55, type: "character"},
    { value: "8", code: "Digit8", keyCode: 56, type: "character"},
    { value: "9", code: "Digit9", keyCode: 57, type: "character"},
    { value: "0", code: "Digit0", keyCode: 48, type: "character"},
    { value: "-", code: "Minus", keyCode: 189, type: "character"},
    { value: "=", code: "Equal", keyCode: 187, type: "character"},
    { value: "Backspace", code: "Backspace", keyCode: 8, type: "modifier" },
    { value: "Tab", code: "Tab", keyCode: 9, type: "modifier" },
    { value: "q", code: "KeyQ", keyCode: 81, type: "character" },
    { value: "w", code: "KeyW", keyCode: 87, type: "character" },
    { value: "e", code: "KeyE", keyCode: 69, type: "character" },
    { value: "r", code: "KeyR", keyCode: 82, type: "character" },
    { value: "t", code: "KeyT", keyCode: 84, type: "character" },
    { value: "y", code: "KeyY", keyCode: 89, type: "character" },
    { value: "u", code: "KeyU", keyCode: 85, type: "character" },
    { value: "i", code: "KeyI", keyCode: 73, type: "character" },
    { value: "o", code: "KeyO", keyCode: 79, type: "character" },
    { value: "p", code: "KeyP", keyCode: 80, type: "character" },
    { value: "[", code: "BracketLeft", keyCode: 219, type: "character", shiftValue: '{' },
    { value: "]", code: "BracketRight", keyCode: 221, type: "character", shiftValue: '}' },
    { value: "\\", code: "Backslash", keyCode: 220, type: "character", shiftValue: '|' },
    { value: 'Del', code: "Delete", keyCode: 46, type: "modifier" },
    { value: "Caps Lock", code: "CapsLock", keyCode: 20, type: "modifier" },
    { value: "a", code: "KeyA", keyCode: 65, type: "character" },
    { value: "s", code: "KeyS", keyCode: 83, type: "character" },
    { value: "d", code: "KeyD", keyCode: 68, type: "character" },
    { value: "f", code: "KeyF", keyCode: 70, type: "character" },
    { value: "g", code: "KeyG", keyCode: 71, type: "character" },
    { value: "h", code: "KeyH", keyCode: 72, type: "character" },
    { value: "j", code: "KeyJ", keyCode: 74, type: "character" },
    { value: "k", code: "KeyK", keyCode: 75, type: "character" },
    { value: "l", code: "KeyL", keyCode: 76, type: "character" },
    { value: ";", code: "Semicolon", keyCode: 186, type: "character", shiftValue: ':' },
    { value: "'", code: "Quote", keyCode: 222, type: "character", shiftValue: '"' },
    { value: "Enter", code: "Enter", keyCode: 13, type: "control" },
    { value: "Shift", code: "ShiftLeft", keyCode: 16, type: "modifier" },
    { value: "z", code: "KeyZ", keyCode: 90, type: "character" },
    { value: "x", code: "KeyX", keyCode: 88, type: "character" },
    { value: "c", code: "KeyC", keyCode: 67, type: "character" },
    { value: "v", code: "KeyV", keyCode: 86, type: "character" },
    { value: "b", code: "KeyB", keyCode: 66, type: "character" },
    { value: "n", code: "KeyN", keyCode: 78, type: "character" },
    { value: "m", code: "KeyM", keyCode: 77, type: "character" },
    { value: ",", code: "Comma", keyCode: 188, type: "character", shiftValue: '<' },
    { value: ".", code: "Period", keyCode: 190, type: "character", shiftValue: '>' },
    { value: "/", code: "Slash", keyCode: 191, type: "character", shiftValue: '?' },
    { value: "↑", code: "ArrowUp", keyCode: 38, type: "navigation" },
    { value: "Shift", code: "ShiftRight", keyCode: 16, type: "modifier" },
    { value: "Ctrl", code: "ControlLeft", keyCode: 17, type: "modifier" },
    { value: "Win", code: "Meta", keyCode: 91, type: "meta" },
    { value: "Alt", code: "AltLeft", keyCode: 18, type: "modifier" },
    { value: " ", code: "Space", keyCode: 32, type: "character" },
    { value: "Alt", code: "AltRight", keyCode: 18, type: "modifier" },
    { value: "←", code: "ArrowLeft", keyCode: 37, type: "navigation" },
    { value: "↓", code: "ArrowDown", keyCode: 40, type: "navigation" },
    { value: "→", code: "ArrowRight", keyCode: 39, type: "navigation" },
    { value: "Ctrl", code: "ControlRight", keyCode: 17, type: "modifier" }
];


const createTitle = () => {
    const title = document.createElement('h1');
    title.className = 'h1';
    title.textContent = 'Virtual keyboard';
    document.body.append(title);
}

const createTextarea = () => {
    const textArea = document.createElement('textarea');
    textArea.className = 'textarea';
    textArea.cols = '75';
    textArea.rows = '5';
    document.body.append(textArea);
    textArea.focus();
};



const createKeyboard = () => {
    const keyboard = document.createElement('div');
    document.body.append(keyboard);
    keyboard.className = 'keyboard';
};


let shiftPressed = false;

const pressKey = (e) => {
    const key = document.querySelector(`[code="${e.code}"]`);
    if (key) {
        key.classList.add('key_active');
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            shiftPressed = true;
            createKeys();
        }
    }
};

const releaseKey = (e) => {
    const key = document.querySelector(`[code="${e.code}"]`);
    if (key) {
        key.classList.remove('key_active');
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            shiftPressed = false;
            createKeys();
        }
    }
};

const shiftValues = {
    '`': '~',
    '1': '!',
    '2': '@',
    '3': '#',
    '4': '$',
    '5': '%',
    '6': '^',
    '7': '&',
    '8': '*',
    '9': '(',
    '0': ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    '\\': '|',
    ';': ':',
    "'": '"',
    ',': '<',
    '.': '>',
    '/': '?'
};

const createKeys = () => {
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';

    keys.forEach((key) => {
        const newKey = document.createElement('div');

        newKey.setAttribute('value', `${(!shiftPressed || ['Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'Meta', 'AltLeft', 'AltRight', 'Backspace', 'Enter', 'Delete'].includes(key.code))  
        ? key.value.toLowerCase() 
        : shiftValues[key.value] || key.value.toUpperCase()}`);

        newKey.setAttribute('type', `${key.type}`);
        newKey.setAttribute('code', `${key.code}`);
        newKey.textContent = newKey.getAttribute('value');

        newKey.className = 'key';

        if (['Backspace', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight'].includes(key.code)) {
            newKey.classList.add('key_modify');
        }

        if (key.code === 'Space') {
            newKey.classList.add('key_space');
        }

        keyboard.append(newKey);
    });
};

createTitle();
createTextarea();
createKeyboard();
createKeys();

const textArea = document.querySelector('.textarea');
textArea.focus();

window.addEventListener('keydown', pressKey);
window.addEventListener('keyup', releaseKey);