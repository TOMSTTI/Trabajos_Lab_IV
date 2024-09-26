fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const postsContainer = document.getElementById('posts-container');
    for (const post of data) {
        const postHTML = `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;
        postsContainer.innerHTML += postHTML;
    }
})
.catch(error => console.error('Error:', error));

    