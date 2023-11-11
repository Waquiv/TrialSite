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
          <h2>Heidi Makinen</h2>
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
          <h2>Heidi Makinen 2</h2>
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

    case 3:
      mainElement.innerHTML = `
          <p class="yellow-text">From Our Principle</p>
          <h2>3 Heidi Makinen</h2>
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
    default:
      break;
  }
};
