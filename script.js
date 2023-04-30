const keys = [
    { value: "`", ruValue: 'ё', code: "Backquote", keyCode: 192, type: "character" },
    { value: "1", ruValue: '1', code: "Digit1", keyCode: 49, type: "character" },
    { value: "2", ruValue: '2', code: "Digit2", keyCode: 50, type: "character" },
    { value: "3", ruValue: '3', code: "Digit3", keyCode: 51, type: "character" },
    { value: "4", ruValue: '4', code: "Digit4", keyCode: 52, type: "character" },
    { value: "5", ruValue: '5', code: "Digit5", keyCode: 53, type: "character" },
    { value: "6", ruValue: '6', code: "Digit6", keyCode: 54, type: "character" },
    { value: "7", ruValue: '7', code: "Digit7", keyCode: 55, type: "character" },
    { value: "8", ruValue: '8', code: "Digit8", keyCode: 56, type: "character" },
    { value: "9", ruValue: '9', code: "Digit9", keyCode: 57, type: "character" },
    { value: "0", ruValue: '0', code: "Digit0", keyCode: 48, type: "character" },
    { value: "-", ruValue: '-', code: "Minus", keyCode: 189, type: "character" },
    { value: "=", ruValue: '=', code: "Equal", keyCode: 187, type: "character" },
    { value: "Backspace", ruValue: 'Backspace', code: "Backspace", keyCode: 8, type: "modifier" },
    { value: "Tab", ruValue: 'Tab', code: "Tab", keyCode: 9, type: "modifier" },
    { value: "q", ruValue: 'й', code: "KeyQ", keyCode: 81, type: "character" },
    { value: "w", ruValue: 'ц', code: "KeyW", keyCode: 87, type: "character" },
    { value: "e", ruValue: 'у', code: "KeyE", keyCode: 69, type: "character" },
    { value: "r", ruValue: 'к', code: "KeyR", keyCode: 82, type: "character" },
    { value: "t", ruValue: 'е', code: "KeyT", keyCode: 84, type: "character" },
    { value: "y", ruValue: 'н', code: "KeyY", keyCode: 89, type: "character" },
    { value: "u", ruValue: 'г', code: "KeyU", keyCode: 85, type: "character" },
    { value: "i", ruValue: 'ш', code: "KeyI", keyCode: 73, type: "character" },
    { value: "o", ruValue: 'щ', code: "KeyO", keyCode: 79, type: "character" },
    { value: "p", ruValue: 'з', code: "KeyP", keyCode: 80, type: "character" },
    { value: "[", ruValue: 'х', code: "BracketLeft", keyCode: 219, type: "character", shiftValue: '{' },
    { value: "]", ruValue: 'ъ', code: "BracketRight", keyCode: 221, type: "character", shiftValue: '}' },
    { value: "\\", ruValue: '\\', code: "Backslash", keyCode: 220, type: "character", shiftValue: '|' },
    { value: 'Del', ruValue: 'Del', code: "Delete", keyCode: 46, type: "modifier" },
    { value: "Caps Lock", ruValue: 'Caps Lock', code: "CapsLock", keyCode: 20, type: "modifier" },
    { value: "a", ruValue: 'ф', code: "KeyA", keyCode: 65, type: "character" },
    { value: "s", ruValue: 'ы', code: "KeyS", keyCode: 83, type: "character" },
    { value: "d", ruValue: 'в', code: "KeyD", keyCode: 68, type: "character" },
    { value: "f", ruValue: 'а', code: "KeyF", keyCode: 70, type: "character" },
    { value: "g", ruValue: 'п', code: "KeyG", keyCode: 71, type: "character" },
    { value: "h", ruValue: 'р', code: "KeyH", keyCode: 72, type: "character" },
    { value: "j", ruValue: 'о', code: "KeyJ", keyCode: 74, type: "character" },
    { value: "k", ruValue: 'л', code: "KeyK", keyCode: 75, type: "character" },
    { value: "l", ruValue: 'д', code: "KeyL", keyCode: 76, type: "character" },
    { value: ";", ruValue: 'ж', code: "Semicolon", keyCode: 186, type: "character", shiftValue: ':' },
    { value: "'", ruValue: 'э', code: "Quote", keyCode: 222, type: "character", shiftValue: '"' },
    { value: "Enter", ruValue: 'Enter', code: "Enter", keyCode: 13, type: "control" },
    { value: "Shift", ruValue: 'Shift', code: "ShiftLeft", keyCode: 16, type: "modifier" },
    { value: "z", ruValue: 'я', code: "KeyZ", keyCode: 90, type: "character" },
    { value: "x", ruValue: 'ч', code: "KeyX", keyCode: 88, type: "character" },
    { value: "c", ruValue: 'с', code: "KeyC", keyCode: 67, type: "character" },
    { value: "v", ruValue: 'м', code: "KeyV", keyCode: 86, type: "character" },
    { value: "b", ruValue: 'и', code: "KeyB", keyCode: 66, type: "character" },
    { value: "n", ruValue: 'т', code: "KeyN", keyCode: 78, type: "character" },
    { value: "m", ruValue: 'ь', code: "KeyM", keyCode: 77, type: "character" },
    { value: ",", ruValue: 'б', code: "Comma", keyCode: 188, type: "character", shiftValue: '<' },
    { value: ".", ruValue: 'ю', code: "Period", keyCode: 190, type: "character", shiftValue: '>' },
    { value: "/", ruValue: '.', code: "Slash", keyCode: 191, type: "character", shiftValue: '?' },
    { value: "↑", ruValue: '↑', code: "ArrowUp", keyCode: 38, type: "navigation" },
    { value: "Shift", ruValue: 'Shift', code: "ShiftRight", keyCode: 16, type: "modifier" },
    { value: "Ctrl", ruValue: 'Ctrl', code: "ControlLeft", keyCode: 17, type: "modifier" },
    { value: "Win", ruValue: 'Win', code: "Meta", keyCode: 91, type: "meta" },
    { value: "Alt", ruValue: 'Alt', code: "AltLeft", keyCode: 18, type: "modifier" },
    { value: " ", ruValue: " ", code: "Space", keyCode: 32, type: "character" },
    { value: "Alt", ruValue: 'Alt', code: "AltRight", keyCode: 18, type: "modifier" },
    { value: "←", ruValue: '←', code: "ArrowLeft", keyCode: 37, type: "navigation" },
    { value: "↓", ruValue: '↓', code: "ArrowDown", keyCode: 40, type: "navigation" },
    { value: "→", ruValue: '→', code: "ArrowRight", keyCode: 39, type: "navigation" },
    { value: "Ctrl", ruValue: 'Ctrl', code: "ControlRight", keyCode: 17, type: "modifier" }
];

