export function data(){
    return fetch('http://localhost:3000/courese')
    .then(data => data.json())
}
export function learn(){
    return fetch('http://localhost:3000/learn')
    .then(data => data.json())
}