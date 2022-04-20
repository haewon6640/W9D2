const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.hasChildNodes()){
        htmlElement.querySelectorAll("p").forEach(node => {
            htmlElement.removeChild(node);
        });
    }
    let element = document.createElement("p");
    let text = document.createTextNode(string);
    element.appendChild(text);
    htmlElement.appendChild(element);
};

htmlGenerator('Party Time.', partyHeader);