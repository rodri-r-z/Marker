const converter = new showdown.Converter();

document.querySelector("#markdownResult").innerHTML = converter.makeHtml(document.querySelector("textarea").value);

const editor = CodeMirror.fromTextArea(document.querySelector('textarea'));

editor.on("change", () => {
    document.querySelector("#markdownResult").innerHTML = converter.makeHtml(editor.getValue());
})