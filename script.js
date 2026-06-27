function calculate() {

    let travel = parseFloat(document.getElementById("travel").value) || 0;
    let electricity = parseFloat(document.getElementById("electricity").value) || 0;
    let water = parseFloat(document.getElementById("water").value) || 0;

    let travelEmission = travel * 0.21;
    let electricityEmission = electricity * 0.85;
    let waterEmission = water * 0.0003;

    let total = travelEmission + electricityEmission + waterEmission;

    document.getElementById("result").innerHTML =
        "Total Carbon Footprint: " + total.toFixed(2) + " kg CO₂";
}
