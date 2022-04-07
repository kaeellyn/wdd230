const likeBtn = document.querySelector('.like-btn');
let likeIcon = document.querySelector('#like-icon');
let likeCount = document.querySelector('#count');

// button clicked
let clicked = false;

let myObj = {
    like: 0
};

console.log(myObj);

likeBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;

    } else {
        clicked = false;
        likeIcon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    }
});