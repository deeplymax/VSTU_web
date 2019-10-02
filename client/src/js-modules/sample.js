export function createSamples(samples = []) {
    const samplesElem = document.querySelector('.samples');
    let samplesText = '';
    for (const sample of samples) {
        samplesText += `<div class="sample">
            <input class="input" type="text" placeholder="Sample" value=${sample}>
            <div class="answer no-match"><span>Don't match</span></div>
        </div>`
    }
    samplesElem.innerHTML = samplesText;
} 