let net;

async function app() {
  const imgElement = document.getElementById('preview');
  const resultContainer = document.getElementById('resultContainer');

  net = await mobilenet.load(); // Load MobileNet model

  document.getElementById('imageInput').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      imgElement.src = e.target.result;

      imgElement.onload = async function() {
        const results = await net.classify(imgElement);
        console.log(results);

        // Clear previous results
        resultContainer.innerHTML = "";

        // 🎉 Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        // Show top 3 predictions with confidence bars
        results.slice(0, 3).forEach((res, index) => {
          const percent = Math.round(res.probability * 100);
          const predictionDiv = document.createElement("div");
          predictionDiv.className = "prediction";

          predictionDiv.innerHTML = `
            <strong>${index + 1}. ${res.className}</strong><br>
            <div class="bar-container">
              <div class="bar" style="width:${percent}%">${percent}%</div>
            </div>
          `;
          resultContainer.appendChild(predictionDiv);
        });
      };
    };
    reader.readAsDataURL(file);
  });
}

app();
