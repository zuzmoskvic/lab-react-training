// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string


function IdCard({lastName, firstName, gender, height, birth, picture}){
    return <div>
        <img src={picture}/>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height/100}m</p>
        <p>Birth: {birth.toLocaleDateString()}</p>

    </div>
}

export default IdCard;