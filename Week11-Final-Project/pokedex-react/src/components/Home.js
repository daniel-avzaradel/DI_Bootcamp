import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            url: [],
            pokemon: []
        }
    }

    componentDidMount() {

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(res => res.json())
        .then(data => {
            this.setState({
                pokemon: data.results,
            })
            for(let i=1; i<=151; i++) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        url: data
                    })
                })
            }
        })
    }

    render() {
        const {pokemon} = this.state;
        return(
            <>
              {
                  pokemon.map((item, i) => {
                      return (
                        <Card key={i} pokemon={item} />
                      )
                  })
              }
            </>
        )
    }
}

const Card = ({pokemon}) => {
    return(
        <div className="p-2 m-2 card bg-light darken-3">
            {pokemon.name}
        </div>
    )
}

export default Home;