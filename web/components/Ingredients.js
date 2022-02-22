import React from 'react'
import PropTypes from 'prop-types'

import Amount from './Ingredient/Amount'
import Heading from './Heading'

function Ingredients({ ingredientSets }) {
  if (!ingredientSets?.length) {
    return null
  }

  return (
    <>
      <Heading>Ingredients</Heading>
      <div className="divide-x divide-caramel-200 sm:flex pb-2 mt-6 mb-12 -mx-4">
        {ingredientSets.map((set) => (
          <div key={set._key} className="px-4 mb-8 sm:mb-0 flex-1">
            <Heading as="h3">{set.title}</Heading>
            <ul
              className={`text-sm grid gap-x-4 grid-cols-2 ${
                ingredientSets.length === 1
                  ? `sm:grid-cols-3`
                  : `sm:gap-0 sm:grid-cols-1`
              } `}
            >
              {set.ingredients.map((ingredient) => (
                <li
                  key={ingredient._key}
                  className="py-1 border-b border-caramel-200"
                >
                  <Amount dot={false} ingredient={ingredient} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

Ingredients.propTypes = {
  ingredientSets: PropTypes.array,
}

export default Ingredients
