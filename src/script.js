document.getElementById("maleButton").addEventListener("click", function () {
  fetchLine("male");
});

document.getElementById("femaleButton").addEventListener("click", function () {
  fetchLine("female");
});

function fetchLine(gender) {
  let apiKey = "d6116e815a6e6a387bt2b0af2o2c3495";
  let prompt =
    gender === "male"
      ? "Provide a unique and clever pick-up line that a male could use to impress someone. Ensure it's different each time."
      : "Provide a unique and clever pick-up line that a female could use to impress someone. Ensure it's different each time.";
  let context =
    "You are a witty AI Assistant that generates fresh, fun, and charming pick-up lines for various occasions.Always ensure the pick-up line is different each time.";
  const url = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  document.getElementById("line").innerText =
    "Generating a pick-up line... please wait";

  axios
    .get(url)
    .then((response) => {
      const line = response.data.answer;
      let lineElement = document.getElementById("line");
      lineElement.innerText = "";

      let typewriter = new Typewriter(lineElement, {
        loop: false,
        delay: 30,
      });

      typewriter.typeString(line).start();
    })
    .catch((error) => {
      console.error("Error fetching line:", error);
      document.getElementById("line").innerText =
        "Sorry, something went wrong. Please try again.";
    });
}
