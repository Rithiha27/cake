function book(name,author,year)
{
    this.name=name;
    this.author=author;
    this.year=year;
    if(name==="cindrella")
          this.unique="57";

}
book.prototype.edit=function(edition)
{
    this.edition=edition;
}
book.prototype.disp=function()
{
    return `the book ${this.name} written by ${this.author} of edition ${this.edition} was published in year${this.year} and its unique value is ${this.unique} `
}
const p1=new book("cindrella","rithi",2003);
const p2=new book("winners","sam",2014);
p1.edit("3rd");
p2.edit("6th");
console.log(p1.disp());
console.log(p2.disp());


