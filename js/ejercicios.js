document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("checkBtn");
  if (!checkBtn) return;

  checkBtn.addEventListener("click", () => {
    const exercises = document.querySelectorAll("[data-exercise]");
    let correct = 0;

    exercises.forEach(ex => {
      const input = ex.querySelector("input");
      const answer = input.dataset.answer.trim().toLowerCase();
      const user = input.value.trim().toLowerCase();

      if (user === answer) {
        input.style.borderColor = "green";
        correct++;
      } else {
        input.style.borderColor = "red";
      }
    });

    const result = document.getElementById("resultMessage");
    result.textContent = `Score: ${correct} / ${exercises.length}`;
  });
});

