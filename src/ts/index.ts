document.addEventListener("DOMContentLoaded", () => {
    const solutions = document.getElementById("solutions");
    const mainMenu = document.querySelector(".main_menu") as HTMLDivElement
  
    solutions?.addEventListener("click", (e) => {
      e.preventDefault();
      mainMenu.style.display = mainMenu.style.display === "none" ? "flex" : "none";
    });
  });
  