$(document).ready(function () {
    post.forEach(blog => {
        $("#blogPost").append(`
                <div class="article-container">
                    <div class="article">
                        <div class="post-left"><img src="${blog.image}" class="img-wrapper"
                             alt="Image"></div>
                        <div class="post-right">
                            <div class="post-heading">${blog.naslov}</div>
                            <div class="description">${blog.description}</div>
                            <div class="post-footer">
                                <button type='button' id="dugme" onclick="location.href='${blog.link}'">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `)
    });

})

document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle("change");
});


