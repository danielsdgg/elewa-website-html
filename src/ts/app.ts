export interface ProjectItem {
    title: string;
    description: string;
    tag: string;
    imgSrc: string;
}
export const ProjectItem: ProjectItem[] = [
    {
        title: "Introducing Conversational learning ipsum dolar",
        description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
        tag:"Education",
        imgSrc:"https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg"
    },
    {
        title:"Content development for a sustainable future",
        description: "Eos qui ratione voluptatem sequi nesciunt Neque porro quisquam dolorem ipsum",
        tag:"Environment",
        imgSrc:"https://ecomaniac.org/wp-content/uploads/2022/11/The-Green-Environment.jpg"
    },
    {
        title:"Large scale training for healthcare professionals ",
        description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
        tag:"Healthcare",
        imgSrc:"https://www.internationalinsurance.com/wp-content/uploads/2021/01/Singaporean-doctors-scaled.jpg"
    },
    {
        title:"PLanting vegetation",
        description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
        tag:"Agriculture",
        imgSrc:"https://www.worldbank.org/content/dam/photos/780x439/2021/mar-2/agricultor.jpg"
    }
]

function renderProjects() {
  // app.ts:1 Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "video/mp2t". Strict MIME type checking is enforced for module scripts per HTML spec.
    const appDiv = document.getElementById('app');
  
    if (appDiv) {
      ProjectItem.forEach((project: ProjectItem) => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <p>Tag: ${project.tag}</p>
          <img src="${project.imgSrc}" alt="${project.title}" width="300" height="200">
          <hr>
        `;
        appDiv.appendChild(projectElement);
      });
    }
  }
  
  renderProjects();
  console.log('hello world')