const shiftValuesEn = {
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

const shiftValuesRu = {
    'ё': 'Ё',
    '1': '!',
    '2': '"',
    '3': '№',
    '4': ';',
    '5': '%',
    '6': ':',
    '7': '?',
    '8': '*',
    '9': '(',
    '0': ')',
    '-': '_',
    '=': '+',
};

let isRu = false;

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

    if (e.altKey && e.shiftKey) {
        isRu = !isRu;
        e.preventDefault();
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

const createKeys = () => {
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';

    keys.forEach((key) => {
        const newKey = document.createElement('div');

        newKey.setAttribute('value', `${(!shiftPressed || ['Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'Meta', 'AltLeft', 'AltRight', 'Backspace', 'Enter', 'Delete'].includes(key.code))
            ? key.value
            : shiftValuesEn[key.value] || key.value.toUpperCase()}`);

        newKey.setAttribute('type', `${key.type}`);
        newKey.setAttribute('code', `${key.code}`);
        newKey.setAttribute('ruValue', `${key.ruValue}`);

        newKey.textContent = isRu ? (!shiftPressed || ['Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'Meta', 'AltLeft', 'AltRight', 'Backspace', 'Enter', 'Delete'].includes(key.code)
            ? newKey.getAttribute('ruValue')
            : shiftValuesRu[newKey.getAttribute('ruValue')] || newKey.getAttribute('ruValue').toLocaleUpperCase())
            : newKey.getAttribute('value');

        newKey.className = 'key';

        if (['Backspace', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight'].includes(key.code)) {
            newKey.classList.add('key_modify');
        }

        if (key.code === 'Space') {
            newKey.classList.add('key_space');
        }

        if (newKey.getAttribute('type') === 'character') {
            newKey.addEventListener('click', () => {
                textArea.textContent += newKey.textContent;
            });
        } else if (newKey.getAttribute('code') === 'Tab') {
            newKey.addEventListener('click', () => {
                textArea.textContent = `${textArea.textContent}    `;
            });
        } else if (newKey.getAttribute('code') === 'Backspace') {
            newKey.addEventListener('click', () => {
                textArea.textContent = textArea.textContent.slice(0, -1);
            });
        } else if (newKey.getAttribute('code') === 'Enter') {
            newKey.addEventListener('click', () => {
                textArea.textContent = `${textArea.textContent}\n`;
            });
        }

        newKey.addEventListener('mousedown', () => {
            newKey.classList.add('key_active');
        });

        newKey.addEventListener('mouseup', () => {
            newKey.classList.remove('key_active');
        });

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
