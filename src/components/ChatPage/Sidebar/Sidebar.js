import './Sidebar.css';
import './../style/PopupImg.css';
import Users from '../../DataBase/db';
import Avatar from './../../Image/profile-picture-boy-2.jpeg';
import SearchBar from './../Searchbar/SearchBar';
import Alert from './../Alert/Alert';

function Sidebar(){
  

    
return(
  <div className="sidebar">
  <header className="first-row">
  <div>
  <img id="myImg" className='myImg' onClick={PopupImg} src={Avatar} />
  <SearchBar id="search" placeholder="Search.." data={Users} />
  <div id="myModal" className="modal">
  <span className="close">&times;</span>
  <img className="modal-content" id="img01"/>
  <div id="caption"></div>
</div>
<Alert/ >
</div>




 
  
  
  
  </header>
  </div>
);







}




export function PopupImg(){
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
  }


    ///search
    function SearchName(){
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName('li');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
  }

    
      




export default Sidebar;