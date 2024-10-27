import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center font-weight-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
                CASHZEN
            </h1>
            <div className="mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                            </div>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-3">
                        Submit
                    </button>
                </form>
                <div className="text-center mt-4">
                    <button className="btn btn-secondary mr-2">Option 1</button>
                    <button className="btn btn-secondary">Option 2</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
