function loadNav() {
  fetch('nav.html')
    .then(function (res) {
      return res.text();
    })
    .then(function (html) {
      document.querySelector('#site-header').innerHTML = html;

      // 高亮当前页面逻辑
      const links = document.querySelectorAll('#site-header a');
      const currentPath = window.location.pathname;

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href)) {
          link.classList.add('active');
        }
      })
    })
    .catch(function(err){
      console.log("导航加载失败：", err);
    })
}
loadNav();
