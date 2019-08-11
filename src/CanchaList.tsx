import * as React from 'react';
 
class CanchaList extends React.Component<{}, any> {
	constructor(props: any) {
		super(props);
	 
		this.state = {
		  canchas: [],
		  isLoading: false
		};
	}
	
	public componentDidMount() {
	  this.setState({isLoading: true});
	 
	  fetch('http://localhost:5000/canchas/')
		.then(response => response.json())
		.then(data => this.setState({canchas: data, isLoading: false}));
	};
	
	public render() {
	  const {canchas, isLoading} = this.state;
	 
	  if (isLoading) {
		return <p>Loading...</p>;
	  }
	 
	  return (
		<div>
			<h2>Lista de Canchas</h2>
			{canchas.map((cancha: any) =>
			  <div key={cancha.id}>
				{cancha.nombre}, {cancha.id}
			  </div>
			)}
		</div>
	  );
	}
  }
  
  export default CanchaList;