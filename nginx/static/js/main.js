
init = () => {
  getlist()
}

getlist = () => {
  axios.get('/api/videos')
  .then(function (response) {
    // handle success
    console.log(response.data);

    response.data.videos.forEach((d) => {
      appendItem({
        message: d.message,
        user : (d.user) ? d.user.name : '??',
        createdAt: d.createdAt,
        comments: d.comments.length,
        likes: d.reactions.like,
        tag: d.tags.join(','),
        url: d.url,
      })
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

appendItem = (data) => {
  let videolist = document.querySelector('.videolist')
  let t = document.querySelector('#videoitem');
  if (data){
    t.content.querySelector('.message').innerHTML = data.message
    t.content.querySelector('.user').innerHTML = data.user
    if (t.content.querySelector('.createdAt'))
      t.content.querySelector('.createdAt').innerHTML = data.createdAt
    t.content.querySelector('.comments').innerHTML = data.comments
    t.content.querySelector('.likes').innerHTML = data.likes
    t.content.querySelector('.tags').innerHTML = data.tag
    t.content.querySelector('.videourl').innerHTML = data.url
    t.content.querySelector('.video-player').src = data.url
  
    var clone = document.importNode(t.content, true);
    videolist.appendChild(clone);
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  init()
});
