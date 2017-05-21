var React = require('react');
import createReactClass from 'create-react-class'
const master_data = require('../master_page/data');

function HeroPhoto(props){
  return(
    <section className="mobi-oran">
      <div className="img-wrap-cent"><img src={require (`../../src/career/photos/think.jpg`)} alt=""/></div>
    </section>
  )
}

function JobLoader(props){
  return(
    <div>
      <HeroPhoto />
    </div>
  )
}

const Job = createReactClass({
  render(){
    return(
        <JobLoader home_page={master_data.home_page} />
    )
  }
})

export default Job