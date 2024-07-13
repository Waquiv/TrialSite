const languageInfo = document.querySelector("#syllabus-text");
const subInfo = document.querySelector("#table");
const languageElements = document.getElementsByClassName("language");
const subElements = document.getElementsByClassName("btn");

const changeText = (lang, element) => {
  for (let i = 0; i < languageElements.length; i++) {
    languageElements[i].classList.remove("active");
  }
  element.classList.add("active");

  if (lang == "eng") {
    languageInfo.innerHTML =
    "We have selected Lead Curriculum in standards 1 to 5, with the view to enhance conceptual learning in the children. We go with the latest technology in the field of education as an aid to provide a holistic development to the children. The classes are all equipped with smart boards and have maximum available practical working models to explain the subjects optimally.<br> <br> Being a GSEB affiliated school, we go in accordance with the state government prescribed books from standard 6 onwards. Our emphasis is on the conceptual and all round development of the child. The child’s understanding is promoted through multiple activities and projects. Teaching is activity based and in synch with the smart boards available in each class "
      // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentiumsequi ullam facilis minus distinctio, eum quia accusantium laboriosam obcaecatiquisquam quasi quis? Corrupti, ullam deleniti quisquam ut tempora qui! Minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum distinctio quia obcaecati quod adipisci hicsed odit perspiciatis asperiores cum. Beatae commodi <br/><br/> illo ducimus soluta necessitatibus culpa itaque voluptates quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam vero,aliquam in molestiae praesentium assumenda nostrum aperiam molestias libero voluptas dolorum corporis aspernatur nihil! Odio explicabo cum delectus corporis sunt!";
    changeSubject("1-2", lang);
  } else {
    languageInfo.innerHTML = "We have selected Lead Curriculum in standards 1 to 5, with the view to enhance conceptual learning in the children. We go with the latest technology in the field of education as an aid to provide a holistic development to the children. The classes are all equipped with smart boards and have maximum available practical working models to explain the subjects optimally.<br> <br> Being a GSEB affiliated school, we go in accordance with the state government prescribed books from standard 6 onwards. Our emphasis is on the conceptual and all round development of the child. The child’s understanding is promoted through multiple activities and projects. Teaching is activity based and in synch with the smart boards available in each class ";
    changeSubject("1-2", lang);
  }
};

