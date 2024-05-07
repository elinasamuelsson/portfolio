async function getCharacters() {
  const response = await fetch("./characters.json");
  const charactersData = await response.json();

  const charactersArray = Object.entries(charactersData).map(
    ([name, data]) => ({ name, ...data })
  );

  populateTeamWindows(charactersArray);
  populateListWindow(charactersArray);
}

function populateTeamWindows(charactersArray) {
  // TODO: needs optimization
  const mainTeamWindow = document.querySelector(".mainTeamWindow");
  const mainTeamCharacters = ["Sampo", "Black Swan", "Pela", "Bailu"];
  const mainTeam = charactersArray.filter((character) =>
    mainTeamCharacters.includes(character.name)
  );

  mainTeam.forEach((character) => {
    mainTeamWindow.innerHTML += `<div>
      <img src="${character.imgLink}" alt="${character.name}">
      <p>${character.name}</p>
      <p>${character.path}, ${character.type}</p>
    </div>`;
  });

  const secondaryTeamWindow = document.querySelector(".secondaryTeamWindow");
  const secondaryTeam = ["Sparkle", "Dr. Ratio", "Aventurine", "Yukong"];
  const secondMainTeam = charactersArray.filter((character) =>
    secondaryTeam.includes(character.name)
  );

  secondMainTeam.forEach((character) => {
    secondaryTeamWindow.innerHTML += `<div class="characterItem">
      <img src="${character.imgLink}" alt="${character.name}">
      <p>${character.name}</p>
      <p>${character.path}, ${character.type}</p>
    </div>`;
  });
}

function populateListWindow(charactersArray) {
  const listWindow = document.querySelector(".listWindow");
  charactersArray.forEach((character) => {
    listWindow.innerHTML += `
    <div class="characterItem">
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
- Optimize populate functions
- Add stars to indicate rarity behind each name

*/