
type UserProps = {
    fullName1: string;
    fullName2: string;
    firstName1: string;
    firstName2: string;
}

function intro({fullName1,fullName2,firstName2}: UserProps) {
        return (
            <div>
                <p> Welcome to our site! My name is {fullName1} and I am working with {fullName2} to create website about our
                    favorite hobbies. {firstName2} and I are sophomores here at WPI. I am a Robotics and Mechanical Engineering double major and {firstName2} is a CS major.
                    Freshmen year I joined the rowing team at WPI and since then it has become my favorite hobby. {firstName2} has loved Formula for as long as I have know him.
                    We used to go watch the races in his dorm freshmen year and race Formula one cars in video games for fun together.
                </p>
            </div>
        )
}
export default intro;