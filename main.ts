function toggleSection(sectionId: string, btn: HTMLButtonElement, sectionName: string): void {
    const section = document.getElementById(sectionId) as HTMLElement;
    if (section.style.display === 'none') {
        section.style.display = 'block';
        btn.textContent = `Hide ${sectionName}`;
    } else {
        section.style.display = 'none';
        btn.textContent = `Show ${sectionName}`;
    }
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const educationButton = document.getElementById('toggleEducation') as HTMLButtonElement;
    educationButton.addEventListener('click', () => {
        toggleSection('education', educationButton, 'Education');
    });

    // Initialize sections as hidden or visible
    const educationSection = document.getElementById('education') as HTMLElement;
    educationSection.style.display = 'none'; // Start hidden
});
