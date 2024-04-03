import { FC } from "react"
import { useGetSkillQuery } from "../../../store/pokemons"
import { useAppSelector } from "../../../hooks"

interface abilityProps {
    id: number
}

const Ability: FC<abilityProps> = ({ id }) => {
    const { selectedLanguage } = useAppSelector(state => state.pokemons)
    const { data } = useGetSkillQuery(id)
    const name = data?.names.filter(e => e.language.name === selectedLanguage)[0]

    return (
        <h2>
            {
                name ? name.name : data?.name
            }
        </h2>
    )
}

export default Ability