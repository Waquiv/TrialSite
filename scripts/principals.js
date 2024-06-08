var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
const mainElement = document.querySelector(".main-info-container");
const mainImgElement = document.querySelector(".main-img-container");

const gridAction = (index) => {
  if (index == 0) {
    return;
  }

  switch (index) {
    case 1:
      mainElement.innerHTML = `
          <p class="yellow-text">From Our Principle</p>
          <h2>Urusa Mam</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            dignissimos labore corrupti animi facere. Facilis ipsum quis
            consequuntur officia animi, molestias nulla quam exercitationem
            assumenda. Debitis ut nulla deserunt voluptatem laudantium officiis
            unde pariatur! Eos saepe, sint quibusdam tempora nemo fugiat magni
            deleniti numquam veniam at sapiente officiis necessitatibus dolor.
            assumenda. Debitis ut nulla deserunt voluptatem laudantium officiis
            unde pariatur! Eos saepe, sint quibusdam tempora nemo fugiat magni
            deleniti numquam veniam at sapiente officiis necessitatibus dolor.
            assumenda. Debitis ut nulla deserunt voluptatem laudantium officiis
            unde pariatur! Eos saepe, sint quibusdam tempora nemo fugiat magni
            deleniti numquam veniam at sapiente officiis necessitatibus dolor.
          </p>
          <h6>With warm regards,</h6>
          <h3>Safia Maqsud Multani</h3>
          <h4>Principal,</h4>
          <h5>M.A Girl's English School</h5>
      `;
      break;

    case 2:
      mainElement.innerHTML = `
          <p class="yellow-text">From Our Principle</p>
          <h2>Safiya Mam</h2>
          <p>
          The Prophet Muhammad (PBUH) said: "For him who follows a path for seeking knowledge, Allah will ease for him the path to Paradise." (Muslim) .
          </p>
          <p>
          Our esteemed institution strongly believes in these words and is dedicated to nurturing young minds and souls. Our mission is to provide a holistic education that not only imparts knowledge but also instills the values of compassion, integrity, and a deep understanding of our Islamic heritage.
          </p>
          <p>
          Our commitment to academic excellence is matched by our unwavering dedication to fostering an environment of inclusivity and respect for diverse backgrounds and perspectives. 
          </p>
          <p>In these challenging times, our faith and unity remains our pillars of strength. Our talented faculty and staff are here to support and guide you every step of the way.Consistent support of parents is the most strengthening power. I pay my gratitude to them for showing their continuous faith in us. </p>
          <p>"We believe in Education with a difference to make a difference.” </p>
          <h6>With warm regards,</h6>
          <h3>Safia Maqsud Multani</h3>
          <h4>M.A. B.ED </h4>
          <h5>M.A Girl's English School</h5>
      `;
      break;

    case 3:
      mainElement.innerHTML = `
          <p class="yellow-text">From Our Principle</p>
          <h2>Shabana Mam </h2>
          <p>
          "Girls are Future, Let them grow and educate." . 
          </p>
          <p>
          Boys you keep going… “Do something now; your future self will thank you later. ” 
          </p>
          <p>
          I am honored and feel very privileged to be the Principal of Alfesani Education Trust’s M.A. GIRLS’ SECONDARY SCHOOL (GUJ ARATI MEDIUM) from 14th June 2004 till today and served as a principal of M.A. GIRLS’ ENGLISH PRIMARY SCHOOL from 2005 to 2013. 
          </p>
          <p>
          We affirm that Education is not a preparation of life, Education is life itself. Our Quran Says IQRA' bismi rabbikallazi khalaq and I truly believe in this. Our community, really lacking behind due to lack of Education in society. Let all educate and be happy. 
          </p>
          <p>
          Our complete focus is to provide a support Centre to our children so they continue learning and developing towards becoming whole and healthy individuals. Staff truly love working with kids and parents. We take seriously the trust you placed on us by sending your children to school everyday, and we work hard to make the families feel safe and supported.  

          Our educational processes are carefully designed to cultivate and stimulate the intellectual, social, and personal development of all the students. We are not for profit school so all financial surpluses are reinvested in the education of today's and 
          
          tomorrow students. 
          </p>
          <p>
          Along with academics we do all curricular activities to build up our students strong personality who will face and stand in society. 
          </p>
          <p>
          I like to work with my staff by keeping confidence in them and believes in team work. 
          </p>
          <h6>"I always love to be a Leader and not a Boss" </h6>
          <h3>SHABANA KAZI </h3>
          <h4>M.A. B.ED </h4>
          <h5>M.A. GIRLS’ SECONDARY SCHOOL /  M.A. BOYS’ SECONDARY SCHOOL</h5>
          `;
      break;
    default:
      break;
  }
};
