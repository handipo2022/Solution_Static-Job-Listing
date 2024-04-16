"use strict";
const json = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

let roles = [];
let roleArray = [];
let flagDuplicate = false;
let roleArrayBckp = [];
let filterFlag = false;
let filterContainer;
let rootFilter;
let elementId;
let heightFilterContainer;
let mainHeight;
let jsonBckp = [];
let cardContent;
//add role and no duplicate into roleArray
for (let j = 0; j < json.length; j++) {
  for (let s = 0; s < roleArray.length; s++) {
    if (json[j].role != roleArray[s]) {
      flagDuplicate = false || flagDuplicate;
    } else if (json[j].role == roleArray[s]) {
      flagDuplicate = true || flagDuplicate;
    }
  }
  if (!flagDuplicate) {
    roleArray.push(json[j].role);
  }
  flagDuplicate = false;
}

//add level and no duplicate into roleArray
for (let j = 0; j < json.length; j++) {
  for (let s = 0; s < roleArray.length; s++) {
    if (json[j].level != roleArray[s]) {
      flagDuplicate = false || flagDuplicate;
    } else if (json[j].level == roleArray[s]) {
      flagDuplicate = true || flagDuplicate;
    }
  }
  if (!flagDuplicate) {
    roleArray.push(json[j].level);
  }
  flagDuplicate = false;
}

//add languages and no duplicate into roleArray
for (let j = 0; j < json.length; j++) {
  for (let t = 0; t < json[j].languages.length; t++) {
    for (let s = 0; s < roleArray.length; s++) {
      if (json[j].languages[t] != roleArray[s]) {
        flagDuplicate = false || flagDuplicate;
      } else if (json[j].languages[t] == roleArray[s]) {
        flagDuplicate = true || flagDuplicate;
      }
    }
    if (!flagDuplicate) {
      roleArray.push(json[j].languages[t]);
    }
    flagDuplicate = false;
  }
}

//add tools and no duplicate into roleArray
for (let j = 0; j < json.length; j++) {
  for (let t = 0; t < json[j].tools.length; t++) {
    for (let s = 0; s < roleArray.length; s++) {
      if (json[j].tools[t] != roleArray[s]) {
        flagDuplicate = false || flagDuplicate;
      } else if (json[j].tools[t] == roleArray[s]) {
        flagDuplicate = true || flagDuplicate;
      }
    }
    if (!flagDuplicate) {
      roleArray.push(json[j].tools[t]);
    }
    flagDuplicate = false;
  }
  roleArrayBckp = roleArray;
}
//component display Language categories
function Language({ language }) {
  return (
    <div>
      <text>{language}</text>
    </div>
  );
}
//component display tool
function Tool({ tool }) {
  return (
    <div>
      <text>{tool}</text>
    </div>
  );
}
function clear() {
  roleArray = roleArrayBckp;
  document.getElementById("main").removeChild(filterContainer);
  location.reload(); //refresh page

  const collection = document.getElementsByClassName("card-content");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.top = "0px"; //adjust card-content height due to addition of filter div
  }

  document.getElementById("main").style.height = "fit-content"; //get current main container height
  filterFlag = false;
}

