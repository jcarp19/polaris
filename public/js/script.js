const openDrawer = (drawernumber) => {
  let activeDrawer = document.getElementById(`drawer${drawernumber}`);
  let activeIcon = document.querySelector(`#drawerIcon${drawernumber} > use`);

  if (activeDrawer.classList.contains("closed")) {
    activeDrawer.classList.toggle("open");
    activeDrawer.classList.toggle("open-drawer");
    activeDrawer.classList.remove("close-drawer");
    activeDrawer.classList.toggle("closed");
    activeIcon.setAttribute("href", "./img/sprite.svg#icon-circle-with-minus");
  } else if (activeDrawer.classList.contains("open")) {
    activeDrawer.classList.toggle("closed");
    activeDrawer.classList.remove("open-drawer");
    activeDrawer.classList.toggle("close-drawer");
    activeDrawer.classList.toggle("open");
    activeIcon.setAttribute("href", "./img/sprite.svg#icon-circle-with-plus");
  }
};
