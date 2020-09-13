var blogContent = document.getElementsByClassName('blog_content');
var archive = []
for (var i = 0; i<blogContent.length;i++){
    archive.push(blogContent[i].textContent.substring(0,500))
}
function adjustBlogContent() {
    blogContent = document.getElementsByClassName('blog_content');
    for (var i = 0; i < blogContent.length; i++) {
        var checkImage = blogContent[i].querySelector('img')
        // console.log(checkImage)
        var textualContent = archive[i]
        if (screen.width < 580) {
            var res = textualContent.substring(0, 150)
        } 
        else if (screen.width >= 580 && screen.width <720){
            var res = textualContent.substring(0, 280)
        }
        else {
            var res = textualContent.substring(0, 450)
        }
        if (checkImage == null){
        blogContent[i].innerHTML = res + '...' + ' <a href="#" style="color:gray; text-decoration:none;">' + 'Read More' + '</a>';
        }
        else{
        blogContent[i].innerHTML = res + '...' + ' <a href="#" style="color:gray; text-decoration:none;">' + 'Read More' + '</a>';
        var imgbox = document.createElement("div")
        imgbox.classList.add("imgbox2")
        var img = document.createElement("img")
        img.src = checkImage.src
        imgbox.appendChild(img)
        blogContent[i].appendChild(imgbox)
        // Well done himalaya 🥳🥳🎉🎉
    }
    }
}
window.addEventListener("resize", adjustBlogContent);

adjustBlogContent()

