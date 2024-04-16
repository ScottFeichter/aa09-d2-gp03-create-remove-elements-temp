/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
const galleryList = document.querySelector(`.gallery > ul`);

add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    const dogName = url.split("/")[4];
    console.log(dogName);

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCaption = document.createElement("figCaption");

    li.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figCaption);

    console.log(li);

    img.src = url;
    figCaption.innerText = dogName;
    console.log(li);

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
    galleryList.appendChild(li);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
    console.log(e);
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const firstListChild = document.querySelector("li");

  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  firstListChild
  ? firstListChild.remove()
  : console.log(`no more dogs to remove`);

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  const lastListChild = document.querySelectorAll("li")[length-1];
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  lastListChild
  ? lastListChild.remove()
  : console.log(`no more dogs to remove`);

});
