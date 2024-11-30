//an object which represets a react element
//the DOM container (an HTML element, like div or body) where the element will be rendered.
function customRender(reactElement,container){    //creates a new DOM element & an anchor (<a>) element 
const domElement=document.createElement(reactElement.type)  //creates a new HTML element, here an <a> tag.
domElement.innerHTML=reactElement.children //represents the text inside the element. Here, it's 'Click me to visit google'.
domElement.setAttribute('href',reactElement.props.href)
domElement.setAttribute('target',reactElement.props.target)  //meaning the link will open in a new tab when clicked.
container.appendChild(domElement) //Finally, this line appends the newly created DOM element (<a>) to the container (which is typically a div or body).
}


//a loop based code
function customRenderloop(reactElement,container){ 
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
    if(prop=='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement)

}

const reactElement={
    type:'a',  //Specifies the tag name of the HTML element ('a' for anchor).
    props: {   //An object holding additional attributes for the element (href, target).
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')
//(the DOM element where the new anchor tag should be added).


//customRender(reactElement,mainContainer) for without loop
customRenderloop(reactElement,mainContainer)
