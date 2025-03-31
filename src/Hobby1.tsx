
import List1 from "./List1.tsx";
import Table1 from "./Table1.tsx";
import Form1 from "./Form1.tsx";


function Hobby1(){
    return (
        <>
            <h1>Hey! my Name is Jackson and my Hobby is Rowing.</h1>
            <h4>Welcome to my Page About Rowing!</h4>
            <p> Hello, my name is Jackson. I am a Robotics and Mechanical engineering major at WPI.
                I grew up in Sacramento, California and have a younger brother, a dog, and two cats.
                I enjoy many different sports, such as baseball, water polo, basketball and rowing.
                I also enjoy the outdoors and often camp and hike with my family.
                I recently hiked Mt. Lassen, which had a great view.
            </p>
            <p>
                Rowing dates back to ancient civilizations, where it was used for transportation and warfare. In the medieval era,
                galleys powered by forced labor became common. Today, rowing is a popular sport that emphasizes teamwork, strength,
                and technique, enjoyed by people of all ages. Whether for fitness or fun,
                it’s a rewarding hobby that connects you with nature.
            </p>
            <h4>Un-ordered List</h4>
            <List1/>
            <h4>Table</h4>
            <Table1/>
            <h4>Form</h4>
            <Form1/>
        </>
    )
}

export default Hobby1;