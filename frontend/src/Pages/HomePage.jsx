// HomePage.jsx
import Article from "../Components/Article";
import FirstDiv from "../Components/FirstDiv";
import Review from "../Components/Review";

const HomePage = () => {
  return (
    <div>
      
      <FirstDiv/>
      <h2 style={{ textAlign: 'center',fontSize: '50px', margin: '20px 0',fontWeight: 'bold',fontFamily: "sans-serif", color:'orange'}}>You cant buy love, but you can rescue it</h2>
      <Article/>
      <h2 style={{ textAlign: 'center',fontSize: '30px', margin: '20px 0',fontWeight: 'bold',fontFamily: "sans-serif", color:'orange'}}>Review</h2>

      <Review/>
      

      
    </div>
  );
};

export default HomePage;
