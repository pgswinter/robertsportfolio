var React = require('react');
import createReactClass from 'create-react-class'
const master_data = require('../master_page/data');

function formatDate(date) {
  return date.toLocaleDateString();
}

function ItemSectionTwo(props){
  var LoadingImg = props.home_page.increase_number.img_url.map(function(item, i){
     return(
       <div className="col-lg-3 col-md-3 col-sm-3 transition-effect">
         <div class="img-wrap-max" key={i}>
           <img src={require (`../../src/career/images/earth.png`)} alt=""/>
         </div>
       </div>
     )
  })
  var LoadingNumber = props.home_page.increase_number.number.map(function(item, i){
     return(
      <div className="col-lg-3 col-md-3 col-sm-3 transition-effect">
        <p>{item.text}</p>
      </div>
     )
  })
  var LoadingInfo = props.home_page.increase_number.textofnumber.map(function(item, i){
     return(
      <div className="col-lg-3 col-md-3 col-sm-3 transition-effect">
        <h4>{item.text}</h4>
      </div>
     )
  })
  return(
    <div>
      {LoadingNumber}
      {LoadingInfo}
      {LoadingImg}
    </div>
  )
}

function HeroPhoto(props){
  return(
    <section className="mobi-oran">
      <div className="img-wrap-cent"><img src={require (`../../src/career/photos/wall.jpg`)} alt=""/></div>
    </section>
  )
}

function SectionOne(props){
  return(
    <section className="set-padd-top set-bg-dark">
      <h4>{props.home_page.promotion.text_prom}</h4>
    </section>
  )
}

function SectionTwo(props){
  return(
    <section className="perc-amar set-bg-oran">
      <div className="container">
        <div className="titl-bold">
          <h3>{props.home_page.increase_number.title.text_title}</h3>
        </div>
        <div className="incr-numb">
          <ItemSectionTwo home_page={master_data.home_page}/>
        </div>
      </div>
    </section>
  )

}

function SectionThree(props){
  return(
    <section className="map-amar set-bg-white">
      <div className="container">
        <div className="titl-bold">
          <h3>{props.home_page.media.title.text_title}</h3>
        </div>
        <div className="img-wrap">
          <div className="col-lg-6">
            <iframe className="media-wrap" height="315" src="https://www.youtube.com/embed/1dyHf7sIgzo" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="col-lg-6">
            <iframe className="media-wrap" height="315" src="https://www.youtube.com/embed/RIv5NiKD9GI?list=RDRIv5NiKD9GI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionFour(props){
  return(
    <section className="map-amar set-bg-white">
      <div className="container">
        <div className="titl-bold">
          <h3>{props.home_page.map.title.text_title}</h3>
        </div>
        <div className="img-wrap">
          <a href=""><img src={require (`../../src/career/images/map.png`)} alt=""/></a>
        </div>
      </div>
    </section>
  )
}

function HomeLoader(props){
  return(
    <div>
      <HeroPhoto />
      <SectionOne home_page={props.home_page}/>
      <SectionTwo home_page={props.home_page}/>
      <SectionThree home_page={props.home_page}/>
      <SectionFour home_page={props.home_page}/>
    </div>
  )
}

const Home = createReactClass({
  render(){
    return(
        <HomeLoader home_page={master_data.home_page} />
    )
  }
})

export default Home