
import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form1.tsx";
import boatImage from "./assets/boat.jpg"


function Hobby1(){
    return (
        <div className = "hobby1">
            <div className={"boatPicture"}>
                <img src={boatImage} id="boat" height="150" width="600" alt="regatta race"/>
            </div>
            <p>
                Rowing dates back to ancient civilizations, where it was used for transportation and warfare. In the medieval era,
                galleys powered by forced labor became common. Today, rowing is a popular sport that emphasizes teamwork, strength,
                and technique, enjoyed by people of all ages. Whether for fitness or fun,
                it’s a rewarding hobby that connects you with nature.
            </p>
            <hr className="creamLine"/>
            <List1/>
            <hr className="creamLine"/>
            <Table1/>
            <hr className="creamLine"/>
            <Form1/>
        </div>
    )
}

export default Hobby1;