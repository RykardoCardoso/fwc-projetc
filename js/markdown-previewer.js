/* 

Markup Previewer
by Ricardojrhc
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		liked: "SUCCESS!!!"
	}
	  
  }

  render() {
    return (
		<div>{this.state.liked}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));