var React = require('react');
import createReactClass from 'create-react-class'
const master_data = require('../master_page/data');

function HeroPhoto(props){
  return(
    <section className="mobi-oran">
      <div className="img-wrap-cent"><img src={require (`../../src/career/photos/about.jpg`)} alt=""/></div>
    </section>
  )
}

function SectionOne(props){
	return(
		<section className="set-padd-top set-bg-white">
			<div className="container">
				<h2>{props.about_us.title.text_title}</h2>
				<p>
					<span>{props.about_us.hello_text.text_hello}</span>
					<br/>
					<br/>
					<br/>
					<br/>
					<center>
						<iframe class="media-wrap" height="315" src="https://www.youtube.com/embed/N-uCT3jGEMs?list=RDRIv5NiKD9GI" frameborder="0" allowfullscreen></iframe>
					</center>	
				</p>
			</div>
		</section>
	)
}

function HomeLoader(props){
  return(
    <div>
      <HeroPhoto />
      <SectionOne about_us={props.about_us} />
    </div>
  )
}

const Home = createReactClass({
  render(){
    return(
        <HomeLoader home={master_data.about_us} />
    )
  }
})

export default Home