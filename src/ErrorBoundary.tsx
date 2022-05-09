import { Component, ErrorInfo } from 'react';
import { Link, Redirect } from 'react-router-dom';

interface IErrorBoundaryProps {
  hasError: boolean;
  redirect: boolean;
  children: string;
}

class ErrorBoundary extends Component<IErrorBoundaryProps> {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // log to sentry, azure monitor, trackjs etc..
    console.error('ErrorBoundary caught in error', error, info);

    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  render(): React.ReactNode {
    if (this.state.redirect) return <Redirect to="/" />;
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Click here </Link>to go back
          to the homepage or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
