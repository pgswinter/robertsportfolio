var React = require('react');
import createReactClass from 'create-react-class'
const master_data = require('../master_page/data');

function BlogLoader(props){
  return(
    <div>
      <HeroPhoto />
      <SectionOne blog={props.home_page}/>
      <SectionTwo blog={props.home_page}/>
      <SectionThree blog={props.home_page}/>
      <SectionFour blog={props.home_page}/>
    </div>
  )
}

const Blog = createReactClass({
  render(){
    return(
        <BlogLoader blog={master_data.home_page} />
    )
  }
})

export default Blog