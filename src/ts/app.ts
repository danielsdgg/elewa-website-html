// export interface ProjectItem {
//     title: string;
//     description: string;
//     tag: string;
//     imgSrc: string;
// }
// export const ProjectItem: ProjectItem[] = [
//     {
//         title: "Introducing Conversational learning ipsum dolar",
//         description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
//         tag:"Education",
//         imgSrc:"https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg"
//     },
//     {
//         title:"Content development for a sustainable future",
//         description: "Eos qui ratione voluptatem sequi nesciunt Neque porro quisquam dolorem ipsum",
//         tag:"Environment",
//         imgSrc:"https://ecomaniac.org/wp-content/uploads/2022/11/The-Green-Environment.jpg"
//     },
//     {
//         title:"Large scale training for healthcare professionals ",
//         description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
//         tag:"Healthcare",
//         imgSrc:"https://www.internationalinsurance.com/wp-content/uploads/2021/01/Singaporean-doctors-scaled.jpg"
//     },
//     {
//         title:"PLanting vegetation",
//         description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam dolorem ipsum",
//         tag:"Agriculture",
//         imgSrc:"https://www.worldbank.org/content/dam/photos/780x439/2021/mar-2/agricultor.jpg"
//     }
// ]

interface ProjectItem {
  title: string;
  description: string;
  tag: string;
  imgSrc: string;
}
const ProjectItem: ProjectItem[] = [
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
];
function renderProjectItems() {
  const projectListDiv = document.getElementById('projectList');
  if (projectListDiv) {
  // Loop through your data and create HTML elements for each project item
  for (const project of ProjectItem) {
    // Create a div element
    const projectItemDiv = document.createElement('div');

    // Create an h2 element for the title
    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;

    // Create a p element for the description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;

    // Create a p element for the tag
    const tagElement = document.createElement('p');
    tagElement.textContent = `Tag: ${project.tag}`;

    // Create an img element for the image
    const imgElement = document.createElement('img');
    imgElement.src = project.imgSrc;
    imgElement.alt = project.title;

    // Append the elements to the projectItemDiv
    projectItemDiv.appendChild(titleElement);
    projectItemDiv.appendChild(descriptionElement);
    projectItemDiv.appendChild(tagElement);
    projectItemDiv.appendChild(imgElement);

    // Append the projectItemDiv to the projectListDiv
    projectListDiv.appendChild(projectItemDiv);
  }
}
}
// Call the renderProjectItems function when the DOM is ready
document.addEventListener('DOMContentLoaded', renderProjectItems);

  // console.log('hello world')
