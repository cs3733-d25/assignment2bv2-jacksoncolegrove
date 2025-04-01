type UserProps = {
    firstName: string;
    lastName: string;
}

function intro({firstName,lastName}: UserProps) {
    if (firstName === "Minh") {
        return (
            <div>
                <p> My name is {firstName} {lastName}, a Computer Science student at WPI. I enjoy watching Formula 1. </p>
            </div>
        )
    }
    else{
        return (
            <div>
                <p> Hello, my name is {firstName} {lastName} and my hobby is Rowing. I am a Robotics and Mechanical engineering major at WPI.
                    I grew up in Sacramento, California and have a younger brother, a dog, and two cats.
                    I enjoy many different sports, such as baseball, water polo, basketball and rowing.
                    I also enjoy the outdoors and often camp and hike with my family.
                    I recently hiked Mt. Lassen, which had a great view.
                </p>
            </div>
        )
    }
}

export default intro;