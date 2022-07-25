let moveSearch = document.querySelector("#moveSearch"),
  moveName = document.querySelector("#moveName"),
  filmList = document.querySelector(".film-list");

moveSearch.addEventListener("click", () => {
  getMoveSearch();
});

const getMoveSearch = async () => {
  let movieName = moveName.value;
  if (movieName) {
    let res = await fetch(
      `http://www.omdbapi.com/?apikey=1e63ca02&t=${movieName}`
    );
    let data = await res.json();

    try {
      filmList.innerHTML = `
                          <div class="film-card">
                            <img src=${data.Poster} alt=${data.Title}/>
                            <div class="film-title">${data.Title}</div>
                            <div class="film-year">${data.Year}</div>
                          </div>
                          `;
    } catch (error) {
      console.log("Error server");
    }
  }
};
window.onkeydown = function (e) {
  if (e.key === "Enter") {
    getMoveSearch();
  }
};

// moveSearch.addEventListener("click", () => {
//   let movieName = moveName.value;
//   if (movieName) {
//     let myPromise = fetch(
//           `http://www.omdbapi.com/?apikey=1e63ca02&t=${movieName}`
//     );
//     myPromise
//       .then((res) => {
//         let secondPromise = res.json();
//         return secondPromise;
//       })
//       .then((data) => {
//         filmList.innerHTML = `<div class="film-card">
//               <img src=${data.Poster} alt="" />
//               <div class="film-title">${data.Title}</div>
//              <div class="film-year">${data.Year}</div>
//          </div>
//          `;
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }
// });
