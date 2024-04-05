import pet5 from '../assets/pet5.jpg';
import pet9 from '../assets/pet9.jpg';
import pet7 from '../assets/pet7.jpg'
import '../CSS/Article.css';
const Article = () => {
  return (
    
    <div className="article-container">
          <div className="article">
              <img src={pet5} alt="Image 1" className="article-image" />
              <div className="article-content">
                <h2>Adoption Process</h2>
                  <p>
                      Bringing a pet into your home is a decision that can bring immense joy and fulfillment to your life.While there are many ways to welcome a furry friend into your family, adopting a pet from a shelter or rescue organization is a rewarding experience that not only changes the life of the animal but also transforms your own life in countless ways. Every year, millions of animals find themselves homeless and abandoned, often through no fault of their own. By choosing to adopt, you are providing a second chance to a pet in need and giving them the loving home they deserve. Adopting a pet also helps reduce the demand for animals from unethical breeders and puppy mills, promoting responsible pet ownership and helping to combat pet overpopulation
                  </p>
              </div>
          </div>
          <div className="article">
              <div className="article-content">
                 <h2>Care & Nutrients</h2>
                  <p>
                      The process of adopting a pet is relatively straightforward but requires careful consideration and preparation. It typically involves visiting local animal shelters or rescue organizations to meet the available pets, filling out an adoption application, and undergoing an interview or home visit to ensure that you and the pet are a good match. Once approved, you will have the opportunity to welcome your new furry friend into your home and begin the journey of building a lifelong bond. Spaying and neutering are essential steps in responsible pet ownership. These procedures not only help control pet overpopulation but also offer several health benefits for your furry friend. Spaying female pets helps prevent uterine infections and breast tumors, while neutering male pets reduces the risk of testicular cancer and prostate problems.Additionally, spaying and neutering can help reduce undesirable behaviors, such as roaming, aggression, and marking territory. By spaying or neutering your pet, you are not only promoting their health and well-being but also contributing to the welfare of animals in your community.
                  </p>
              </div>
              <img src={pet9} alt="Image 2" className="article-image" />
          </div>
          <div className="article">
              <img src={pet7} alt="Image 3" className="article-image" />
              <div className="article-content">
                 <h2>Safe Environment</h2>
                  <p>
                      Adopting a pet is a life-changing decision that brings immeasurable joy, love, and fulfillment to both you and your new furry companion. It can be a chance to make a difference in the life of an animal in need and experience the countless benefits of pet ownership firsthand. Whether you are considering adopting a dog, cat, or another animal, know that your decision to adopt will have a profound and lasting impact on both your life and the life of your new best friend. Once you have chosen a pet, make sure to pet-proof your home and gather necessary supplies, such as food, water bowls, and bedding. It is also essential to establish a routine for feeding, exercise, and veterinary care. Finally, be patient and give your new pet time to adjust to their new environment – building a strong bond takes time and dedication.
                  </p>
              </div>
          </div>
      </div>
  );
};

export default Article;
