var colors = new Array(
    [62,35,255],
    [45,175,230]
);
  
var step = 0;
var colorIndices = [0,1];
var gradientSpeed = 0.002;

function updateGradient() {
    if ( $===undefined ) return;
    
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
  
    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";
  
    var color2 = "rgb("+r1+","+g1+","+b1+")";
  
    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"
    });
    
    step += gradientSpeed;
    if ( step >= 1 ) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[1] = ( colorIndices[1] + 1) % colors.length;
    }
}

setInterval(updateGradient,10);