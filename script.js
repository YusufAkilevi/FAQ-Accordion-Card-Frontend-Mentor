const questionBoxes = document.querySelectorAll(".question-box");
const answer = document.querySelector(".answer");
const questionsContainer = document.querySelector(".questions");

questionsContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (!target) return;

  if (target.classList.contains("question")) {
    const openQ = document.querySelector(".open");
    if (openQ && openQ.parentElement !== target.parentElement) {
      document
        .querySelector(".question-open")
        .classList.remove("question-open");
      openQ.classList.remove("open");
    }

    if (openQ && openQ.parentElement === target.parentElement) {
      document
        .querySelector(".question-open")
        .classList.remove("question-open");
      openQ.classList.remove("open");
      return;
    }
    target.classList.add("question-open");
    target.nextElementSibling.classList.add("open");
  }
});
// questionBoxes.forEach((box) => {
//   box.addEventListener("click", function (e) {
//     const target = e.target;
//     if (!target) return;
//     if (target.classList.contains("question")) {
//       const openQ = document.querySelector(".open");
//       if (openQ && openQ.parentElement !== target.parentElement) {
//         document
//           .querySelector(".question-open")
//           .classList.remove("question-open");
//         openQ.classList.remove("open");
//       }

//       if (openQ && openQ.parentElement === target.parentElement) {
//         document
//           .querySelector(".question-open")
//           .classList.remove("question-open");
//         openQ.classList.remove("open");
//         return;
//       }
//       target.classList.add("question-open");
//       target.nextElementSibling.classList.add("open");
//     }
//   });
// });
