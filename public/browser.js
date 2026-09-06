const { default: axios } = require("axios");

console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li>
          <span class="item-text">${item.reja}</span>
            <div>
              <button data-id="${item._id}">
                O'zgartirish
              </button>
              <button data-id="${item._id}">O'chirish</button>
            </div>
        </li>`
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault('http://localhost:3000');

    axios.post("/create-item", {reja: createField.value})
    .then((response) => {
        document
            .getElementById("item-list")
            .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling");
    });
});