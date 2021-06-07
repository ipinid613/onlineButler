const modalOverlay = document.querySelector('.modalOverlay');
const modalBtn = document.querySelector('#modalBtn');
// const index = document.querySelector("");
const closeBtn = document.querySelector('#closeBtn');

modalBtn.addEventListener('click', (e) => {
    modalOverlay.style.display = 'flex';
    // index.style.filter = 'blur(5px)';
})

closeBtn.addEventListener('click', (e) => {
    modalOverlay.style.display = 'none';
    // index.style.filter = 'blur(0px)';
})

// modalOverlay.addEventListener("click", (e) => {
//     const evTarget = e.target;
//     if (evTarget.classList.contains("modalOverlay")) {
//       modalOverlay.style.display = "none";
//     //   section3.style.filter = "blur(0px)";
//     }
//   });