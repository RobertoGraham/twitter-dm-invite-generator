import React, {Component} from 'react';
import Container from 'react-bootstrap/lib/Container';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import {CopyToClipboard} from "react-copy-to-clipboard";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            text: '',
            copied: false
        };

        this.onDisplayNameFieldChange = this.onDisplayNameFieldChange.bind(this);
        this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this);
    }

    onDisplayNameFieldChange(event) {
        this.setState({
            displayName: event.target.value
        });
    }

    onTextFieldChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    onSubmitButtonClicked(event) {
        event.preventDefault();
        const {actions} = this.props;
        const {fetchLinkIfNeeded} = actions;
        const {displayName, text} = this.state;
        this.setState({copied: false});
        fetchLinkIfNeeded(displayName, text);
    }

    render() {
        const {displayName, text, copied} = this.state;
        const {link, isFetching, success} = this.props;

        return (
            <Container>
                <header
                    className="mt-3 mb-3">
                    <h1
                        className="text-center">
                        DM Invite Generator
                    </h1>
                    <h6
                        className="text-muted text-center">
                        Enable the Privacy setting <a
                        href="https://twitter.com/settings/safety">
                        "Receive Direct Messages from anyone"
                    </a> to make invites work
                    </h6>
                    <a
                        className="github-button"
                        href="https://github.com/RobertoGraham/twitter-dm-invite-generator"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star RobertoGraham/twitter-dm-invite-generator on GitHub">
                        Star
                    </a>
                </header>
                <Form className="mb-3">
                    <Form.Group
                        controlId="formBasicEmail">
                        <Form.Label>
                            Twitter username
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Enter Twitter username"
                                aria-describedby="inputGroupPrepend"
                                value={displayName}
                                onChange={this.onDisplayNameFieldChange}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group
                        controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            Message content
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            value={text}
                            onChange={this.onTextFieldChange}/>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isFetching === true}
                        onClick={this.onSubmitButtonClicked}>
                        Generate!
                    </Button>
                </Form>
                {
                    typeof success !== 'undefined' ?
                        success === true ?
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    aria-describedby="test"
                                    value={link}/>
                                <InputGroup.Append>
                                    <CopyToClipboard
                                        text={link}
                                        onCopy={() => this.setState({copied: true})}>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            onClick={(event) => event.preventDefault()}>
                                            Copy!
                                        </Button>
                                    </CopyToClipboard>
                                </InputGroup.Append>
                            </InputGroup>
                            : <p className="mb-3">No such user!</p>
                        : <React.Fragment/>
                }
                {
                    copied ?
                        <p className="mt-2 text-muted mb-3">Copied!</p>
                        : <React.Fragment/>
                }
            </Container>
        );
    }
}

export default App;
