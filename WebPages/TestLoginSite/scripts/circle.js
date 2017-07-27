function createCircle(percent){
    percent = percent.toFixed(2);
    var circle = new ProgressBar.Circle('#progress', {
        strokeWidth: 4,
        trailWidth: 1,
        duration: 3000,
        easing: 'easeInOut',
    })
  
    circle.animate(percent);  // Number from 0.0 to 1.0
    circle.setText("% " + percent*100);
    circle.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    circle.text.style.fontSize = '2rem';

}
function createCircleNoText(percent){
    percent = percent.toFixed(2);
    var circle = new ProgressBar.Circle('#progress', {
        strokeWidth: 4,
        trailWidth: 1,
        duration: 3000,
        easing: 'easeInOut',
    })
  
    circle.animate(percent);  // Number from 0.0 to 1.0
}
