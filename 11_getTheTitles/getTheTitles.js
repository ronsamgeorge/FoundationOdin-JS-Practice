const getTheTitles = function() {

    const array = Array.from(arguments[0]);
    console.log(array.length);

    const titles = array.reduce((title,book)=>{
        title.push(book.title);
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
