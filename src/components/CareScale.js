import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType =
        careType === 'light' ? (
            <img src={Sun} onClick={afficherMessage} alt='sun-icon' />
        ) : (
            <img src={Water} onClick={afficherMessage} alt='water-icon' />
        )

    function afficherMessage() {
        alert(
            `Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"
            }`
        )
    }

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
