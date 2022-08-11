
//ajax call
const xhr = new XMLHttpRequest();


xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");
xhr.onreadystatechange = () => {

    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));

        for (let i = 0; i < JSON.parse(xhr.responseText).length; i++) {
            let x = `
    <div class="card text-center p-4 m-4">
    <div class="card-block">
    <div class="card-title h6">
    ${JSON.parse(xhr.responseText)[i].title}
    </div>
    <div class="card-text">
   ${JSON.parse(xhr.responseText)[i].body}
    </div>
    <a href="#" class="btn btn-primary mt-4">Find out more</a>

    </div>
    </div>
    `

            let div = document.createElement('div');
            div.setAttribute("class", "col-md-4");

            div.innerHTML = x;

            document.getElementById('blog-data').appendChild(div);

        }

    } else {
        console.log("HTTP error", xhr.status, xhr.statusText);
    }

};


xhr.send();