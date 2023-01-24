import PropTypes from "prop-types"



export default function Button({click, searchBar}){
  
if (searchBar !== ""){
  return(
    <button
      type="submit"
      className="rounded-full bg-green-500 p-4 text-white"
      onClick={ click }
    >
      Go!
    </button>
  )}
}
      Button.propTypes = {
        click: PropTypes.func.isRequired,
        searchBar: PropTypes.object
    }
