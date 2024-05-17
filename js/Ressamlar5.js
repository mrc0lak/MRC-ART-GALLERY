function search() {
    var query = document.getElementById("searchInput").value;
    
    alert("Arama: " + query);
}

document.getElementById("searchButton").addEventListener("click", search);