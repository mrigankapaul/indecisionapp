import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSynctax {
    constructor() {
        this.name = 'Mike'
        this.getGreeting = this.getGreeting.bind(this)
    }

    getGreeting() {
        return `Hi My name is ${this.name}`
    }
}

const oldSynctax = new OldSynctax()
const getGreeting = oldSynctax.getGreeting
console.log(getGreeting())

class NewSyntax {
    name = 'Jen'
    getGreeting = () => {
        return `Hi My name is ${this.name}`
    }
}

const newSyntax = new NewSyntax()
console.log(newSyntax.getGreeting())