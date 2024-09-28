let title="My first React calculator";

function add(a,b){
    return (a+b);
}
function sub(a,b){
    return (a-b);
}
function div(a,b){
    let div=a/b;
    div=div.toFixed(2);
    return div;
}
function mult(a,b){
    return (a*b);
}
export default title;
export {add,sub,div,mult};


