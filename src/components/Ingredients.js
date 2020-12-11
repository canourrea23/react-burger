function Ingredients(props){
    return (
      <div>
          {props.ingredient.name}<button onClick={() => {props.addLayer(props.ingredient.name)}}>
            {'>'}
            </button>
      </div>

  )
}
export default Ingredients;
