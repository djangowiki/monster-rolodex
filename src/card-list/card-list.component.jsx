import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className='card-list'>
      {/* {props.children} */}
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
        // <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
};

export default CardList;

// import React from "react";

// class CardList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//     };
//   }
//   // Fetch Data.
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => this.setState({ monsters: data }));
//   }

//   render() {
//     return (
//       <div className='card-list'>
//         {this.state.monsters.map((monster) => (
//           <h1>{monster.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default CardList;
