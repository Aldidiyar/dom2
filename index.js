document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById('text');
    const words = text.innerHTML.split(/\s+/);
    text.innerHTML = words.map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word).join(' ');

    const sourceLink = document.createElement('a');
    sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
    sourceLink.textContent = "Source";
    document.body.appendChild(sourceLink);

    text.innerHTML = text.innerHTML.replace(/\./g, '.<br>');

    const wordCount = words.length;
    const heading = document.querySelector('h1');
    const countDisplay = document.createElement('p');
    countDisplay.textContent = `Words count: ${wordCount}`;
    heading.insertAdjacentElement('afterend', countDisplay);

    text.innerHTML = text.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😲');
});
