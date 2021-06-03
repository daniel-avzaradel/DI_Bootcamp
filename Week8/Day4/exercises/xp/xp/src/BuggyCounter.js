import React from 'react';

    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: false,
                errorInfo: false
            }
        }

        componentDidCatch(error, errorInfo) {
            this.setState({
                error: error, 
                errorInfo: errorInfo
            });
        }

        render() {
            if(this.state.errorInfo) {
                return(
                    <div>
                    <h1>Something went wrong.</h1>
                    <details style={{ whiteSpace: 'normal'}}>
                        <sumarry>Details</sumarry>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}      
                    </details>
                    </div>
                )
            }
            return this.props.children;
        }
    }



    class BuggyCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = { counter: 0 };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(){
            this.setState(({counter}) => ({
                counter: counter + 1
            }));
        }

        render() {
            if (this.state.counter === 5) {
                throw new Error('Crashed Application');
            }
            return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        }
    };

    function App() {
        return(
            <div>
                {/* header of the page */}
                <strong>
                <p>Click on the numbers to increase the counters.</p>
                <p>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</p>
                </strong>
                <hr></hr>
                {/* Simulation 1 */}
                <ErrorBoundary>
                    <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                    <BuggyCounter />
                    <BuggyCounter />
                </ErrorBoundary>
                <hr/>
                {/* Simulation 2 */}
                <ErrorBoundary>
                    <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
                    <BuggyCounter />
                </ErrorBoundary>
                <ErrorBoundary>
                    <BuggyCounter />
                </ErrorBoundary>
                <hr/>
                {/* Simulation 3 */}
                    <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
                    <BuggyCounter />
                <br/>
            </div>
        )
    }

export default App;