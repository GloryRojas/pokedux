import {Icon, Image, Label} from "semantic-ui-react";
import {FAV_COLOR, MAIN_COLOR} from "../../utils/constants";
import {Grid} from "semantic-ui-react";
import './styles.css';

const PokemonCard = ({pokemon}) => {
    const {name, sprites: { front_default }, types, id } = pokemon;

    return(
        <Grid.Column mobile={16} tablet={8} computer={4} >
            <div className="PokemonCard">
                <Icon name="favorite" color={FAV_COLOR} />
                <Image centered src={front_default} alt="Pokemon" />
                <p className="PokemonCard-title">{name}</p>
                { (types?.length && types.map(type =>
                    <Label color={MAIN_COLOR} key={`${id}-${type.type.name}`}>{type.type.name}</Label>
                ))}
            </div>
        </Grid.Column>
    )
}

export default PokemonCard;
