import queryString from'query-string'
import React, { useMemo } from 'react'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScren = ({history}) => {
  const location = useLocation() // Hook pára obtener el search de la url
  const { q = '' } = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const { searchText } = formValues
  const handleSearch = (e) =>{
    e.preventDefault()
    history.push(`?q=${searchText}`)
  }

  const heroesFilter = useMemo(() => getHeroesByName(q), [q])


  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form onSubmit={ handleSearch }>
            <input type="text" placeholder="Find hero" className="form-control" name="searchText" value={searchText} onChange={handleInputChange} autoComplete="off"/>
            <button type="submit" className="btn mt-3 btn-block btn-outline-success">Search...</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          {
            (q === '') && <div className="alert alert-info">
              Search a hero
            </div>
          }

          {
            (q !== '' && heroesFilter.length === 0) && <div className="alert alert-danger    ">
              There is no a hero with { q }
            </div>
          }

          <hr />
          {
            heroesFilter.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
