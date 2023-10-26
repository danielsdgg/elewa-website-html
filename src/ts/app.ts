document.addEventListener("DOMContentLoaded", () => {
  //Declare variables for the elements of the html 
  const icon = document.getElementById("icon");
  const iconTwo = document.getElementById("icontwo");
  const ul = document.querySelector("ul");
  //condition to check if the icon,icontwo and ul exist
  if (icon && iconTwo && ul) {
      //When fa-bars is clicked it adds the show class,then it's replaced with the fa-times
    icon.addEventListener("click", () => {
      ul.classList.add("show");
      icon.style.display = "none";
      iconTwo.style.display = "block";
    });
    //when fa-times is clicked it removes the .show class, then it's display is replaced with the fa-bars
    iconTwo.addEventListener("click", () => {
      ul.classList.remove("show");
      icon.style.display = "block";
      iconTwo.style.display = "none";
    });
  }
});

  //structure for the mock data
  interface ProjectItem{
    title:string
    description:string
    tag:string
    imgSrc:string
  }

  //Constant description to cut out repetition
  const description="Eos qui ratione voluptatem suqui nesciunt.Neque porro quisquam dolorem ipsum quia"

  //The actual Mock data
  const mockProject:ProjectItem[]=[
    {
      title: "Introducing Conversational learning ipsum dolar",
      description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
      tag: "Education",
      imgSrc: "https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg"
      },
      {
      title: "Content development for a sustainable future",
      description: "Eos qui ratione voluptatem sequi nesciunt Neque porro quisquam dolorem ipsum",
      tag: "Environment",
      imgSrc: "https://ecomaniac.org/wp-content/uploads/2022/11/The-Green-Environment.jpg"
      },
      {
      title: "Large scale training for healthcare professionals ",
      description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
      tag: "Healthcare",
      imgSrc: "https://www.internationalinsurance.com/wp-content/uploads/2021/01/Singaporean-doctors-scaled.jpg"
      },
      {
      title: "Planting vegetation",
      description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
      tag: "Agriculture",
      imgSrc: "https://www.worldbank.org/content/dam/photos/780x439/2021/mar-2/agricultor.jpg"
      }
  ]
  //Get the div element from the html
  const projectsDisplay=document.getElementById("works") as HTMLDivElement
  console.log(projectsDisplay)
  //iterate over the mock data to display them in cards
  mockProject.forEach((project)=>{
    const card = document.createElement("div");
      card.className = "project";
    //image for mock data
      const img = document.createElement("img");
      img.src = project.imgSrc;
      img.alt = project.title;
      //title for mock data
      const h2 = document.createElement("h2");
      h2.textContent = project.title;
      //paragraph for mock data
      const p = document.createElement("p");
      p.textContent = project.description;
      //span for mock data
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = project.tag;
      card.append(img,span, h2, p);
      projectsDisplay.appendChild(card);
  })
  //Grab the arrows from the html
  const leftArrow=document.getElementById("left-arrow")
  const rightArrow=document.getElementById("right-arrow")
  //Initial scroll position set to 0
  let scrollPosition=0;
  //My image width initial being 300px 
  const imageWidth=300;

  //Event listener to handle the left arrow click
  leftArrow?.addEventListener('click',()=>{
   scrollPosition-=imageWidth
   //Condition of reaching far left end of the page
   if(scrollPosition<0){
    scrollPosition=0
   }
   //Apply the scroll method on the project to scroll items to the left
   projectsDisplay.scroll({
    left:scrollPosition,
    behavior:"smooth"
   })
  })

  //Event listener to handle right arrow click
  rightArrow?.addEventListener("click", () => {
    //Scroll position set as equal to image width
    scrollPosition += imageWidth;
    //Condition checking whether we have reached the end of our page
    if (scrollPosition > projectsDisplay.scrollWidth - projectsDisplay.clientWidth) {
      scrollPosition = projectsDisplay.scrollWidth - projectsDisplay.clientWidth;
    }
    //Apply the scroll method on the project to scroll items to the right
    projectsDisplay.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });
  });