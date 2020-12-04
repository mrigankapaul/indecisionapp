import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss'


class OldSynctax {
    constructor() {
        this.name = 'Mike'
        this.getGreeting = this.getGreeting.bind(this)
    }

    getGreeting() {
        return `Hi My name is ${this.name}`
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const oldSynctax = new OldSynctax()
// const getGreeting = oldSynctax.getGreeting
// console.log(getGreeting())

// class NewSyntax {
//     name = 'Jen'
//     getGreeting = () => {
//         return `Hi My name is ${this.name}`
//     }
// }


// const newSyntax = new NewSyntax()
// console.log(newSyntax.getGreeting())
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}

// const template = (
//     <div>
//         <h1>Page</h1>
//         <p>This is my page</p>
//     </div>
// )


// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));
// ReactDOM.render((
//     <Layout>
//     <div>
//         <h1>Page</h1>
//         <p>This is my page</p>
//     </div>
//     </Layout>
//     ), 
//     document.getElementById('app'));