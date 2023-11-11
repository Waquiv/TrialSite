const languageInfo = document.querySelector("#syllabus-text");
const subInfo = document.querySelector("#table");
const languageElements = document.getElementsByClassName("language");
const subElements = document.getElementsByClassName("btn");

const changeSubject = (std, element) => {
  const subElements = document.getElementsByClassName("btn");

  for (let i = 0; i < subElements.length; i++) {
    subElements[i].classList.remove("active-btn");
  }

  element.classList.add("active-btn");

  switch (std) {
    case "1":
      subInfo.innerHTML = `
          <table border="1">
            <tr>
              <th colspan="2">M.A.GIRLS' ENGLISH SCHOOL</th>
            </tr>
            <tr>
              <td>Teacher's Qualification</td>
              <td>Total No.</td>
            </tr>
            <tr>
              <td>Principal</td>
              <td>1</td>
            </tr>
            <tr>
              <td>PGT</td>
              <td>22</td>
            </tr>
            <tr>
              <td>TGT</td>
              <td>05</td>
            </tr>
            <tr>
              <td>D.Ed.</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Total No. of teachers</td>
              <td>47</td>
            </tr>
          </table>
       `;
      break;
    case "2":
      subInfo.innerHTML = `
          <table border="1">
            <tr>
              <th colspan="2">M.A.BOYS' ENGLISH SCHOOL</th>
            </tr>
            <tr>
              <td>Teacher's Qualification</td>
              <td>Total No.</td>
            </tr>
            <tr>
              <td>Principal</td>
              <td>1</td>
            </tr>
            <tr>
              <td>PGT</td>
              <td>23</td>
            </tr>
            <tr>
              <td>TGT</td>
              <td>13</td>
            </tr>
            <tr>
              <td>MONTESSORI</td>
              <td>2</td>
            </tr>
            <tr>
              <td>D.Ed.</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Total No. of teachers</td>
              <td>48</td>
            </tr>
          </table>
        `;
      break;
    case "3":
      subInfo.innerHTML = `
          <table border="1">
            <tr>
              <th colspan="2">M.A.BOYS' GUJARATI SCHOOL</th>
            </tr>
            <tr>
              <td>Teacher's Qualification</td>
              <td>Total No.</td>
            </tr>
            <tr>
              <td>Principal</td>
              <td>1</td>
            </tr>
            <tr>
              <td>PGT</td>
              <td>23</td>
            </tr>
            <tr>
              <td>TGT</td>
              <td>13</td>
            </tr>
            <tr>
              <td>MONTESSORI</td>
              <td>2</td>
            </tr>
            <tr>
              <td>D.Ed.</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Total No. of teachers</td>
              <td>48</td>
            </tr>
          </table>
        `;
      break;
    case "4":
      subInfo.innerHTML = `
              <table border="1">
            <tr>
              <th colspan="2">M.A.GIRLS' GUJARATI SCHOOL</th>
            </tr>
            <tr>
              <td>Teacher's Qualification</td>
              <td>Total No.</td>
            </tr>
            <tr>
              <td>Principal</td>
              <td>1</td>
            </tr>
            <tr>
              <td>PGT</td>
              <td>23</td>
            </tr>
            <tr>
              <td>TGT</td>
              <td>13</td>
            </tr>
            <tr>
              <td>MONTESSORI</td>
              <td>2</td>
            </tr>
            <tr>
              <td>D.Ed.</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Total No. of teachers</td>
              <td>48</td>
            </tr>
          </table>
          `;
      break;
    default:
      break;
  }
};
