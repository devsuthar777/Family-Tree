import React from "react";

class ErrorBoundary extends React.Component {

    state = { hasError: false };
  

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error or send it to an error reporting service
    console.log("Error caught by Error Boundary:", error, info);
  }

  render() {
    debugger
    if (this.state.hasError) {
      // Render a fallback UI
      return <h1>Oops! Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
