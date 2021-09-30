// ### Step by Step:
// - Create an array of every link on the page using document.querySelectorAll(cssSelector)
// - Iterate through the array. In each iteration of the loop:

//     - Find the current href using [element.getAttribute(name)](https://developer.mozilla.org/en-US/docs/DOM/element.getAttribute), and store into a variable
//     - Generate a thumbnail URL using [youtube.generateThumbnailUrl(videoUrl)](http://www.teaching-materials.org/jquery/youtube_doc.html)
//     - Create an IMG element using [document.createElement(tagName)](https://developer.mozilla.org/en-US/docs/DOM/document.createElement)
//     - Set the "src" of the IMG element using [element.setAttribute(name, value)](https://developer.mozilla.org/en-US/docs/DOM/element.setAttribute)
//     - Append the IMG to the link using [element.appendChild(element)](https://developer.mozilla.org/en-US/docs/DOM/Node.appendChild)

// Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the [DOM Review here](http://www.teaching-materials.org/jsdom/)
// const links = document.querySelectorAll("a");
// console.log(links);
// for (i = 0; i < links.length; i++) {
//   //   console.log(links[i]);
//   let href = links[i];
//   const something = href.getAttribute("href"); //console.log each of them to understand the point.
//   console.log(something);
//   const yout = youtube.generateThumbnailUrl(something);
//   let image = document.createElement("img");
//   image.setAttribute("src", yout);
//   href.appendChild(image);
// }
////////.........///////////.........////////....////////....//././.
// const links = document.querySelectorAll("a");

// for (let i = 0; i < links.length; i++) {
//   const link = links[i];
//   const href = link.getAttribute("href");
//   console.log(href);
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   console.log(thumbnailURL);

//   const image = document.createElement("img"); // detached DOM node
//   image.setAttribute("src", thumbnailURL);

//   link.appendChild(image);
// }

// console.log($links);
// const player = $("<div>").attr("id", "player");
const thumbnailify = function ($link) {
  const href = $link.attr("href");
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const $image = $("<img>");
  $image.attr("src", thumbnailURL);
  $link.prepend($image);
  $link.on("click", function (event) {
    event.preventDefault();
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${embedURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $("#player").hide().html(embedHTML).fadeIn(5000);
  });
};

const $links = $("a");

for (i = 0; i < $links.length; i++) {
  const $link = $links.eq(i);
  thumbnailify($link);
}
