var inputElement = document.getElementById("movie")
var buttonElement = document.getElementById("button-search")
var divElement = document.getElementById("div-wrapper")

divElement.classList.add("container", "mt-5")
var rowElement = document.createElement("div")
rowElement.className = "row"
var movieStatusElement = document.getElementById("status")
buttonElement.addEventListener("click", function () {

    rowElement.innerHTML = " "
    movieStatusElement.innerText = " "
    movieStatusElement.innerText = "Please wait............."
    movieStatusElement.style.fontSize = "30px"



    fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${inputElement.value}`)
        .then((res) => {
            return res.json()
        }).then((res2) => {
            console.log(res2, "checking")
            if (res2.Response == "True") {
                inputElement.value = ""
                movieStatusElement.innerText = ""

                var movieDetails = res2.Search
                movieDetails.map((movie, i) => {
                    console.log(movie)

                    var colElement = document.createElement("div")
                    colElement.className = "col-3"
                    var cardElement = document.createElement("div");
                    cardElement.className=" border border black"
                    cardElement.className = "card"
                    cardElement.className="border border-black rounded"
                    cardElement.className="h-100"
                    cardElement.style.width = "16rem"
                    var imageElement = document.createElement("img");
                    imageElement.className = "card-img-top" 
                    imageElement.src = movie.Poster
                    var innerCardElement = document.createElement("div");
                    innerCardElement.className = "card-body"
                    innerCardElement.className = "text-center"
                    var titleElement = document.createElement("p");
                    titleElement.className = "card-text"
                    titleElement.innerHTML = `<b>Title:</b>${movie.Title}`
                    var yearElement = document.createElement("p");
                    yearElement.className = "card-text"
                    yearElement.innerHTML = `<b>Release Year:</b>${movie.Year}</b>`
                    innerCardElement.append(titleElement, yearElement)
                    cardElement.append(imageElement, innerCardElement)
                    colElement.append(cardElement)
                    rowElement.append(colElement)




                })

            } else {
                inputElement.value = ""
                movieStatusElement.innerText = ""
                movieStatusElement.innerText = "Oops! The page you are looking for is not found."
                movieStatusElement.style.fontSize = "30px"
                console.log(" Movies not found!!")
            }
            divElement.append(rowElement)


        })


})