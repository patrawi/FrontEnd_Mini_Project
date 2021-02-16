import React, { Component }  from 'react';
import marked from 'marked';
import fullscreen from './image/full-screen.svg';

marked.setOptions({
  breaks : true,
})
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown : placeholder,
      maximizeEditor :true,
      maximizePreviewer : true
    }
    this.handleChange = this.handleChange.bind(this);
    this.expandEditor = this.expandEditor.bind(this);
    this.expandPreviewer = this.expandPreviewer.bind(this);
  }
  getMarkdownText() {
    let rawMarkup = marked(this.state.markdown, {sanitize : true});
    return {__html : rawMarkup};
  }
  handleChange(event) {
    this.setState({ markdown: event.target.value})
  }
  expandEditor() {

    this.setState({
      maximizeEditor : !this.state.maximizeEditor
    })
  }
  expandPreviewer() {
    this.setState({
      maximizePreviewer: !this.state.maximizePreviewer
    })
  }
  render() {
  
    return (
      <div>
        <h1 className = 'title'>Markdown</h1>
        <div className = 'underline'></div>
        <section>
        <div className = {this.state.maximizeEditor ? 'editor' : 'modal'}>
          <div className = 'subtitle'>

          <h2>Editor</h2>
          <img  src = {fullscreen} alt = 'fullscreen' width = '32' height = '32' onClick = {this.expandEditor} />
          </div>
          

        <textarea placeholder = {placeholder} id = 'editor' type = 'textarea' value = {this.state.markdown} onChange = {(event) => this.handleChange(event)}  wrap="hard" rows = '20'  />
        </div>
        <div className = {this.state.maximizePreviewer ? 'previewer' : 'modal'}>
        <div className = 'subtitle'>
          <h2>Previewer</h2>
          <img src = {fullscreen} alt = 'fullscreen' width = '32' height = '32' onClick = {this.expandPreviewer} />
          </div>
        <p  id = 'preview'dangerouslySetInnerHTML = {this.getMarkdownText()}/>
        </div>
        </section>
        
      </div>

    )
  }
}


export default App;
