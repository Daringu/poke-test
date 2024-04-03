import { ChangeEvent } from "react"
import { useAppDispatch } from "../../hooks"
import { setLimit, setLanguage } from "../../store/pokemons"
import { languages } from "../../types"

const Header = () => {
    const dispatch = useAppDispatch()

    const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLimit(Number(event.target.value)))
    }

    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(event.target.value as languages))
    }

    return (
        <div>
            <select onChange={handleLimitChange}>
                <option value={10}>
                    10 pokemons
                </option>
                <option value={30}>
                    30 pokemons
                </option>
            </select>
            <select onChange={handleLanguageChange}>
                <option value={'en'}>
                    English
                </option>
                <option value={'fr'}>
                    French
                </option>
                <option value={'it'}>
                    Italian
                </option>
            </select>
        </div>
    )
}

export default Header