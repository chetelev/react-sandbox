/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, lazy } from 'react';
import { withRouter } from 'react-router-dom';

import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary.tsx';
import { PetAPIResponse, Animal } from './models/APIResponsesTypes';

// lazy loading modal
const Modal = lazy(() => import('./Modal'));

interface IProps {
  params: {
    id?: string;
  };
}

class Details extends Component<IProps> {
  state = {
    loading: true,
    showModal: false,
    animal: '' as Animal,
    breed: '',
    city: '',
    state: '',
    description: '',
    name: '',
    images: [] as string[],
  };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = (await res.json()) as PetAPIResponse;
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => (window.location.href = 'http://bit.ly/pet-adopt');

  render() {
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city}, {state}
        </h2>
        <button onClick={this.toggleModal}>Adopt {name} </button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt me ?</h1>
              <div className="buttons">
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={this.adopt}
                >
                  Yes
                </button>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={this.toggleModal}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
