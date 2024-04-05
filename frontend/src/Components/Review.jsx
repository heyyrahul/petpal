import '../CSS/Review.css'; 
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card21.jpg';
import card3 from '../assets/card3.jpg';

const Review = () => {
  const reviews = [
    {
      id: 1,
      image: card1,
      description: 'My experience at the pet store was nothing short of exceptional. From the moment I walked in, I was greeted with warmth and enthusiasm. The staff members were incredibly knowledgeable about pets, and they went above and beyond to assist me in finding the perfect products for my furry friend. The store itself was immaculately clean, and the wide selection of pet supplies was impressive .....',
    },
    {
      id: 2,
      image: card2,
      description: 'I recently visited this pet store, and I must say, I was thoroughly impressed. Not only was the store well-organized and stocked with a variety of pet supplies, but the staff members were also friendly and helpful. They took the time to listen to my needs and offered valuable advice on choosing the right products for my pet. The stores cleanliness and attention to detail did not go unnoticed and appreciated.....',
   
       },   
       {
      id: 3,
      image: card3,
      description: 'I cannot say enough positive things about my experience at this pet grooming salon. From the moment I walked in, I was greeted by friendly staff who made me feel welcome and at ease. The groomer was extremely skilled and attentive to my pet\'s needs, and the end result was beyond my expectations. Not only did my pet look and feel great, but the salon itself was clean, modern, and well-equipped....',
    },
  ];

  return (
    <div className="review-container">
      {reviews.map((review) => (
        <div key={review.id} className="card">
          <img src={review.image} alt="Review" className="review-image"/>
          <p className="review-description">{review.description}</p>
          <button className="read-more-btn">Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Review;
