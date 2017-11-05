import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinEditor extends Component {
    onEditorChange(content){
        Meteor.call('bins.update', this.props.bin, content);
    }

    render(){
        return(
            <div className="col-xs-6">
                <h2>Bin Editor</h2>
                <h4>Input Code</h4>
                <CodeMirror
                    value={this.props.bin.content}
                    onChange={this.onEditorChange.bind(this)}
                    options={{ mode: 'markdown', lineNumbers: true }} />
            </div>
        )
    }
}

export default BinEditor;