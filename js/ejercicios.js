document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("checkBtn");
  const resultMessage = document.getElementById("resultMessage");

  if (!checkBtn) return;

  // Explicaciones genéricas por tema
  const explanations = {
    "present-simple-vs-continuous":
      "Usamos el Present Simple para hábitos y rutinas (every day, usually...). El Present Continuous se usa para acciones que están ocurriendo ahora o alrededor de este momento.",
    "past-simple":
      "Usamos el Past Simple para acciones terminadas en un momento concreto del pasado (yesterday, last year...).",
    "past-simple-vs-continuous":
      "Past Simple: acción terminada. Past Continuous: acción en progreso que a menudo es interrumpida por otra (I was watching TV when he called).",
    "present-perfect":
      "Usamos el Present Perfect para experiencias, resultados recientes y acciones que conectan pasado y presente (ever, never, just, already, yet, for, since).",
    "future-forms":
      "Will se usa para decisiones espontáneas y predicciones. Going to se usa para planes e intenciones. Present Continuous se usa para planes organizados con hora/fecha.",
    "comparatives-superlatives":
      "Comparativos: comparamos dos cosas (bigger, more interesting). Superlativos: el grado máximo dentro de un grupo (the biggest, the most interesting).",
    "modals":
      "Los modales (can, could, must, should, might...) expresan habilidad, obligación, consejo o posibilidad, y van seguidos de verbo en infinitivo sin to.",
    "conditionals-1-2":
      "First Conditional: If + Present Simple, will + infinitivo (situaciones reales). Second Conditional: If + Past Simple, would + infinitivo (situaciones hipotéticas).",

    // Ejemplos para alemán (puedes usarlos en tus unidades de D-E)
    "de-kasus":
      "En alemán, Akkusativ y Dativ dependen del verbo y de la preposición. El Akkusativ suele indicar objeto directo, el Dativ, objeto indirecto.",
    "de-perfekt":
      "El Perfekt se forma con haben/sein + Partizip II. Se usa mucho en el alemán hablado para acciones pasadas.",
    "de-prateritum":
      "El Präteritum se usa con más frecuencia en textos escritos y con verbos modales y sein/haben en lengua hablada.",
    "de-wohin-wo":
      "Wohin pregunta por movimiento a un lugar (Akkusativ), Wo pregunta por posición estática (Dativ)."
  };

  checkBtn.addEventListener("click", () => {
    const exercises = document.querySelectorAll("[data-exercise]");
    let correctCount = 0;

    exercises.forEach((exercise) => {
      const input = exercise.querySelector("input");
      if (!input) return;

      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = (input.dataset.answer || "").trim().toLowerCase();

      // Eliminar feedback previo
      const oldFeedback = exercise.querySelector(".feedback");
      if (oldFeedback) oldFeedback.remove();

      const feedback = document.createElement("div");
      feedback.classList.add("feedback");
      feedback.style.marginTop = "4px";
      feedback.style.fontSize = "0.9rem";

      // Explicación específica (HTML) o por tema
      const customExplanation = exercise.dataset.explanation || "";
      const topicKey = exercise.dataset.topic || "";
      const topicExplanation = explanations[topicKey] || "";

      if (userAnswer === correctAnswer && correctAnswer !== "") {
        correctCount++;
        feedback.innerHTML = `
          <p style="color:#4ade80; margin:2px 0;">✔ Correcto</p>
        `;
      } else {
        let explanationText = "";

        if (customExplanation) {
          explanationText = customExplanation;
        } else if (topicExplanation) {
          explanationText = topicExplanation;
        }

        feedback.innerHTML = `
          <p style="color:#f97373; margin:2px 0;">✘ Incorrecto</p>
          <p style="color:#cbd5e1; margin:2px 0;">
            Tu respuesta: <b>${userAnswer || "—"}</b><br>
            Respuesta correcta: <b style="color:#60a5fa">${correctAnswer || "—"}</b>
          </p>
          ${
            explanationText
              ? `<p style="color:#9ca3af; margin:2px 0;">${explanationText}</p>`
              : ""
          }
        `;
      }

      exercise.appendChild(feedback);
    });

    if (resultMessage) {
      resultMessage.textContent = `Respuestas correctas: ${correctCount} / ${exercises.length}`;
    }
  });
});

