const messages = document.getElementById ('messages');
const frag = document.createDocumentFragment();

const createSection = (content) => {
    const element = document.createElement('section');
    element.className = 'message';
    element.textContent = content;
    frag.appendChild(element);
};

createSection('hi');
createSection('yo');
createSection('what up');
createSection('none your business');
createSection('okay bye');

messages.appendChild(frag);
