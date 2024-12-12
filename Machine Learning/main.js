import ModelPredictor from "./predict_class.js";

const form = document.getElementById('form-prediction');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bahari = parseFloat(document.getElementById("bahari").value);
  const budaya = parseFloat(document.getElementById("budaya").value);
  const cagar = parseFloat(document.getElementById("cagar").value);
  const pusat = parseFloat(document.getElementById("pusat").value);
  const taman = parseFloat(document.getElementById("taman").value);
  const ibadah = parseFloat(document.getElementById("ibadah").value);
  const lat = parseFloat(document.getElementById("lat").value);
  const lon = parseFloat(document.getElementById("lon").value);
  const radius = parseFloat(document.getElementById("radius").value);

  const predictor = new ModelPredictor();
  predictor.loadModel().then(() => {
    console.log("Model sudah siap digunakan");
    predictor.predict([bahari, budaya, cagar, pusat, taman, ibadah], lat, lon, radius).then((result) => {
        console.log(result);
        let resultText = "";
        result.forEach((item, index) => {
          resultText += `Prediksi ${index + 1}:<br>`;
          for (const key in item) {
            resultText += `${key}: ${item[key]}<br>`;
          }
          resultText += "<br>";
        });
        document.getElementById('result').innerHTML = resultText;
    });
  });
});