import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='navHeight aWidthOf mx-auto'>
            <h2 className='text-center'>Blog section</h2>
            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>What is cors?</Card.Title>
                    <Card.Text>
                        What is CORS used for? Cross-Origin Resource Sharing (CORS) is an
                        HTTP-header based mechanism that allows a server to indicate any
                        origins (domain, scheme, or port) other than its own from which a
                        browser should permit loading resources.Cross-origin resource
                        sharing (CORS) is a browser security feature that restricts
                        cross-origin HTTP requests that are initiated from scripts running
                        in the browser. If your REST API's resources receive non-simple
                        cross-origin HTTP requests, you need to enable CORS support.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>
                        Why are you using firebase? What other options do you have to
                        implement authentication?
                    </Card.Title>
                    <Card.Text>
                        Firebase Authentication provides backend services, easy-to-use SDKs,
                        and ready-made UI libraries to authenticate users to your app. It
                        supports authentication using passwords, phone numbers, popular
                        federated identity providers like Google, Facebook and Twitter, and
                        more. Get Started with Firebase Authentication on Websites On this
                        page. Add and initialize the Authentication SDK. (Optional)
                        Prototype and test with Firebase Local Emulator Suite. Sign up new
                        users. Sign in existing users. Set an authentication state observer
                        and get user data. Next steps.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>How does the private route work?</Card.Title>
                    <Card.Text>
                        The private route component is similar to the public route, the only
                        change is that redirect URL and authenticate condition. If the user
                        is not authenticated he will be redirected to the login page and the
                        user can only access the authenticated routes If he is authenticated
                        (Logged in).
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='my-3'>
                <Card.Body>
                    <Card.Title> What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                        Node. js is a JavaScript runtime environment that achieves low
                        latency and high throughput by taking a “non-blocking” approach to
                        serving requests. In other words, Node. js wastes no time or
                        resources on waiting for I/O requests to return.It is a used as
                        backend service where javascript works on the server-side of the
                        application. This way javascript is used on both frontend and
                        backend. Node. js runs on chrome v8 engine which converts javascript
                        code into machine code, it is highly scalable, lightweight, fast,
                        and data-intensive. Working of Node.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Blog;