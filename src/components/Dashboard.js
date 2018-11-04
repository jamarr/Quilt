import React from 'react'
import faunadb, { query as q } from "faunadb"




class Dashboard extends React.Component {
  constructor(props) {
    super()
    this.client = new faunadb.Client({ secret: process.env.FAUNA_DB_ADMIn_SECRET });
  }
  componentDidMount = () => {
    this.client.query(q.CreateDatabase({ name: "my_app" }))
      .then((ret) => console.log(ret))
  };


  render() {
    return (
      <div>
        <p> This Is our Dashboard  </p>
      </div>
    )
  }
}

export default Dashboard