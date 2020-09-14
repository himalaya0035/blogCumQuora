// for optimising read more and image acc to screen size
var blogContent = document.getElementsByClassName('blog_content');
var archive = []
for (var i = 0; i < blogContent.length; i++) {
    archive.push(blogContent[i].textContent.substring(0, 500))
}

function adjustBlogContent() {
    blogContent = document.getElementsByClassName('blog_content');
    for (var i = 0; i < blogContent.length; i++) {
        var checkImage = blogContent[i].querySelector('img')
        // console.log(checkImage)
        var textualContent = archive[i]
        if (screen.width < 580) {
            var res = textualContent.substring(0, 150)
        } else if (screen.width >= 580 && screen.width < 720) {
            var res = textualContent.substring(0, 280)
        } else {
            var res = textualContent.substring(0, 450)
        }
        if (checkImage == null) {
            blogContent[i].innerHTML = res + '...' + ' <a href="#" style="color:gray; text-decoration:none;">' + 'Read More' + '</a>';
        } else {
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


// for left sidebar
var sidebar = document.getElementsByClassName('mobileSidebar')[0];
var toggler = document.getElementsByClassName('sidebarToggler')[0];
var cross = document.getElementsByClassName('cross')[0];
toggler.addEventListener('click', function () {
    sidebar.classList.add('active')
})
cross.addEventListener('click', function () {
    sidebar.classList.remove('active')
})


// for right search sidebar
var searchSidebar = document.getElementsByClassName('searchSidebar')[0];
var back = document.getElementsByClassName('back')[0];
var searchIcon = document.getElementsByClassName('searchIcon')[0];
searchIcon.addEventListener('click', function () {
    searchSidebar.classList.add('active2')
})
back.addEventListener('click', function () {
    searchSidebar.classList.remove('active2')
})


// for toggling mobileNavbar
// var tabs = document.getElementsByClassName('tabs');
// console.log(tabs)
// for (var i = 0; i<tabs.length;i++){
//     tabs[i].addEventListener('click',function(event){
//         console.log("clicked")
//         for (var j=0; j<tabs.length;j++){
//             tabs[j].classList.remove('active_links')
//             console.log(tabs[j])
//         }
//         var clickedTab = event.target;
//         console.log(clickedTab)
//         clickedTab.classList.add('active_links')
//     })
// }
