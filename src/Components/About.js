import Userclass from "./Userclass";
import User from "./User";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-black font-bold text-2xl mb-6">
        About<span className="font-bold m-4">Burger Khayga junction😋</span>
      </h1>
      <div>
        <img
          src="https://f.hubspotusercontent40.net/hubfs/4592742/shutterstock_1705576870%20%281%29.jpg"
          alt="Grow Together"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          onError={(e) => {
            console.error("Image failed to load");
            e.target.src = "https://via.placeholder.com/800x400?text=Restaurant+Image"; // Fallback image
          }}
        />
        
        <div className="prose max-w-none">
          <big className="my-4 block text-gray-700 leading-relaxed">
            Welcome to Burger Khayga junction, your ultimate destination for
            seamless online food ordering. We believe that great food is a
            celebration of life, and our mission is to connect you with the finest
            restaurants and local eateries in your area. Whether you’re craving a
            quick bite or planning a feast, we bring the best culinary experiences
            straight to your doorstep with just a few clicks. At Burger Khayga
            junction, we prioritize quality, convenience, and customer
            satisfaction. With an extensive selection of cuisines ranging from
            traditional favorites to exotic flavors, we cater to every taste and
            occasion. Our platform is designed to be fast, user-friendly, and
            reliable, ensuring you enjoy a hassle-free ordering experience every
            time. We are passionate about empowering local businesses and
            supporting the vibrant food culture in your community. By partnering
            with a diverse network of restaurants, we make it easier for you to
            explore new flavors, discover hidden gems, and support your favorite
            food joints. Your satisfaction is at the heart of everything we do.
            That’s why we continuously innovate to provide secure payment options,
            real-time order tracking, and exceptional customer support. Whether
            you’re a foodie exploring new dishes or a busy professional looking
            for convenience,Burger Khayga junction is here to make your dining
            experience unforgettable. Join us on this journey of culinary
            discovery, and let’s make every meal a delightful adventure. At Burger
            Khayga junction, good food is always just a click away!
          </big>
        </div>
      </div>
    </div>
  );
};

export default About;
