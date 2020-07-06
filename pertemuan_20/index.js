/*
let umur = document.getElementById("umur").value;

console.log(umur); // Output: 20
*/
/*
let semuaTagH1 = document.getElementsByTagName("h1");

console.log(semuaTagH1); // Output: HTMLCollection(2) [h1#title, h1.subtitle]
console.log(semuaTagH1[0]); // Output: <h1 id="title">Hello, World!</h1>
console.log(semuaTagH1[1]); // Output: <h1 class="subtitle">Mari Belajar JavaScript</h1>

*/
/*
let semuaClassHeader = document.getElementsByClassName("header");

console.log(semuaClassHeader); // Output: HTMLCollection(2) [h1.header, span.header]
console.log(semuaClassHeader[0]); // Output: <h1 class="header">Hello, World!</h1>
console.log(semuaClassHeader[1]); // Output: <span class="header">Mari Belajar JavaScript</span>
*/

/*
let h1ClassHeader = document.querySelectorAll('h1.header');

console.log(h1ClassHeader); // Output: NodeList [h1.header]
console.log(h1ClassHeader[0]); // Output: <h1 class="header">Hello, World!</h1>

let idHeader2 = document.querySelectorAll('#header2');

console.log(idHeader2); // Output: NodeList [p#header2]
console.log(idHeader2[0]); // Output: <p id="header2">Selamat Datang</p>
*/

/*
let h1ClassHeader = document.querySelectorAll('h1.header');

console.log(h1ClassHeader); // Output: NodeList [h1.header]
console.log(h1ClassHeader[0]); // Output: <h1 class="header">Hello, World!</h1>

let idHeader2 = document.querySelectorAll('#header2');

console.log(idHeader2); // Output: NodeList [p#header2]
console.log(idHeader2[0]); // Output: <p id="header2">Selamat Datang</p>
*/
/*
let demo = document.getElementById("demo");
demo.onclick = showMessage;

function showMessage() {
   alert("Hello, World!");
}
*/
let demo = document.getElementById("demo");

console.log(demo.innerHTML); // Output: Hello, World!


        // Ubah konten <p id="demo"> menjadi Hello, Dunia!
        demo.innerHTML = "Hello, Dunia!";
        demo.innerHTML = "Hello, World!";
            
        console.log(demo.innerHTML); // Output: Hello, Dunia!
              

        let catImage = document.getElementById("cat-image");

        console.log(catImage.src); // Output: https://go.aws/3cKgiaX
        console.log(catImage.alt); // Output: Cat
        
        catImage.src = "https://go.aws/2vT5mXU";
        catImage.alt = "Fish";
        catImage.width = "400";
        
        console.log(catImage.src); // Output: https://go.aws/2vT5mXU
        console.log(catImage.alt); // Output: Fish
        console.log(catImage.width); // Output: 400


