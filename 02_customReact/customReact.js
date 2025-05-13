const mainContainer = document.getElementById('root')

function customRender(reactElement, container){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    // element.setAttribute('href',reactElement.props.href)
    // element.setAttribute('target',reactElement.props.target)
    
    for (const key in reactElement.props) {
        element.setAttribute(key, reactElement.props[key])
    }
    container.append(element)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank'
    },
    children: 'Click here to visit youtube'
}

customRender(reactElement, mainContainer)

