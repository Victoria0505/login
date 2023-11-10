import { useNavigate } from "react-router-dom"

function SignUp(){
    const navigate = useNavigate();
    function handleClick(){
       navigate("/Login")
    }
    return (
        <div>
        <p className="heading">SIGN UP</p>
        <p>Email:</p>
        <input type="email"></input>
        <p>Password:</p>
        <input type="password"></input>
        <p></p>
        <button>SIGN UP </button>
        <p className="user">OR</p>
        <img className='google' src="https://th.bing.com/th/id/OIP.mWjvLWi0NoEQP1UCsf9xYgHaHZ?pid=ImgDet&w=601&h=600&rs=1" alt="image1"></img>
        <img className="facebook" src="https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-circle-transparent.png" alt="image2"></img>
        <img className="linkedin" src="https://th.bing.com/th/id/OIP.lAPrBbDw0QcLoO7U-JgC1QHaHa?pid=ImgDet&rs=1" alt="image3"></img>
        <p className="user">Already a user? <a className="underline" onClick={handleClick}>LOGIN</a> </p>
        </div>
    )

}
export default SignUp