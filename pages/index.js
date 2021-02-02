import Link from "next/link";
import Button from 'react-bootstrap/Button'
import Image from 'next/image'
//<Image class="homeImage" src="/images/image.jpg" alt="me" layout="fill"/>
//<Image class="homeImage" src="/images/image.jpg" alt="me" layout="fill" />
const Home = () => (
  <div>
    <div class="content-center my-auto">
      <div class="container">
        <div class="title-brand">
          <h1 class="presentation-title">Paper Kit React</h1>
          
        </div>
      </div>
    </div>
    <div class="imageContainer">
            <img class="homeImage" src="/images/image.jpg"/>
            <img class="homeImage" src="/images/image.jpg"/>
    </div>
  </div>
);
export default Home;