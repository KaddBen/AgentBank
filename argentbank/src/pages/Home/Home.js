import React from "react";
import "./Home.css";
import Bills from "../../assets/img/icon-money.png";
import Shield from "../../assets/img/icon-security.png";
import Chat from "../../assets/img/icon-chat.png";
import FeatureItem  from "../../components/FeatureItem/FeatureItem";
import Hero from "../../components/Hero/Hero";


const Home = () => {
  return (
    <main className="home_main">
    <Hero/>
    <section className="features">
      <h2 className="sr-only">Features</h2>
     <FeatureItem img={Chat} 
     title="You are our #1 priority" 
     description="Need to talk to a representative? You can get in touch through our24/7 chat or
      through a phone call in less than 5 minutes." />
     <FeatureItem img={Bills} 
     title="More savings means higher rates" 
     description="The more you save with us, the higher your interest rate will be!" />
     <FeatureItem img={Shield} 
     title= "Security you can trust" 
     description="We use top of the line encryption to make sure your data and money is always safe." />  
    </section>
  </main>
  )
}

export default Home;