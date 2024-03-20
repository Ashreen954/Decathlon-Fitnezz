// document.addEventListener('DOMContentLoaded', function () {
//     // Simulate loading progress data
//     setTimeout(() => {
//       const progressBar = document.getElementById('progress-bar');
//       const progressLabel = document.getElementById('progress-label');
//       const targetSteps = 10000;
//       const currentSteps = 7000; // Replace with actual data
  
//       const percentage = (currentSteps / targetSteps) * 100;
//       progressBar.style.width = `${percentage}%`;
//       progressLabel.textContent = `Weekly Steps: ${currentSteps} / ${targetSteps}`;
//     }, 1000); // Delay to simulate data loading
//   });
document.addEventListener('DOMContentLoaded', function () {
  updateCircle('steps', 7500, 10000);
  updateCircle('distance', 8, 10);
  updateCircle('running', 25, 30);
  updateCircle('calories', 500, 1000);
});

function updateCircle(id, current, total) {
  const circle = document.getElementById(id);
  const circleValue = document.getElementById(`${id}-value`);
  const radius = circle.querySelector('.progress-ring-circle').getAttribute('r');
  const circumference = 2 * Math.PI * radius;

  const progress = current / total;
  const dashoffset = circumference * (1 - progress);

  circle.querySelector('.progress-ring-circle').style.strokeDasharray = `${circumference} ${circumference}`;
  circle.querySelector('.progress-ring-circle').style.strokeDashoffset = dashoffset;

  circleValue.textContent = id === 'distance' ? `${current} km` : id === 'running' ? `${current} min` : `${current} kcal`;
}
