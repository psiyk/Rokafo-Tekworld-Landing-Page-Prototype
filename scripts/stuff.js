"use strict";

document.querySelectorAll("service-grid a.cta").forEach((a) => {
  a.classList.add("pr");
  alert(a);
  a.innerHTML +=
    '<iconify-icon icon="heroicons-solid:arrow-right"></iconify-icon>';
});
