const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', function() {
    const inputValue = input.value.trim().toLowerCase();
    let color;

    if (inputValue === '') {
        alert('Input field is empty!');
        return;
    } else if (inputValue === 'hello') {
        color = 'lightgreen';
    } else if (inputValue === 'world') {
        color = 'lightblue';
    } else {
        color = 'lightred';
    }

    document.body.style.backgroundColor = color;
});
