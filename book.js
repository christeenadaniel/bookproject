function addBook(){
    bookId=id.value
    bname=bn.value
    author=au.value
    discrip=dis.value
    if(bname in localStorage){
        alt.innerHTML =`<p class="text-danger mt-2">Book already exist</p>`
    }
    else{
        book ={bookId,bname,author,discrip}
        localStorage.setItem(bname,JSON.stringify(book))
        alert("Book added successfully")
        window.location='index.html'
    }   
}

function search(){
    // alert("hai")
    window.location='searchBook.html';
}
function searchBook(){
   bnm=bn.value
   if(bnm in localStorage){
    bookObject = JSON.parse(localStorage.getItem(bnm))
    console.log(bookObject.author);
    details.innerHTML=`<p >
    <h3><strong class="text-uppercase fs-4">Book details</strong></h3>

    <div class="row">
        <div class="col-lg-6 mb-2 bg-success-subtle text-emphasis-warning text-dark bg-opacity-10
            border border-1 rounded border-success-subtle">
            <ul>
                <ol>Book id : ${bookObject.bookId}</ol>
                <ol>Book name : ${bookObject.bname}</ol>
            </ul></div>
        <div class="col-lg-6 mb-2 bg-success-subtle text-emphasis-warning text-dark bg-opacity-10
            border border-1 rounded border-success-subtle">
            <ul>
                <ol>Author's Name : ${bookObject.author}</ol>
                <ol>Discription : ${bookObject.discrip}</ol>
            </ul></div>
        </div></P>`

   } 
   else if(bnm ==""){
    details.innerHTML=""
    alert("Enter a valid book name")
   } 
   else{
   details.innerHTML=""
    alert("Book doesn't exist")
   } 
}