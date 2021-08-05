const tlham = gsap.timeline({paused: true, reversed: true});
tlham.to("#burger-wrapper", {display: "block", opacity: 1,})
.to("#bottom", {duration:0.5, opacity:0}, "<")
.to("#middle2", {duration:0.5, transformOrigin:"50%", rotation:45}, "<")
.to("#middle1", {duration:0.5, transformOrigin:"50%", rotation:-45}, "<")
.to("#top", {duration:0.5, opacity:0}, "<");

document.querySelectorAll("#hamburger").forEach(sausage => {
  sausage.addEventListener("click", () => tlham.reversed() ? tlham.play() : tlham.reverse() );
});
