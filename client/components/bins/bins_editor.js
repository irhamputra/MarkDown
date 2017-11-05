import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinEditor extends Component {
    render(){
        return(
            <div className="col-xs-8">
                <h4>Input Code</h4>
                <CodeMirror options={{ mode: 'markdown', lineNumbers: true }} />
            </div>
        )
    }
}

export default BinEditor;