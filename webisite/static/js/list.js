const jsonFilePath = "../../static/articlelist.json";
const basePath = "../article/";
const linksContainer = document.getElementById("links");

const xhr = new XMLHttpRequest();
xhr.open("GET", jsonFilePath, true);
xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    const jsonData = JSON.parse(xhr.responseText);

    jsonData.sort((a, b) => new Date(b.dateUploaded) - new Date(a.dateUploaded));

    jsonData.forEach(item => {
      const link = document.createElement("a");
      link.href = `${basePath}${item.name.toLowerCase().replace(/\s/g, "-")}`;
      link.innerText = item.name;
      linksContainer.appendChild(link);
      linksContainer.appendChild(document.createElement("br"));
    });
  }
};
xhr.send();
