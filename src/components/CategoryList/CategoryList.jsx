/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./category.css";

const CategoryList = () => {
  const categories = [
    {
      name: "Music Festivals",
      description: "Explore the world of music with vibrant festivals from various cultures.",
      category_id: "1",
    },
    {
      name: "Art Exhibitions",
      description: "Immerse yourself in the rich and diverse world of art from different regions.",
      category_id: "2",
    },
    {
      name: "Cultural Dance",
      description: "Experience the beauty and rhythm of cultural dance performances from around the globe.",
      category_id: "3",
    },
  ];

  return (
    <div>
      <h1 className="category-main-title">Cultural Events</h1>
      <p className="my-5">Cultural events encompass a wide range of activities that celebrate and showcase various aspects of a culture or community. These events play a significant role in preserving traditions, promoting cultural exchange, and fostering a sense of identity and belonging.</p>
      <img src="https://i.ibb.co/CVvwjT3/theme2.jpg" alt="" />
      {/* <div className="category-container">
        {categories.map((cat) => (
          <div className="category" key={cat.category_id}>
            <h1 className="category-title">{cat.name}</h1>
            <p>{cat.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CategoryList;
