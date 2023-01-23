import logo from './logo.svg';
import './App.css';
import BlogCard from './blogCard';
import { isArrayEmpty } from './utils';
import React,{ Component } from 'react';

//class components 

class App extends Component{
  state = {
    showBlogs : true,
    arrElement : [
      {
        id:1,
        title:"Blog Title1",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type",
        likeCount : 0,
      },
      {
        id:2,
        title:"Blog Title2",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type.",
        likeCount : 0,
      },
      {
        id:3,
        title:"Blog Title3",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type",
        likeCount : 0,
      }
    ]
  }
  firstName = "Ravi";
   lastName = "Dharigond";
   age = 25;
   work = "Assocaite Software Engineer"; 

   placeHolder = "Enter Your Details"
  inputDetails =   <input placeholder={this.placeHolder} autoComplete/>

  userName = (firstName, lastName) => 
     `${firstName} ${lastName}`

   onCountLikeBtn = (pos) =>{
    const updatedBlogList = this.state.arrElement;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({arrElement: updatedBlogList})
   }

   onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps)=>{
           return {showBlogs: !prevState.showBlogs}
    });
    console.log(this.showBlogs)
  }

  render(){
    console.log(this.state)
    const arrContent = isArrayEmpty(this.state.arrElement)? []: this.state.arrElement.map((item, pos) =>{
      return (
       <BlogCard key={pos} title ={item.title} description={item.description} id={item.id}  likeCount={item.likeCount} onCountLikeBtn={() => this.onCountLikeBtn(pos)}/>
       // <div className="BlogText" key={item.id}>
       //   <h3>{item.title}</h3>
       //   <p>{item.description}</p>
       // </div>
      )
   })
  return (
    <div className="App">
       {/* <h3>Full Name: {userName(firstName, lastName)}
       </h3>
       <p>Age: {age}</p>
       <p>Work: {work}</p>
       {inputDetails} */}
       <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
       <br/>
      {
      this.state.showBlogs ?
      arrContent : null
      }
    </div>
  );
      }
}

export default App;