function updateJSON() {
  let flagA = false;
  let flagB = false;
  let flagC = false;
  let flagD = false;

  jsonBckp.length = 0;
  //filtering roles,languages,tools
  for (let y = 0; y < json.length; y++) {
    for (let x = 0; x < roleArray.length; x++) {
      if (json[y].role == roleArray[x]) {
        flagA = true || flagA;
      } else if (json[y].role != roleArray[x]) {
        flagA = false || flagA;
      }

      if (json[y].level == roleArray[x]) {
        flagD = true || flagD;
      } else if (json[y].role != roleArray[x]) {
        flagD = false || flagD;
      }
      for (let z = 0; z < json[y].languages.length; z++) {
        if (json[y].languages[z] == roleArray[x]) {
          flagB = true || flagB;
        } else if (json[y].languages[z] != roleArray[x]) {
          flagB = false || flagB;
        }
      }

      for (let w = 0; w < json[y].tools.length; w++) {
        if (json[y].tools[w] == roleArray[x]) {
          flagC = true || flagC;
        } else {
          flagC = false || flagC;
        }
      }
    
    }

    if (flagB == true || flagA == true || flagC == true || flagD == true) {
      jsonBckp.push(json[y]);
      flagB = false;//reset these flags for next iteration
      flagA = false;
      flagC = false;
      flagD = false;
    }
  }

  // alert(JSON.stringify(jsonBckp));
  setTimeout(() => {
    const cardContentArray = document.getElementsByClassName("card-content");
    // alert("deleted " + cardContentArray.length);
    for (let s = 0; s < cardContentArray.length; s++) {
      cardContentArray[s].style.display = "none";

    }
  }, 50);

  // alert("json bckp length " + jsonBckp.length);
  setTimeout(() => {
    for (let j = 0; j < jsonBckp.length; j++) {
      cardContent = document.createElement("div"); //create new element
      cardContent.classList.add("card-content"); //set class for new element
      cardContent.setAttribute("id", j); //set id for new element
      document.getElementById(j.toString()).style.display = "block";
      document.getElementById("main").appendChild(cardContent); //append inside element with id "main"
      let root = ReactDOM.createRoot(document.getElementById(j.toString())); //createRoot of element
      root.render(
        <CardContent
          logo={jsonBckp[j].logo}
          company={jsonBckp[j].company}
          position={jsonBckp[j].position}
          postedAt={jsonBckp[j].postedAt}
          contract={jsonBckp[j].contract}
          location={jsonBckp[j].location}
          role={jsonBckp[j].role}
          level={jsonBckp[j].level}
          indeks={j}
        />
      ); //rendering element
    }
  }, 100);

  setTimeout(() => {
    heightFilterContainer =
      document.getElementById("filtercontainer").offsetHeight; //read height of filter div
    //change position of card content element
    const collection = document.getElementsByClassName("card-content");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.top = `${heightFilterContainer + 20*i }px`; //adjust card-content height due to addition of filter div
    }

    mainHeight = document.getElementById("main").offsetHeight; //get current main container height
    document.getElementById("main").style.height = `${
      //compansate main container height due to additon of filter div on first render
      mainHeight - heightFilterContainer - 50
    }px`;
  }, 150);
}
const filter = () => {
  //alert(roleArray);
  if (!filterFlag) {
    //display filter once time only .reset by Clear button
    //create element filter
    filterContainer = document.createElement("div"); //create new element
    filterContainer.classList.add("filter"); //set class for new element
    filterContainer.setAttribute("id", "filtercontainer"); //set id for new element

    //add element filter into main container
    document.getElementById("main").appendChild(filterContainer); //append inside element with id "main"
    rootFilter = ReactDOM.createRoot(
      document.getElementById("filtercontainer")
    ); //createRoot of element

    //component filter categories
    for (let k = 0; k < roleArray.length; k++) {
      roles.push(
        <div id={`div${k.toString()}`} class="option-in-filter">
          <text>{roleArray[k]}</text>
          <div class="div-icon-remove">
            <img
              id={`${k.toString()}`}
              class="icon-remove"
              src="./images/icon-remove.svg"
              onClick={(e) => {
                elementId = e.target.id; //get current id
                roleArray.splice(parseInt(elementId), 1); //remove from array

                {
                  updateJSON();//do filtering based on roleArray updated value
                }
                document.getElementById(`div${elementId}`).style.display =
                  "none"; //remove display choosed filter category
                roles.length = 0; //clear array component
                filterFlag = false;
                document.getElementById("main").removeChild(filterContainer); //remove child
                {
                  filter(); //create new component based on updated content of roleArray

                  setTimeout(() => {
                    heightFilterContainer =
                      document.getElementById("filtercontainer").offsetHeight; //read height of filter div
                    //change position of card content element
                    const collection =
                      document.getElementsByClassName("card-content");
                    for (let i = 0; i < collection.length; i++) {
                      collection[i].style.top = `${
                        heightFilterContainer + 20*i
                      }px`; //adjust card-content height due to addition of filter div
                    }

                    mainHeight = document.getElementById("main").offsetHeight; //get current main container height
                    document.getElementById("main").style.height = `${
                      //compansate main container height due to additon of filter div on first render
                      mainHeight - heightFilterContainer - 50
                    }px`;
                  }, 20);
                }
              }}
            ></img>
          </div>
        </div>
      );
    }
    //rendering div contains filter categories
    rootFilter.render(
      <>
        <div class="div-roles">{roles}</div>
        <div class="div-clear" onClick={clear}>
          <text class="text-clear">Clear</text>
        </div>
      </>
    );

    //do delay
    setTimeout(() => {
      heightFilterContainer =
        document.getElementById("filtercontainer").offsetHeight; //read height of filter div
      //change position of card content element
      const collection = document.getElementsByClassName("card-content");
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.top = `${heightFilterContainer + 20}px`; //adjust card-content height due to addition of filter div
      }

      mainHeight = document.getElementById("main").offsetHeight; //get current main container height
      document.getElementById("main").style.height = `${
        //adjust main container height due to additon of filter div
        mainHeight + heightFilterContainer + 50
      }px`;
    }, 20);

    filterFlag = true;
  }
};

function CardContent({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  indeks,
}) {
  return (
    <div class="card-content-detail" onClick={filter}>
      <img class="logo" src={logo}></img>
      <div class="card-content-detail-line1">
        <text class="company">{company}</text>
        {json[indeks].new && (
          <div class="div-feature new">
            <text>NEW!</text>
          </div>
        )}
        {json[indeks].featured && (
          <div class="div-feature featured">
            <text>FEATURED</text>
          </div>
        )}
      </div>
      <text class="position">{position}</text>
      <div class="card-content-detail-line2">
        <text>{postedAt}</text>
        <text>.</text>
        <text>{contract}</text>
        <text>.</text>
        <text>{location}</text>
      </div>
      <hr />
      <div class="card-content-detail-line3">
        <div>
          <text>{role}</text>
        </div>
        <div>
          <text>{level}</text>
        </div>
        {json[indeks].languages.map((language) => (
          <Language language={language} />
        ))}
        {json[indeks].tools.map((tool) => (
          <Tool tool={tool} />
        ))}
      </div>
    </div>
  );
}

for (let j = 0; j < json.length; j++) {
  cardContent = document.createElement("div"); //create new element
  cardContent.classList.add("card-content"); //set class for new element
  cardContent.setAttribute("id", j); //set id for new element
  document.getElementById("main").appendChild(cardContent); //append inside element with id "main"
  let root = ReactDOM.createRoot(document.getElementById(j.toString())); //createRoot of element
  root.render(
    <CardContent
      logo={json[j].logo}
      company={json[j].company}
      position={json[j].position}
      postedAt={json[j].postedAt}
      contract={json[j].contract}
      location={json[j].location}
      role={json[j].role}
      level={json[j].level}
      indeks={j}
    />
  ); //rendering element
}
