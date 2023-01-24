import PropTypes from "prop-types"


const BASE_URL = "https://source.unsplash.com/1600x900/?";


export default function Image({data}){
console.log(data)
if (data !== ""){
    return(
        <img src= {BASE_URL + data} alt={"Random " + data}/>
        )
}}

Image.propTypes = {
    data: PropTypes.string
}