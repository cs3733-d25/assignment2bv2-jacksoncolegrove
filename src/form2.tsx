function form2(){
    return(
        <>
            <form>
                <fieldset>
                    <legend><h3>Join my Fan Club</h3></legend>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your full name"/><br/><br/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email address"/>
                    <br/><br/>
                    <legend>Select your favorite team</legend>
                    <input type="checkbox" id="team1"/>
                    <label htmlFor="team1">McLaren</label>
                    <br/>
                    <input type="checkbox" id="team2"/>
                    <label htmlFor="team2">Mercedes</label>
                    <br/>
                    <input type="checkbox" id="team3"/>
                    <label htmlFor="team3">Ferarri</label>
                    <br/>
                    <input type="checkbox" id="team4"/>
                    <label htmlFor="team4">Red Bull</label>

                    <br/><br/>
                    <legend>How long have you been watching F1?</legend>
                    <input type="radio" id="1year" name="howlong"/>
                    <label htmlFor="1year">Less than 1 year</label>
                    <br/>
                    <input type="radio" id="1-3year" name="howlong"/>
                    <label htmlFor="1-3year">1-5 years</label>
                    <br/>
                    <input type="radio" id=">5year" name="howlong"/>
                    <label htmlFor=">5year">More than 5 years</label>

                    <br/><br/>

                    <label htmlFor="favTrack">Favorite Track:</label>
                    <select id="favTrack" name="favTrack">
                        <option value="" disabled selected></option>
                        <option value="monaco">Monaco</option>
                        <option value="spa">Spa-Francorchamps</option>
                        <option value="silverstone">Silverstone</option>
                        <option value="monza">Monza</option>
                        <option value="suzuka">Suzuka</option>
                    </select>
                    <br/><br/>
                    <label htmlFor="comments"> Comments or Suggestions</label>
                    <br/>
                    <textarea id="comments"></textarea>

                    <br/>
                    <br/>

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </>
    )
}

export default form2;