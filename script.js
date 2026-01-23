const form = document.getElementById("fitnessForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let goal = document.getElementById("goal").value;

    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi").innerText = "BMI: " + bmi;

    let calories = goal === "Lose Weight" ? 1800 :
                    goal === "Gain Muscle" ? 2800 : 2200;
    document.getElementById("calories").innerText =
        "Recommended Calories: " + calories + " kcal/day";

    document.getElementById("workoutPlan").innerText =
        "Monday–Friday: Strength + Cardio\nWeekend: Rest & Stretching";

    document.getElementById("dietPlan").innerText =
        "Breakfast: Oats & Fruits\nLunch: Balanced Meal\nSnacks: Nuts\nDinner: Light Protein Meal";
});

// Dark Mode
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};
