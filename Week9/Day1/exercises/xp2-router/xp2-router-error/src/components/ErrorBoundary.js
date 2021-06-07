import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false, errorInfo: false}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true, errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'normal' }}>
                        {this.state.error}': ' {this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        return this.props.children;
    }
    
}

export default ErrorBoundary;

