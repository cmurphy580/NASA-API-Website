const slider = document.querySelector('.image-wrap');
let isDown = false, hasMoved = false;
let startX, x;
let scrollLeft;
let initial, now, time, distance, velocity, amplitude, target;
/**/

slider.addEventListener('mousedown', (event) => {
	isDown = true;
  initial = Date.now();
	startX = event.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
  //console.log(startX);
  hasMoved = false;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
});

slider.addEventListener('mousemove', (event) => {
	if (!isDown) return;
	event.preventDefault();
	x = event.pageX - slider.offsetLeft;
	const walk = (x - startX);
	slider.scrollLeft = scrollLeft - walk;
  //console.log(slider.scrollLeft);
  hasMoved = true;
});

slider.addEventListener('mouseup', (event) => {
	isDown = false;
  now = Date.now();
  time = (now - initial);
  //console.log(time); //in ms
  distance = (x - startX);
  velocity = (distance) / (time);

  if (velocity < -0.5 || velocity > 0.5) {
    amplitude = velocity * -1000;
    target = Math.round(amplitude + slider.scrollLeft);

    requestAnimationFrame(autoScroll);
  }
  event.stopPropagation();
  event.preventDefault();
});

function autoScroll() {
    var elapsed, delta;
    if (amplitude && hasMoved) {
        elapsed = Date.now() - now;
        delta = -amplitude * Math.exp(-elapsed / 325);
        if (delta > 0.5 || delta < -0.5) {
            slider.scrollLeft = target + delta;
            requestAnimationFrame(autoScroll);
        } else {
            slider.scrollLeft = target;
        }
    }
}

export default slider;
