function title(block) {
    return `
    <div class="row">
        <div class="col-cm">
            <h1>${block.value}</h1>
        </div>
    </div>
    `
}

function text(block) {
    return `
    <div class="row">
        <div class="col-cm">
            <p>${block.value}</p>
        </div>
    </div>
    `
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-cm">${item}</div>`)
    return `
    <div class="row">
        ${html.join('')}
    </div>

    `
}

function image(block) {
    return `
        <div class="row">
            <img src="${block.value}"
        </div>
    `
}

export const templates = {
    title,
    text,
    image,
    columns
}