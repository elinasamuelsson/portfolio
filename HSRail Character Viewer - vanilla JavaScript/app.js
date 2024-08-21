async function getCharacters() {
  try {
    const response = await fetch("./characters.json");
    const charactersData = await response.json();

    const charactersArray = Object.entries(charactersData).map(
      ([name, data]) => ({ name, ...data })
    );
    populateTeamWindow(charactersArray);
    populateListWindow(charactersArray);
  } catch (error) {
    console.log("Error:", error);
  }
}

function populateTeamWindow(charactersArray) {
  populateTeams(document.querySelector(".mainTeamWindow"), charactersArray, [
    "Sampo", "Black Swan", "Pela", "Bailu"]
  );

  populateTeams(
    document.querySelector(".secondaryTeamWindow"),
    charactersArray,
    ["Yukong", "Dr. Ratio", "Robin", "Aventurine"]
  );

  function populateTeams(teamWindow, charactersArray, teamCharacters) {
    const filteredCharacters = charactersArray.filter((character) =>
      teamCharacters.includes(character.name)
    );

    filteredCharacters.forEach((character) => {
      teamWindow.innerHTML += `<div>
      <img src="${character.imgLink}" alt="${character.name}">
      <p>${character.name}</p>
      <p>${character.path}, ${character.type}</p>
    </div>`;
    });
  }
}

function populateListWindow(charactersArray) {
  const listWindow = document.querySelector(".listWindow");

  charactersArray.forEach((character) => {
    listWindow.innerHTML += `<div>
      <img src="${character.imgLink}" alt="${character.name}">
      <p>${character.name}</p>
      <p>${character.path}, ${character.type}</p>
    </div>`;
  });
}

function toggleTeamWindows() {
  const toggleButton = document.querySelector("#toggleButton");
  const toggleWindow = document.querySelector(".toggleWindow");

  toggleButton.addEventListener("click", () => {
    if (toggleWindow.classList.contains("hidden")) {
      toggleWindow.classList.remove("hidden");
    } else {
      toggleWindow.classList.add("hidden");
    }
  });
}

getCharacters();
toggleTeamWindows();

/* TODO: 
- Add searchability to list
- Add hover/pop-up modals to show character details
- Change populate functions to create elements and append content rather than .innerHTML += to separate divs in HTML
- Add stars to indicate rarity behind each name
*/
