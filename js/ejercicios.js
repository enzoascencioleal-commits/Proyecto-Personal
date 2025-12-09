document.addEventListener("DOMContentLoaded", function () {
  var checkBtn = document.getElementById("checkBtn");
  if (!checkBtn) return;

  checkBtn.addEventListener("click", function () {
    var exercises = document.querySelectorAll("[data-exercise]");
    var correct = 0;
    var total = exercises.length;

    exercises.forEach(function (ex) {
      var input = ex.querySelector("input");
      if (!input) return;

      var rawAnswer = input.getAttribute("data-answer") || "";
      var answers = rawAnswer
        .split(",")
        .map(function (a) { return a.trim().toLowerCase(); })
        .filter(function (a) { return a.length > 0; });

      var user = (input.value || "").trim().toLowerCase();

      if (answers.indexOf(user) !== -1) {
        input.style.borderColor = "var(--accent, green)";
        correct++;
      } else {
        input.style.borderColor = "crimson";
      }
    });

    var result = document.getElementById("resultMessage");
    if (result) {
      result.textContent = "Respuestas correctas: " + correct + " de " + total + ".";
    }
  });
});
