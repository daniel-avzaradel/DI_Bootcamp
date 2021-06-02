import React from 'react';

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
            <strong>
            <p>Click on the numbers to increase the counters.</p>
            <p>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</p>
            </strong>
            <hr></hr>
            <h1>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</h1>
            <details>Details</details>
            </div>
        )
    }
}