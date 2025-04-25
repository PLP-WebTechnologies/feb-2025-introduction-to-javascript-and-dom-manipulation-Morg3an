// Change text and CSS style
document.getElementById('changeTextBtn').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'Text has been changed dynamically!';
    message.style.color = 'white';
    message.style.backgroundColor = '#007BFF';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
});

// Add/Remove a box
document.getElementById('toggleBoxBtn').addEventListener('click', () => {
    const container = document.getElementById('boxContainer');
    const existingBox = document.getElementById('dynamicBox');

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const box = document.createElement('div');
        box.id = 'dynamicBox';
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = 'coral';
        box.style.marginTop = '10px';
        container.appendChild(box);
    }
});  