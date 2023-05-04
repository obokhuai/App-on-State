import "bulma/css/bulma.css";
import ShowInfo from './ShowInfo'
import CatImage from './imagess/cat.png';
import DogImage from './imagess/dog.jpg';
import BirdImage from './imagess/bird.jpg';




function App() {
  return (
  
    <div>
      <div className="hero is-primary title has-text-centered" >
        <div className="hero-body">
        <p className="subtitle" >
        Animals color our world 
        </p>
        </div>
      </div>
      <div className="container">
        <div className="section">
      <div className="columns">
  <div class="column is-4">
  <ShowInfo title = "Cat" handle= "@cat99" description = "Cats are believed to be the only mammals who don't taste sweetness" image = {CatImage}/>
  </div>
  <div className="column is-4">
  <ShowInfo title = "Dog" handle= "@dog32" description = "Dogs are man best friend " image = {DogImage}/>
  </div>
  <div className="column is-4">
  <ShowInfo title = "Bird" handle= "@bird01" description = "Birds are members of the class Aves" image = {BirdImage}/>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default App

