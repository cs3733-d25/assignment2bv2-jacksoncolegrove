

function Form1(){
    return (
        <form>
            <label htmlFor="fullname">Enter your full name:</label>
            <input type="text" id="fullname"/>
            <br/>
            <label htmlFor="email">Enter your email:</label>
            <input type="text" id="email"/>
            <br/><br/>
            <p>I would you like to receive notifications for the following:</p>
            <br/><br/>
            <input type="checkbox" id="newsletter"/>
            <label htmlFor="newsletter">Weekly Rowing News Letter</label>
            <br/>
            <input type="checkbox" id="dates"/>
            <label htmlFor="dates">Upcoming Events</label>
            <br/><br/>

            <p>What is your skill level?</p>
            <select>
                <option value="">-- Select an option --</option>
                <option value="1">Never Rowed</option>
                <option value="2">Novice</option>
                <option value="3">Intermediate</option>
                <option value="4">Advanced</option>
            </select>
            <p>Please select your age:</p>
            <input type="radio" id="age1" name="age" value="18"/>
            <label htmlFor="age1">0 - 18</label><br/>
            <input type="radio" id="age2" name="age" value="23"/>
            <label htmlFor="age2">18-23</label><br/>
            <input type="radio" id="age3" name="age" value="30"/>
            <label htmlFor="age3">23-30</label><br/>
            <input type="radio" id="age4" name="age" value="100"/>
            <label htmlFor="age4">30+</label><br/>

            <p>Please select your pronouns:</p>
            <input type="radio" id="pronouns1" name="pronouns" value="they/them"/>
            <label htmlFor="pronouns1">they/them</label><br/>
            <input type="radio" id="pronouns2" name="pronouns" value="she/her"/>
            <label htmlFor="pronouns2">she/her</label><br/>
            <input type="radio" id="pronouns3" name="pronouns" value="he/him"/>
            <label htmlFor="pronouns3">he/him</label><br/>
            <input type="radio" id="pronouns4" name="pronouns" value="other"/>
            <label htmlFor="pronouns4">other</label>
            <br/><br/>

            <p>Please agree to our privacy terms and conditions:</p>
            <div>
                <h2 id="termsHeader2">Terms and Conditions for Rowing Lessons</h2>
                <ol>
                    <li>
                        <h3 id="termsHeader3">General Terms</h3>
                        By accessing or using the services provided by myHobby, including signing up for lessons,
                        you confirm that you are at least 18 years old or have the consent of a legal guardian. If you
                        are
                        under 18, you must have permission from a parent or guardian to sign up for lessons
                    </li>
                    <li>
                        <h3>Prohibited Uses</h3>
                        You agree not to use the Service for any unlawful purpose or to engage in any activity that:
                        <br/>
                        <ul>
                            <li>Violates any applicable law or regulation.</li>
                            <li>Infringes upon the intellectual property rights of others.</li>
                            <li>Infringes upon the intellectual property rights of others.</li>
                            <li>Harasses, threatens, or defames others.</li>
                            <li>Distributes malware, viruses, or other harmful code.</li>
                            <li>Attempts to gain unauthorized access to the Service or other users' accounts.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <br/>
            <input type="checkbox" id="agree"/>
            <label htmlFor="agree">I agree to the Terms & Conditions</label>
            <br/><br/>
            <label htmlFor="comments">Comments</label>
            <br/>
            <textarea id="comments"></textarea>
            <br/>
            <input type="submit" value="submit" id="submitButton"/>
            <hr/>
        </form>
    )
}

export default Form1;