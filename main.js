var form=document.getElementById('myForm');
form.addEventListener('submit',function(e){
  e.preventDefault();
  var search=document.getElementById('search').value
  
  
  var originalName=search.split(' ').join('')
  //alert(originalName);
 fetch('https://api.github.com/users/'+originalName)
  .then((response) => response.json())
  .then((json) => 
  {
    
    console.log(json);
    document.getElementById('name').innerText=json.name
// document.getElementById('img').src=json.avatar_url
document.getElementById('img').src=json.avatar_url;
document.getElementById('date').innerText=json.created_at


document.getElementById('bio').innerText=json.bio
document.getElementById('following').innerText=json.following
document.getElementById('followers').innerText=json.followers
document.getElementById('repo').innerText=json.public_repos
document.getElementById('location').innerText=json.location
document.getElementById('company').innerText=json.company
document.getElementById('login').innerText=json.login
document.getElementById('twitter').innerText=json.twitter_username
document.getElementById('blog').innerText=json.blog
  
  }
  )
  
})