const changeSubject = (std, element) => {
  const subElements = document.getElementsByClassName("btn");
  const active = document.querySelector(".active");

  for (let i = 0; i < subElements.length; i++) {
    subElements[i].classList.remove("active-btn");
  }

  element.classList.add("active-btn");

  const language = active.ariaLabel;

  if (language == "eng") {
    switch (std) {
      case "1-2":
        subInfo.innerHTML = `
        <table border="1">
            <tr>
              <td>Language-1</td>
              <td>ELGA (English)</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td></td>
            </tr>
            <tr>
              <td>Environment</td>
              <td></td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Computer</td>
              <td>CCS</td>
            </tr>
            <tr>
              <td>Moral Science</td>
              <td></td>
            </tr>
            <tr>
              <td>Judo</td>
              <td></td>
            </tr>
            <tr>
              <td>P.T.</td>
              <td></td>
            </tr>
            <tr>
              <td>Library</td>
              <td></td>
            </tr>
            <tr>
              <td>M.D.</td>
              <td></td>
            </tr>
            <tr>
              <td>Drawing</td>
              <td></td>
            </tr>
          </table>`;
        break;
      case "3-5":
        subInfo.innerHTML = `
         <table border="1">
            <tr>
              <td>Language-1</td>
              <td>ELGA (English)</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td></td>
            </tr>
            <tr>
              <td>Environment</td>
              <td></td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Language-3</td>
              <td>Hindi</td>
            </tr>
            <tr>
              <td>Computer</td>
              <td>CCS</td>
            </tr>
            <tr>
              <td>Moral Science</td>
              <td></td>
            </tr>
            <tr>
              <td>Judo</td>
              <td></td>
            </tr>
            <tr>
              <td>P.T.</td>
              <td></td>
            </tr>
            <tr>
              <td>Library</td>
              <td></td>
            </tr>
            <tr>
              <td>M.D.</td>
              <td></td>
            </tr>
            <tr>
              <td>Drawing</td>
              <td></td>
            </tr>
          </table> 
        `;
        break;
      case "6-10":
        subInfo.innerHTML = `
         <table border="1">
            <tr>
              <td>Language-1</td>
              <td>ELGA (English)</td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Language-3</td>
              <td>Hindi</td>
            </tr>
            <tr>
              <td>Language-4</td>
              <td>Arabic</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td></td>
            </tr>
            <tr>
              <td>Science</td>
              <td></td>
            </tr>
            <tr>
              <td>Social Science</td>
              <td></td>
            </tr>
            <tr>
              <td>G.K.</td>
              <td></td>
            </tr>
            <tr>
              <td>Computer</td>
            </tr>
            <tr>
            <td>Drawing</td>
            <td></td>
            </tr>
            <tr>
            <td>Moral Science</td>
            <td></td>
            </tr>
            <tr>
              <td>P.T.</td>
              <td></td>
            </tr>
            <tr>
              <td>Library</td>
              <td></td>
            </tr>
            <tr>
              <td>M.D.</td>
              <td></td>
            </tr>
            <tr>
              <td>Life Skills</td>
              <td></td>
            </tr>
            <tr>
              <td>Stem Lab</td>
              <td></td>
            </tr>
            </table>
        `;
        break;
      case "11-12":
        subInfo.innerHTML = `
        
           <table border="1">
           <tr>
             <td>Accountancy</td>
             <td></td>
           </tr>
           <tr>
             <td>Statistics</td>
             <td></td>
           </tr>
           <tr>
             <td>Economics</td>
             <td></td>
           </tr>
           <tr>
             <td>Organization of commerce</td>
             <td></td>
           </tr>
            <tr>
              <td>Language-1</td>
              <td>ELGA (English)</td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Computer</td>
              <td>CCS</td>
            </tr>
            <tr>
              <td>Moral Science</td>
              <td></td>
            </tr>
            <tr>
            <td>P.T.</td>
            <td></td>
            </tr>
            <tr>
              <td>M.D.</td>
              <td></td>
            </tr>
            <tr>
              <td>Life Skills</td>
              <td></td>
            </tr>
            <tr>
              <td>Judo</td>
              <td></td>
            </tr>
          </table>
          `;
        break;
      default:
        break;
    }
  } else {
    switch (std) {
      case "1-2":
        subInfo.innerHTML = `
        <table border="1">
            <tr>
              <td>Language-1</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td></td>
            </tr>
            <tr>
              <td>G.K.</td>
              <td></td>
            </tr>
            <tr>
              <td>Computer</td>
            </tr>
            <tr>
              <td>Drawing</td>
              <td></td>
            </tr>
            <tr>
              <td>P.T.</td>
              <td></td>
            </tr>
            <tr>
              <td>Islamiyat</td>
              <td></td>
            </tr>
            <tr>
              <td>Life Skills</td>
              <td></td>
            </tr>
            <tr>
              <td>Library</td>
              <td></td>
            </tr>
            <tr>
              <td>Judo/Karate</td>
              <td></td>
            </tr>
          </table>`;
        break;
      case "3-5":
        subInfo.innerHTML = `
        <table border="1">
            <tr>
              <td>Language-1</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td></td>
            </tr>
            <tr>
              <td>Env</td>
              <td></td>
            </tr>
            <tr>
              <td>G.K.</td>
              <td></td>
            </tr>
            <tr>
              <td>Computer</td>
            </tr>
            <tr>
              <td>Drawing</td>
              <td></td>
            </tr>
            <tr>
              <td>P.T.</td>
              <td></td>
            </tr>
            <tr>
              <td>Islamiyat</td>
              <td></td>
            </tr>
            <tr>
              <td>Life Skills</td>
              <td></td>
            </tr>
            <tr>
              <td>Library</td>
              <td></td>
            </tr>
            <tr>
              <td>Judo/Karate</td>
              <td></td>
            </tr>
          </table>
        `;
        break;
      case "6-10":
        subInfo.innerHTML = `
        <table border="1">
            <tr>
              <td>Language-1</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Language-3</td>
              <td>Hindi</td>
            </tr>
            <tr>
              <td>Language-4</td>
              <td>Arabic</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td></td>
            </tr>
            <tr>
              <td>Science</td>
              <td></td>
            </tr>
            <tr>
              <td>Social Study</td>
              <td></td>
            </tr>
            <tr>
              <td>G.K.</td>
              <td></td>
            </tr>
            <tr>
              <td>Computer</td>
            </tr>
            <tr>
              <td>Drawing</td>
              <td></td>
            </tr>
            <tr>
              <td>Islamiyat</td>
              <td></td>
            </tr>
            <tr>
              <td>P.T.</td>
              <td></td>
            </tr>
            <tr>
              <td>Life Skills</td>
              <td></td>
            </tr>
            <tr>
              <td>Library</td>
              <td></td>
            </tr>
            <tr>
              <td>Judo/Karate</td>
              <td></td>
            </tr>
          </table>
        `;
        break;
      case "11-12":
        subInfo.innerHTML = `
        
           <table border="1">
           <tr>
             <td>Accountancy</td>
             <td></td>
           </tr>
           <tr>
             <td>Statistics</td>
             <td></td>
           </tr>
           <tr>
             <td>Economics</td>
             <td></td>
           </tr>
           <tr>
             <td>Organization of commerce</td>
             <td></td>
           </tr>
            <tr>
              <td>Language-1</td>
              <td>Gujarati</td>
            </tr>
            <tr>
              <td>Language-2</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Computer</td>
            </tr>
            <tr>
              <td>Moral Science</td>
              <td></td>
            </tr>
            <tr>
            <td>P.T.</td>
            <td></td>
            </tr>
            <tr>
              <td>Islamiyat</td>
              <td></td>
            </tr>
            <tr>
              <td>Life Skills</td>
              <td></td>
            </tr>
            <tr>
              <td>Library</td>
              <td></td>
            </tr>
          </table>
          `;
        break;
      default:
        break;
    }
  }
};
