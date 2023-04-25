

const getCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${getCategories.length}`);

getCategories.forEach(function (element) {
 const findNameElement = element.firstElementChild;
 const nameElement = findNameElement.innerHTML;
 const arrayElements = element.querySelectorAll("li").length;
    console.log(`Category: ${nameElement}
    Elements: ${arrayElements}`);

});


