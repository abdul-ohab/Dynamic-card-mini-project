
const cards = [
    {
        title: "Post title 1",
        body: "Post description 1"
    },
    {
        title: "Post title 2",
        body: "Post description 2"
    },
    {
        title: "Post title 3",
        body: "Post description 3"
    },
    {
        title: "Post title 4",
        body: "Post description 4"
    },
    {
        title: "Post title 5",
        body: "Post description 5"
    },
    {
        title: "Post title 6",
        body: "Post description 6"
    },
    {
        title: "Post title 7",
        body: "Post description 7"
    },
    {
        title: "Post title 8",
        body: "Post description 8"
    },
    {
        title: "Post title 9",
        body: "Post description 9"
    }
];
const cardsElement = document.querySelector(".cards");

const allDataload = () =>{
    cards.map((card) =>{
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
        <h4 class="card-title"> ${card.title} </h4><br>
        <p class="card-body"> ${card.body} </p>`

        cardsElement.appendChild(cardElement);
    });

};

allDataload();