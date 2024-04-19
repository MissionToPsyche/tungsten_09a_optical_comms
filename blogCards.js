import blogList from "./blogList.js";

for (let index = 0; index < blogList.length; index++) {
    let blog = blogList[index];
    let blogCard = createBlogCard(blog);
    document.getElementById('blogCardsContainer').appendChild(blogCard);
}

function createBlogCard(blog) {
    let card = document.createElement("div");
    card.className = "card";
    card.style.border = "1px solid";
    card.style.borderRadius = "36px";
    card.style.marginTop = "3%";
    card.onclick = () => {window.location.href = `${blog.link}`};

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.style.backgroundColor = "#F6F5F2";
    cardBody.style.boarder = "1px solid #F6F5F2";
    cardBody.style.borderRadius = "6px";

    let cardBodyContent = document.createElement("div");
    cardBodyContent.style.display = "flex";
    cardBodyContent.style.marginBottom = "20px";

    let authorProfile = document.createElement("div");
    authorProfile.className = "row g-0";

    let profilePhoto = document.createElement("div");
    profilePhoto.className = "col-md-1";

    let profilePhotoImg = document.createElement("img");
    profilePhotoImg.className = "img-fluid rounded-circle";
    profilePhotoImg.style.width = "32rem";
    profilePhotoImg.style.height = "3.5rem";
    profilePhotoImg.src = blog.author.imageSrc;
    profilePhoto.appendChild(profilePhotoImg);

    let profileContent = document.createElement("div");
    profileContent.className = "col-md-11";

    let authorName = document.createElement("h4");
    authorName.style.fontFamily = "Lato";
    authorName.style.marginBottom = "0";
    authorName.style.marginLeft = "1%";
    authorName.innerHTML = blog.author.name;
    profileContent.appendChild(authorName);

    let publishedDate = document.createElement("p");
    publishedDate.style.fontFamily = "Lato";
    publishedDate.style.marginBottom = "0";
    publishedDate.style.marginLeft = "1%";
    publishedDate.innerHTML = blog.publishedDate;
    profileContent.appendChild(publishedDate);

    authorProfile.appendChild(profilePhoto);
    authorProfile.appendChild(profileContent);
    cardBodyContent.appendChild(authorProfile);
    cardBody.appendChild(cardBodyContent);

    let blogContent = document.createElement("div");
    blogContent.className = "blog-content";

    let blogTitle = document.createElement("h1");
    blogTitle.className = "card-title";
    blogTitle.style.color = "#86469C";
    blogTitle.style.fontFamily = "Gabarito";
    blogTitle.style.fontWeight = "700";
    blogTitle.innerHTML = blog.title;

    let blogDescription = document.createElement("p");
    blogDescription.style.marginBottom = "0px";
    blogDescription.innerHTML = formatBlogDescription(String(blog.description));

    blogContent.appendChild(blogTitle);
    blogContent.appendChild(blogDescription);
    cardBody.appendChild(blogContent);
    card.appendChild(cardBody);

    return card;
}

function formatBlogDescription(description){
    if(description.length > 340){
        description = description.substring(0, 335);
        description += "....";
    }
    return description;
}