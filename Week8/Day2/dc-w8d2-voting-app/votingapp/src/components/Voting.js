import React from 'react';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import VoteCell from './VoteCell'

class Voting extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: [
        {language: 'PHP', votes: 0},
        {language: 'Python', votes: 0},
        {language: 'JavaScript', votes: 0},
        {language: 'Java', votes: 0}
      ]
    }
  }

    render(){
      const {arr} = this.state
      return(
        <Container>
          <Row>
        <Table>
            <thead>
              <tr class="p-4 mb-2 bg-light text-dark">
                <th>#</th>
                <th>Language</th>
                <th>Vote</th>
              </tr>
            </thead>
            <tbody>
                <VoteCell />
            </tbody>
        </Table>
        </Row>
        </Container>
      )
    }
  }

export default Voting;