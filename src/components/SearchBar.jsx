import PropTypes from "prop-types"


export default function Input( {inputInfo} ){
    return(
        <>
         <label htmlFor="search">
          Search (separate terms with commas - no spaces)
        </label>
        <input
          type="search"
          id="search"
          className="rounded-sm border px-1"
          placeholder="🔍"
          ref={inputInfo}
      />
      </>)}

Input.propTypes = {
    inputInfo: PropTypes.object.isRequired
}