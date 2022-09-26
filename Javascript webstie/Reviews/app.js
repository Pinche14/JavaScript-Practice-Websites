const reviews =[
    {
        id: 1,
        name: "ritvik Shore",
        job: "actor",
        img: "https://newsroompost.com/wp-content/uploads/2022/08/BeFunky-collage-5-1024x683.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 2,
        name: "Noor Chahal",
        job: "singer",
        img: "https://punjabicelebrities.com/wp-content/uploads/2020/11/noor_kaur_chahal-1024x578.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 3,
        name: "viraj Gehlani",
        job: "content creator",
        img: "https://failurebeforesuccess.com/wp-content/uploads/2021/10/Viraj-Ghelani.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "devesh dixit",
        job: "comedian",
        img: "https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/10/80539376_590165731548625_2677200449404559260_n.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."

    },
];



const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
//The getElementById() method returns an element with a specified value.

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
let currentItem = 0;

window.addEventListener("DOMContentLoaded" , function(){
//The addEventListener() method attaches an event handler to a document.
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function(){
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});