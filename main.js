"use strict";
function toggleSection(sectionId, btn, sectionName) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
        btn.textContent = `Hide ${sectionName}`;
    }
    else {
        section.style.display = 'none';
        btn.textContent = `Show ${sectionName}`;
    }
}
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const educationButton = document.getElementById('toggleEducation');
    educationButton.addEventListener('click', () => {
        toggleSection('education', educationButton, 'Education');
    });
    // Initialize sections as hidden or visible
    const educationSection = document.getElementById('education');
    educationSection.style.display = 'none'; // Start hidden
});
