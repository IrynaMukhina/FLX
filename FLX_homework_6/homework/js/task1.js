const a = prompt("Please enter number A","");
const b = prompt("Please enter number B","");
const c = prompt("Please enter number C","");

if(!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    const discriminant = b*b - 4*a*c;
    if(discriminant < 0) {
        alert("No solution")
    } else if (discriminant === 0) {
        const x = -(b/(2*a));
        alert(`x = ${+x.toFixed(2)}`);
    } else {
        const x1 = ((-b + Math.sqrt(discriminant))/(2*a));
        const x2 = ((-b - Math.sqrt(discriminant))/(2*a));
        alert(`x1 = ${+x1.toFixed(2)} and x2 = ${+x2.toFixed(2)}`);
    }
} else {
    alert("Invalid input data");
}