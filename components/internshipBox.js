
function limitText(p, limit) {
    const text = p.textContent;
    if (text.length > limit) {
      p.textContent = text.slice(0, limit) + "...";
    }
  }

  

function createInternshipBoxWrapper() {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("project-box-wrapper");
  
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-box");
    projectDiv.style.backgroundColor = "#fee4cb";
  
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("project-box-header");
  
    const dateSpan = document.createElement("span");
    dateSpan.textContent = "December 10, 2020";
  
    const moreWrapperDiv = document.createElement("div");
    moreWrapperDiv.classList.add("more-wrapper");
  
    const moreBtn = document.createElement("button");
    moreBtn.classList.add("project-btn-more");
  
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.classList.add("feather", "feather-more-vertical");
  
    const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "12");
    circle1.setAttribute("cy", "12");
    circle1.setAttribute("r", "1");
  
    const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "12");
    circle2.setAttribute("cy", "5");
    circle2.setAttribute("r", "1");
  
    const circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle3.setAttribute("cx", "12");
    circle3.setAttribute("cy", "19");
    circle3.setAttribute("r", "1");
  
    svg.appendChild(circle1);
    svg.appendChild(circle2);
    svg.appendChild(circle3);
  
    moreBtn.appendChild(svg);
    moreWrapperDiv.appendChild(moreBtn);
  
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(moreWrapperDiv);
  
    projectDiv.appendChild(headerDiv);
  
    wrapperDiv.appendChild(projectDiv);
  
    return wrapperDiv;
  }

  function createInternshipHeader(title) {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("project-box-content-header");
  
    const mainTitleP = document.createElement("p");
    mainTitleP.classList.add("box-content-header");
    mainTitleP.textContent = title;
  
    const subTitleP = document.createElement("p");
    subTitleP.classList.add("box-content-subheader");
    subTitleP.textContent = "Pending ...";
  
    headerDiv.appendChild(mainTitleP);
    headerDiv.appendChild(subTitleP);
  
    return headerDiv;
  }

  function createInternshipDescription(description) {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("box-progress-wrapper");
  
    const boxDiv = document.createElement("div");
    boxDiv.classList.add("project-box");
    boxDiv.style.backgroundColor = "#fee4cb";
  
    const headerDiv = createInternshipHeader("Web Designing");
    const progressDiv = document.createElement("div");
    progressDiv.classList.add("box-progress-wrapper");
  
    const progressHeaderP = document.createElement("p");
    progressHeaderP.classList.add("box-progress-header");
    progressHeaderP.textContent = "Google";
  
    const internshipDescP = document.createElement("p");
    internshipDescP.classList.add("box-internship-description");
    internshipDescP.textContent = description;
    limitText(internshipDescP, 50);
  
    progressDiv.appendChild(progressHeaderP);
    progressDiv.appendChild(internshipDescP);
  
    // boxDiv.appendChild(headerDiv);
    boxDiv.appendChild(progressDiv);
  
    wrapperDiv.appendChild(boxDiv);
  
    return wrapperDiv;
  }
  
  function createInternshipFooter() {
    const footerDiv = document.createElement("div");
    footerDiv.className = "project-box-footer";
   
    const addParticipantBtn = document.createElement("button");
    addParticipantBtn.className = "add-participant";
    addParticipantBtn.style.color = "#ff942e";
  
    const plusSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    plusSvg.setAttribute("width", "12");
    plusSvg.setAttribute("height", "12");
    plusSvg.setAttribute("viewBox", "0 0 24 24");
    plusSvg.setAttribute("fill", "none");
    plusSvg.setAttribute("stroke", "currentColor");
    plusSvg.setAttribute("stroke-width", "3");
    plusSvg.setAttribute("stroke-linecap", "round");
    plusSvg.setAttribute("stroke-linejoin", "round");
    plusSvg.className = "feather feather-plus";
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12 5v14M5 12h14");
  
    plusSvg.appendChild(path);
  
    const daysLeftDiv = document.createElement("div");
    daysLeftDiv.className = "days-left";
    daysLeftDiv.textContent = "2 Days Left";
    daysLeftDiv.style.color = "#ff942e";
  
    footerDiv.appendChild(daysLeftDiv);
  
    return footerDiv;
  }
  
function createInternshipBox(title, description) {

    const appContent = document.querySelector('.project-boxes');

    const wrapper = createInternshipBoxWrapper();
    const projectBox = wrapper.querySelector('.project-box');

    const header = createInternshipHeader(title);
    projectBox.appendChild(header);

    const desc = createInternshipDescription(description);
    projectBox.appendChild(desc);

    const footer = createInternshipFooter();
    projectBox.appendChild(footer);

    appContent.appendChild(wrapper);
}
