const requestURL = 'https://kaeellyn.github.io/wdd230/temple-inn&suites/data/temples.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        console.table(jsonObject);
        temples.forEach(displayTemples);
    })

function displayTemples(temple) {
    let cards= document.createElement("section");
    let p0 = document.createElement("p");
    let icon = document.createElement("button");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let img = document.createElement("img");
    let classDir = document.querySelector('.temples');
    let idDir = document.querySelector('#temp');
    
    p0.innerHTML = `${temple.temple}`;
    icon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> Like`
    icon.classList.add("like_btn")
    p1.innerHTML = `<b>Address: </b>${temple.address}`;
    p2.innerHTML = `<b>Phone: </b>${temple.telephone}`;
    p3.innerHTML = `<b>Services: </b>${temple.services}`;
    p4.innerHTML = `<b>Schedule: </b>${temple.schedule}`;
    img.setAttribute("src", `${temple.image}`);
    img.setAttribute("alt", `${temple.temple}`);

    cards.appendChild(img);
    cards.appendChild(p0);
    cards.appendChild(icon);
    cards.appendChild(p1);
    cards.appendChild(p2);
    cards.appendChild(p3);
    cards.appendChild(p4);
    cards.appendChild(img);
    

    classDir.appendChild(cards);

    let click = 0;
    let clicked = false;
    
    icon.addEventListener("click", () => {
        if (!clicked) {
            localStorage.setItem("like", click);
            click++;
            clicked = true;
            icon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Like`;
            if (localStorage >= 1) {
                icon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Like`;
            }
            console.log(localStorage);
        } else {
            clicked = false;
            icon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> Like`;
        }
    })
    
    // icon.onclick = function() { 
    //     localStorage.setItem("like", click);
    //     click++;
    //     icon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Like`;
    //     console.log(localStorage);
    // }
    // let clicked = false

    // like icon

    // icon.addEventListener("click", () => {
    //     if (!clicked) {
    //         clicked = true;
    //         likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
    
    //     } else {
    //         clicked = false;
    //         likeIcon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    //     }
    // });

    // function likeTemple() {
    //     icon.classList.toggle("liked");
    //     if (icon.classList.contains("liked")) {
    //         setLocalLiked();
    //     } else {
    //         p5.innerHTML = `Click to like`;
    //     }
    // }

    // function setLocalLiked() {

    // }

    // icon.onclick = likeTemple;
}