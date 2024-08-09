document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const addColorButton = document.getElementById('addColor');
    const paletteContainer = document.getElementById('paletteContainer');

    addColorButton.addEventListener('click', () => {
        const color = colorPicker.value;

        // Create a new color box
        const colorBox = document.createElement('div');
        colorBox.classList.add('palette-color');
        colorBox.style.backgroundColor = color;

        // Create a color code label
        const colorCode = document.createElement('div');
        colorCode.classList.add('color-code');
        colorCode.textContent = color;

        // Append the color code to the color box
        colorBox.appendChild(colorCode);

        // Append the new color box to the palette container
        paletteContainer.appendChild(colorBox);
    });
});
