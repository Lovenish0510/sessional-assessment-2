
//ajax call
const xhr = new XMLHttpRequest();


xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");
xhr.onreadystatechange = () => {

    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));

        for (let i = 0; i < JSON.parse(xhr.responseText).length; i++) {
            let x = `
    <div>
    <div class="blog_title">
    <b>title:</b>${JSON.parse(xhr.responseText)[i].title}
    </div>
    <div class="blog_body">
 <b>body</b>   ${JSON.parse(xhr.responseText)[i].body}
    </div>
    </div>
    `

            let div = document.createElement('div');


            div.innerHTML = x;

            document.getElementById('blog-data').appendChild(div);

        }

    } else {
        console.log("HTTP error", xhr.status, xhr.statusText);
    }

};


xhr.send();