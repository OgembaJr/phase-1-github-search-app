let searchUser = document.getElementById('search') 
let formInput = document.getElementById('github-form')  


function fetchUserDetails() {
      fetch(`https://api.github.com/users/${searchUser.value}`)      
     .then((res) => res.json())                                  
     .then(data => userDetails(data))
}
     
function userDetails(data){
    let userList = document.getElementById('user-list')           
           userList.innerHTML = `                            
          <p>USERNAME : ${data.login}</p>                            
          <a target="_blank" href="https://www.github.com/${searchUser.value}?tab=repositories">REPOSITORIES LINK</p>
          <img src="${data.avatar_url}"> `

}

formInput.addEventListener('submit',(e) => {      
        e.preventDefault();                     
        fetchUserDetails();                     
})
     

   

    

