const getTheTitles = function() {

    const array = Array.from(arguments[0]);
    console.log(array.length);

    const titles = array.reduce((title,book)=>{
        title.push(book.title);                        //return title.push(book.title); doesnt work because the return value of push is the length of the array
                                                       // and hence it will show that .push is not a function on title; 
        return title
    },[]);

    return titles;

};


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
