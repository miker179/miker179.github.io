import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class AboutMe extends React.Component {
    render() {
        return (
            <div>



                <Navbar />
                <h1>AboutMe</h1>

                <div className="row justify-content-md-center">
                    <form className="col-8 formN">
                        <div className="form-container row justify-content-md-center">
                            <div className="col-11">

                                <div class="form__text-box row">
                                    <p class="form__text col-12">
                                        Are you an you looking for a person to do your website or to collab with?
                                    </p>
                                    <p class="form__text col-12">
                                        Feel free to send me a message about collabing or doing a project!
                                    </p>
                                </div>

                                <div class="form__content-box row">
                                    <div class="form__name col-4">
                                        <label for="name">Name: </label>
                                        <input class="form__input" id="name" name="Name" placeholder="Your Name" required />
                                    </div>

                                    <div class="form__email col-4">
                                        <label for="email">Email Address:</label>
                                        <input class="form__input" id="email" name="Email" type="email" required placeholder="Your Email" />
                                    </div>

                                    <div class="form__phone col-4">
                                        <label for="phone">Phone: </label>
                                        <input class="form__input" id="phone" name="Phone" required placeholder="Your Phone #" />
                                    </div>
                                </div>

                                <div class="form__message row">
                                    <label className ="col-12" for="message">Message: </label>
                                    <textarea class="form__textarea col-12" id="message" name="Message" rows="10" required placeholder="Please describe your purpose ..."></textarea>
                                </div>

                                <div class="form__submit">
                                    <button class="form__submit--btn">Book Now</button>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>



            </div>
        )
    }

}
export default AboutMe;


