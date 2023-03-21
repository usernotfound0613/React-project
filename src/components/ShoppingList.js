import { plantList } from '../datas/plantList'
import { useState } from 'react'
import PlantItem from './PlantItem'
import Caegories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')


	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


	function addToCart(name, price) {
		console.log(cart)
		const currenPlantSaved = cart.find((plant) => plant.name === name)

		if (currenPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
			updateCart([
				...cartFilteredCurrentPlant, { name, price, amount: currenPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Caegories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null


				))}
			</ul>
		</div>
	)
}




export default ShoppingList
