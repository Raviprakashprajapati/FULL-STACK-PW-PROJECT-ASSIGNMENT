// script.js
document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById("add-blog-form");
    const blogTitle = document.getElementById("blog-title");
    const blogContent = document.getElementById("blog-content");
    const blogList = document.getElementById("blog-posts");

    blogForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = blogTitle.value;
        const content = blogContent.value;

        if (title.trim() !== "" && content.trim() !== "") {
            const blogPost = document.createElement("li");
            blogPost.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
            blogList.appendChild(blogPost);

            // Save the blog data to LocalStorage (you can add this part)
            // localStorage.setItem("blogs", JSON.stringify(blogs));

            blogTitle.value = "";
            blogContent.value = "";
        }
    });

    // Load existing blog posts from LocalStorage (you can add this part)
    // const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    // blogs.forEach((blog) => {
    //     const blogPost = document.createElement("li");
    //     blogPost.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
    //     blogList.appendChild(blogPost);
    // });



    // script.js (continued)

// Function to retrieve blogs from LocalStorage
function getBlogsFromLocalStorage() {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    return blogs;
}

// Function to save blogs to LocalStorage
function saveBlogsToLocalStorage(blogs) {
    localStorage.setItem("blogs", JSON.stringify(blogs));
}

// Function to display existing blog posts
function displayBlogs() {
    const blogs = getBlogsFromLocalStorage();
    blogList.innerHTML = ""; // Clear the existing list

    blogs.forEach((blog) => {
        const blogPost = document.createElement("li");
        blogPost.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
        blogList.appendChild(blogPost);
    });
}

// Event listener for form submission
blogForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = blogTitle.value;
    const content = blogContent.value;

    if (title.trim() !== "" && content.trim() !== "") {
        const newBlog = {
            title: title,
            content: content,
        };

        // Retrieve existing blogs, add the new blog, and save back to LocalStorage
        const blogs = getBlogsFromLocalStorage();
        blogs.push(newBlog);
        saveBlogsToLocalStorage(blogs);

        // Clear form fields
        blogTitle.value = "";
        blogContent.value = "";

        // Display updated list of blogs
        displayBlogs();
    }
});

// Initial display of existing blog posts when the page loads
displayBlogs();

});
